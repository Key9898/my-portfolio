import { motion, useInView } from 'framer-motion'
import { useState, useMemo, useRef } from 'react'
import ShowcaseTabs from './ShowcaseTabs'
import ShowcaseCard from './ShowcaseCard'
import { posts } from '../../data/projects'
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('Showcase')
  const [visibleCount, setVisibleCount] = useState(6)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const counts = useMemo(
    () => ({
      all: posts.length,
      wordpress: posts.filter((p) => p.category.title === 'WordPress').length,
      react: posts.filter((p) => p.category.title === 'React').length,
    }),
    []
  )

  const filteredPosts = useMemo(() => {
    if (activeTab === 'Showcase') return posts
    if (activeTab === 'WordPress')
      return posts.filter((post) => post.category.title === 'WordPress')
    if (activeTab === 'React') return posts.filter((post) => post.category.title === 'React')
    return posts
  }, [activeTab])

  const currentPosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    setVisibleCount(6) // Reset visible count on tab change
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <div
      id="showcase"
      ref={sectionRef}
      className="relative isolate -mt-px bg-gradient-to-t from-slate-100 to-sky-50 pt-20 pb-0 sm:pt-28 lg:pt-28 lg:pb-0 dark:from-slate-800 dark:to-sky-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Project Showcase
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Explore Recent Work & Innovations
          </p>
        </motion.div>

        {isInView && (
          <ShowcaseTabs activeTab={activeTab} onTabChange={handleTabChange} counts={counts} />
        )}

        <div className="mx-auto mt-12 grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <ShowcaseCard key={post.id} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleLoadMore}
              className="group flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-sky-900 shadow-md ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:shadow-xl dark:bg-slate-900 dark:text-white dark:ring-white/10 dark:hover:bg-slate-800"
            >
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
              View More Projects
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}
