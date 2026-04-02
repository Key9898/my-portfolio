import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiWordpress,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiFirebase,
  SiVite,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si'
import TechnicalRadarChart from './TechnicalRadarChart'

const TECH_STACK = [
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
  { icon: SiWordpress, name: 'WordPress', color: '#21759B' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Capabilities() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-100 to-sky-50 pt-20 pb-4 sm:pt-28 lg:pt-28 lg:pb-4 dark:from-slate-800 dark:to-sky-950"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A comprehensive suite of technologies and professional skills I bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Capabilities Icons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex h-32 flex-col items-center justify-center gap-3 rounded-xl bg-white/50 px-6 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-2xl dark:bg-white/5 dark:hover:bg-white/10"
              >
                <tech.icon
                  size={68}
                  className="transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                  aria-label={tech.name}
                />
                <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Technical Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            {isInView && <TechnicalRadarChart />}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
