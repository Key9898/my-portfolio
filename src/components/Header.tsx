import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Capabilities', href: '#Capabilities' },
  { name: 'Projects', href: '#Projects' },
  { name: 'About', href: '#About' },
  { name: 'Contact', href: '#Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Capabilities', 'Projects', 'About', 'Contact']
      const scrollPosition = window.scrollY + 100
      let foundActiveSection = false

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            foundActiveSection = true
            break
          }
        }
      }
      
      // If no section is active (e.g., in hero section), clear active state
      if (!foundActiveSection) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-slate-950/90 sticky top-0 z-50 backdrop-blur-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Wunna's Portfolio</span>
            <img
              alt="logo"
              src="/src/assets/Logo.svg"
              className="h-8 w-auto bg-slate-600 shadow-lg shadow-slate-700/50 rounded-lg"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-sm/6 font-semibold ${
                activeSection === item.name 
                  ? 'text-indigo-600' 
                  : 'text-white hover:text-slate-500'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href='#Contact'
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Say Hello
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-500/80 backdrop-blur-md p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center gap-x-6">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wunna's Portfolio</span>
              <img
                alt="logo"
                src="/src/assets/Logo.svg"
                className="h-8 w-auto bg-slate-600 shadow-lg shadow-slate-700/50 rounded-lg"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-lg p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="absolute top-8 right-6 size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-slate-500"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}