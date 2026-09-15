import React from "react";
import {
  BrainCircuit,
  Cpu,
  Radio,
  Camera,
  Activity,
  Workflow,
  Sparkles,
  ArrowUpRight,
  Zap,
  Database,
  Wifi,
  Bot,
} from "lucide-react";

const aiSkills = [
  {
    icon: Bot,
    title: "AI API Integration",
    description:
      "Connecting applications to AI services and APIs to introduce intelligent capabilities into modern software products.",
    tags: ["API", "AI", "Integration"],
  },
  {
    icon: Workflow,
    title: "AI-assisted Workflows",
    description:
      "Using AI to improve productivity, automate repetitive processes and support smarter software workflows.",
    tags: ["Automation", "AI", "Productivity"],
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description:
      "Designing structured prompts and instructions to improve the quality, consistency and usefulness of AI-generated results.",
    tags: ["LLMs", "Prompts", "Optimization"],
  },
];

const iotSkills = [
  {
    icon: Cpu,
    title: "ESP32",
    description:
      "Developing embedded systems with ESP32 microcontrollers for connected and sensor-driven applications.",
  },
  {
    icon: Radio,
    title: "Sensors",
    description:
      "Working with sensors to capture system data for monitoring and automated decision-making.",
  },
  {
    icon: Camera,
    title: "Camera Systems",
    description:
      "Integrating camera modules into connected systems for image capture and monitoring applications.",
  },
  {
    icon: Cpu,
    title: "Hardware / Software Integration",
    description:
      "Connecting physical hardware with software applications to create complete end-to-end systems.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Processing and displaying live system data through connected dashboards and monitoring interfaces.",
  },
];

const technologies = [
  "ESP32",
  "OV2640 Camera",
  "Ultrasonic Sensors",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
];

const AIoT = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08050D] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#9B5CFF]/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#FF2B87]/10 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[30%] h-[350px] w-[350px] rounded-full bg-[#9B5CFF]/10 blur-[130px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {/* =========================================
            HERO
        ========================================= */}
        <section className="mb-32">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#9B5CFF]" />

            <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/50">
              04 / 07
            </span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-[#B984FF]">
                <Zap size={15} />
                Intelligent Systems
              </p>

              <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[100px]">
                AI
                <span className="bg-gradient-to-r from-[#9B5CFF] to-[#FF2B87] bg-clip-text text-transparent">
                  {" "}
                  /{" "}
                </span>
                IoT
              </h1>

              <h2 className="mt-8 max-w-2xl text-2xl font-medium leading-tight text-white/90 sm:text-3xl">
                Building intelligent systems beyond the screen.
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-lg text-base leading-8 text-white/55">
                I explore the intersection of software, artificial
                intelligence and connected hardware—integrating APIs, sensors,
                cameras and embedded systems to create practical, real-world
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            AI SECTION
        ========================================= */}
        <section className="mb-32">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#9B5CFF]">
                01 / Intelligence
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Artificial Intelligence
              </h2>
            </div>

            <BrainCircuit
              className="hidden text-[#9B5CFF]/60 sm:block"
              size={42}
              strokeWidth={1}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {aiSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#9B5CFF]/40 hover:bg-white/[0.055]"
                >
                  {/* Card glow */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#9B5CFF]/10 blur-[70px] transition-all duration-500 group-hover:bg-[#9B5CFF]/20" />

                  <div className="relative">
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#9B5CFF]/20 bg-[#9B5CFF]/10 text-[#B984FF]">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>

                      <span className="text-xs text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-4 text-xl font-medium">
                      {skill.title}
                    </h3>

                    <p className="min-h-[120px] text-sm leading-7 text-white/45">
                      {skill.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================================
            IoT SECTION
        ========================================= */}
        <section className="mb-32">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#FF2B87]">
                02 / Connected Systems
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Internet of Things
              </h2>
            </div>

            <Wifi
              className="hidden text-[#FF2B87]/60 sm:block"
              size={42}
              strokeWidth={1}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {iotSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF2B87]/35"
                >
                  <div className="absolute -bottom-20 -right-20 h-36 w-36 rounded-full bg-[#FF2B87]/10 blur-[70px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon
                        size={24}
                        strokeWidth={1.4}
                        className="text-[#FF6BAA]"
                      />

                      <span className="text-xs text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-medium leading-tight">
                      {skill.title}
                    </h3>

                    <p className="text-sm leading-6 text-white/40">
                      {skill.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================================
            FEATURED PROJECT
        ========================================= */}
        <section className="mb-32">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#B984FF]">
              03 / Featured System
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Smart Traffic Management
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035]">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B5CFF]/10 blur-[150px]" />

            <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Project information */}
              <div className="border-b border-white/[0.08] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9B5CFF]/20 bg-[#9B5CFF]/10 text-[#B984FF]">
                  <Cpu size={25} strokeWidth={1.4} />
                </div>

                <h3 className="max-w-md text-3xl font-medium leading-tight">
                  Smart Traffic Management & Speed Violation Detection System
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                  An IoT-based traffic management system designed to monitor
                  traffic flow, detect speeding vehicles and capture violation
                  data for further analysis.
                </p>

                <div className="mt-8">
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-white/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com/Pharniyi/smart_traffic_management_and_speed_violation_detection_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#B984FF]"
                >
                  View Project
                  <ArrowUpRight size={17} />
                </a>
              </div>

              {/* Architecture */}
              <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden p-8 sm:p-12">
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(155,92,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>

                <div className="relative w-full max-w-xl">
                  {/* Connection line */}
                  <div className="absolute left-1/2 top-16 h-[300px] w-px -translate-x-1/2 bg-gradient-to-b from-[#9B5CFF] via-[#FF2B87] to-transparent opacity-50" />

                  {/* Top row */}
                  <div className="grid grid-cols-2 gap-5">
                    <ArchitectureNode
                      icon={<Camera size={21} />}
                      title="Camera"
                      subtitle="OV2640"
                    />

                    <ArchitectureNode
                      icon={<Activity size={21} />}
                      title="Sensors"
                      subtitle="Ultrasonic"
                    />
                  </div>

                  {/* ESP32 */}
                  <div className="relative z-10 mx-auto my-12 flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-[#9B5CFF]/40 bg-[#100B19]/90 shadow-[0_0_60px_rgba(155,92,255,0.18)] backdrop-blur-xl">
                    <Cpu
                      size={28}
                      className="mb-2 text-[#B984FF]"
                      strokeWidth={1.3}
                    />

                    <span className="text-xs font-medium">ESP32</span>

                    <span className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                      Controller
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="grid grid-cols-2 gap-5">
                    <ArchitectureNode
                      icon={<Database size={21} />}
                      title="Database"
                      subtitle="MongoDB"
                    />

                    <ArchitectureNode
                      icon={<Activity size={21} />}
                      title="Dashboard"
                      subtitle="Real-time"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================= */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-7 py-20 text-center sm:px-12">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B5CFF]/10 blur-[100px]" />

          <div className="relative">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B984FF]">
              Beyond the interface
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              From intelligence to{" "}
              <span className="bg-gradient-to-r from-[#9B5CFF] to-[#FF2B87] bg-clip-text text-transparent">
                interaction.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40">
              Exploring how AI, hardware and software can work together to
              solve meaningful problems.
            </p>

            <a
              href="/projects"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-[#9B5CFF]/40 hover:bg-[#9B5CFF]/10"
            >
              View My Projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

/* =========================================
   ARCHITECTURE NODE
========================================= */

interface ArchitectureNodeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ArchitectureNode = ({
  icon,
  title,
  subtitle,
}: ArchitectureNodeProps) => {
  return (
    <div className="relative z-10 rounded-2xl border border-white/[0.08] bg-[#0D0912]/90 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#9B5CFF]/30">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[#B984FF]">
        {icon}
      </div>

      <p className="text-sm font-medium">{title}</p>

      <p className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
        {subtitle}
      </p>
    </div>
  );
};

export default AIoT;