import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Bot, MessageSquare, PhoneCall, Workflow, Database } from 'lucide-react'

const Port = ({ side = 'right', active }) => (
  <span
    className={`absolute top-1/2 -translate-y-1/2 ${side === 'right' ? 'right-1.5' : 'left-1.5'} h-2.5 w-2.5 rounded-full bg-white/30`}
    style={{ boxShadow: active ? '0 0 14px 4px rgba(168,85,247,0.6)' : '0 0 0 rgba(0,0,0,0)' }}
  />
)

function DraggableNode({ icon: Icon, title, subtitle, x, y, glow, onHover }) {
  const ref = useRef(null)
  const xMv = useMotionValue(x)
  const yMv = useMotionValue(y)
  const xSpring = useSpring(xMv, { stiffness: 300, damping: 30 })
  const ySpring = useSpring(yMv, { stiffness: 300, damping: 30 })
  const [hover, setHover] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="absolute select-none"
      style={{ x: xSpring, y: ySpring }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onMouseEnter={() => { setHover(true); onHover?.(true) }}
      onMouseLeave={() => { setHover(false); onHover?.(false) }}
    >
      <div className={`neon-stroke rounded-2xl p-[1px] trace-border ${glow ? 'shadow-[0_0_60px_-10px_rgba(168,85,247,0.5)]' : ''}`}>
        <div className="glass-card rounded-2xl px-4 py-3 min-w-[180px] relative">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white">
              <Icon size={18} />
            </div>
            <div>
              <div className="text-white text-sm font-semibold leading-tight">{title}</div>
              <div className="text-xs text-white/60 leading-tight">{subtitle}</div>
            </div>
          </div>
          <Port side="left" active={hover} />
          <Port side="right" active={hover} />
        </div>
      </div>
    </motion.div>
  )
}

const Connector = ({ d, delay = 0 }) => (
  <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none">
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="50%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#f59e0b"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <motion.path
      d={d}
      fill="none"
      stroke="url(#lineGrad)"
      strokeWidth="2.5"
      strokeLinecap="round"
      filter="url(#glow)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2.2, ease: 'easeInOut', delay }}
      style={{ filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.5))' }}
    />
  </svg>
)

export default function WorkflowCanvas() {
  const [hovering, setHovering] = useState(false)

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="glow-orb orb-3" />
        {/* gradient strobe reacts to hover */}
        <motion.div
          className="gradient-strobe"
          animate={{ opacity: hovering ? 0.45 : 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Design workflows like magic</h2>
          <p className="mt-3 text-slate-300/80">Visual, node-based flows inspired by the best of n8n and the polish of Webflow. Drag nodes, feel the magnetic snap, and watch links glow to life.</p>
        </div>

        <div className="relative mt-14 rounded-3xl p-1 animated-border">
          <div className="relative rounded-3xl overflow-hidden glass-card">
            <div className="relative h-[520px]">
              {/* connectors */}
              <Connector d="M160 160 C 340 80, 540 120, 720 180" delay={0.1} />
              <Connector d="M180 360 C 360 420, 540 420, 760 320" delay={0.3} />
              <Connector d="M720 180 C 860 220, 960 280, 1020 360" delay={0.6} />

              {/* nodes (draggable) */}
              <DraggableNode icon={Bot} title="Trigger" subtitle="Lead created" x={120} y={140} glow onHover={setHovering} />
              <DraggableNode icon={MessageSquare} title="Chat" subtitle="Qualify lead" x={320} y={280} onHover={setHovering} />
              <DraggableNode icon={Workflow} title="Decision" subtitle="Route intent" x={540} y={160} onHover={setHovering} />
              <DraggableNode icon={PhoneCall} title="Call" subtitle="Warm transfer" x={720} y={280} onHover={setHovering} />
              <DraggableNode icon={Database} title="CRM" subtitle="Create opportunity" x={980} y={340} onHover={setHovering} />

              {/* subtle grid */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
