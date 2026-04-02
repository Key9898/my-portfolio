import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { APP_EVENTS, dispatchAppEvent } from '../../utils/events'
import { trackContactFormSubmit } from '../../utils/analytics'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formEl = formRef.current
    if (!formEl) {
      setIsSubmitting(false)
      return
    }

    const fd = new FormData(formEl)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const message = String(fd.get('message') || '').trim()

    if (!name || !email || !message) {
      dispatchAppEvent(APP_EVENTS.NOTIFY_SHOW, 'Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    // Optionally add custom subject for Formspree emails
    fd.append('_subject', `Contact from ${name}`)

    try {
      const response = await fetch('https://formspree.io/f/mldoqwrq', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setIsSubmitted(true)
        trackContactFormSubmit()
        formEl.reset()
      } else {
        dispatchAppEvent(APP_EVENTS.NOTIFY_SHOW, 'Error sending message. Please try again.')
      }
    } catch {
      dispatchAppEvent(APP_EVENTS.NOTIFY_SHOW, 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-6 py-0 sm:px-10 sm:py-0 lg:px-8 lg:py-0">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="group relative mx-auto max-w-xl"
      >
        {/* Premium Background Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 to-indigo-500 opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200" />

        <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-8 lg:mr-0 lg:max-w-lg dark:bg-slate-900/90 dark:ring-white/10 dark:backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                ref={formRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
              >
                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-semibold text-slate-900 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      autoComplete="given-name"
                      className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-slate-900 shadow-sm outline-1 -outline-offset-1 outline-slate-200 transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-sky-500/10 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-slate-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="youremail@example.com"
                      autoComplete="email"
                      className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-slate-900 shadow-sm outline-1 -outline-offset-1 outline-slate-200 transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-sky-500/10 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-slate-900 dark:text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Please tell me more about your project or inquiry…"
                      rows={4}
                      className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-slate-900 shadow-sm outline-1 -outline-offset-1 outline-slate-200 transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-sky-500/10 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                      defaultValue={''}
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-4 flex justify-end sm:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-sky-800 px-8 py-3 text-center text-sm font-semibold text-white shadow-xl ring-1 ring-sky-700/50 transition-[background-color,transform,shadow] duration-300 hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      'Send message'
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-12 text-center"
              >
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
                  >
                    <CheckCircleIcon className="h-20 w-20 text-sky-500" />
                  </motion.div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-slate-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <div className="mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500"
                  >
                    ← Send another message
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
