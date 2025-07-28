import logo from '../assets/Logo.svg'
import myimg from '../assets/about.svg'

export default function About() {
  return (
    <div id="About" className="bg-slate-800 pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
      <div className="bg-slate-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-1/1 h-full after:absolute after:inset-0 after:rounded-2xl after:inset-ring after:inset-ring-white/15 md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                alt="about image"
                src={myimg}
                className="absolute inset-0 size-full rounded-2xl bg-slate-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">

            {/* Divider */}
            <div className="relative md:mt-8 md:mb-8">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-slate-900 px-3 text-base font-semibold text-white">
                  My Story
                </span>
              </div>
            </div>

            <figure className="relative isolate pt-7 sm:pt-14">
              <img
                src={logo}
                alt="logo"
                aria-hidden="true"
                className="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
              >
              </img>
              <blockquote className="text-lg font-semibold text-white sm:text-2xl/9">
                <p>
                  From tinkering with code to building websites, my journey as a front-end developer is driven by curiosity and a love for clean, user-friendly design. I thrive on turning ideas into pixel-perfect realities, currently mastering React and TypeScript. Every project is a chance to grow and create impact.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Wunna Aung</div>
                <div className="mt-1 text-slate-400">Junior Front-end Developer</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}