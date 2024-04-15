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
    title: 'Network',
    description: 'Connect to the world with our state-of-the-art networking solutions.',
    icon: 'globe',
  },
  {
    title: 'Visualization',
    description: 'See your data come to life with our powerful visualization tools.',
    icon: 'eye',
  },
  {
    title: 'Integrity',
    description: 'Trust in our commitment to maintain the highest levels of integrity.',
    icon: 'workflow',
  },
  {
    title: 'AI Powered',
    description: 'Harness the power of AI to drive innovation and efficiency.',
    icon: 'brain',
  },
] as Feature[]

const FeaturePanel = ({ feature }: { feature: Feature }) => {
  return (
    <div className='rounded-lg border border-slate-400 p-3 transition-colors hover:border-slate-300 hover:bg-slate-100'>
      <h2 className='flex items-center gap-1 text-2xl font-bold text-slate-900'>
        {React.createElement(iconMap[feature.icon])}
        {feature.title}
      </h2>
      <p className='mt-4 leading-8 text-slate-600'>{feature.description}</p>
    </div>
  )
}

const FeatureSection = () => {
  return (
    <section className='mx-auto max-w-4xl px-3 py-6 md:py-14'>
      <h2 className='mb-4 text-center text-4xl font-extrabold text-slate-900'>Features</h2>
      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        {features.map((feature, i) => (
          <FeaturePanel key={i} feature={feature} />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
