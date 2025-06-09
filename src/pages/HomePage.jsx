import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '../components/Common/Button';
import SectionTitle from '../components/Common/SectionTitle';
import ImageSlider from '../components/UI/ImageSlider';
import ProductCard from '../components/UI/ProductCard';
import TestimonialCard from '../components/UI/TestimonialCard';

// Dados mockados para a página inicial
import { featuredProducts, testimonials, heroSlides } from '../data/mockData';

const HomePage = () => {
  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <ImageSlider 
          images={heroSlides} 
          className="h-full"
          autoplay={true}
          autoplaySpeed={5000}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bicicletas Elétricas de Alta Qualidade
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Projetadas em Amsterdã. Funcionais na Europa. Sustentáveis em todas as cidades.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button to="/products" size="lg" variant="default">
                Explorar Produtos
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Produtos em Destaque" 
            subtitle="Descubra nossas bicicletas elétricas de alta qualidade, projetadas para o seu estilo de vida urbano."
          />
          
          <div className="space-y-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProductCard product={product} variant="featured" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button to="/products" variant="outline">
              Ver todos os produtos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/src/assets/about-image.jpg" 
                alt="Sobre a Veloretti" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionTitle 
                title="Projetadas em Amsterdã" 
                subtitle="Nossas bicicletas elétricas são projetadas com paixão e precisão para oferecer a melhor experiência de ciclismo urbano."
              />
              
              <p className="text-gray-700 mb-6">
                Na Veloretti, acreditamos que a mobilidade urbana deve ser sustentável, elegante e acessível. Nossas bicicletas elétricas combinam design holandês com tecnologia de ponta para criar uma experiência de ciclismo incomparável.
              </p>
              
              <Button to="/about" variant="default">
                Saiba mais sobre nós
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="O que nossos clientes dizem" 
            subtitle="Descubra por que nossos clientes amam as bicicletas elétricas Veloretti."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para experimentar o futuro da mobilidade urbana?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de ciclistas satisfeitos e transforme sua experiência de deslocamento urbano.
            </p>
            <Button to="/products" size="lg" variant="default">
              Compre agora
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

