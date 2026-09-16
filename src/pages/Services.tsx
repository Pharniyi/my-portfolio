import { motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  Server,
  PlugZap,
  Wrench,
  ShoppingBag,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern, secure and scalable websites and web applications tailored to your goals.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    description:
      "Developing responsive and interactive frontend experiences using modern technologies.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building reliable APIs, server-side applications and backend systems that power web products.",
  },
  {
    icon: PlugZap,
    title: "API Integration",
    description:
      "Connecting applications to APIs and external services to deliver complete and functional experiences.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    description:
      "Building modern online stores with intuitive product browsing and user-friendly shopping experiences.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Bug Fixes",
    description:
      "Improving existing websites, fixing issues and keeping applications stable and up to date.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Improving website performance, responsiveness and overall user experience.",
  },
   {
    icon: Code2,
    title: "Website Customization",
    description:
      "Customizing existing websites and applications to meet specific business or functionality requirements.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07050A] py-28 text-white md:py-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF2B87]/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-[#9B5CFF]/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute left-[-180px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#FF2B87]/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2B87]">
            My Services
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            What I Can Do For You
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#FF2B87] shadow-[0_0_18px_rgba(255,43,135,0.65)]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            From responsive interfaces to complete web applications, I build
            digital solutions focused on usability, performance and real-world
            results.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-7 py-7 backdrop-blur-md sm:flex-row sm:px-9"
        >
          <div>
            <p className="text-lg font-bold">
              Have a project in mind?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Let's turn your idea into something useful.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-[#FF2B87] px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,43,135,0.35)]"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
}

const ServiceCard = ({
  service,
  index,
}: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#FF2B87]/30 hover:bg-[#FF2B87]/[0.025] hover:shadow-[0_15px_50px_rgba(255,43,135,0.08)]"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#FF2B87]/10 blur-[45px] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF2B87]/20 bg-[#FF2B87]/[0.05] text-[#FF2B87] transition-all duration-300 group-hover:border-[#FF2B87]/50 group-hover:bg-[#FF2B87]/10 group-hover:shadow-[0_0_25px_rgba(255,43,135,0.15)]">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="relative text-lg font-bold tracking-[-0.02em]">
        {service.title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-white/40">
        {service.description}
      </p>

      {/* Bottom accent */}
      <div className="mt-6 h-px w-0 bg-[#FF2B87] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

export default Services;