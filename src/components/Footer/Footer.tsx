export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-100 to-sky-50 dark:border-sky-900/50 dark:from-slate-800 dark:to-sky-950">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 lg:px-8">
        <p className="text-center text-sm/6 text-gray-500">
          <span className="block sm:inline">&copy; 2025 My New Portfolio.</span>{' '}
          <span className="block sm:inline">All rights reserved.</span>{' '}
          <span className="block sm:inline">Designed and developed by Wunna Aung.</span>
        </p>
      </div>
    </footer>
  )
}
