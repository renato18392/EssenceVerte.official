import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d472d] border-b border-[#0d472d]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-sm-elegant">
            <img 
              src="/images/design-mode/imagem_2025-11-14_170432698.png"
              alt="Essence Verte Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-white italic" style={{ fontFamily: 'Playfair Display, serif' }}>Essence Verte</h1>
            <p className="text-xs text-white/80 italic">Elegância em cada nota</p>
          </div>
        </div>

        {/* Contact Info */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#perfumes" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Perfumes
          </a>
          <a href="#quiz" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Descobrir
          </a>
        </nav>
      </div>
    </header>
  )
}
