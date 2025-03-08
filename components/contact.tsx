"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-slate-50/50 dark:bg-slate-900/50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="neumorphic-glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="neumorphic-card rounded-2xl p-6 text-center"
              >
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  hello@example.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="neumorphic-card rounded-2xl p-6 text-center"
              >
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                <a
                  href="tel:+11234567890"
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="neumorphic-card rounded-2xl p-6 text-center"
              >
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Location</h3>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  San Francisco, CA
                </a>
              </motion.div>
            </div>

            {/* Social media section */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <SocialButton icon={<Github />} href="https://github.com" label="GitHub" />
                <SocialButton icon={<Linkedin />} href="https://linkedin.com" label="LinkedIn" />
                <SocialButton icon={<Twitter />} href="https://twitter.com" label="Twitter" />
                <SocialButton icon={<Instagram />} href="https://instagram.com" label="Instagram" />
              </div>
            </motion.div>

            {/* Availability indicator */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-green-800 dark:text-green-400">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialButton({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode
  href: string
  label: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="neumorphic-button inline-flex items-center justify-center w-12 h-12 rounded-full text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
        aria-label={label}
      >
        {icon}
      </Link>
    </motion.div>
  )
}

