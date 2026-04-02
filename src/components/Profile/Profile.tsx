import { useState, useCallback } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { APP_EVENTS, dispatchAppEvent } from '../../utils/events'
import { useEvent } from '../../hooks/useEvent'
import { motion, AnimatePresence } from 'framer-motion'

const Resume = '/Resume/wunna-resume.pdf'
const ProfileImage = '/Profile/profile_img.jpg'

export default function Profile() {
  const [open, setOpen] = useState(false)

  const openHandler = useCallback(() => {
    setOpen(true)
    dispatchAppEvent(APP_EVENTS.NAV_SET_ACTIVE_SECTION, 'profile')
  }, [])
  useEvent(APP_EVENTS.PROFILE_OPEN, openHandler)

  return (
    <div>
      {/* Right-side vertical tab trigger (global) */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05, x: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setOpen(true)
          dispatchAppEvent(APP_EVENTS.NAV_SET_ACTIVE_SECTION, 'profile')
        }}
        className="fixed top-1/2 right-0 z-40 hidden h-40 w-12 -translate-y-1/2 flex-col items-center justify-center gap-y-4 rounded-l-2xl bg-slate-900/10 text-slate-800 inset-ring inset-ring-slate-900/10 backdrop-blur-md transition-shadow duration-200 hover:bg-slate-900/20 md:flex dark:bg-white/10 dark:text-white dark:inset-ring-white/10 dark:hover:bg-white/20"
        aria-label="Open profile drawer"
      >
        <UserIcon className="size-6 text-sky-600 dark:text-sky-400" />
        <span className="rotate-180 text-[10px] font-bold tracking-[0.25em] uppercase [writing-mode:vertical-lr]">
          Profile
        </span>
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <Dialog static open={open} onClose={setOpen} className="relative z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm dark:bg-slate-950/40"
            />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      className="relative flex h-full flex-col overflow-y-auto bg-white shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-slate-200 dark:bg-gray-800 dark:after:bg-white/10"
                    >
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between border-b border-slate-100 pb-4 dark:border-white/5">
                          <h2
                            id="slide-over-heading"
                            className="text-base font-semibold text-slate-900 dark:text-white"
                          >
                            Profile Detail
                          </h2>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              onClick={() => {
                                setOpen(false)
                                dispatchAppEvent(APP_EVENTS.NAV_SYNC_ACTIVE_SECTION)
                                setTimeout(() => {
                                  document.body.style.overflow = ''
                                  document.documentElement.style.overflow = ''
                                }, 0)
                              }}
                              className="relative rounded-lg text-slate-500 shadow-xl hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Main */}
                      <div className="flex-1">
                        <div className="pb-1 sm:pb-6">
                          <div>
                            <div className="relative h-52 overflow-hidden sm:h-72 lg:h-[17.5rem]">
                              <motion.img
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                alt="Wunna Aung (Key) - Full Stack Developer"
                                src={ProfileImage}
                                loading="lazy"
                                decoding="async"
                                fetchPriority="low"
                                className="absolute size-full object-cover object-top"
                              />
                            </div>
                            <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sm:flex-1"
                              >
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                      Wunna Aung (Key)
                                    </h3>
                                    <span className="mt-1.5 ml-2.5 inline-block size-3 shrink-0 rounded-full bg-green-400">
                                      <span className="sr-only">Online</span>
                                    </span>
                                  </div>
                                  <p className="text-base text-slate-500 dark:text-gray-400">
                                    key.w.aung.dev@gmail.com
                                  </p>
                                </div>
                                <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                  <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    onClick={() => {
                                      const subject = encodeURIComponent(
                                        'Hello from your portfolio'
                                      )
                                      const body = encodeURIComponent(
                                        'Hi Wunna, I just reached out from your site.'
                                      )
                                      window.location.href = `mailto:key.w.aung.dev@gmail.com?subject=${subject}&body=${body}`
                                    }}
                                    className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-xl ring-1 ring-sky-700/50 transition-all hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:flex-1"
                                  >
                                    Message
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    onClick={() => {
                                      window.location.href = `tel:+66943018336`
                                    }}
                                    className="inline-flex w-full flex-1 items-center justify-center rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium font-semibold text-slate-700 shadow-xl ring-1 ring-slate-200 transition-all hover:bg-slate-200 dark:bg-white/10 dark:text-gray-100 dark:ring-white/10 dark:hover:bg-white/20"
                                  >
                                    Call
                                  </motion.button>
                                  <div className="ml-3 inline-flex sm:ml-0">
                                    <Menu as="div" className="relative inline-block text-left">
                                      <MenuButton className="relative inline-flex items-center rounded-lg bg-slate-100 p-2 text-slate-700 shadow-xl inset-ring inset-ring-slate-200 hover:bg-slate-200 dark:bg-white/10 dark:text-gray-100 dark:inset-ring-white/5 dark:hover:bg-white/20">
                                        <span className="absolute -inset-1" />
                                        <span className="sr-only">Open options menu</span>
                                        <EllipsisVerticalIcon
                                          aria-hidden="true"
                                          className="size-5"
                                        />
                                      </MenuButton>
                                      <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-xl outline-1 -outline-offset-1 outline-slate-200 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:outline-white/10"
                                      >
                                        <div className="py-1">
                                          <MenuItem>
                                            <button
                                              type="button"
                                              onClick={() => {
                                                window.open(Resume, '_blank', 'noopener,noreferrer')
                                                const link = document.createElement('a')
                                                link.href = Resume
                                                link.download = 'Wunna_Aung_CV.pdf'
                                                document.body.appendChild(link)
                                                link.click()
                                                document.body.removeChild(link)
                                              }}
                                              className="block px-4 py-2 text-sm text-slate-700 data-focus:bg-slate-50 data-focus:text-slate-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white"
                                            >
                                              Download Resume
                                            </button>
                                          </MenuItem>
                                          <MenuItem>
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.preventDefault()
                                                const url = `${window.location.origin}/#profile`
                                                const copy = async () => {
                                                  try {
                                                    if (navigator.clipboard?.writeText) {
                                                      await navigator.clipboard.writeText(url)
                                                    } else {
                                                      const input = document.createElement('input')
                                                      input.value = url
                                                      document.body.appendChild(input)
                                                      input.select()
                                                      document.execCommand('copy')
                                                      document.body.removeChild(input)
                                                    }
                                                    dispatchAppEvent(
                                                      APP_EVENTS.NOTIFY_SHOW,
                                                      'Profile link copied successfully!'
                                                    )
                                                  } catch {
                                                    dispatchAppEvent(
                                                      APP_EVENTS.NOTIFY_SHOW,
                                                      'Copy failed. Try again.'
                                                    )
                                                  }
                                                }
                                                copy()
                                              }}
                                              className="block px-4 py-2 text-sm text-slate-700 data-focus:bg-slate-50 data-focus:text-slate-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white"
                                            >
                                              Copy profile link
                                            </button>
                                          </MenuItem>
                                        </div>
                                      </MenuItems>
                                    </Menu>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                          <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                                Bio
                              </dt>
                              <dd className="mt-1 text-lg/6 text-slate-900 sm:col-span-2 dark:text-white">
                                <p className="text-pretty">
                                  A Web Engineer based in Bangkok with a meticulous precision rooted
                                  in my professional background in Quality Assurance. I specialize
                                  in developing intuitive and high-performance applications, from
                                  custom WordPress platforms to advanced web systems using React and
                                  TypeScript. I am dedicated to bridging the gap between technical
                                  complexity and seamless user experience, with a focus on building
                                  robust digital products that stand the test of time.
                                </p>
                              </dd>
                            </motion.div>

                            {/* Tech-Stack Snippet */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.45 }}
                            >
                              <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                                Specialized In
                              </dt>
                              <dd className="mt-3 flex flex-wrap gap-2 sm:col-span-2">
                                {['React', 'TypeScript', 'Vite', 'Tailwind CSS'].map((stack) => (
                                  <span
                                    key={stack}
                                    className="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-700/10 ring-inset dark:bg-sky-950/30 dark:text-sky-400 dark:ring-sky-400/20"
                                  >
                                    {stack}
                                  </span>
                                ))}
                              </dd>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                                Location
                              </dt>
                              <dd className="mt-1 text-base text-slate-900 sm:col-span-2 dark:text-white">
                                Bangkok, Thailand
                              </dd>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                                Website
                              </dt>
                              <dd className="mt-1 text-base text-sky-600 transition-colors hover:text-sky-500 sm:col-span-2 dark:text-sky-400 dark:hover:text-sky-300">
                                <a
                                  href="https://my-portfolio-c6y6.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  my-portfolio-c6y6.vercel.app
                                </a>
                              </dd>
                            </motion.div>

                            {/* Social Links inside Drawer */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                              className="border-t border-slate-100 pt-6 dark:border-white/5"
                            >
                              <dt className="text-base font-medium tracking-wider text-slate-500 uppercase dark:text-gray-400">
                                Links
                              </dt>
                              <dd className="mt-4 flex gap-6">
                                <a
                                  href="https://linkedin.com/in/key-wunna-aung"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-400 transition-all hover:scale-110 hover:text-sky-600 dark:hover:text-sky-400"
                                >
                                  <FaLinkedin className="size-8" />
                                </a>
                                <a
                                  href="https://github.com/Key9898"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-400 transition-all hover:scale-110 hover:text-sky-600 dark:hover:text-sky-400"
                                >
                                  <FaGithub className="size-8" />
                                </a>
                              </dd>
                            </motion.div>
                          </dl>
                        </div>
                      </div>
                    </motion.div>
                  </DialogPanel>
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}
