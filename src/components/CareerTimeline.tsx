type Achievement = {
  title: string;
  org?: string;
  period?: string;
  bullets?: string[];
  metrics?: string[];
  linkLabel?: string;
  linkHref?: string;
  logo?: string;
};

type TimelineYear = {
  year: number;
  label?: string;
  items: Achievement[];
};

// === Logo mapping for organizations ===
const ORGANIZATION_LOGOS: { [key: string]: string } = {
  // Education
  "Caucasus University": "/images/CU-SiteLogo.png",
  "Free University, Tbilisi": "/images/Free_logo_ENG.png",
  "Ilia State University": "/images/ilia.png",

  // Work experience
  "Agency of Agricultural Projects Management": "/images/RDA-Logo.png",
  "JSC SavvY": "/images/savvy.png",
  "Girchi (Parliament of Georgia)": "/images/girchi.jpg",
  "EPAM Systems": "/images/epam-1.png",
  "9 Tones Distribution": "/images/9t.png",
  "Bitcamp": "/images/bitcamp.png",

  // Future/other entries (placeholders may be added later)
  // "Personal/Startup Tools": "/images/personal-brand.png",
  // "Redactor": "/images/redactor-logo.png",
  // "Startup Initiative": "/images/startup-logo.png",
  // "Professional Development": "/images/professional-dev.png",
  // "Global Markets": "/images/global-markets.png",
  // "Community Contribution": "/images/community-logo.png",
  // "Long-term Vision": "/images/vision-logo.png",
  // "Government/International Bodies": "/images/government-logo.png",
};

// Function to get logo for organization
const getOrgLogo = (org?: string): string | undefined => {
  return org ? ORGANIZATION_LOGOS[org] : undefined;
};

// === Data derived from your CV ===
// Feel free to adjust wording, add/remove bullets.
const TIMELINE: TimelineYear[] = [
  {
    year: 2010,
    items: [
      {
        title: "BBA - Financial Accounting & Audit",
        org: "Caucasus University",
        period: "2010",
        bullets: ["Foundation in financial reporting & audit standards."],
      },
    ],
  },
  {
    year: 2016,
    items: [
      {
        title: "Financial Manager / Operations Manager",
        org: "Agency of Agricultural Projects Management",
        period: "2016-2019",
        bullets: [
          "Designed streamlined financial processes.",
          "Managed complex project budgets and compliance.",
          "Built logistic system for the organization.",
          "Managed a team of 7 employees.",
        ],
      },
    ],
  },
  {
    year: 2018,
    items: [
      {
        title: "MBA - Business Administration & Ops Mgmt (Best Academic Achievement)",
        org: "Free University, Tbilisi",
        period: "2018",
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        title: "Senior Budgeting & Reporting Manager",
        org: "Agency of Agricultural Projects Management",
        period: "2019",
        bullets: [
          "Directed multi-million budgeting; implemented internal controls.",
          "Maintained & optimized debtor database.",
        ],
      },
      {
        title: "Senior Associate (Consulting)",
        org: "JSC SavvY",
        period: "2019-2021",
        bullets: [
          "60+ engagements: valuation & FP&A models, driver trees, covenants.",
          "Executive dashboards & scenario analysis.",
        ],
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        title: "Lecturer of Managerial Accounting (ACCA F2)",
        org: "Ilia State University",
        period: "2020-2023",
        bullets: ["Live cases, simulations; engagement-first pedagogy."],
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title: "CFO / Analyst of Monetary Policy",
        org: "Girchi (Parliament of Georgia)",
        period: "2021-present",
        bullets: [
          "Built finance policies & accounting app.",
          "Coin-flow logic: mid-period sales, emissions timing, entitlements.",
          "Auditable scenario engine for fairness.",
        ],
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "Java Developer program (training)",
        org: "EPAM UpSkill Georgia",
        period: "2022-2023",
        bullets: [
          "Core Java, Spring Boot, Docker, K8s; several finance micro-projects.",
          "Focus on correctness, tests, performance.",
        ],
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "Chief Financial Officer",
        org: "9 Tones Distribution",
        period: "2023-present",
        bullets: [
          "Comprehensive financial strategy & CCC optimization.",
          "Statistical sales forecasting to cut stock shortages.",
          "Daily ops dashboard: inventory, debtor scoring, alerts.",
        ],
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title: "Debtors Analysis App - ERP Fin-Analytics",
        org: "Personal/Startup Tools",
        period: "2024-2025",
        bullets: [
          "Cash-flow prediction, debtor scoring, explainable recommendations.",
          "ERP modules integrating AI for inventory & pricing analytics.",
        ],
      },
      {
        title: "Bitcamp Java Course",
        org: "Bitcamp",
        period: "Ongoing",
        linkLabel: "Open course",
        linkHref: "https://www.bitcamp.ge/courses/java/",
      },
    ],
  },
  // Current direction confirmed in the portfolio interview, October 2026.
  {
    year: 2026,
    label: "BUILDING",
    items: [
      {
        title: "Financial manager & full-stack engineer",
        org: "Building systems",
        period: "Current direction",
        bullets: [
          "9T ERP: reduce repetitive financial analysis and make source-to-figure review visible.",
          "Optimo: connect operational systems and give synchronization outcomes a clear trail.",
          "Brooks: explore nostalgia and people's emotional connection to meaningful places.",
        ],
      },
    ],
  },
];

function TimelineItem({ year, isLast }: { year: TimelineYear; isLast: boolean }) {
  return (
    <div
      className="relative flex gap-6"
      data-year={year.year}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 bg-[#102829] z-10 ${
          year.label
            ? year.label === 'VISION'
              ? 'border-copper'
              : 'border-teal'
            : 'border-blue-500'
        }`} />
        {!isLast && (
          <div className="w-0.5 h-full bg-[#285052] mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        {/* Year and label */}
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-[#eefcf9]">{year.year}</h3>
          {year.label && (
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              year.label === 'VISION'
                ? 'bg-copper/15 text-[#e7a56e]'
                : 'bg-teal/15 text-[#54cdbb]'
            }`}>
              {year.label}
            </span>
          )}
        </div>

        {/* Items */}
        <div className="space-y-4">
          {year.items.map((item, i) => (
            <div key={i} className="bg-[#102829] rounded-lg border border-[#285052] p-4 shadow-sm">
              <div className="flex items-start gap-4">
                {/* Organization Logo */}
                {item.org && getOrgLogo(item.org) && (
                  <div className="flex-shrink-0">
                    <img
                      src={getOrgLogo(item.org)}
                      alt={`${item.org} logo`}
                      className="w-10 h-10 object-contain rounded-lg bg-gray-50 p-1 border border-gray-100"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  {/* Title and organization */}
                  <div className="font-semibold text-[#eefcf9] mb-1">
                    {item.title}
                  </div>
                  {item.org && (
                    <div className="text-sm text-[#91b7b3] mb-2">{item.org}</div>
                  )}
                  {item.period && (
                    <div className="text-xs text-[#688f8b] mb-3">{item.period}</div>
                  )}

                  {/* Metrics */}
                  {item.metrics && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.metrics.map((metric, j) => (
                        <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-copper/15 text-[#e7a56e]">
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  {item.bullets && (
                    <ul className="text-xs text-[#d2e8e4] space-y-1 mb-3">
                      {item.bullets.map((bullet, k) => (
                        <li key={k} className="flex items-start gap-2">
                          <span className="text-[#688f8b] mt-1 flex-shrink-0">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  {item.linkHref && item.linkLabel && (
                    <div className="mt-3">
                      <a
                        href={item.linkHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm text-teal hover:text-[#54cdbb] font-medium"
                      >
                        {item.linkLabel}
                        <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CareerTimeline() {
  return (
    <section id="career-timeline" className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-[#eefcf9]">Career Timeline</h2>
        <p className="mt-3 text-lg text-[#91b7b3]">
          A comprehensive overview of my professional journey and achievements.
        </p>
      </div>

      <div className="relative">
        {TIMELINE.map((year, index) => (
          <TimelineItem
            key={year.year}
            year={year}
            isLast={index === TIMELINE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
