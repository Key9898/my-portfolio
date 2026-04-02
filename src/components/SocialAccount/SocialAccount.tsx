import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialIcons = [
  {
    name: 'Facebook',
    icon: <FaFacebookF className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: 'https://www.facebook.com/share/1M28avSs6J/',
    color: 'bg-blue-600/90 hover:bg-blue-700/90',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: 'https://www.instagram.com/key9898303?igsh=MWpxYjcxaGJ5OWtoeA==',
    color:
      'bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-500/90 hover:from-purple-700/90 hover:via-pink-700/90 hover:to-orange-600/90',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: 'https://github.com/Key9898',
    color: 'bg-gray-800/90 hover:bg-gray-900/90',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: 'https://linkedin.com/in/key-wunna-aung',
    color: 'bg-blue-700/90 hover:bg-blue-800/90',
  },
]

const SocialAccount = () => {
  const [socialMenuOpen, setSocialMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setSocialMenuOpen(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="fixed bottom-[6.5rem] left-6 z-40 sm:bottom-14 lg:bottom-14">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Social Media Icons */}
            <AnimatePresence>
              {socialMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mb-3 flex flex-col space-y-3"
                >
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-lg backdrop-blur-lg transition-colors sm:h-14 sm:w-14 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Chat Icon */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSocialMenuOpen(!socialMenuOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-sky-800 text-white shadow-xl backdrop-blur-lg hover:bg-sky-700 sm:h-14 sm:w-14"
              aria-label="Open social media menu"
            >
              <ChatBubbleLeftRightIcon
                className={`h-8 w-8 transition-transform duration-300 ${socialMenuOpen ? 'rotate-[360deg]' : ''}`}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SocialAccount
