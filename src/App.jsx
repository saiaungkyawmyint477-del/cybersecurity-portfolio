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
    items: ['Python', 'JavaScript', 'HTML and CSS'],
    tools: 'React, Tailwind CSS, Git, VS Code',
  },
  {
    title: 'Networking',
    items: ['IPv4 subnetting and VLSM', 'VLANs and OSPF', 'DHCP, DNS and NAT / PAT', 'SSH and failover testing'],
    tools: 'Cisco Packet Tracer',
  },
  {
    title: 'Security assessment',
    items: ['Service discovery and enumeration', 'Web vulnerability validation', 'CVSS assessment and remediation reporting'],
    tools: 'Kali Linux, Nmap, Gobuster, Nikto',
  },
  {
    title: 'Digital forensics',
    items: ['Browser and image artefact analysis', 'Deleted-file and file-slack examination', 'Evidence interpretation and reporting'],
    tools: 'Autopsy, HxD, Oracle VirtualBox',
  },
]

const projects = [
  {
    id: 'enterprise-network',
    category: 'NETWORKING',
    title: 'Enterprise network simulation',
    context: 'Individual academic project · Cisco Packet Tracer',
    summary: 'Configured a segmented enterprise network and documented connectivity, services, and WAN failover tests.',
    tags: ['Packet Tracer', 'VLANs', 'OSPF'],
    work: [
      'Planned addressing with VLSM and configured VLANs, trunks, multi-area OSPF, DHCP, DNS, and dynamic PAT.',
      'Applied SSH administration and unused-port shutdown; documented end-to-end connectivity and primary/backup WAN checks.',
    ],
  },
  {
    id: 'security-assessment',
    category: 'SECURITY ASSESSMENT',
    title: 'Web penetration-testing lab',
    context: 'EC-Council case study · Authorised course laboratory',
    summary: 'Documented four vulnerabilities in an authorised EC-Council case-study lab, including SQL injection and unsafe file upload.',
    tags: ['Kali Linux', 'Nmap', 'CVSS'],
    work: [
      'Used service enumeration and manual testing to validate web vulnerabilities and a Linux privilege-escalation path within the assigned scope.',
      'Reported evidence and CVSS v3.1 assessments for two critical, one high, and one medium finding; recommended fixes and recorded test-file cleanup.',
    ],
  },
  {
    id: 'digital-forensics',
    category: 'DIGITAL FORENSICS',
    title: 'Digital forensics investigation',
    context: 'Group academic investigation',
    summary: 'Contributed browser, image, deleted-file, and file-slack analysis to a team case report.',
    tags: ['Autopsy', 'HxD', 'Evidence analysis'],
    work: [
      'Examined image and thumbnail artefacts, browser history, cached HTML, and selected file-slack data using Autopsy and HxD.',
      'Documented negative findings and evidential limits, distinguishing user-profile activity from proof of who operated the device.',
    ],
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
            SAKM<span className="text-blue-700">.</span>
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
          <div className="mt-7">
            <div className="min-w-0">
              <h1 id="intro-heading" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Sai Aung Kyaw Myint</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                Year 2 cybersecurity student at Temasek Polytechnic, seeking an internship in network security or penetration testing. Also interested in SOC analysis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={`rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 ${focusRing}`}>Explore my projects</a>
                <a href="#contact" className={`rounded-lg border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-800 hover:bg-blue-100 ${focusRing}`}>Get in touch</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-6 pt-16">
          <h2 id="projects-heading" className="mt-2 text-3xl font-bold tracking-tight">Selected projects</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Practical work from my diploma studies.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
                  <summary className={`cursor-pointer rounded font-semibold text-blue-800 ${focusRing}`}>My contribution</summary>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
                    {project.work.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-6 pt-16">
          <h2 id="skills-heading" className="mt-2 text-3xl font-bold tracking-tight">Technical skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <li key={item} className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700">{item}</li>)}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-600"><span className="font-semibold">Tools: </span>{group.tools}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-6 pt-16">
          <h2 id="experience-heading" className="mt-2 text-3xl font-bold tracking-tight">Work experience</h2>
          <article className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold">Sheraton Tower Hotel</h3>
            <p className="mt-3 font-semibold text-blue-800">Audio visual support · Two years of experience</p>
            <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 leading-relaxed text-slate-600">
              <li>Supported audio visual delivery for more than 200 weddings.</li>
              <li>Resolved technical issues affecting sound systems and visual displays.</li>
            </ul>
          </article>
        </section>

        <section id="education" aria-labelledby="education-heading" className="scroll-mt-6 pt-16">
          <h2 id="education-heading" className="mt-2 text-3xl font-bold tracking-tight">Education</h2>
          <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8">
            <article className="py-6">
              <p className="text-sm font-semibold text-blue-700">2025–PRESENT · EXPECTED GRADUATION 2028</p>
              <h3 className="mt-2 text-xl font-bold">Temasek Polytechnic</h3>
              <p className="mt-2 text-slate-600">Diploma in Cybersecurity &amp; Digital Forensics · Singapore</p>
            </article>
          </div>
          <p className="mt-5 text-sm text-slate-600"><span className="font-semibold">Languages: </span>Burmese, English, and Chinese.</p>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="mt-16 scroll-mt-6 rounded-3xl bg-blue-900 p-7 text-white sm:p-10">
          <h2 id="contact-heading" className="text-3xl font-bold">Let’s connect</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-blue-100">For internship opportunities, connect with me on LinkedIn.</p>
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
