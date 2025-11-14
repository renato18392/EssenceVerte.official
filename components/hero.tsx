'use client'

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title with gradient */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0d472d] mb-3 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
          Essence Verte
        </h2>
        
        <p className="text-lg md:text-xl text-[#0d472d]/80 font-light mb-2 text-balance font-lato">
          Elegância em cada nota
        </p>
        
        <p className="text-sm md:text-base text-[#0d472d]/70 mb-8 text-balance font-lato">
          Sua essência começa aqui
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#quiz"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0d472d] hover:bg-[#0d472d]/90 text-white font-semibold rounded-full transition-all shadow-elegant hover:shadow-lg text-sm md:text-base"
          >
            Descobrir Meu Perfume
          </a>
          
          <a
            href="#perfumes"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white hover:bg-gray-50 text-[#0d472d] font-semibold rounded-full transition-all border-2 border-[#0d472d] text-sm md:text-base"
          >
            Ver Coleção
          </a>
        </div>
      </div>
    </section>
  )
}
