import ImageCarousel from './ImageCarousel'

const Actions = () => {
  const currentActions = [
    {
      title: "Collecte et distribution de vêtements",
      description: "Nous rassemblons et redistribuons des vêtements pour aider les jeunes à s'habiller dignement.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "blue",
      emoji: "🤝 👕 👖 🧥"
    },
    {
      title: "Collecte et distribution de repas chauds",
      description: "Nous organisons des distributions de repas chauds pour lutter contre la précarité alimentaire.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      color: "green",
      images: [
        "/distribution-de-repas=chaud.jpg",
        "/distribution-de-repas=chaud-2.jpg",
        "/distribution-à-la-gare-de-nantes.jpg",
        "/distribution-à-la-gare-de-nantes-2.jpg"
      ]
    },
    {
      title: "Distribution de fournitures scolaires",
      description: "En collaboration avec la Croix Rouge, nous distribuons des fournitures scolaires pour accompagner la réussite éducative des jeunes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "red",
      partner: "En partenariat avec la Croix Rouge",
      emoji: "🤲 📚 ✏️ 🎒"
    },
    {
      title: "Collecte et distribution de produits d'hygiène",
      description: "Nous fournissons des produits d'hygiène essentiels pour préserver la dignité de chacun.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "purple",
      emoji: "🫴 🧼 🪥 🧻"
    }
  ]

  const futureActions = [
    {
      title: "Aide administrative",
      description: "Accompagnement pour les démarches administratives complexes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Aide au logement",
      description: "Support dans la recherche et l'obtention d'un logement adapté.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Ateliers de langue française",
      description: "Cours et ateliers pour améliorer la maîtrise du français.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Accompagnement personnel",
      description: "Soutien individuel et personnalisé selon les besoins de chacun.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      red: "from-red-500 to-red-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="actions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Actions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos actions actuelles et nos projets futurs pour mieux accompagner les jeunes
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Actions actuelles
            </h3>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              En cours
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentActions.map((action, index) => {
              const colorClasses = getColorClasses(action.color)
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${colorClasses} text-white mb-6`}>
                    {action.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {action.title}
                  </h4>
                  {action.partner && (
                    <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {action.partner}
                    </div>
                  )}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {action.description}
                  </p>
                  {action.images && action.images.length > 0 ? (
                    <div className="mt-6">
                      <ImageCarousel 
                        images={action.images} 
                        alt={action.title}
                        autoPlay={true}
                        autoPlayInterval={5000}
                      />
                    </div>
                  ) : action.emoji && (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-3" role="img" aria-label="Illustrations du projet">
                        {action.emoji}
                      </div>
                      <p className="text-sm text-gray-500 italic">
                        Photos à venir
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Prochainement
            </h3>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-semibold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              À venir
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureActions.map((action, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-orange-500 hover:transform hover:scale-105">
                <div className="text-orange-600 mb-4">
                  {action.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {action.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Vous souhaitez nous aider à développer ces actions ?
            </h4>
            <p className="text-gray-600 mb-6">
              Plus nous avons de bénévoles et de soutien, plus nous pouvons élargir nos actions et aider davantage de jeunes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('rejoindre')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Devenir bénévole
              </button>
              <button 
                onClick={() => document.getElementById('soutenir')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Nous soutenir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Actions