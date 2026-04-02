import { motion } from 'framer-motion'

interface TabsProps {
  activeTab: string
  onTabChange: (tabName: string) => void
  counts: {
    all: number
    wordpress: number
    react: number
  }
}

export default function ShowcaseTabs({ activeTab, onTabChange, counts }: TabsProps) {
  const tabs = [
    { name: 'Showcase', label: 'All Projects', count: counts.all },
    { name: 'WordPress', label: 'WordPress', count: counts.wordpress },
    { name: 'React', label: 'React', count: counts.react },
  ]

  return (
    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
      <div className="inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl bg-slate-200/50 p-1.5 sm:w-auto sm:flex-nowrap dark:bg-slate-800/50">
        {tabs.map((tab) => (
          <motion.button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            whileTap={{ scale: 0.95 }}
            className={`relative flex w-full items-center justify-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 sm:w-auto ${activeTab === tab.name ? 'text-sky-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'} `}
          >
            {activeTab === tab.name && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-xl bg-white shadow-md dark:bg-slate-700"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
            <span
              className={`relative z-10 flex h-5 min-w-[22px] items-center justify-center rounded-lg px-1.5 text-[10px] font-black ${
                activeTab === tab.name
                  ? 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100'
                  : 'bg-slate-200 text-slate-500 dark:bg-slate-700/50 dark:text-slate-500'
              } `}
            >
              {tab.count}
            </span>
          </motion.button>
        ))}
      </div>

      <div className="hidden text-right text-sm font-medium text-slate-500 lg:block lg:max-w-[300px] dark:text-slate-400">
        Discover a curated collection of my
        <span className="mx-1 text-sky-600 dark:text-sky-400">digital solutions</span>
        built with passion and precision.
      </div>
    </div>
  )
}
