const Support = () => {
  const donationTypes = [
    {
      title: "Dons financiers",
      description: "Votre soutien financier nous permet d'acheter des produits de première nécessité et de développer nos actions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "green",
      items: [
        "Achat de repas et produits alimentaires",
        "Financement des transports pour les distributions",
        "Développement de nouveaux projets"
      ]
    },
    {
      title: "Dons matériels",
      description: "Nous acceptons les dons de vêtements, produits d'hygiène et matériel en bon état.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: "blue",
      items: [
        "Vêtements (propres et en bon état)",
        "Produits d'hygiène (neufs uniquement)",
        "Matériel éducatif et livres"
      ]
    }
  ]

  const partnershipTypes = [
    {
      title: "Commerces locaux",
      description: "Partenariats pour des dons réguliers ou des tarifs préférentiels",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Associations locales",
      description: "Collaborations pour élargir notre impact sur le territoire",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Entreprises",
      description: "Mécénat, sponsoring ou mise à disposition de compétences",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Établissements scolaires",
      description: "Sensibilisation et collectes auprès des jeunes",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-green-600",
      blue: "from-blue-500 to-blue-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="soutenir" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nous soutenir
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre soutien, qu'il soit financier, matériel ou sous forme de partenariat, 
            nous permet d'agir concrètement auprès des jeunes en difficulté
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Comment nous aider ?
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {donationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(type.color)} text-white mb-6`}>
                  {type.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                    {type.color === 'green' ? 'Faire un don' : 'Proposer un don matériel'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Partenariats
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous recherchons des partenaires locaux pour amplifier notre impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-orange-500">
                <div className="text-orange-600 mb-4 flex justify-center">
                  {partner.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {partner.title}
                </h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ensemble, donnons sa chance à chaque jeune
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Chaque contribution, petite ou grande, fait la différence dans la vie d'un adolescent. 
            Rejoignez-nous dans cette mission d'espoir et de solidarité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-full transition-colors transform hover:scale-105">
              Faire un don maintenant
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Devenir partenaire
            </button>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <svg className="w-8 h-8 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="text-xl font-bold text-gray-900">
              Informations importantes
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h5 className="font-semibold mb-2">Pour les dons matériels :</h5>
              <ul className="space-y-1 text-sm">
                <li>• Les vêtements doivent être propres et en bon état</li>
                <li>• Les produits d'hygiène doivent être neufs et non ouverts</li>
                <li>• Nous acceptons les dons toute l'année</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Pour les partenariats :</h5>
              <ul className="space-y-1 text-sm">
                <li>• Contactez-nous pour discuter des modalités</li>
                <li>• Nous proposons une visibilité en échange</li>
                <li>• Possibilité de recevoir un reçu fiscal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support