import { motion } from 'framer-motion'
import { FaUser, FaUsers } from 'react-icons/fa'
import {
  SiWordpress,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiNodedotjs,
  SiPhp,
  SiCss3,
  SiElementor,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si'
import { type Post, type ButtonData } from '../../data/projects'
import { trackProjectClick } from '../../utils/analytics'

const ICON_MAP: Record<string, any> = {
  WordPress: SiWordpress,
  React: SiReact,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  Vite: SiVite,
  Firebase: SiFirebase,
  'Node.js': SiNodedotjs,
  PHP: SiPhp,
  CSS3: SiCss3,
  Elementor: SiElementor,
  HTML5: SiHtml5,
  JavaScript: SiJavascript,
}

interface ShowcaseCardProps {
  post: Post
}

export default function ShowcaseCard({ post }: ShowcaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl dark:bg-slate-900/50 dark:ring-1 dark:ring-white/10"
    >
      {/* Project Image Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
        <img
          alt={post.imageAlt}
          src={post.image.desktop}
          width={1024}
          height={576}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge over image */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-900 backdrop-blur-sm dark:bg-sky-900/80 dark:text-sky-100">
            {post.category.title}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <time dateTime={post.date}>{post.date}</time>
          <div className="flex items-center gap-1">
            {post.developer.name === 'Team Collabration' ? (
              <FaUsers className="size-5 text-slate-400 dark:text-slate-500" />
            ) : (
              <FaUser className="size-4 text-slate-400 dark:text-slate-500" />
            )}
            <span className="font-medium">{post.developer.name}</span>
          </div>
        </div>

        <h3 className="mt-3 line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm/6 text-pretty text-slate-600 dark:text-slate-400">
          {post.description}
        </p>

        {/* Tech Stack Icons */}
        <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-white/5">
          {post.tags?.map((tag) => {
            const Icon = ICON_MAP[tag]
            return Icon ? (
              <div key={tag} className="group/icon relative">
                <Icon
                  aria-label={tag}
                  className="size-5 text-slate-400 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-400"
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] whitespace-nowrap text-white opacity-0 transition-opacity group-hover/icon:opacity-100">
                  {tag}
                </span>
              </div>
            ) : null
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {Array.isArray(post.button) ? (
            post.button.map((btn, idx) => (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackProjectClick(post.title)
                  const url = btn.url.startsWith('http') ? btn.url : `https://${btn.url}`
                  window.open(url, '_blank')
                }}
                className={
                  btn.label.toLowerCase().includes('github')
                    ? 'flex-1 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5'
                    : 'flex-1 rounded-lg bg-sky-800 py-2 text-xs font-bold text-white shadow-md shadow-sky-900/20 transition-all hover:bg-sky-700'
                }
              >
                {btn.label}
              </motion.button>
            ))
          ) : post.button ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackProjectClick(post.title)
                const raw = (post.button as ButtonData).url
                const url = raw.startsWith('http') ? raw : `https://${raw}`
                window.open(url, '_blank')
              }}
              className="w-full rounded-lg bg-sky-800 py-2 text-xs font-bold text-white shadow-md shadow-sky-900/20 transition-all hover:bg-sky-700"
            >
              {post.button.label}
            </motion.button>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
