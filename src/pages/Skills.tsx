import { motion } from "framer-motion";
import {Code2, BrainCircuit,Braces,Cpu} from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-[#07050A] text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-45 top-[10%] h-150 w-150 rounded-full bg-[#ff2b87]/10 blur-[170px]" />

      <div className="pointer-events-none absolute -right-37.5 top-[30%] h-125 w-125 rounded-full bg-[#9b5cff]/10 blur-[170px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-62.5 w-125 -translate-x-1/2 rounded-full bg-[#ff2b87]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-10">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-7 h-0.75 w-20 rounded-full bg-[#ff2b87] shadow-[0_0_18px_rgba(255,43,135,0.45)]" />

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/55 sm:text-lg">
            Technologies, tools and engineering capabilities I use to build
            practical digital solutions.
          </p>
        </motion.div>

        {/* Skills */}

        <div className="grid gap-8 lg:grid-cols-2">

          <SkillCard
            title="Languages"
            icon={<Code2 size={30} />}
            skills={[
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",

            ]}
            direction="left"
          />

          <SkillCard
            title="Backend & AI/ML"
            icon={<BrainCircuit size={30} />}
            skills={[
              "Node.js",
              "REST APIs",
              "Express.js",
              "MongoDB",
              "Prompt Engineering",
              "AI Workflows / Agents",
            ]}
            direction="right"
          />

          <SkillCard
            title="Frontend & Tools"
            icon={<Braces size={30} />}
            skills={[
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "Bootstrap",
              "Git / GitHub",
              "VS Code",
              "Vercel",
              "npm",
            ]}
            direction="left"
          />

          <SkillCard
            title="Systems & Engineering"
            icon={<Cpu size={30} />}
            skills={[
              "Embedded Systems",
              "Microcontrollers",
              "Arduino",
              "ESP32",
              "IoT",
              "Networking",
            ]}
            direction="right"
          />

        </div>

      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  direction: "left" | "right";
}

const SkillCard = ({
  title,
  icon,
  skills,
  direction,
}: SkillCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -35 : 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group relative min-h-70 overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/3
        p-8
        backdrop-blur-md
        transition-all duration-300
        hover:border-[#ff2b87]/40
      "
    >

      {/* Glow */}

      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-64 w-64
          rounded-full
          bg-[#ff2b87]/5
          blur-[90px]
          transition-all duration-500
          group-hover:bg-[#ff2b87]/10
        "
      />

      <div className="relative z-10">

        {/* Heading */}

        <div className="mb-8 flex items-center gap-4">

          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              border border-[#ff2b87]/30
              bg-[#ff2b87]/10
              text-[#ff2b87]
              transition-all duration-300
              group-hover:border-[#9b5cff]/40
              group-hover:bg-[#9b5cff]/10
            "
          >
            {icon}
          </div>

          <h3 className="text-2xl font-black tracking-tight">
            {title}
          </h3>

        </div>

        {/* Skills */}

        <div className="flex flex-wrap gap-3">

          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -2,
              }}
              className="
                rounded-xl
                border border-white/10
                bg-[#07050A]/60
                px-4 py-2.5
                text-sm font-semibold
                text-white/65
                transition-all duration-300
                hover:border-[#ff2b87]/40
                hover:bg-[#ff2b87]/5
                hover:text-[#ff2b87]
              "
            >
              {skill}
            </motion.span>
          ))}

        </div>

      </div>
    </motion.div>
  );
};

export default Skills;