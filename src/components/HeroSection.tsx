export default function HeroSection() {
  return (
    <div id="HeroSection" className="bg-slate-700">
      <div
        aria-hidden="true"
        className=""
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl lg:col-span-2 xl:col-auto">
            Hello, I’m Wunna Aung.
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
              Self-motivated Front-end Developer skilled in WordPress, React, and responsive design. Passionate about UX and social impact. Continuously learning to deliver innovative web solutions. 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/public/Wunna_Aung_CV.pdf"
                download
                className="rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download CV
              </a>
            </div>
          </div>
          <img
            alt=""
            src="/src/assets/hero.svg"
            className="mt-10 aspect-6/5 w-full max-w-lg rounded-lg object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
    </div>
  )
}