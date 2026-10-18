import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const configPath = resolve(rootDir, 'config', 'portfolio-assets.json')
const publicOutputDir = resolve(rootDir, 'public', 'projects', 'network')
const generatedOutput = resolve(rootDir, 'src', 'generated', 'projectAssets.json')
const configText = await readFile(configPath, 'utf8')
const entries = JSON.parse(configText.replace(/^\uFEFF/, ''))

await mkdir(publicOutputDir, { recursive: true })
await mkdir(dirname(generatedOutput), { recursive: true })

const manifest = []

for (const entry of entries) {
  const input = resolve(rootDir, entry.source)
  const fileName = entry.id + '.webp'
  const output = resolve(publicOutputDir, fileName)
  const result = await sharp(input)
    .resize({ width: 1600, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(output)

  manifest.push({
    id: entry.id,
    src: '/projects/network/' + fileName,
    alt: entry.alt,
    width: result.width,
    height: result.height,
    bytes: result.size
  })
}

await writeFile(generatedOutput, JSON.stringify(manifest, null, 2) + '\n')
console.log('Built ' + manifest.length + ' portfolio screenshots.')
