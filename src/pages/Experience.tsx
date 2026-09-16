import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Network,
  Server
} from "lucide-react";

const milestones = [
  {
    year: "2019 — 2025",
    type: "Education",
    title: "B.Eng. Computer Engineering",
    organization: "University of Ilorin, Kwara State",
    description:
      "Studied Computer Engineering with a strong foundation in software development, systems, networking, databases and computer engineering principles.",
    icon: GraduationCap,
    accent: "purple",
  },
  {
    year: "2023",
    type: "Milestone 01",
    title: "Front-End Developer Intern",
    organization: "McGeorge Consulting Limited",
    description:
      "Started my professional development journey by building web applications, implementing dynamic web solutions and collaborating with team members to deliver responsive and user-friendly applications.",
    icon: Code2,
    accent: "pink",
  },
  {
    year: "2023",
    type: "Milestone 02",
    title: "Front-End Developer Intern",
    organization: "Outsourced Language Technologies",
    description:
      "Worked with engineers to implement functional websites and software interfaces, participated in code reviews and contributed feedback for code improvement.",
    icon: Code2,
    accent: "purple",
  },
  {
    year: "2024",
    type: "Milestone 03",
    title: "IT Infrastructure Engineering Intern",
    organization: "AIICO Insurance Plc",
    description:
      "Gained hands-on experience supporting IT infrastructure and networks, working alongside senior engineers on security measures, troubleshooting connectivity issues and providing technical support to end users.",
    icon: Network,
    accent: "pink",
  },
  {
    year: "2025 — 2026",
    type: "Milestone 04",
    title: "Full-Stack Developer",
    organization: "McGeorge Consulting Limited",
    description:
      "Returned to McGeorge as a full-stack developer, contributing to production-level websites and web applications, resolving application issues and helping develop technical training content covering React.js, Node.js, JavaScript, TypeScript and CMS.",
    icon: Server,
    accent: "purple",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#07050A] py-10 text-white"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#FF2B87]/[0.06] blur-[160px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[45%] h-[500px] w-[500px] rounded-full bg-[#9B5CFF]/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#FF2B87]/[0.03] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2B87]">
            Experience
          </p>

          <h2 className="text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            My Journey
          </h2>

          <div className="mx-auto mt-7 h-[3px] w-20 rounded-full bg-[#FF2B87] shadow-[0_0_18px_rgba(255,43,135,0.55)]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            From studying Computer Engineering to growing through frontend,
            infrastructure and full-stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-[#FF2B87]/40 via-white/[0.08] to-[#9B5CFF]/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.title + milestone.year}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 text-center backdrop-blur-xl sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B5CFF]">
            Still Growing
          </p>

          <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
            Every milestone has shaped the developer I am becoming.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            I'm continuing to deepen my full-stack development skills while
            exploring intelligent applications, IoT and systems that connect
            software with the real world.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

interface MilestoneCardProps {
  milestone: (typeof milestones)[number];
  index: number;
}

const MilestoneCard = ({
  milestone,
  index,
}: MilestoneCardProps) => {
  const Icon = milestone.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -35 : 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
      }}
      className="relative md:grid md:grid-cols-2 md:gap-12"
    >
      {/* Timeline marker */}
      <div className="absolute left-[6px] top-8 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-[#FF2B87]/40 bg-[#07050A] md:left-1/2 md:-translate-x-1/2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF2B87] shadow-[0_0_12px_rgba(255,43,135,0.8)]" />
      </div>

      {/* Left side */}
      <div
        className={`pl-16 md:pl-0 ${
          isLeft
            ? "md:col-start-1 md:text-right"
            : "md:col-start-2 md:row-start-1"
        }`}
      >
        <div
          className={`rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#FF2B87]/20 sm:p-8 ${
            isLeft ? "md:ml-auto" : ""
          }`}
        >
          <div
            className={`flex items-start gap-5 ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                milestone.accent === "pink"
                  ? "border-[#FF2B87]/25 bg-[#FF2B87]/[0.05] text-[#FF2B87]"
                  : "border-[#9B5CFF]/25 bg-[#9B5CFF]/[0.05] text-[#9B5CFF]"
              }`}
            >
              <Icon size={21} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  milestone.accent === "pink"
                    ? "text-[#FF2B87]"
                    : "text-[#9B5CFF]"
                }`}
              >
                {milestone.type}
              </p>

              <p className="mt-2 text-sm font-medium text-white/30">
                {milestone.year}
              </p>
            </div>
          </div>

          <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em]">
            {milestone.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-white/45">
            {milestone.organization}
          </p>

          <p className="mt-5 text-sm leading-7 text-white/40">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Empty opposite side */}
      <div className="hidden md:block" />
    </motion.div>
  );
};

export default Experience;