import { useEffect } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '../components/Common/SectionTitle';
import { cities } from '../data/mockData';

const CitiesPage = () => {
  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero da página */}
        <div className="mb-16 text-center">
          <SectionTitle 
            title="Cidades Veloretti" 
            subtitle="Nossas bicicletas elétricas estão transformando a mobilidade urbana em cidades ao redor do mundo."
            align="center"
          />
        </div>

        {/* Mapa de cidades (mockado como uma imagem) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center">
            <p className="text-gray-600">Mapa interativo das cidades Veloretti</p>
          </div>
        </motion.div>

        {/* Lista de cidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-4 aspect-video">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
              <p className="text-gray-600 mb-2">{city.country}</p>
              <p className="text-gray-700">{city.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Seção de sustentabilidade */}
        <div className="bg-gray-100 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Mobilidade Sustentável para Cidades Inteligentes</h2>
              <p className="text-gray-700 mb-4">
                Na Veloretti, acreditamos que as bicicletas elétricas são uma parte essencial do futuro da mobilidade urbana. Nossas bicicletas são projetadas para reduzir a pegada de carbono, diminuir o congestionamento e melhorar a qualidade de vida nas cidades.
              </p>
              <p className="text-gray-700 mb-4">
                Trabalhamos em parceria com governos locais e organizações para promover infraestrutura cicloviária e políticas que incentivem o uso de bicicletas elétricas como meio de transporte sustentável.
              </p>
              <p className="text-gray-700">
                Cada bicicleta Veloretti vendida representa uma contribuição para cidades mais limpas, saudáveis e habitáveis para todos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 text-center">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">-30%</h3>
                  <p className="text-gray-700">Redução de emissões de CO2</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">+45%</h3>
                  <p className="text-gray-700">Aumento na mobilidade urbana</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">20+</h3>
                  <p className="text-gray-700">Cidades parceiras</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">10k+</h3>
                  <p className="text-gray-700">Ciclistas Veloretti</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesPage;

