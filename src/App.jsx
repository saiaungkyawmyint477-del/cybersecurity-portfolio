const profileLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-aung-kyaw-myint-126458376/' },
  { label: 'GitHub', href: 'https://github.com/saiaungkyawmyint477-del' },
]

const navigation = [
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

const skillGroups = [
  {
    title: 'Programming and web development',
    description: 'Languages and frameworks I have used in my studies and this portfolio.',
    items: ['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Networking',
    description: 'Practical experience through an enterprise network simulation.',
    items: ['IPv4 subnetting and VLSM', 'VLANs and trunking', 'Multi-area OSPF', 'DHCP and DNS', 'NAT / PAT', 'SSH administration', 'Connectivity and failover testing'],
  },
  {
    title: 'Security assessment',
    description: 'Techniques practised within an authorised course laboratory.',
    items: ['Service discovery and enumeration', 'Web vulnerability validation', 'Linux privilege-escalation assessment', 'CVSS v3.1 assessment', 'Remediation reporting'],
  },
  {
    title: 'Digital forensics and analytics',
    description: 'Academic work examining artefacts and preparing data for analysis.',
    items: ['Browser and HTML artefacts', 'Graphics and thumbnail analysis', 'Deleted-file and file-slack examination', 'Evidence interpretation', 'Data cleaning', 'k-Means clustering', 'Linear regression'],
  },
]

const toolGroups = [
  { title: 'Security testing', tools: 'Kali Linux, Nmap, Gobuster, DIRB, Nikto, Netcat' },
  { title: 'Networking and forensics', tools: 'Cisco Packet Tracer, Autopsy, HxD, Oracle VirtualBox' },
  { title: 'Development and analytics', tools: 'VS Code, Git, GitHub, Vite, Vercel, Anaconda, KNIME, Figma' },
]

const projects = [
  {
    id: 'enterprise-network',
    category: 'NETWORKING',
    title: 'Enterprise network design and verification',
    context: 'Individual academic project · Cisco Packet Tracer',
    summary: 'Designed and documented a simulated enterprise network with departmental LANs, wireless VLANs, internal routing, and primary and backup WAN connectivity.',
    tags: ['VLSM', 'VLANs', 'OSPF', 'PAT', 'SSH'],
    work: [
      'Planned IPv4 subnets with VLSM and configured VLANs, trunks, multi-area OSPF, DHCP, DNS, and dynamic PAT.',
      'Configured SSH administration and unused-port shutdown, then documented connectivity, services, and WAN failover checks.',
      'Researched access-control and latency improvements, keeping proposed ACL, AAA, 802.1X, and QoS measures separate from the implemented simulation.',
    ],
    outcome: 'A documented Packet Tracer implementation with addressing plans, configuration evidence, and verification screenshots.',
  },
  {
    id: 'security-assessment',
    category: 'SECURITY ASSESSMENT',
    title: 'Web application penetration-testing lab',
    context: 'EC-Council case study · Authorised course laboratory',
    summary: 'Performed practical testing and documented an attack path involving SQL injection, unrestricted file upload, and a Linux privilege-escalation vulnerability in a course lab.',
    tags: ['Kali Linux', 'Nmap', 'Web security', 'CVSS'],
    work: [
      'Used service discovery, directory enumeration, and manual checks to validate vulnerabilities within the assigned laboratory scope.',
      'Documented four findings, supporting evidence, CVSS v3.1 assessments, and recommended remediation.',
      'Recorded proof-of-concept cleanup and distinguished successful testing from fixes that still required implementation and verification.',
    ],
    outcome: 'An evidence-based assessment report covering two critical, one high, and one medium finding. This was an educational lab, not a commercial engagement.',
  },
  {
    id: 'digital-forensics',
    category: 'DIGITAL FORENSICS',
    title: 'Digital evidence and artefact analysis',
    context: 'Group academic investigation · Assigned analysis scope',
    summary: 'Contributed graphics, browser/HTML, deleted-file, file-slack, and miscellaneous artefact analysis to a group digital-forensics case report.',
    tags: ['Autopsy', 'HxD', 'Browser artefacts', 'Evidence reporting'],
    work: [
      'Examined thumbnail and image artefacts and correlated browser history with cached HTML material.',
      'Reviewed selected file-slack artefacts using Autopsy and HxD, recording negative findings where no reliable additional plaintext was recovered.',
      'Explained evidential limitations, separating activity associated with a user profile from proof of the physical operator or intent.',
    ],
    outcome: 'Contributed scoped findings and careful interpretations to the team report. The wider investigation and its conclusions were a group effort.',
  },
  {
    id: 'customer-analytics',
    category: 'DATA ANALYTICS',
    title: 'Restaurant customer analytics workflow',
    context: 'Individual academic assignment · KNIME',
    summary: 'Built a KNIME workflow for preparing restaurant customer data, exploring customer groups, and modelling combined customer ratings.',
    tags: ['KNIME', 'Data preparation', 'Clustering', 'Regression'],
    work: [
      'Created processing steps for missing values, numeric outliers, feature construction, and normalisation.',
      'Configured k-Means clustering with four clusters and a linear-regression learner targeting combined ratings.',
      'Included partitioning, prediction, numeric-scoring, visualisation, and CSV-export steps in the workflow.',
    ],
    outcome: 'A saved workflow combining data preparation, customer segmentation, and rating prediction. No model-performance claim is presented here.',
  },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <a href="#main-content" className={`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4 ${focusRing}`}>
        Skip to content
      </a>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <a href="#top" className={`w-fit rounded text-lg font-bold tracking-tight text-slate-900 ${focusRing}`}>
            Sai Aung Kyaw Myint<span className="text-blue-700">.</span>
          </a>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`rounded text-slate-600 hover:text-blue-700 ${focusRing}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <section aria-labelledby="intro-heading" className="overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold tracking-widest text-blue-800">CYBERSECURITY &amp; DIGITAL FORENSICS</p>
          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
            <div className="min-w-0">
              <h1 id="intro-heading" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Sai Aung Kyaw Myint</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                I’m a Year 2 Diploma in Cybersecurity &amp; Digital Forensics student at Temasek Polytechnic, preparing for an internship. My interests are network security and penetration testing, and I’m keen to explore SOC analysis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={`rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 ${focusRing}`}>Explore my projects</a>
                <a href="#contact" className={`rounded-lg border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-800 hover:bg-blue-100 ${focusRing}`}>Get in touch</a>
              </div>
            </div>
            <aside aria-label="Experience at a glance" className="rounded-2xl border border-blue-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-500">BEYOND THE CLASSROOM</p>
              <p className="mt-5 text-4xl font-bold text-blue-800">200+</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">Weddings supported through audio visual work</p>
              <div className="mt-5 border-t border-slate-200 pt-5">
                <p className="text-2xl font-bold text-slate-900">2 years</p>
                <p className="mt-1 text-sm text-slate-600">Audio visual experience</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-6 pt-16">
          <p className="text-sm font-semibold tracking-widest text-blue-700">PRACTICAL WORK</p>
          <h2 id="projects-heading" className="mt-2 text-3xl font-bold tracking-tight">Selected projects</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Academic projects in networking, authorised security testing, digital forensics, and analytics. Each summary describes the scope of the work and my contribution.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <p className="text-xs font-bold tracking-widest text-blue-700">{project.category}</p>
                <h3 className="mt-3 text-xl font-bold leading-snug">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{project.context}</p>
                <p className="mt-4 leading-relaxed text-slate-600">{project.summary}</p>
                <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <li key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">{tag}</li>)}
                </ul>
                <details className="mt-6 border-t border-slate-100 pt-4">
                  <summary className={`cursor-pointer rounded font-semibold text-blue-800 ${focusRing}`}>Read project summary</summary>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                    {project.work.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700"><strong>Outcome: </strong>{project.outcome}</p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-6 pt-16">
          <p className="text-sm font-semibold tracking-widest text-blue-700">WHAT I WORK WITH</p>
          <h2 id="skills-heading" className="mt-2 text-3xl font-bold tracking-tight">Technical skills</h2>
          <p className="mt-3 text-slate-600">Skills developed through diploma assignments, laboratory work, and building this portfolio.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <li key={item} className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700">{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <h3 className="mt-9 text-xl font-bold">Tools I’ve used</h3>
          <dl className="mt-5 grid gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-6 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div key={group.title}>
                <dt className="font-semibold text-blue-900">{group.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-700">{group.tools}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-6 pt-16">
          <p className="text-sm font-semibold tracking-widest text-blue-700">WORK EXPERIENCE</p>
          <h2 id="experience-heading" className="mt-2 text-3xl font-bold tracking-tight">Audio visual event support</h2>
          <article className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold">Sheraton Tower Hotel</h3>
            <p className="mt-3 font-semibold text-blue-800">2 years of experience · More than 200 weddings supported</p>
            <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 leading-relaxed text-slate-600">
              <li>Successfully supported audio visual delivery for more than 200 weddings over two years.</li>
              <li>Resolved technical issues affecting sound systems and visual displays.</li>
            </ul>
          </article>
        </section>

        <section id="education" aria-labelledby="education-heading" className="scroll-mt-6 pt-16">
          <p className="text-sm font-semibold tracking-widest text-blue-700">EDUCATION</p>
          <h2 id="education-heading" className="mt-2 text-3xl font-bold tracking-tight">My educational background</h2>
          <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8">
            <article className="py-6">
              <p className="text-sm font-semibold text-blue-700">2025–2028 EXPECTED · CURRENTLY YEAR 2</p>
              <h3 className="mt-2 text-xl font-bold">Temasek Polytechnic</h3>
              <p className="mt-2 text-slate-600">Diploma in Cybersecurity &amp; Digital Forensics · Singapore</p>
            </article>
            <article className="py-6">
              <p className="text-sm font-semibold text-slate-500">DECEMBER 2018–FEBRUARY 2020</p>
              <h3 className="mt-2 text-xl font-bold">Mandalay Technological University</h3>
              <p className="mt-2 text-slate-600">Civil Engineering studies · Myanmar</p>
            </article>
            <article className="py-6">
              <p className="text-sm font-semibold text-slate-500">GRADUATED IN 2017</p>
              <h3 className="mt-2 text-xl font-bold">No. 9 Basic Education High School</h3>
              <p className="mt-2 text-slate-600">Lashio, Myanmar · Graduated</p>
              <p className="mt-2 text-sm font-medium text-blue-800">Four distinctions out of six subjects in the Matriculation Examination.</p>
            </article>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold">Languages I speak</h3>
            <p className="mt-2 text-slate-600">Burmese, English, and Chinese.</p>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="mt-16 scroll-mt-6 rounded-3xl bg-blue-900 p-7 text-white sm:p-10">
          <p className="text-sm font-semibold tracking-widest text-blue-200">LET’S CONNECT</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-bold">Interested in my work?</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-blue-100">I’m preparing for a cybersecurity internship and would welcome a conversation about opportunities to learn and contribute.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-lg border border-white/40 bg-white px-5 py-3 font-semibold text-blue-900 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{link.label}</a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Sai Aung Kyaw Myint</p>
          <a href="#top" className={`rounded hover:text-blue-700 ${focusRing}`}>Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
