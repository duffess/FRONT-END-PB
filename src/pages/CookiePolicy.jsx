import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/Common/SectionTitle';

const CookiePolicy = () => {
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
            Política de Cookies
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Uso de Cookies" subtitle="Como utilizamos cookies para melhorar sua experiência" />
          <p className="text-gray-700 mb-4">
            Utilizamos cookies para armazenar informações de navegação e preferências do usuário com o objetivo de otimizar a experiência no site.
          </p>
          <p className="text-gray-700 mb-4">
            Você pode controlar o uso de cookies diretamente nas configurações do seu navegador.
          </p>
          <p className="text-gray-700">
            Ao continuar navegando no site, você concorda com o uso de cookies conforme esta política.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
