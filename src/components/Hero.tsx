import { motion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07050A] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-105 w-105 rounded-full bg-[#ff2b87]/10 blur-[140px]" />
        <div className="absolute right-25 top-[30%] h-125 w-125 rounded-full bg-[#9b5cff]/10 blur-[160px]" />
      </div>

      {/* Decorative FT */}
      <div className="pointer-events-none absolute right-[28%] top-[18%] select-none">
        <span className="text-[180px] font-black tracking-[-0.08em] text-white/2">
          FT
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-350 items-center px-6 pb-16 pt-28 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff2b87]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl xl:text-[88px]">
              Hi, I'm {""}
              <span className=" whitespace-nowrap bg-linear-to-r from-white via-white to-[#ff2b87] bg-clip-text text-transparent">
                Timilehin Faniyi.
              </span>
            </h1>

            {/* Role */}
            <div className="mt-8 flex items-center gap-4">
              <p className="text-lg font-semibold text-white/80 sm:text-xl md:text-2xl">
                Software Developer <span className="text-[#ff2b87]">&</span>{" "}
                Computer Engineer
              </p>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              I build modern web applications, intelligent systems and practical
              digital solutions with a focus on clean interfaces, meaningful
              functionality and real-world impact.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#ff2b87] px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,43,135,0.35)]"
              >
                View Projects
                <ArrowDownRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="https://drive.google.com/file/d/10HL-g4zzI8UL59dtZnPs5ovJm33a7EmR/view?usp=drive_link"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-[#ff2b87]/50 hover:bg-[#ff2b87]/5"
              >
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-6">
              <span className="text-xs uppercase tracking-[0.22em] text-white/30">
                Connect
              </span>

              <a
                href="https://github.com/Pharniyi"
                aria-label="GitHub"
                className="text-white/55 transition hover:text-[#ff2b87]"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/timilehin-faniyi"
                aria-label="LinkedIn"
                className="text-white/55 transition hover:text-[#ff2b87]"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:faniyitimi@gmail.com"
                aria-label="Email"
                className="text-white/55 transition hover:text-[#ff2b87]"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-130"
          >
            {/* Outer glow */}
            <div className="absolute inset-8 rounded-4xl bg-[#ff2b87]/20 blur-[80px]" />

            {/* Image frame */}
            <div className="relative overflow-hidden rounded-4xl border border-[#ff2b87]/30 bg-white/2 p-2 shadow-[0_0_60px_rgba(255,43,135,0.08)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem] bg-black">
                <img
                  src="/images/profile/profile.png"
                  alt="Timilehin Faniyi"
                  className="h-full w-full object-cover object-center grayscale-10%"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#07050A]/55 via-transparent to-transparent" />

                {/* FT badge 
                <div className="absolute -bottom-2 -left-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff2b87]/40 bg-black/60 shadow-[0_0_30px_rgba(255,43,135,0.2)] backdrop-blur-md">
                  <span className="text-xl font-black tracking-[-0.08em]">
                    <span className="text-white">F</span>
                    <span className="text-[#ff2b87]">T</span>
                  </span>
                </div>
                */}
              </div>
            </div>

            {/* Floating FT */}
            <div className="absolute -right-5 -top-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#9b5cff]/30 bg-[#100b18]/80 shadow-[0_0_40px_rgba(155,92,255,0.2)] backdrop-blur-xl">
              <span className="text-2xl font-black tracking-[-0.08em]">
                <span className="text-[#ff2b87]">F</span>
                <span className="text-[#9b5cff]">T</span>
              </span>
            </div>
            
          </motion.div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex">
        <div className="h-10 w-px bg-linear-to-b from-[#ff2b87] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
