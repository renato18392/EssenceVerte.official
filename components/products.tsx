'use client'

import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Product {
  id: string
  name: string
  type: 'Masculino' | 'Feminino' | 'Unissex'
  image: string
  description: string
  notes: string[]
  sizes: { ml: number; price: number }[]
}

const products: Product[] = [
  {
    id: 1,
    name: 'J\'ADORE',
    type: 'Feminino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_190145936-RIzZ3L6XCdMh3FzHF9KZL9Jgfi0tSw.png',
    description: 'Floral luxuoso, elegante e luminoso. Perfume clássico para o dia que transmite sofisticação e charme feminino.',
    notes: ['Floral Luxuoso', 'Notas Frutadas', 'Almíscar'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
  {
    id: 2,
    name: 'FAHRENHEIT',
    type: 'Masculino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_191454468-pNJTcy0pQG4fuYTZ079K46TlAmhe5I.png',
    description: 'Amadeirado intenso com toque de couro. Forte e marcante para a noite, cria uma presença inesquecível.',
    notes: ['Amadeirado', 'Couro', 'Especiarias Quentes'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
  {
    id: 3,
    name: 'YARA',
    type: 'Feminino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_191600858-oQrz0hJCqBG5Sq15UgIIg1W1xkz7wR.png',
    description: 'Doce e cremoso com notas de baunilha e marshmallow. Perfume meigo e envolvente para o dia.',
    notes: ['Baunilha', 'Marshmallow', 'Musk Cremoso'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
  {
    id: 4,
    name: 'SAUVAGE',
    type: 'Masculino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_191639432-CBLSpuKwa5BBNEiFuvecZtEHufAjvA.png',
    description: 'Fresco e agressivo, extremamente marcante. Funciona perfeitamente de dia e à noite com presença forte.',
    notes: ['Laranja Amarga', 'Lavanda', 'Madeira de Cedro'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
  {
    id: 5,
    name: 'MONT BLANC FEMME',
    type: 'Feminino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_201354979-Fx5Ao5XHELYwLv7MQttmPus7tqEcU3.png',
    description: 'Floral cremoso, chique e discreto. Elegante para uso diário com uma presença sofisticada e refinada.',
    notes: ['Floral Cremoso', 'Cítrico', 'Musk Suave'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
  {
    id: 6,
    name: 'HACIVAT',
    type: 'Unissex',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_191949148-yuIQ20GHs5cWkWY3scrOdZlPrA0mqL.png',
    description: 'Cítrico amadeirado luxuoso. Aroma de poder e presença que funciona perfeitamente dia e noite com elegância.',
    notes: ['Cítrico Luxuoso', 'Madeira', 'Âmbar'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
  {
    id: 7,
    name: '212 MEN',
    type: 'Masculino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-11-14_194145667-1iXBbilxqxvDB8ywDFCqjFMF4MIhSf.png',
    description: 'Fresco urbano com menta e gengibre. Jovem e moderno para o dia, transmite energia e frescura.',
    notes: ['Menta', 'Gengibre', 'Cítrico Fresco'],
    sizes: [
      { ml: 50, price: 89.90 },
      { ml: 100, price: 139.90 },
    ],
  },
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<number>(0)

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de comprar ${selectedProduct?.name} - ${selectedProduct?.sizes[selectedSize].ml}ml (R$ ${selectedProduct?.sizes[selectedSize].price.toFixed(2)})`
    const phoneNumber = '5519996771403'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="perfumes" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-2 text-balance">
            Nossa Coleção
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-lato">
            Cada perfume é uma obra de arte olfativa, cuidadosamente criada
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProduct(product)
                setSelectedSize(0)
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm-elegant hover:shadow-elegant transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-primary mb-1 font-playfair">{product.name}</h3>
                      <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
                        {product.type}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg md:text-xl font-bold text-primary font-playfair">
                      R$ {product.sizes[0].price.toFixed(2)}
                    </span>
                    <span className="text-xs text-muted-foreground">(50ml)</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all shadow-sm-elegant hover:shadow-elegant text-sm font-lato">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elegant"
            >
              <div className="sticky top-0 flex items-center justify-between p-4 md:p-6 border-b border-border bg-white rounded-t-3xl">
                <h2 className="text-xl md:text-2xl font-playfair font-bold text-primary">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <div className="p-4 md:p-6">
                {/* Image */}
                <div className="mb-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 flex items-center justify-center aspect-square md:aspect-auto md:h-56">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-40 h-40 object-contain"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm md:text-base text-foreground leading-relaxed mb-4 font-lato">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Type Badge */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">Tipo</p>
                  <div className="inline-block px-3 py-1.5 bg-accent/10 text-accent font-semibold rounded-full text-xs">
                    {selectedProduct.type}
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">Notas Olfativas</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.notes.map((note) => (
                      <span key={note} className="px-3 py-1.5 bg-primary/10 text-primary font-medium rounded-full text-xs font-lato">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Size and Price Selection */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">Escolha o Tamanho</p>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(idx)}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all text-sm ${
                          selectedSize === idx
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border text-foreground hover:border-primary'
                        }`}
                      >
                        <div>{size.ml}ml</div>
                        <div className="mt-1">R$ {size.price.toFixed(2)}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full transition-all shadow-elegant hover:shadow-lg text-sm md:text-base font-lato flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comprar Agora - R$ {selectedProduct.sizes[selectedSize].price.toFixed(2)}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
