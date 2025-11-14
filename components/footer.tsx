export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">Essence Verte</h3>
            <p className="text-white/70 text-sm">
              Elegância em cada nota. Descubra aromas que expressam sua essência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#perfumes" className="text-white/70 hover:text-white transition-colors">
                  Perfumes
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-white/70 hover:text-white transition-colors">
                  Descobrir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Contato</h4>
            <p className="text-white/70 text-sm mb-2">
              <a href="mailto:contato.equipabr@gmail.com" className="hover:text-white transition-colors">
                contato.equipabr@gmail.com
              </a>
            </p>
            <p className="text-white/70 text-sm">
              <a href="https://wa.me/5519996771403" className="hover:text-white transition-colors">
                (19) 99677-1403
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © 2025 Essence Verte. Contato: contato.equipabr@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
