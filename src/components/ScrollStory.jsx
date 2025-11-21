import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, MessagesSquare, Workflow, Rocket } from 'lucide-react'

export default function ScrollStory() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0.7, 0.5])

  const steps = [
    {
      icon: Sparkles,
      title: 'Ideate',
      text: 'Describe your assistant. Tone, channels, actions—our team shapes it with you.'
    },
    {
      icon: MessagesSquare,
      title: 'Converse',
      text: 'Voice or chat—your agent speaks naturally with memory and context.'
    },
    {
      icon: Workflow,
      title: 'Automate',
      text: 'Connect your stack. Bookings, CRM updates, triage and more happen automatically.'
    },
    {
      icon: Rocket,
      title: 'Launch',
      text: 'Deploy across web, phone and apps. Measure, iterate, and scale confidently.'
    },
  ]

  return (
    <section id="workflows" className="relative py-28 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
      <motion.div style={{ y: y2, opacity }} className="pointer-events-none absolute -right-28 top-1/2 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.22),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">From idea to automation</h2>
          <p className="mt-3 text-slate-300/80">A scroll‑driven story of how we bring your AI assistant to life.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} whileInView={{ y: [20, 0], opacity: [0, 1] }} viewport={{ once: true, amount: 0.5 }} transition={{ type: 'spring', stiffness: 60 }} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
