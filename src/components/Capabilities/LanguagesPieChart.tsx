import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Label } from 'recharts'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

const data = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 95 },
  { name: 'JavaScript', value: 80 },
  { name: 'MySQL', value: 75 },
  { name: 'WordPress', value: 95 },
  { name: 'Tailwind CSS', value: 85 },
  { name: 'React', value: 70 },
  { name: 'TypeScript', value: 70 },
  { name: 'Firebase', value: 75 },
]

const COLOR_MAP: Record<string, string> = {
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  MySQL: '#00758F',
  WordPress: '#00749C',
  'Tailwind CSS': '#06B6D4',
  TailwindCSS: '#06B6D4', // alias to match any usage
  React: '#61DAFB',
  TypeScript: '#3178C6',
  Firebase: '#FFCA28',
}

// BG_CLASS_MAP (add TailwindCSS alias)
const BG_CLASS_MAP: Record<string, string> = {
  HTML: 'bg-[#E34F26]',
  CSS: 'bg-[#1572B6]',
  JavaScript: 'bg-[#F7DF1E]',
  MySQL: 'bg-[#00758F]',
  WordPress: 'bg-[#00749C]',
  TailwindCSS: 'bg-[#06B6D4]', // alias for legend label without space
  React: 'bg-[#61DAFB]',
  TypeScript: 'bg-[#3178C6]',
  Firebase: 'bg-[#FFCA28]',
}

export default function LanguagesPieChart() {
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  // Overall proficiency (average of all values)
  const overallProficiency = Math.round(data.reduce((sum, d) => sum + d.value, 0) / data.length)

  // Center number animation
  const [centerValue, setCenterValue] = useState(0)
  useEffect(() => {
    if (!visible) return
    const duration = 900
    const start = performance.now()
    const target = overallProficiency
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCenterValue(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [visible, overallProficiency])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative z-10 w-full min-w-0 bg-inherit px-4 pt-0 pb-4">
      {visible && (
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Pie (Top) */}
          <div className="h-56 w-56 min-w-0 sm:-mt-8 sm:h-72 sm:w-72 lg:mt-0 lg:h-72 lg:w-72">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={0}
                  stroke="none"
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={900}
                  animationEasing="ease-out"
                >
                  {data.map((entry) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLOR_MAP[entry.name]}
                      aria-label={`${entry.name}: ${entry.value}`}
                    />
                  ))}
                  <Label
                    value={`${centerValue}%`}
                    position="center"
                    dy={-10}
                    fill={theme === 'dark' ? '#ffffff' : '#0f172a'}
                    style={{ fontSize: 28, fontWeight: 700 }}
                  />
                  <Label
                    value="Proficiency"
                    position="center"
                    dy={16}
                    fill={theme === 'dark' ? '#cbd5e1' : '#475569'}
                    style={{ fontSize: 12 }}
                  />
                </Pie>
                <Tooltip
                  contentStyle={
                    theme === 'dark'
                      ? { background: 'rgba(17,24,39,0.9)', border: 'none', color: '#fff' }
                      : {
                          background: 'rgba(255,255,255,0.95)',
                          border: '1px solid #e2e8f0',
                          color: '#0f172a',
                        }
                  }
                  itemStyle={{ color: theme === 'dark' ? '#fff' : '#0f172a' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend (Bottom, Grid) */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'TypeScript',
              'TailwindCSS',
              'WordPress',
              'MySQL',
              'Firebase',
            ].map((name) => (
              <div key={name} className="flex items-center gap-2">
                <span
                  className={`inline-block h-3 w-3 rounded-sm ${BG_CLASS_MAP[name]}`}
                  aria-label={`${name} color`}
                />
                <span className="text-sm text-slate-800 dark:text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
