const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Aider les adolescents à s'équiper pour la formation en leur offrant 
                un accompagnement complet et bienveillant. Nous croyons que chaque jeune 
                mérite sa chance pour construire un avenir meilleur.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                L'origine du nom KerHope
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>KerHope</strong> signifie littéralement "la maison de l'espoir". 
                Ce nom reflète parfaitement notre vision :
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Un lieu d'accueil chaleureux
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Un refuge pour les jeunes en difficulté
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Un tremplin vers l'avenir
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Nos Valeurs
              </h3>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h4 className="text-xl font-semibold">Solidarité</h4>
                </div>
                <p className="text-blue-100">
                  Nous croyons en la force du collectif et de l'entraide mutuelle
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-semibold">Diversité</h4>
                </div>
                <p className="text-green-100">
                  Chaque personne est unique et apporte sa richesse à notre communauté
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="text-xl font-semibold">Espoir</h4>
                </div>
                <p className="text-yellow-100">
                  Nous cultivons l'optimisme et la confiance en l'avenir
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About