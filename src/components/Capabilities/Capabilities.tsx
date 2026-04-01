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
} from 'react-icons/si'
import LanguagesPieChart from './LanguagesPieChart'

export default function Capabilities() {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-sky-50 py-24 sm:py-32 lg:py-32 dark:from-slate-800 dark:to-sky-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Capabilities Icons */}
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiHtml5 size={68} className="text-[#E34F26]" aria-label="HTML" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiCss3 size={68} className="text-[#1572B6]" aria-label="CSS" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiJavascript size={68} className="text-[#F7DF1E]" aria-label="JavaScript" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiReact size={68} className="text-[#61DAFB]" aria-label="React" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiTypescript size={68} className="text-[#3178C6]" aria-label="TypeScript" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiTailwindcss size={68} className="text-[#06B6D4]" aria-label="TailwindCSS" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiWordpress size={68} className="text-[#00749C]" aria-label="WordPress" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiMysql size={78} className="text-[#00758F]" aria-label="MySQL" />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 px-6 shadow-xl sm:h-40 lg:px-8 dark:bg-white/5">
              <SiFirebase size={68} className="text-[#FFCA28]" aria-label="Firebase" />
            </div>
          </div>

          {/* Right Side: Languages Pie Chart */}
          <div className="w-full">
            <LanguagesPieChart />
          </div>
        </div>
      </div>
    </div>
  )
}
