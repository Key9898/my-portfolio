import { FaWordpress } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

const features = [
    {
        name: 'Asia Youths Association',
        description:
            'WordPress platform supporting Myanmar youth activists, providing resources and connections during the Spring Revolution. Built with responsive design for accessibility.',
        href: 'https://asiayouths.org/',
        target: '_blank',
        rel: 'noopener noreferrer',
        icon: FaWordpress,
    },
    {
        name: 'Abhidhamma Society (In Development)',
        description:
            'Online Dhamma education portal (in development) offering courses and certification. WordPress site with custom learning management features. Launching soon with full curriculum.',
        href: 'https://abhidhammasociety.com/',
        target: '_blank',
        rel: 'noopener noreferrer',
        icon: FaWordpress,
    },
    {
        name: 'Currently Learning',
        description:
            'Personal React/Tailwind portfolio showcasing my front-end skills. Demonstrates modern development techniques while highlighting my commitment to meaningful tech projects.',
        href: '#',
        icon: FaReact,
    },
]

export default function Projects() {
    return (
        <div id='Projects' className="bg-slate-800 lg:pb-0 md:pb-20 py-16 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Divider */}
                <div className="relative mb-12">
                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-slate-800 px-3 text-base font-semibold text-white">
                            Feature Projects
                        </span>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-6 text-lg/8 text-slate-300">
                        Explore my diverse projects—from WordPress sites for marginalized groups and Dhamma education to this React/Tailwind portfolio. Each showcases my passion for clean code and impactful digital experiences. Let’s build something great together!
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                                    <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-slate-400">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} target={feature.target} rel={feature.rel} className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                                            Live View <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}