import { GiTeamIdea } from 'react-icons/gi'
const Logo = '/Logo/logo.svg'
import { type Post, type ButtonData } from '../../data/projects'
import { trackProjectClick } from '../../utils/analytics'

interface ShowcaseCardProps {
  post: Post
}

export default function ShowcaseCard({ post }: ShowcaseCardProps) {
  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative w-full lg:w-1/2 lg:shrink-0">
        {/* Mobile Image */}
        <img
          alt={post.imageAlt}
          src={post.image.mobile}
          loading="lazy"
          decoding="async"
          className="block aspect-video h-auto w-full rounded-lg bg-slate-200 object-cover shadow-xl sm:hidden dark:bg-gray-800"
        />
        {/* Tablet Image */}
        <img
          alt={post.imageAlt}
          src={post.image.tablet}
          loading="lazy"
          decoding="async"
          className="hidden aspect-video h-auto w-full rounded-lg bg-slate-200 object-cover shadow-xl sm:block lg:hidden dark:bg-gray-800"
        />
        {/* Desktop Image */}
        <img
          alt={post.imageAlt}
          src={post.image.desktop}
          loading="lazy"
          decoding="async"
          className="hidden aspect-video size-full rounded-lg bg-slate-200 object-cover shadow-xl lg:block dark:bg-gray-800"
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow-xl ring-1 ring-slate-200 dark:ring-white/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-base">
          <time dateTime={post.date} className="text-slate-500 dark:text-gray-400">
            {post.date}
          </time>
          <span className="relative z-10 rounded-lg bg-sky-100 px-3 py-1.5 text-base font-medium text-slate-600 shadow-xl hover:bg-sky-200 dark:bg-sky-200/20 dark:text-gray-300 dark:hover:bg-sky-800">
            {post.category.title}
          </span>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
            <span className="pointer-events-none absolute inset-0" />
            {post.title}
          </h3>
          <p className="mt-5 text-lg/6 text-slate-500 dark:text-gray-400">{post.description}</p>

          {/* Buttons */}
          {Array.isArray(post.button) ? (
            <div className="mt-6 flex gap-3">
              {post.button.map((btn, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => {
                    trackProjectClick(post.title)
                    const url = btn.url.startsWith('http') ? btn.url : `https://${btn.url}`
                    window.open(url, '_blank')
                  }}
                  className={
                    btn.label.toLowerCase().includes('github')
                      ? 'inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 shadow-xl ring-1 ring-slate-400 transition-colors ring-inset hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:ring-slate-300 dark:hover:bg-white/20 dark:hover:text-white'
                      : 'inline-flex items-center rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-sky-700'
                  }
                >
                  {btn.label}
                </button>
              ))}
            </div>
          ) : post.button && !Array.isArray(post.button) ? (
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  trackProjectClick(post.title)
                  const raw = (post.button as ButtonData).url
                  const url = raw.startsWith('http') ? raw : `https://${raw}`
                  window.open(url, '_blank')
                }}
                className="inline-flex items-center rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-sky-700"
              >
                {post.button.label}
              </button>
            </div>
          ) : null}
        </div>
        {/* Author section */}
        <div className="mt-6 flex border-t border-slate-200 pt-6 dark:border-white/10">
          <div className="relative flex items-center gap-x-4">
            {post.developer.name === 'Team Collabration' ? (
              <div className="flex size-12 items-center justify-center rounded-lg bg-slate-300 text-sky-600 dark:bg-gray-600">
                <GiTeamIdea aria-hidden="true" className="size-9" />
                <span className="sr-only">Team Collabration</span>
              </div>
            ) : post.developer.name.toLowerCase().includes('wunna') ? (
              <img
                alt="Logo"
                src={Logo}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="size-12 rounded-lg bg-slate-200 dark:bg-gray-600"
              />
            ) : (
              <div className="flex size-10 items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-800 dark:bg-gray-800 dark:text-white">
                {post.developer.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="text-base">
              <p className="font-semibold text-slate-900 dark:text-white">
                <span className="absolute inset-0" />
                {post.developer.name}
              </p>
              <p className="text-slate-500 dark:text-gray-400">{post.developer.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
