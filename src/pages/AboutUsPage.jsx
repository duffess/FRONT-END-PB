import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import SectionTitle from '../components/Common/SectionTitle';
import { Button } from '../components/Common/Button';
import { faqs } from '../data/mockData';

const AboutUsPage = () => {
  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Veloretti</h1>
            <p className="text-xl md:text-2xl">
              Projetamos bicicletas elétricas que combinam estilo, funcionalidade e sustentabilidade para transformar a mobilidade urbana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Nossa História" 
                subtitle="De Amsterdã para o mundo: a jornada da Veloretti."
              />
              
              <p className="text-gray-700 mb-4">
                A Veloretti nasceu em 2012 em Amsterdã, a capital mundial das bicicletas, com uma missão clara: criar bicicletas elétricas que combinam design elegante, tecnologia avançada e sustentabilidade.
              </p>
              
              <p className="text-gray-700 mb-4">
                Fundada por um grupo de entusiastas de ciclismo e engenheiros, a empresa rapidamente se destacou pela atenção aos detalhes e compromisso com a qualidade. Cada bicicleta Veloretti é projetada para oferecer uma experiência de ciclismo excepcional, adaptada às necessidades da vida urbana moderna.
              </p>
              
              <p className="text-gray-700">
                Hoje, a Veloretti está presente em mais de 20 cidades ao redor do mundo, incluindo várias no Brasil, e continua expandindo sua presença global com o objetivo de transformar a mobilidade urbana e contribuir para cidades mais sustentáveis e habitáveis.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/src/assets/about-history.jpg" 
                alt="História da Veloretti" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Valores" 
            subtitle="Os princípios que guiam tudo o que fazemos."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sustentabilidade",
                description: "Comprometidos com práticas sustentáveis em toda a nossa cadeia de produção, desde a escolha de materiais até a logística de entrega.",
                icon: "🌱"
              },
              {
                title: "Inovação",
                description: "Constantemente buscando novas tecnologias e soluções para melhorar a experiência de ciclismo e reduzir nosso impacto ambiental.",
                icon: "💡"
              },
              {
                title: "Qualidade",
                description: "Cada bicicleta Veloretti é construída com os mais altos padrões de qualidade, garantindo durabilidade e desempenho excepcionais.",
                icon: "✨"
              },
              {
                title: "Design",
                description: "Acreditamos que as bicicletas elétricas podem ser tão bonitas quanto funcionais, com um design atemporal que se destaca nas ruas.",
                icon: "🎨"
              },
              {
                title: "Comunidade",
                description: "Construímos uma comunidade global de ciclistas Veloretti que compartilham nossa paixão por mobilidade sustentável.",
                icon: "👥"
              },
              {
                title: "Transparência",
                description: "Somos transparentes em nossas práticas de negócios e nos comunicamos abertamente com nossos clientes e parceiros.",
                icon: "🔍"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Equipe" 
            subtitle="Conheça as pessoas por trás da Veloretti."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "João Silva",
                role: "CEO & Fundador",
                image: "/src/assets/team-1.jpg"
              },
              {
                name: "Maria Oliveira",
                role: "Diretora de Design",
                image: "/src/assets/team-2.jpg"
              },
              {
                name: "Pedro Santos",
                role: "Engenheiro Chefe",
                image: "/src/assets/team-3.jpg"
              },
              {
                name: "Ana Costa",
                role: "Gerente de Sustentabilidade",
                image: "/src/assets/team-4.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Perguntas Frequentes" 
            subtitle="Respostas para as dúvidas mais comuns sobre nossas bicicletas elétricas."
            align="center"
            className="mb-16"
          />
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para se juntar à revolução da mobilidade urbana?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Descubra a bicicleta elétrica perfeita para o seu estilo de vida e transforme sua experiência de deslocamento urbano.
            </p>
            <Button to="/products" size="lg" variant="default">
              Explorar Produtos
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

