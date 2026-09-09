import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI & IoT", href: "#ai-iot" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false); // State to track whether the mobile menu is open or closed
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-[#07050A]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20.5 max-w-350 items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a href="#home" className="group flex items-center">
          <span className="text-2xl font-black tracking-[-0.08em] text-white">
            F
          </span>
          <span className="text-2xl font-black tracking-[-0.08em] text-[#ff2b87]">
            T
          </span>

          <span className="ml-2 h-2 w-2 rounded-full bg-[#ff2b87] shadow-[0_0_14px_rgba(255,43,135,0.8)] transition group-hover:scale-125" />
        </a>

        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-2 text-sm font-medium text-white/60 transition hover:text-[#ff2b87]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/6 bg-[#07050A] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-white/70 transition hover:bg-white/4 hover:text-[#ff2b87]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar