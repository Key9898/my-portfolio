import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="relative px-6 pb-24 sm:px-10 sm:pb-32 lg:static lg:px-8 lg:py-32 lg:pt-0">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
          Get in touch
        </h2>
        <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-400">
          Ready to start your next project or have a complex problem to solve? I'm here to help turn
          your vision into a digital reality. Let's start a conversation.
        </p>
        <dl className="mt-10 space-y-4 text-base/7 text-slate-700 dark:text-gray-300">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-7 w-6 text-slate-500 dark:text-gray-400"
              />
            </dt>
            <dd>Bangkok, Thailand</dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <PhoneIcon aria-hidden="true" className="h-7 w-6 text-slate-500 dark:text-gray-400" />
            </dt>
            <dd>
              <a
                href="tel:+66943018336"
                className="transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                +66 94-301-8336
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-slate-500 dark:text-gray-400"
              />
            </dt>
            <dd>
              <a
                href="mailto:key.w.aung.dev@gmail.com?subject=Contact from Portfolio"
                className="transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                key.w.aung.dev@gmail.com
              </a>
            </dd>
          </div>
        </dl>

        {/* Social Connectivity */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
            Follow on Social
          </h3>
          <div className="mt-4 flex gap-x-6">
            <a
              href="https://linkedin.com/in/key-wunna-aung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-all hover:scale-110 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-500"
              title="Connect on LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/Key9898"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-all hover:scale-110 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-500"
              title="Follow on GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
