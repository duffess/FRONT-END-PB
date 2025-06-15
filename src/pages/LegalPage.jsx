import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/Common/SectionTitle';

const LegalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            className="text-4xl font-bold" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Informações Legais
          </motion.h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Aviso Legal" subtitle="Transparência e responsabilidade jurídica" />
          <p className="text-gray-700 mb-4">
            Este site é operado pela Veloretti Brasil. Todos os direitos estão reservados. As informações aqui contidas são fornecidas apenas para fins informativos e podem ser alteradas sem aviso prévio.
          </p>
          <p className="text-gray-700">
            A Veloretti não se responsabiliza por quaisquer danos decorrentes do uso deste site, incluindo interrupções, vírus ou dados incorretos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
