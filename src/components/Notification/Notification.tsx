import { useState, useCallback } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { APP_EVENTS } from '../../utils/events'
import { useEvent } from '../../hooks/useEvent'

export default function Notification() {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('Profile link copied successfully!')

  const handler = useCallback((e: Event) => {
    const detail = (e as CustomEvent<string>).detail
    if (detail) setMessage(detail)
    setShow(true)
    setTimeout(() => setShow(false), 2000)
  }, [])
  useEvent(APP_EVENTS.NOTIFY_SHOW, handler)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-start space-y-4 sm:items-start">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg outline-1 -outline-offset-1 outline-slate-200 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0 dark:bg-gray-800 dark:outline-white/10">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <CheckCircleIcon aria-hidden="true" className="size-6 text-green-400" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{message}</p>
                    {/* <p className="mt-1 text-sm text-gray-400">The link is now on your clipboard.</p> */}
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-lg bg-slate-100 text-slate-500 shadow-xl hover:text-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-sky-600 dark:bg-white/10 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
