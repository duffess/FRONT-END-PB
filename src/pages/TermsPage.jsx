import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/Common/SectionTitle';

const TermsPage = () => {
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
            Termos e Condições
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Termos de Uso" subtitle="Leia atentamente antes de utilizar nossos serviços" />
          <p className="text-gray-700 mb-4">
            Ao acessar ou usar a plataforma Veloretti, você concorda com os termos e condições aqui descritos. Caso não concorde, recomendamos que não utilize nossos serviços.
          </p>
          <p className="text-gray-700 mb-4">
            Os usuários devem utilizar o site de forma ética e responsável. A Veloretti reserva-se o direito de suspender contas ou acessos que violem esses termos.
          </p>
          <p className="text-gray-700">
            Os termos podem ser atualizados periodicamente, sendo responsabilidade do usuário verificá-los regularmente.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
