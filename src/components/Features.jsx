import { Bot, PhoneCall, Workflow, Zap, MessageSquare, ShieldCheck, Mic, Infinity } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Voice Agents',
    desc: 'Natural, low-latency conversations powered by streaming TTS + STT with fallback to chat.'
  },
  {
    icon: MessageSquare,
    title: 'Chat Assistants',
    desc: 'Context-aware chat with memory and tools that reflect your brand voice.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Trigger actions across your CRM, calendar, helpdesk and internal systems.'
  },
  {
    icon: PhoneCall,
    title: 'Telephony & Web',
    desc: 'Spin up phone lines or embed on your site with one line of code.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    desc: 'SSO, audit logs and PII redaction keep your data protected.'
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    desc: 'Go from idea to production-ready assistant in days, not months.'
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">What we build</h2>
          <p className="mt-3 text-slate-300/80">A unified platform for voice, chat and automations tailored to your business.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/[0.07] transition-colors">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)]">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
