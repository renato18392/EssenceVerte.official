'use client'

import { MessageCircle, Instagram } from 'lucide-react'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {/* Instagram */}
      <a
        href="https://instagram.com/essenceverte.oficial"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        title="Instagram @essenceverte.oficial"
      >
        <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded-lg whitespace-nowrap">
          @essenceverte.oficial
        </div>
        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent shadow-elegant hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center text-white">
          <Instagram className="w-4 h-4" />
        </button>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5519996771403?text=Olá%20Essence%20Verte%21%20Gostaria%20de%20mais%20informações%20sobre%20os%20perfumes."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        title="WhatsApp (19) 99677-1403"
      >
        <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded-lg whitespace-nowrap">
          (19) 99677-1403
        </div>
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-elegant hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center text-white">
          <MessageCircle className="w-5 h-5" />
        </button>
      </a>
    </div>
  )
}
