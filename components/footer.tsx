"use client"

import { Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {currentYear} Manan Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center">
            Made with
            <motion.span
              className="inline-block mx-1 text-red-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
            by Manan
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

