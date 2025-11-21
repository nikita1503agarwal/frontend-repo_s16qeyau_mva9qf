import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ScrollStory from './components/ScrollStory'
import WorkflowCanvas from './components/WorkflowCanvas'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background gradient canvas for cohesion */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.07),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(168,85,247,0.06),transparent),radial-gradient(800px_400px_at_50%_100%,rgba(251,146,60,0.05),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <ScrollStory />
        <WorkflowCanvas />
        <CTA />
      </main>

      <footer className="relative py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Auralab — AI Voice, Chat & Automations
        </div>
      </footer>
    </div>
  )
}

export default App
