export default function App() {
  return (
    <main id="top" className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-blue-700">
          Cybersecurity &amp; Digital Forensics
        </p>
            
        
        <nav
          aria-label="Main navigation"
          className="mb-12 flex flex-wrap gap-6 border-b border-slate-200 pb-6"
        >
          {[
            { label: 'Projects', href: '#projects' },
            { label: 'Coursework', href: '#coursework' },
            { label: 'Tools', href: '#tools' },
            { label: 'Languages', href: '#languages' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded text-sm text-slate-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <header className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-10">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Sai Aung Kyaw Myint
          </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          I’m a Year 2 Diploma in Cybersecurity &amp; Digital Forensics
          student preparing for an internship. I’m interested in network
          security and penetration testing, and keen to explore SOC analysis.
        </p>

        <ul 
          aria-label="Areas of interest"
          className="mt-8 flex flex-wrap gap-3"
        >
          {[
            'Network security',
            'Penetration testing',
            'Exploring SOC analysis',
          ].map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm text-blue-700"
            >
              {interest}
            </li>
          ))}
        </ul>
        </header>
                  <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Get in touch
          </a>
        
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mt-20 border-t border-slate-200 pt-12"
        >
          <h2 id="projects-heading" className="text-3xl font-bold">
            Projects
          </h2>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6">
            <p className="text-slate-600">
              Project write-ups will be added here.
            </p>
          </div>
        </section>
        <section
          id="coursework"
          aria-labelledby="coursework-heading"
          className="mt-20 border-t border-slate-200 pt-12"
        >
          <h2
            id="coursework-heading"
            className="text-3xl font-bold"
          >
            Coursework
          </h2>

          <p className="mt-3 text-slate-600">
            Foundations from my diploma and topics I’m currently studying.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold text-blue-700">
                Completed modules
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
                {[
                  'Enterprise Networking',
                  'Servers Administration and Security',
                  'Forensics in Digital Security',
                  'Ethical Hacking',
                ].map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold text-blue-700">
                Currently studying
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Year 2 · Semester 2
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
                {[
                  'Incident Response and Risk Management',
                  'Network Security',
                  'Secure Web Application',
                  'IT Security Management and Audit',
                ].map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="tools"
          aria-labelledby="tools-heading"
          className="mt-16"
        >
          <h2 id="tools-heading" className="text-3xl font-bold">
            Tools I’ve used
          </h2>

          <p className="mt-3 text-slate-600">
            Tools I’ve worked with during my studies.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              'Python (Anaconda)',
              'KNIME',
              'Oracle VirtualBox',
              'Kali Linux',
              'Figma',
              'VS Code',
            ].map((tool) => (
              <li
                key={tool}
                className="rounded-lg border border-slate-300 bg-blue-50 px-4 py-3 text-slate-700"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>
        <section
          id="languages"
          aria-labelledby="languages-heading"
          className="mt-16"
        >
          <h2 id="languages-heading" className="text-3xl font-bold">
            Languages I speak
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Burmese, English, and Chinese.
          </p>
        </section>
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mt-16 border-t border-slate-200 pt-12"
        >
          <h2 id="contact-heading" className="text-3xl font-bold">
            Let’s connect
          </h2>

          <p className="mt-3 text-slate-600">
            Connect with me on LinkedIn or visit my GitHub profile.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {[
              {
                label: 'GitHub',
                href: 'https://github.com/saiaungkyawmyint477-del',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/sai-aung-kyaw-myint-126458376/',
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-700 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Sai Aung Kyaw Myint
          </p>

          <a
            href="#top"
            className="rounded hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </main>
  )
}

