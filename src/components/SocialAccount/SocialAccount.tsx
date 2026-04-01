import { useState } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import styles from './SocialMedia.module.css'

const socialIcons = [
  {
    name: 'Facebook',
    icon: <FaFacebookF className="h-8 w-8" />,
    href: 'https://www.facebook.com/share/1M28avSs6J/',
    target: '_blank',
    rel: 'noopener noreferrer',
    color: 'bg-blue-600/90 hover:bg-blue-700/90',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="h-8 w-8" />,
    href: 'https://www.instagram.com/key9898303?igsh=MWpxYjcxaGJ5OWtoeA==',
    target: '_blank',
    rel: 'noopener noreferrer',
    color:
      'bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-500/90 hover:from-purple-700/90 hover:via-pink-700/90 hover:to-orange-600/90',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="h-8 w-8" />,
    href: 'https://github.com/Key9898',
    target: '_blank',
    rel: 'noopener noreferrer',
    color: 'bg-gray-800/90 hover:bg-gray-900/90',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn className="h-8 w-8" />,
    href: 'https://linkedin.com/in/key-wunna-aung',
    target: '_blank',
    rel: 'noopener noreferrer',
    color: 'bg-blue-700/90 hover:bg-blue-800/90',
  },
]

const SocialAccount = () => {
  const [socialMenuOpen, setSocialMenuOpen] = useState(false)

  return (
    <div className="fixed bottom-[6.5rem] left-6 z-40 sm:bottom-14 lg:bottom-14">
      {/* Social Media Icons */}
      <div
        className={`mb-3 flex flex-col space-y-3 transition-all duration-300 ${socialMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        {socialIcons.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target={social.target}
            rel={social.rel}
            className={`${styles.socialMediaLink} ${social.color} ${styles[`socialDelay${index}`]}`}
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Main Chat Icon */}
      <button
        type="button"
        onClick={() => setSocialMenuOpen(!socialMenuOpen)}
        className="flex h-12 w-12 transform items-center justify-center rounded-lg border border-white/20 bg-sky-800 text-white backdrop-blur-lg transition-all duration-200 hover:scale-110 hover:bg-sky-700 hover:shadow-xl sm:h-14 sm:w-14"
        aria-label="Open social media menu"
      >
        <ChatBubbleLeftRightIcon
          className={`h-8 w-8 transition-transform duration-200 ${socialMenuOpen ? 'rotate-360' : ''}`}
        />
      </button>
    </div>
  )
}

export default SocialAccount
