export default function CTA() {
  return (
    <section id="get-started" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 55%)' }} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/15 to-amber-400/20 p-10 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-semibold">Ready to build your AI voice or chat agent?</h3>
              <p className="mt-3 text-slate-300/85">Tell us about your goals and stack. We’ll propose the flows, tooling and timeline to launch.</p>
            </div>
            <form className="grid gap-3">
              <input className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Work email" />
              <input className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company" />
              <button type="submit" className="rounded-xl bg-white text-slate-900 font-medium text-sm py-3">
                Request proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
