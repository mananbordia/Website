"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const sections = ["about", "skills", "projects", "contact"]
        const scrollPosition = window.scrollY + window.innerHeight / 3

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { top, bottom } = element.getBoundingClientRect()
            const topOffset = top + window.scrollY
            const bottomOffset = bottom + window.scrollY

            if (scrollPosition >= topOffset && scrollPosition <= bottomOffset) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      // Initial check
      handleScroll()

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", (!isDarkMode).toString())
      document.documentElement.classList.toggle("dark")
    }
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <NavLink href="#about" activeSection={activeSection}>
                About
              </NavLink>
              <NavLink href="#skills" activeSection={activeSection}>
                Skills
              </NavLink>
              <NavLink href="#projects" activeSection={activeSection}>
                Projects
              </NavLink>
              <NavLink href="#contact" activeSection={activeSection}>
                Contact
              </NavLink>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="mr-2 rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl neumorphic-card">
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)} activeSection={activeSection}>
                About
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsOpen(false)} activeSection={activeSection}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsOpen(false)} activeSection={activeSection}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} activeSection={activeSection}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({
  href,
  children,
  activeSection,
}: { href: string; children: React.ReactNode; activeSection: string }) {
  const sectionId = href.replace("#", "")
  const isActive = sectionId === activeSection

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get navbar height for offset
      const navbar = document.querySelector("nav")
      const navbarHeight = navbar ? navbar.offsetHeight : 0

      // Calculate position with offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20

      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className={`relative text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium transition-colors ${isActive ? "text-primary dark:text-primary" : ""}`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
  activeSection,
}: { href: string; onClick: () => void; children: React.ReactNode; activeSection: string }) {
  const sectionId = href.replace("#", "")
  const isActive = sectionId === activeSection

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Close mobile menu
    onClick()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get navbar height for offset
      const navbar = document.querySelector("nav")
      const navbarHeight = navbar ? navbar.offsetHeight : 0

      // Calculate position with offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20

      // Add a small delay to allow the mobile menu to close
      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }, 100)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className={`block py-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium transition-colors ${isActive ? "text-primary dark:text-primary" : ""}`}
    >
      {children}
      {isActive && <div className="absolute left-0 w-1 h-full bg-primary rounded-full" />}
    </Link>
  )
}

