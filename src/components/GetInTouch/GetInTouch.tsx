import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function GetInTouch() {
  return (
    <div className="relative isolate -mt-px bg-gradient-to-b from-slate-100 to-sky-50 pt-20 pb-20 sm:pt-28 sm:pb-28 dark:from-slate-800 dark:to-sky-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
