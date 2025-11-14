'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuizStep {
  question: string
  options: string[]
}

const quizSteps: QuizStep[] = [
  {
    question: 'Qual tipo de aroma você prefere?',
    options: ['Floral', 'Amadeirado', 'Cítrico', 'Doce'],
  },
  {
    question: 'Qual é a intensidade ideal?',
    options: ['Suave', 'Moderada', 'Forte', 'Muito Forte'],
  },
  {
    question: 'Em qual ocasião você quer usar?',
    options: ['Diário', 'Especial', 'Noite', 'Versátil'],
  },
]

const perfumeRecommendations: { [key: string]: { name: string; image: string; type: string; brand: string }[] } = {
  'Floral-Suave-Diário': [
    { name: 'J\'ADORE', image: '/images/imagem-2025-11-14-191949148.png', type: 'Feminino', brand: 'Dior' },
    { name: 'YARA', image: '/images/imagem-2025-11-14-191600858.png', type: 'Feminino', brand: 'Lataffa' },
    { name: 'MONT BLANC FEMME', image: '/images/imagem-2025-11-14-190145936.png', type: 'Feminino', brand: 'Mont Blanc' },
  ],
  'Amadeirado-Forte-Noite': [
    { name: 'FAHRENHEIT', image: '/images/imagem-2025-11-14-191454468.png', type: 'Masculino', brand: 'Dior' },
    { name: 'SAUVAGE', image: '/images/imagem-2025-11-14-191639432.png', type: 'Masculino', brand: 'Dior' },
    { name: 'HACIVAT', image: '/images/imagem-2025-11-14-191949148.png', type: 'Unissex', brand: 'Nishane' },
  ],
  'Cítrico-Moderada-Diário': [
    { name: '212 MEN', image: '/images/imagem-2025-11-14-194145667.png', type: 'Masculino', brand: 'Carolina Herrera' },
    { name: 'SAUVAGE', image: '/images/imagem-2025-11-14-191639432.png', type: 'Masculino', brand: 'Dior' },
    { name: 'HACIVAT', image: '/images/imagem-2025-11-14-191949148.png', type: 'Unissex', brand: 'Nishane' },
  ],
  'Doce-Suave-Especial': [
    { name: 'YARA', image: '/images/imagem-2025-11-14-191600858.png', type: 'Feminino', brand: 'Lataffa' },
    { name: 'J\'ADORE', image: '/images/imagem-2025-11-14-191949148.png', type: 'Feminino', brand: 'Dior' },
    { name: 'MONT BLANC FEMME', image: '/images/imagem-2025-11-14-190145936.png', type: 'Feminino', brand: 'Mont Blanc' },
  ],
  'default': [
    { name: 'SAUVAGE', image: '/images/imagem-2025-11-14-191639432.png', type: 'Masculino', brand: 'Dior' },
    { name: 'J\'ADORE', image: '/images/imagem-2025-11-14-191949148.png', type: 'Feminino', brand: 'Dior' },
    { name: 'HACIVAT', image: '/images/imagem-2025-11-14-191949148.png', type: 'Unissex', brand: 'Nishane' },
  ],
}

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [recommendations, setRecommendations] = useState<typeof perfumeRecommendations['default']>([])

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const key = newAnswers.join('-')
      setRecommendations(perfumeRecommendations[key] || perfumeRecommendations['default'])
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResults(false)
    setRecommendations([])
  }

  return (
    <section id="quiz" className="py-12 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-2 text-balance">
            Descubra Seu Perfume Ideal
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-lato">
            Responda algumas perguntas e encontre a fragrância perfeita para você
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-elegant">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2 text-balance">
                    {quizSteps[currentStep].question}
                  </h3>
                  <div className="h-1 bg-gradient-to-r from-secondary to-accent rounded-full w-full max-w-xs">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizSteps[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="p-3 md:p-4 text-sm md:text-base font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 hover:shadow-lg font-lato"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                    Suas Recomendações
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-lato mb-6">
                    Baseado em suas preferências, aqui estão 3 perfumes ideais para você:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {recommendations.map((perfume, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl overflow-hidden shadow-sm-elegant hover:shadow-elegant transition-all duration-200"
                    >
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <img
                          src={perfume.image || "/placeholder.svg"}
                          alt={perfume.name}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="text-sm md:text-base font-semibold text-primary mb-1 font-playfair">{perfume.name}</h4>
                        <p className="text-xs text-secondary font-medium">{perfume.type}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-2 md:py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all shadow-elegant hover:shadow-lg text-sm md:text-base font-lato"
                  >
                    Fazer Novo Quiz
                  </button>
                  <a
                    href="#perfumes"
                    className="px-6 py-2 md:py-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full transition-all shadow-elegant hover:shadow-lg text-center text-sm md:text-base font-lato"
                  >
                    Ver Todos os Perfumes
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
