import { useEffect, useState } from "react";
import { ArrowDownRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI & IoT", href: "#ai-iot" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActiveSection = () => {
      const offset = window.scrollY + 180;
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

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

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
                className={`relative py-2 text-sm font-medium transition ${
                  isActive ? "text-[#ff2b87]" : "text-white/60 hover:text-[#ff2b87]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}

          <div className="ml-1 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#ff2b87] px-4 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,43,135,0.35)]"
            >
              Hire me
              <ArrowDownRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
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
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveSection(sectionId);
                  }}
                  className={`rounded-lg px-3 py-3 transition ${
                    isActive
                      ? "bg-[#ff2b87]/10 text-[#ff2b87]"
                      : "text-white/70 hover:bg-white/4 hover:text-[#ff2b87]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar