'use client'

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { category: 'Frontend', level: 93 },
  { category: 'Programming', level: 85 },
  { category: 'Backend', level: 80 },
  { category: 'CMS', level: 95 },
  { category: 'Design', level: 90 },
  { category: 'Tools', level: 88 },
]

const chartConfig = {
  level: {
    label: 'Level',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export default function TechnicalRadarChart() {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
          Expertise Radar
        </CardTitle>
        <CardDescription className="text-slate-500 dark:text-slate-400">
          Professional skill distribution across key areas
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
          initialDimension={{ width: 350, height: 350 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <PolarGrid className="stroke-slate-200 dark:stroke-slate-700" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: 'currentColor', fontSize: 12, fontWeight: 500 }}
                className="text-slate-600 dark:text-slate-400"
              />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="var(--color-level)"
                fill="var(--color-level)"
                fillOpacity={0.5}
                dot={{
                  r: 4,
                  fillOpacity: 1,
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
