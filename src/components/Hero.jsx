import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <GradientBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-200/80 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Realtime AI voice, chat & automations
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Build modern AI voice agents and chatbots that automate your workflow
          </h1>
          <p className="mt-6 text-slate-300/90 text-lg leading-relaxed">
            Launch a branded assistant that talks, types and takes action. Convert leads, support customers, and connect your tools with scroll‑driven, story‑like interactions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)]">
              Start a project
            </a>
            <a href="#demo" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              See live demo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-7 h-7 rounded-full border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900" />
              ))}
            </div>
            <span>Trusted by modern teams</span>
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[680px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function GradientBackground() {
  return (
    <div className="absolute inset-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.18),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 25% 10%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05), transparent 40%)' }} />
    </div>
  )
}
