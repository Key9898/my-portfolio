import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    setIsLoading(true)

    try {
      // To client (First, auto-reply)
      await emailjs.sendForm('service_467yox8', 'template_mqszqva', form.current, '8dJz8YYjPOszkBkuV')

      // To owner (Second, client's message)
      await emailjs.sendForm('service_467yox8', 'template_1dj9k18', form.current, '8dJz8YYjPOszkBkuV')

      alert('Message sent successfully!')
      form.current.reset()
    } catch (error: any) {
      console.error('FAILED...', error.text || error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

    return (
        <div id='Contact' className="relative isolate bg-slate-800">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-slate-800 ring-1 ring-white/10 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth={0} className="fill-slate-900" />
                                <svg x="100%" y={-1} className="overflow-visible fill-slate-800/20">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                            </svg>
                            <div
                                aria-hidden="true"
                                className="absolute top-[calc(100%-13rem)] -left-56 block transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                            >
                                <div
                                    className="clip-polygon-shape aspect-1155/678 w-288.75 bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                />

                            </div>
                        </div>
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Get in touch</h2>
                        <p className="mt-6 text-lg/8 text-slate-400">
                            Let's collaborate on your next web project! Whether you need a responsive design or modern React solutions, I'm here to help. Reach out—I'd love to bring your ideas to life.
                        </p>
                        <dl className="mt-10 space-y-4 text-base/7 text-slate-300">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    Bangkok, Thailand
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-slate-400" />
                                </dt>
                                <dd>
                                    <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                                        +66937704335
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-slate-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:hello@example.com" className="hover:text-white">
                                        key.w.aung.dev@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form ref={form} onSubmit={handleSubmit}
                    className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        {/* Divider */}
                        <div className="relative mb-12">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-slate-800 px-3 text-base font-semibold text-white">
                                    Reach Out
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                                    Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="user_name"
                                        name="user_name"
                                        placeholder='Your Name'
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-lg bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-slate-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="user_email"
                                        name="user_email"
                                        type="email"
                                        placeholder='Your Email'
                                        autoComplete="email"
                                        className="block w-full rounded-lg bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-slate-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Please write your message here...'
                                        rows={4}
                                        className="block w-full rounded-lg bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-slate-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let's talk
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}