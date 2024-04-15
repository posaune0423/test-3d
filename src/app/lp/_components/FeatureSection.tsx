import { Smartphone, Globe, Eye, Workflow, Brain } from 'lucide-react'
import React from 'react'

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  eye: Eye,
  workflow: Workflow,
  brain: Brain,
}

type Feature = {
  title: string
  description: string
  icon: keyof typeof iconMap
}

const features = [
  {
    title: 'Mobile',
    description: 'hogefuga',
    icon: 'smartphone',
  },
  {
    title: 'Network',
    description: 'description2',
    icon: 'globe',
  },
  {
    title: 'Visualization',
    description: 'description3',
    icon: 'eye',
  },
  {
    title: 'Integrity',
    description: 'description',
    icon: 'workflow',
  },
  {
    title: 'AI Powered',
    description: 'description2',
    icon: 'brain',
  },
  {
    title: 'Test3',
    description: 'description3',
    icon: 'smartphone',
  },
] as Feature[]

const FeaturePanel = ({ feature }: { feature: Feature }) => {
  return (
    <div className='rounded-lg border border-slate-400 p-3 transition-colors hover:border-slate-300 hover:bg-slate-100'>
      {React.createElement(iconMap[feature.icon], { size: 28 })}
      <h2 className='text-2xl font-bold text-slate-900'>{feature.title}</h2>
      <p className='mt-2 text-lg text-slate-600'>{feature.description}</p>
    </div>
  )
}

const FeatureSection = () => {
  return (
    <section className='mx-auto px-3 py-6 md:px-10 md:py-14'>
      <h2 className='mb-4 text-center text-4xl font-extrabold text-slate-900'>Features</h2>
      <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-3'>
        {features.map((feature, i) => (
          <FeaturePanel key={i} feature={feature} />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
