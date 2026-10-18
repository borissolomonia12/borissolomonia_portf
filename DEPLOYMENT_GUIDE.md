# Portfolio Deployment Guide — Single Source of Truth

This is the only deployment guide for this repository. It includes the working VM, Caddy, Cloudflare, SSH, Artifact Registry, GitHub Actions, rollback, and troubleshooting details established during deployment.

## 1. What is being deployed

| Item | Value |
| --- | --- |
| GCP project | `tastyapp-ff8b2` |
| VM | `instance-20251229-203034` |
| Zone | `us-central1-c` |
| Public IP | `34.136.155.111` |
| SSH user | `borissolomonia` |
| Domain | `borissolomonia.com`, `www.borissolomonia.com` |
| Artifact Registry | `us-central1-docker.pkg.dev/tastyapp-ff8b2/portfolio` |
| Image | `portfolio-boris-app` |
| Container | `portfolio-boris-app` |
| Private host port | `127.0.0.1:8090` |
| Shared Docker network | `web` |
| Existing proxy | container `caddy`, image `caddy:2-alpine` |
| Caddy source file | `/home/borissolomonia/apps/tasty-erp/Caddyfile.production` |

## 2. The safety rules

The VM already runs Tasty ERP. Follow these rules every time:

1. Never run `docker compose down` outside this portfolio's Compose file.
2. Never run `docker system prune` on this VM.
3. Never stop or recreate `caddy` or any `tasty-erp-*` container.
4. Never bind this app to public ports `80` or `443`; Caddy owns them.
5. Deploy only the service named `portfolio-boris-app` with `--no-deps`.
6. The GitHub workflow must not edit or reload Caddy. Caddy setup is a one-time manual operation.
7. Keep the Compose CPU, memory, process, read-only filesystem, and log limits.

## 3. Important security cleanup

A Firebase service-account private key was pasted into chat. Treat that key as compromised.

In Google Cloud Console, open **IAM & Admin → Service Accounts → `firebase-adminsdk-fbsvc` → Keys** and delete the exposed key. Do not put it in GitHub, Secret Manager, `.env`, or this repository.

This app is a static React site. It currently needs **no runtime `.env` and no Secret Manager secret**. Public Vite variables are compiled into browser JavaScript and are not secrets.

## 4. One-time Google Cloud setup

Use Google Cloud Shell if `gcloud` is not installed on Windows. Paste one command at a time.

```bash
PROJECT_ID=tastyapp-ff8b2
PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
POOL_ID=github-actions
PROVIDER_ID=github
SERVICE_ACCOUNT=gha-portfolio-deployer
REPOSITORY=BorisSolomonia/Boris_Portf_2

gcloud config set project "$PROJECT_ID"
gcloud services enable artifactregistry.googleapis.com iamcredentials.googleapis.com sts.googleapis.com
```

Create the dedicated GitHub deploy identity:

```bash
gcloud iam service-accounts create "$SERVICE_ACCOUNT" \
  --display-name="GitHub portfolio deployer" \
  --project="$PROJECT_ID"

DEPLOYER_EMAIL="$SERVICE_ACCOUNT@$PROJECT_ID.iam.gserviceaccount.com"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$DEPLOYER_EMAIL" \
  --role="roles/artifactregistry.writer"
```

Create keyless GitHub authentication:

```bash
gcloud iam workload-identity-pools create "$POOL_ID" \
  --project="$PROJECT_ID" \
  --location=global \
  --display-name="GitHub Actions"

gcloud iam workload-identity-pools providers create-oidc "$PROVIDER_ID" \
  --project="$PROJECT_ID" \
  --location=global \
  --workload-identity-pool="$POOL_ID" \
  --display-name="GitHub Boris portfolio" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
  --attribute-condition="assertion.repository=='$REPOSITORY'"

gcloud iam service-accounts add-iam-policy-binding "$DEPLOYER_EMAIL" \
  --project="$PROJECT_ID" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL_ID/attribute.repository/$REPOSITORY"
```

Print the two GitHub values:

```bash
echo "GCP_DEPLOY_SERVICE_ACCOUNT=$DEPLOYER_EMAIL"
echo "GCP_WORKLOAD_IDENTITY_PROVIDER=projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL_ID/providers/$PROVIDER_ID"
```

The VM's attached service account needs read-only image access:

```bash
VM_SERVICE_ACCOUNT="$(gcloud compute instances describe instance-20251229-203034 --zone us-central1-c --format='value(serviceAccounts[0].email)')"
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$VM_SERVICE_ACCOUNT" \
  --role="roles/artifactregistry.reader"
```

## 5. One-time SSH key setup

### Create the key on Windows PowerShell

Do not use `-N ""` in this PowerShell/OpenSSH combination. Run interactively and press Enter twice for an empty passphrase:

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.ssh"
ssh-keygen -t ed25519 -f "$env:USERPROFILE\.ssh\gh_portfolio_vm" -C "gh-actions-portfolio"
Get-Content "$env:USERPROFILE\.ssh\gh_portfolio_vm.pub"
```

### Add the public key through OS Login

On the VM, replace `PASTE_PUBLIC_KEY_HERE` with the complete one-line `.pub` value:

```bash
printf '%s\n' 'PASTE_PUBLIC_KEY_HERE' > /tmp/gh_portfolio_vm.pub
gcloud compute os-login ssh-keys add \
  --project=tastyapp-ff8b2 \
  --key-file=/tmp/gh_portfolio_vm.pub
rm /tmp/gh_portfolio_vm.pub
```

Never add the private key to the VM. The private key stays on Windows and in the protected GitHub secret.

### Read the private key for GitHub

```powershell
Get-Content "$env:USERPROFILE\.ssh\gh_portfolio_vm" -Raw
```

Copy the entire value, including `BEGIN OPENSSH PRIVATE KEY` and `END OPENSSH PRIVATE KEY`.

### Get the trusted VM host fingerprint

Run this on the VM console itself, not from an untrusted network:

```bash
sudo ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
```

Copy only the value beginning with `SHA256:`.

## 6. GitHub Actions secrets

Open GitHub repository **Settings → Secrets and variables → Actions → New repository secret** and create:

| Secret | Value |
| --- | --- |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Full `projects/.../providers/github` value printed in step 4 |
| `GCP_DEPLOY_SERVICE_ACCOUNT` | `gha-portfolio-deployer@tastyapp-ff8b2.iam.gserviceaccount.com` |
| `VM_HOST` | `34.136.155.111` |
| `VM_SSH_USER` | `borissolomonia` |
| `VM_SSH_KEY` | Complete private OpenSSH key from step 5 |
| `VM_HOST_FINGERPRINT` | Trusted `SHA256:...` fingerprint from the VM console |

Do not create `GCP_SA_KEY`; the workflow intentionally uses short-lived Workload Identity credentials.

## 7. One-time VM preparation

The old workflow may already have created `/opt/Portfolio_Boris`. Confirm ownership:

```bash
sudo mkdir -p /opt/Portfolio_Boris/secure-docker-setup
sudo chown -R borissolomonia:borissolomonia /opt/Portfolio_Boris
docker network inspect web >/dev/null
gcloud auth configure-docker us-central1-docker.pkg.dev --quiet
```

Confirm the SSH user can use Docker without `sudo`:

```bash
docker ps --format 'table {{.Names}}\t{{.Status}}'
```

## 8. One-time Caddy setup without stopping other apps

The existing Caddyfile is bind-mounted read-only from the host. Edit the host file, never `/etc/caddy/Caddyfile` inside the container.

Back it up:

```bash
sudo cp /home/borissolomonia/apps/tasty-erp/Caddyfile.production \
  /home/borissolomonia/apps/tasty-erp/Caddyfile.production.bak.$(date +%F-%H%M%S)
```

The file must contain this additional site block at top level, after the existing `:80` block:

```caddyfile
borissolomonia.com, www.borissolomonia.com {
    encode zstd gzip
    reverse_proxy portfolio-boris-app:80 {
        health_uri /healthz
        health_interval 30s
        health_timeout 5s
    }
}
```

Validate before applying:

```bash
docker exec caddy caddy validate --config /etc/caddy/Caddyfile
```

Apply with a zero-downtime reload, not a restart:

```bash
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

The current VM already validated and reloaded this domain block. Do not append it a second time.

## 9. Cloudflare and firewall

In Cloudflare DNS:

- `A` record `@` → `34.136.155.111`
- `A` record `www` → `34.136.155.111`
- Start with **DNS only** while Caddy obtains the certificate.
- After HTTPS works, proxying may be enabled.
- Set SSL/TLS mode to **Full (strict)**, never Flexible.

In Google Cloud Console open **Compute Engine → VM instances → instance-20251229-203034 → Edit**. Under **Network tags**, add a tag such as `http-server` and `https-server`, then save. Ensure ingress firewall rules allow TCP `80` and `443` to those tags.

Test from Windows:

```powershell
Resolve-DnsName borissolomonia.com
Test-NetConnection borissolomonia.com -Port 80
Test-NetConnection borissolomonia.com -Port 443
curl.exe -I https://borissolomonia.com
```

Use `curl.exe`, not PowerShell's `curl` alias.

## 10. Deploy

The workflow `.github/workflows/deploy.yml` runs on pushes to `main` or `master`, or manually from **GitHub → Actions → Deploy Portfolio → Run workflow**.

It performs these safe steps:

1. Installs dependencies and runs lint, tests, and production build.
2. Authenticates to GCP without a stored JSON key.
3. pushes one image tagged with the immutable Git commit SHA.
4. Uploads only this app's Compose file.
5. Pulls and recreates only `portfolio-boris-app`.
6. Waits for `/healthz` and rolls back to the exact previous image if deployment fails.
7. Does not stop, recreate, or reload Caddy or Tasty ERP.

## 11. Verify after deployment

On the VM:

```bash
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}'
curl -fsS http://127.0.0.1:8090/healthz
docker network inspect web | grep -A3 -B2 portfolio-boris-app
curl -I -H 'Host: borissolomonia.com' http://127.0.0.1
```

From Windows:

```powershell
curl.exe -I https://borissolomonia.com
curl.exe -I https://www.borissolomonia.com
```

Expected results are healthy container status, `ok` from `/healthz`, HTTP-to-HTTPS redirect on port 80, and `200` over HTTPS.

## 12. Troubleshooting map

### GitHub cannot list or push Artifact Registry

The active identity lacks `roles/artifactregistry.writer`, or the repository name is wrong. The correct repository is `portfolio` in `us-central1`.

### GitHub cannot SSH

Check the username, private key formatting, OS Login public key, port 22 firewall, and exact host fingerprint. A passphrase-protected key cannot be used unless the action is also configured with that passphrase.

### VM cannot pull the image

Run:

```bash
gcloud auth configure-docker us-central1-docker.pkg.dev --quiet
gcloud auth list
docker pull us-central1-docker.pkg.dev/tastyapp-ff8b2/portfolio/portfolio-boris-app:COMMIT_SHA
```

Confirm the VM service account has `roles/artifactregistry.reader`.

### HTTP redirects but HTTPS times out

Caddy is reachable on port 80, but TCP 443 is blocked. Add the VM network tag targeted by the HTTPS firewall rule and retest with `Test-NetConnection`.

### App works on port 8090 but domain returns 502

Confirm both `caddy` and `portfolio-boris-app` are attached to network `web`, and that the Caddy upstream is exactly `portfolio-boris-app:80`.

### PowerShell commands behave like Linux commands

PowerShell uses backticks for continuation, not backslashes. Prefer one-line commands. Use `Select-String` instead of `grep`, and `curl.exe` instead of `curl`.

## 13. Manual rollback

GitHub automatically rolls back a failed health check. For a manual rollback, find the previous immutable image from GitHub Actions or `docker image ls`, then run only this app's service:

```bash
cd /opt/Portfolio_Boris
IMAGE_URI='us-central1-docker.pkg.dev/tastyapp-ff8b2/portfolio/portfolio-boris-app:PREVIOUS_COMMIT_SHA' \
  docker compose -f secure-docker-setup/docker-compose.yml \
  up -d --no-deps --force-recreate --wait portfolio-boris-app
```

## 14. Local release checks

```powershell
npm ci
npm run assets:build
npm run lint
npm test
npm run build
```

Only run `npm run assets:build` after approved screenshots are placed in `assets/source-screenshots` and mapped in `config/portfolio-assets.json`.