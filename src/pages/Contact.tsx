import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07050A] py-28 text-white md:py-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#FF2B87]/10 blur-[160px]" />

      <div className="pointer-events-none absolute right-[-160px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#9B5CFF]/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF2B87]/[0.05] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mx-auto mb-7 h-[3px] w-20 rounded-full bg-[#FF2B87] shadow-[0_0_18px_rgba(255,43,135,0.65)]" />

          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2B87]">
              Contact
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Let's Build Something
              <span className="block text-white/40">
                Together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Have a project, an idea, or an opportunity? Tell me about it and
              let's create something meaningful.
            </p>
          </div>
        </motion.div>

        {/* Contact content */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9 lg:p-10"
          >
            {/* Decorative FT */}
            <div className="pointer-events-none absolute -right-10 -top-10 select-none text-[150px] font-black tracking-[-0.12em] text-[#FF2B87]/[0.04]">
              FT
            </div>

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2B87]">
                Get In Touch
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Let's talk about your next project.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/40 sm:text-base">
                Whether you need a website, web application, e-commerce
                solution, backend integration, or help improving an existing
                project, I'd be happy to hear from you.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-6">
                <ContactInfo
                  icon={<Mail size={20} />}
                  label="Email"
                  value="faniyitimi@gmail.com"
                  href="mailto:faniyitimi@gmail.com"
                />

                <ContactInfo
                  icon={<Phone size={20} />}
                  label="Phone"
                  value="+234 80 208 97107"
                  href="tel:+234 80 208 97107"
                />

                <ContactInfo
                  icon={<MapPin size={20} />}
                  label="Location"
                  value="Nigeria"
                />
              </div>

              {/* Social links */}
              <div className="mt-10 border-t border-white/[0.07] pt-7">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/25">
                  Connect With Me
                </p>

                <div className="flex gap-3">
                  <SocialLink
                    href="https://github.com/Pharniyi"
                    label="GitHub"
                    icon={<FaGithub size={18} />}
                  />

                  <SocialLink
                    href="https://linkedin.com/in/timilehin-faniyi"
                    label="LinkedIn"
                    icon={<FaLinkedin size={18} />}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9 lg:p-10"
          >
            {/* Top glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-[#FF2B87]/10 blur-[90px]" />

            <form
              className="relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <InputField
                  label="Your Name"
                  type="text"
                  placeholder="Enter your name"
                />

                <InputField
                  label="Your Email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mt-6">
                <InputField
                  label="Subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/40"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#FF2B87]/50 focus:bg-[#FF2B87]/[0.02] focus:shadow-[0_0_25px_rgba(255,43,135,0.06)]"
                />
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF2B87] px-6 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,43,135,0.3)]"
              >
                Send Message

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#FF2B87]/25 bg-[#FF2B87]/[0.05]">
              <span className="text-sm font-black tracking-[-0.08em]">
                <span className="text-[#FF2B87]">F</span>
                <span className="text-[#9B5CFF]">T</span>
              </span>
            </span>

            <span className="text-sm text-white/30">
              Timilehin Faniyi
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-white/20">
            Software Developer &amp; Computer Engineer
          </p>
        </motion.div>

      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfo = ({
  icon,
  label,
  value,
  href,
}: ContactInfoProps) => {
  const content = (
    <div className="group flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#FF2B87] transition duration-300 group-hover:border-[#FF2B87]/30 group-hover:bg-[#FF2B87]/[0.05]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/25">
          {label}
        </p>

        <p className="mt-1 text-sm text-white/65 transition group-hover:text-white">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
};

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialLink = ({
  href,
  label,
  icon,
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition duration-300 hover:border-[#FF2B87]/35 hover:bg-[#FF2B87]/[0.05] hover:text-[#FF2B87]"
    >
      {icon}
    </a>
  );
};

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField = ({
  label,
  type,
  placeholder,
}: InputFieldProps) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#FF2B87]/50 focus:bg-[#FF2B87]/[0.02] focus:shadow-[0_0_25px_rgba(255,43,135,0.06)]"
      />
    </div>
  );
};

export default Contact;