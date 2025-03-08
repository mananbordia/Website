"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion, useAnimationControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const controls = useAnimationControls()
  const [colorIndex, setColorIndex] = useState(0)

  // Colors for the text animation
  const colors = [
    "hsl(221.2, 83%, 53.3%)", // primary blue
    "hsl(262.1, 83%, 58.0%)", // purple
    "hsl(316.6, 73.3%, 52.5%)", // pink
    "hsl(349.7, 89.2%, 60.0%)", // red
    "hsl(32.1, 94.6%, 43.7%)", // orange
    "hsl(142.1, 76.2%, 36.3%)", // green
    "hsl(221.2, 83%, 53.3%)", // back to blue
  ]

  // Motion values for more complex animations
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateZ = useTransform(x, [-100, 100], [-5, 5])
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const filter = useTransform(
    x,
    [-100, 0, 100],
    [
      "drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.2))",
      "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
      "drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2))",
    ],
  )

  useEffect(() => {
    setMounted(true)

    // Start the color cycling animation
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % (colors.length - 1))
    }, 3000)

    // Start the floating animation
    controls.start({
      y: [0, -10, 0, 10, 0],
      x: [0, 5, 0, -5, 0],
      rotateZ: [0, 2, 0, -2, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    })

    return () => clearInterval(interval)
  }, [controls, colors.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      },
    },
  }

  // Don't render animations on server to prevent hydration issues
  if (!mounted) {
    return (
      <section className="py-20 md:py-32 flex flex-col items-center text-center">
        <div className="neumorphic-glass max-w-3xl mx-auto p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary">Manan</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
            A passionate full-stack developer creating beautiful, functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <motion.div
        className="neumorphic-glass max-w-3xl mx-auto p-8 md:p-12 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.div
              className="inline-block perspective-[1200px] relative"
              style={{ x, y, rotateZ, rotateX, filter }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                x.set((e.clientX - centerX) / 5)
                y.set((e.clientY - centerY) / 5)
              }}
              onMouseLeave={() => {
                x.set(0)
                y.set(0)
              }}
            >
              <motion.span
                className="relative inline-block"
                variants={nameVariants}
                animate={controls}
                style={{
                  color: colors[colorIndex],
                  textShadow: "0 0 15px rgba(0,0,0,0.2)",
                }}
                transition={{
                  color: { duration: 1.5, ease: "easeInOut" },
                }}
              >
                Manan
                <motion.div
                  className="absolute -z-10 inset-0 rounded-lg blur-xl"
                  style={{ backgroundColor: colors[colorIndex] }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </motion.span>
            </motion.div>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8" variants={itemVariants}>
            A passionate full-stack developer creating beautiful, functional web experiences
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" variants={itemVariants}>
            <Button asChild size="lg" className="rounded-full group overflow-hidden relative">
              <Link
                href="#projects"
                className="transition-all duration-300 group-hover:pr-7"
                onClick={(e) => {
                  e.preventDefault()
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    const navbar = document.querySelector("nav")
                    const navbarHeight = navbar ? navbar.offsetHeight : 0
                    const targetPosition =
                      projectsSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20

                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                View My Work
                <motion.span
                  className="ml-2 inline-flex items-center"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    const navbar = document.querySelector("nav")
                    const navbarHeight = navbar ? navbar.offsetHeight : 0
                    const targetPosition =
                      contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20

                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <motion.div className="flex justify-center space-x-4" variants={itemVariants}>
            <AnimatedSocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <AnimatedSocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <AnimatedSocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background animated elements */}
      <div className="absolute top-0 left-0 right-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: colors[(colorIndex + 1) % colors.length], opacity: 0.1 }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-60 right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: colors[(colorIndex + 2) % colors.length], opacity: 0.15 }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="neumorphic-button p-3 rounded-full text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

function AnimatedSocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="neumorphic-button p-3 rounded-full text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors inline-block"
        aria-label={label}
      >
        {icon}
      </Link>
    </motion.div>
  )
}

