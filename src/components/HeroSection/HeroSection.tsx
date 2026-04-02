import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

const Resume = '/Resume/wunna-resume.pdf'
const HeroMobile = '/Hero/hero_mobile.jpg'
const HeroTablet = '/Hero/hero_tablet.jpg'
const HeroDesktop = '/Hero/hero_desktop.jpg'

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <div className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-gradient-to-t from-slate-100 to-sky-50 dark:from-slate-800 dark:to-sky-950">
      <div className="relative h-full w-full">
        <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-8 lg:px-8">
          <div className="relative z-10 flex h-full items-center lg:w-full lg:max-w-2xl">
            {/* Divider stays */}
            <div className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform bg-gradient-to-t from-slate-100 to-sky-50 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)] lg:block dark:from-slate-800 dark:to-sky-950" />

            <div className="relative w-full lg:pr-0">
              <div className="max-w-2xl sm:max-w-xl lg:max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-5xl font-bold tracking-tight text-pretty text-slate-900 sm:text-7xl dark:text-white"
                >
                  Crafting Digital Experiences
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="mt-8 text-lg/8 font-medium text-pretty text-slate-700 sm:text-xl/8 dark:text-white/80"
                >
                  Specializing in building clean, efficient, and scalable web applications that
                  drive business success. Let's turn your complex problems into beautiful digital
                  realities.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  className="mt-6 flex sm:mt-10"
                >
                  <div className="relative flex max-w-full flex-wrap items-center gap-2 rounded-lg bg-sky-100/50 px-3 py-2 shadow-xl ring-1 ring-sky-300/50 sm:bg-sky-100/50 sm:px-4 sm:py-2 sm:ring-1 sm:ring-sky-300/50 lg:bg-slate-900/10 lg:px-6 lg:py-2 lg:ring-1 lg:ring-slate-900/10 lg:hover:bg-slate-900/20 lg:hover:ring-slate-900/20 dark:bg-sky-900/50 dark:ring-white/20 dark:sm:bg-sky-900/50 dark:sm:ring-white/20 dark:lg:bg-white/10 dark:lg:ring-white/10 dark:lg:hover:bg-white/20 dark:lg:hover:ring-white/20">
                    <span className="flex-1 text-xs text-slate-600 sm:text-base lg:text-base dark:text-gray-400">
                      View or download my professional resume.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        window.open(Resume, '_blank', 'noopener,noreferrer')
                      }}
                      className="flex-shrink-0 text-xs font-semibold text-sky-500 transition-transform duration-300 hover:scale-110 sm:text-base sm:whitespace-nowrap sm:text-sky-500 lg:text-base lg:text-sky-600"
                    >
                      Download Resume <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator: Centered for Mobile/Tablet, Left-aligned for Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform lg:left-[238px] lg:translate-x-0"
          >
            <button
              type="button"
              aria-label="Scroll to Capabilities"
              onClick={() => {
                scrollToSection('capabilities')
              }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/10 text-slate-700 shadow-2xl ring-1 ring-slate-950/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-slate-900/20 dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20"
            >
              <ChevronDoubleDownIcon aria-hidden="true" className="size-6 animate-bounce" />
            </button>
          </motion.div>
        </div>

        {/* Background image: full cover on all sizes, right half on lg+ */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-100 to-sky-50 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-1/2 dark:from-slate-800 dark:to-sky-950">
          <img
            alt="Developer workspace with modern setup"
            src={HeroDesktop}
            srcSet={`${HeroMobile} 768w, ${HeroTablet} 1280w, ${HeroDesktop} 1920w`}
            sizes="(min-width:1024px) 50vw, 100vw"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-300/10 dark:bg-slate-700/30"></div>
        </div>
      </div>
    </div>
  )
}
