import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e informações da empresa */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">VELORETTI</Link>
            <p className="text-gray-400 text-sm mt-4">
                Projetado em Amsterdã. Funcional na Europa. Sustentável em todas as cidades.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-white hover:text-gray-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-white hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Links de navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-white text-sm">Produtos</Link></li>
                <li><Link to="/cities" className="text-gray-400 hover:text-white text-sm">Cidades</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">Sobre nós</Link></li>
              </ul>
            </nav>
          </div>

          {/* Links legais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <nav aria-label="Legal links">
              <ul className="space-y-2">
                <li><Link to="/termspage" className="text-gray-400 hover:text-white text-sm">Termos e Condições</Link></li>
                <li><Link to="/privacypolicy" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</Link></li>
                <li><Link to="/cookiepolicy" className="text-gray-400 hover:text-white text-sm">Politica de Cookies</Link></li>
                <li><Link to="/warrantypage" className="text-gray-400 hover:text-white text-sm">Garantia</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Email: info@veloretti.com</li>
              <li className="text-gray-400 text-sm">Telefone: +55 21 97123-5386</li>
              <li className="text-gray-400 text-sm">Endereço: Prinsengracht 290, Amsterdam</li>
            </ul>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Veloretti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

