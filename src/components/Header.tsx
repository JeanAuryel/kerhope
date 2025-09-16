import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo_kerhope.png" alt="KerHope" className="h-35 w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Qui sommes-nous ?
            </button>
            <button onClick={() => scrollToSection('actions')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Nos actions
            </button>
            <button onClick={() => scrollToSection('rejoindre')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Nous rejoindre
            </button>
            <button onClick={() => scrollToSection('soutenir')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Nous soutenir
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Accueil
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Qui sommes-nous ?
              </button>
              <button onClick={() => scrollToSection('actions')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Nos actions
              </button>
              <button onClick={() => scrollToSection('rejoindre')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Nous rejoindre
              </button>
              <button onClick={() => scrollToSection('soutenir')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Nous soutenir
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header