import { useState, useCallback } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { APP_EVENTS, dispatchAppEvent } from '../../utils/events'
import { useEvent } from '../../hooks/useEvent'

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
      <button
        type="button"
        onClick={() => {
          setOpen(true)
          dispatchAppEvent(APP_EVENTS.NAV_SET_ACTIVE_SECTION, 'profile')
        }}
        className="fixed top-1/2 right-0 z-40 flex h-24 w-10 -translate-y-1/2 items-center justify-center rounded-l-md bg-slate-900/10 text-slate-800 inset-ring inset-ring-slate-900/10 transition-all duration-200 hover:bg-slate-900/20 dark:bg-white/10 dark:text-white dark:inset-ring-white/10 dark:hover:bg-white/20"
        aria-label="Open profile drawer"
      >
        <span className="origin-center -rotate-270 text-xs font-semibold tracking-wide">
          Profile
        </span>
      </button>

      {/* Drawer */}
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="relative flex h-full flex-col overflow-y-auto bg-white shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-slate-200 dark:bg-gray-800 dark:after:bg-white/10">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        id="slide-over-heading"
                        className="text-base font-semibold text-slate-900 dark:text-white"
                      >
                        Profile
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => {
                            setOpen(false)
                            dispatchAppEvent(APP_EVENTS.NAV_SYNC_ACTIVE_SECTION)
                            // Edge case: scroll stuck fix — overflow ကို အပြင်ဘက်ကနေလည်း reset
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
                  <div>
                    <div className="pb-1 sm:pb-6">
                      <div>
                        <div className="relative h-52 sm:h-72 lg:h-[17.5rem]">
                          <img
                            alt="Wunna Aung (Key) - Full Stack Developer"
                            src={ProfileImage}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className="absolute size-full object-cover object-top"
                          />
                        </div>
                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                          <div className="sm:flex-1">
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
                              <button
                                type="button"
                                onClick={() => {
                                  const subject = encodeURIComponent('Hello from your portfolio')
                                  const body = encodeURIComponent(
                                    'Hi Wunna, I just reached out from your site.'
                                  )
                                  window.location.href = `mailto:key.w.aung.dev@gmail.com?subject=${subject}&body=${body}`
                                }}
                                className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-xl hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:flex-1"
                              >
                                Message
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  window.location.href = `tel:+66943018336`
                                }}
                                className="inline-flex w-full flex-1 items-center justify-center rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 shadow-xl inset-ring inset-ring-slate-200 hover:bg-slate-200 dark:bg-white/10 dark:text-gray-100 dark:inset-ring-white/5 dark:hover:bg-white/20"
                              >
                                Call
                              </button>
                              <div className="ml-3 inline-flex sm:ml-0">
                                <Menu as="div" className="relative inline-block text-left">
                                  <MenuButton className="relative inline-flex items-center rounded-lg bg-slate-100 p-2 text-slate-700 shadow-xl inset-ring inset-ring-slate-200 hover:bg-slate-200 dark:bg-white/10 dark:text-gray-100 dark:inset-ring-white/5 dark:hover:bg-white/20">
                                    <span className="absolute -inset-1" />
                                    <span className="sr-only">Open options menu</span>
                                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
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
                                            // Open in new tab
                                            window.open(Resume, '_blank', 'noopener,noreferrer')
                                            // Force download
                                            const link = document.createElement('a')
                                            link.href = Resume
                                            link.download = 'Wunna_Aung_CV.pdf' // Filename to save as
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                      <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                        <div>
                          <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                            Bio
                          </dt>
                          <dd className="mt-1 text-lg/6 text-slate-900 sm:col-span-2 dark:text-white">
                            <p>
                              Frontend Developer based in Bangkok with a strong background in
                              Quality Assurance. I specialize in building clean, efficient, and
                              responsive user interfaces using React, TypeScript, and Tailwind CSS,
                              alongside extensive experience in WordPress development.
                            </p>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                            Location
                          </dt>
                          <dd className="mt-1 text-base text-slate-900 sm:col-span-2 dark:text-white">
                            Bangkok, Thailand
                          </dd>
                        </div>
                        <div>
                          <dt className="text-lg font-medium text-slate-500 sm:w-40 sm:shrink-0 dark:text-gray-400">
                            Website
                          </dt>
                          <dd className="mt-1 text-base text-slate-900 sm:col-span-2 dark:text-white">
                            https://mynewportfolio.com
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
