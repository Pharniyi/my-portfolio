import { motion } from "framer-motion";
import {ArrowUpRight,ExternalLink} from "lucide-react";
import { FaGithub} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Smart Traffic Management",
    subtitle: "Speed Violation Detection System",
    description:
      "An intelligent traffic monitoring system that combines sensors, cameras and a web dashboard to monitor traffic flow and detect speed violations.",
    tags: [
      "React",
      "TypeScript",
      "ESP32",
      "MongoDB",
      "IoT",
    ],
    image: "/images/projects/smart-traffic.png",
    featured: true,
  },
  {
    number: "02",
    title: "HCV Fashion Hub",
    subtitle: "E-Commerce Platform",
    description:
      "A modern e-commerce platform designed to bring a long-established fashion business online with a clean and responsive shopping experience.",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    image: "/images/projects/hcv-fashion.png",
    featured: false,
  },
  {
    number: "03",
    title: "Quick Chat",
    subtitle: "MERN Chat Application",
    description:
      "A WhatsApp-inspired real-time chat application with authentication, messaging and media handling.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    image: "/images/projects/quick-chat.png",
    featured: false,
  },
  {
    number: "04",
    title: "OmniChat",
    subtitle: "AI-Assisted Business Application",
    description:
      "An interactive business assistant designed to support workflows across recruitment, employee management, accounting and invoicing.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI",
    ],
    image: "/images/projects/omni-chat.png",
    featured: false,
  },
  {
    number: "05",
    title: "QueueEase",
    subtitle: "Queue Management Platform",
    description:
      "A digital queue management concept focused on simplifying customer waiting experiences and improving service flow.",
    tags: [
      "React",
      "TypeScript",
      "UI/UX",
    ],
    image: "/images/projects/queue-ease.png",
    featured: false,
  },
  {
    number: "06",
    title: "3Seven Fashion",
    subtitle: "Fashion Website",
    description:
      "A responsive fashion-focused web experience built to showcase products through a modern interface.",
    tags: [
      "Html",
      "JavaScript",
      "CSS",
    ],
    image: "/images/projects/3seven.png",
    featured: false,
  },
];

const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07050A] text-white md:py-5"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-200px] top-[15%] h-[550px] w-[550px] rounded-full bg-[#ff2b87]/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[40%] h-[500px] w-[500px] rounded-full bg-[#9b5cff]/[0.06] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mx-auto mb-7 h-[3px] w-20 rounded-full bg-[#ff2b87] shadow-[0_0_18px_rgba(255,43,135,0.45)]" />

          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff2b87]">
              Projects
            </p>

            <h2 className="text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Selected Work
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              A collection of applications and systems I've designed and
              built across web development, full-stack development and
              intelligent technology.
            </p>
          </div>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1fr_1.05fr]">

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium tracking-[0.18em] text-[#ff2b87]">
                  FEATURED PROJECT
                </span>

                <span className="text-sm text-white/20">
                  {featuredProject.number}
                </span>
              </div>

              <h3 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {featuredProject.title}
                <span className="block text-white/40">
                  {featuredProject.subtitle}
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/50">
                {featuredProject.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://smartrafficmanagement.vercel.app/"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#ff2b87] px-5 py-3 text-sm font-bold text-[#07050A] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(255,43,135,0.35)]"
                >
                  View Project

                  <ExternalLink
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>

                <a
                  href="https://github.com/Pharniyi/smart_traffic_management_and_speed_violation_detection_system"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff2b87]/40 hover:bg-[#ff2b87]/[0.05]"
                >
                  GitHub
                  <FaGithub size={16} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[350px] overflow-hidden lg:min-h-[560px]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B0A] via-[#080B0A]/20 to-transparent lg:w-2/3" />

              {/* Number */}
              <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
                <span className="text-xs uppercase tracking-[0.18em] text-white/50">
                  Case Study / 01
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center gap-5"
        >

        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
      className="group overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2b87]/30 hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0D1512]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent opacity-80" />

        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/55 backdrop-blur-md">
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b5cff]">
          {project.subtitle}
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em]">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/40">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-white/45"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-[#ff2b87]"
          >
            View Project
            <ArrowUpRight size={16} />
          </a>

          <a
            href=""
            aria-label={`View ${project.title} on GitHub`}
            className="text-white/30 transition hover:text-[#ff2b87]"
          >
            <FaGithub size={19} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;