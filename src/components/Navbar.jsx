import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Workflows', href: '#workflows' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-sky-400 shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
              <span className="text-white font-semibold tracking-tight">Auralab</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)]">
                Get started
              </a>
            </nav>

            <button className="md:hidden text-white/90" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block text-slate-200/90">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white">
                Get started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
