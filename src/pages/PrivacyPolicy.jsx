import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/Common/SectionTitle';

const PrivacyPolicy = () => {
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
            Política de Privacidade
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Privacidade e Dados" subtitle="Sua segurança é nossa prioridade" />
          <p className="text-gray-700 mb-4">
            Coletamos dados pessoais apenas quando necessário, com o consentimento do usuário, e os utilizamos exclusivamente para melhorar nossos serviços.
          </p>
          <p className="text-gray-700 mb-4">
            Todas as informações são armazenadas com segurança e não são compartilhadas com terceiros sem autorização.
          </p>
          <p className="text-gray-700">
            Você pode solicitar a exclusão ou modificação dos seus dados a qualquer momento entrando em contato conosco.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
