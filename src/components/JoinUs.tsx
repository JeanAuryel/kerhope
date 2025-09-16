import { useState } from 'react'

const JoinUs = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motivation: '',
    disponibilite: '',
    competences: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="rejoindre" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Merci pour votre engagement !
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Votre candidature a été envoyée avec succès. Nous vous contacterons très bientôt pour discuter de votre participation à KerHope.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Envoyer une autre candidature
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rejoindre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nous rejoindre
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Rejoignez notre équipe de bénévoles et participez à faire la différence dans la vie des jeunes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h3 className="text-xl font-bold text-red-900">
                  Besoin urgent de bénévoles !
                </h3>
              </div>
              <p className="text-red-800 leading-relaxed">
                Plus nous avons de bénévoles, plus nous pouvons offrir de services et toucher davantage de jeunes en difficulté. 
                Chaque main tendue compte !
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pourquoi devenir bénévole chez KerHope ?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Contribuer concrètement au bien-être des jeunes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Rejoindre une communauté bienveillante et engagée
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Développer de nouvelles compétences et expériences
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Donner un sens à votre temps libre
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Domaines d'intervention
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Distribution</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Collecte</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Accompagnement</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Administration</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Communication</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Animation</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Devenez bénévole
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="disponibilite" className="block text-sm font-semibold text-gray-700 mb-2">
                  Disponibilité *
                </label>
                <select
                  id="disponibilite"
                  name="disponibilite"
                  required
                  value={formData.disponibilite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Choisissez votre disponibilité</option>
                  <option value="quelques-heures-semaine">Quelques heures par semaine</option>
                  <option value="quelques-heures-mois">Quelques heures par mois</option>
                  <option value="weekends">Week-ends principalement</option>
                  <option value="evenings">Soirées en semaine</option>
                  <option value="ponctuel">Aide ponctuelle lors d'événements</option>
                </select>
              </div>

              <div>
                <label htmlFor="competences" className="block text-sm font-semibold text-gray-700 mb-2">
                  Compétences ou expériences particulières
                </label>
                <input
                  type="text"
                  id="competences"
                  name="competences"
                  value={formData.competences}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ex: cuisine, transport, langues étrangères..."
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Motivations *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Expliquez-nous ce qui vous motive à rejoindre KerHope..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors transform hover:scale-105 duration-200"
              >
                Envoyer ma candidature
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs