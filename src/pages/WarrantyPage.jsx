import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/Common/SectionTitle';

const WarrantyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <section className="relative h-[50vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            className="text-4xl font-bold" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Garantia
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Cobertura da Garantia" subtitle="Proteção para sua bicicleta elétrica Veloretti" />
          <p className="text-gray-700 mb-4">
            Oferecemos garantia de 2 anos para todos os modelos de bicicletas elétricas contra defeitos de fabricação e problemas estruturais.
          </p>
          <p className="text-gray-700 mb-4">
            A garantia não cobre danos causados por mau uso, acidentes, ou modificações não autorizadas.
          </p>
          <p className="text-gray-700">
            Para acionar a garantia, entre em contato com nossa equipe de suporte com a nota fiscal e número de série da bicicleta.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WarrantyPage;
