export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-cyan-400">
          Cybersecurity &amp; Digital Forensics
        </p>

        <h1 className="text-4xl font-bold sm:text-6xl">
          Sai Aung Kyaw Myint
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
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
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-cyan-300"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
