import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#08050D] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-45 top-[15%] h-150 w-150 rounded-full bg-[#8E4DFF]/20 blur-[170px]" />

      <div className="pointer-events-none absolute -right-37.5 top-[35%] h-125 w-125 rounded-full bg-[#FF2B87]/10 blur-[170px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-62.5 w-125 -translate-x-1/2 rounded-full bg-[#9B5CFF]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-350 px-6 py-18 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-7 h-0.75 w-20 rounded-full bg-[#9B5CFF] shadow-[0_0_18px_rgba(155,92,255,0.7)]" />

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Crafting Digital Solutions
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.55fr_0.75fr] xl:gap-20">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-212.5"
          >
            <div className="space-y-7 text-[17px] leading-8 text-[#D0C9DA] sm:text-lg">
              <p>
                I'm Timilehin Faniyi, a Computer Engineering graduate and
                software developer passionate about creating practical
                technology solutions.
              </p>

              <p>
                My development journey began with frontend development and has
                grown into building modern web applications using technologies
                such as React, TypeScript, JavaScript and Tailwind CSS. I also
                have experience working with backend technologies, databases
                and systems that connect software with real-world applications.
              </p>

              <p>
                Beyond web development, my engineering background has shaped
                the way I approach problems. I enjoy understanding how systems
                work, breaking complex problems into manageable parts, and
                turning ideas into functional solutions.
              </p>

              <p>
                I'm currently focused on growing as a full-stack developer
                while exploring AI, automation, IoT and intelligent applications.
              </p>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative mx-auto w-full max-w-100"
          >
            {/* Image glow */}
            <div className="absolute inset-5 rounded-4xl bg-[#9B5CFF]/20 blur-[70px]" />

            {/* Image frame */}
            <div className="relative rounded-4xl border border-[#9B5CFF]/35 bg-white/2 p-2">
              <div className="overflow-hidden rounded-[1.7rem]">
                <img
                  src="/images/about/about.png"
                  alt="Timilehin Faniyi"
                  className="aspect-4/5 w-full object-cover object-center"
                />
              </div>
            </div>

            {/* FT mark */}
            <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#9B5CFF]/30 bg-[#100A18]/90 shadow-[0_0_30px_rgba(155,92,255,0.25)] backdrop-blur-xl">
              <span className="text-xl font-black tracking-[-0.08em]">
                <span className="text-[#FF2B87]">F</span>
                <span className="text-[#9B5CFF]">T</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >

          {/* Stats */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <StatCard
              value="3+"
              label="Years Experience"
            />

            <StatCard
              value="20+"
              label="Projects Completed"
            />

            <StatCard
              value="100%"
              label="Client Satisfaction"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        borderColor: "rgba(155,92,255,0.35)",
      }}
      transition={{ duration: 0.25 }}
      className="group min-h-36.25 rounded-2xl border border-white/8 bg-white/2.5 px-7 py-6 backdrop-blur-md"
    >
      <div className="flex h-full flex-col justify-center">
        <h3 className="text-5xl font-black tracking-tighter text-white transition-colors duration-300 group-hover:text-[#FF2B87]">
          {value}
        </h3>

        <p className="mt-3 text-sm font-medium uppercase tracking-widest text-white/40">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default About;