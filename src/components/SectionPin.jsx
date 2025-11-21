import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SectionPin() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const orbY = useTransform(scrollYProgress, [0, 1], [40, -120])
  const orbX = useTransform(scrollYProgress, [0, 1], [-60, 80])
  const hue = useTransform(scrollYProgress, [0, 1], ['0deg', '60deg'])

  return (
    <section ref={ref} className="relative h-[180vh]">
      {/* progress bar */}
      <motion.div style={{ scaleX }} className="origin-left fixed left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 z-40" />

      <div className="sticky top-16 z-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-[1px] animated-border">
            <div className="relative overflow-hidden rounded-3xl glass-card">
              <motion.div style={{ filter: hue.to(h => `hue-rotate(${h})`) }} className="absolute inset-0 section-morph" />
              <div className="relative px-8 py-16 sm:px-14 sm:py-20">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Orchestrate complex flows with clarity</h2>
                  <p className="mt-3 text-slate-300/85">Pin the story as you scroll. Parallax gradients and subtle strobes keep the canvas alive while you read.</p>
                </div>
                <motion.div style={{ x: orbX, y: orbY }} className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_60%)] blur-3xl" />
                <motion.div style={{ x: orbX, y: orbY }} className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-3xl" />
                <motion.div style={{ opacity: scrollYProgress }} className="gradient-strobe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
