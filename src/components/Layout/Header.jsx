import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Controla a mudança de estilo do header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header 
        className="fixed w-full z-50 bg-white shadow-md py-4 transition-all duration-300"
        role="banner"
      >

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          VELORETTI
        </Link>

        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Menu principal">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            Produtos
          </NavLink>
          <NavLink 
            to="/cities" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            Cidades
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            Sobre nós
          </NavLink>
        </nav>

        {/* Botão de menu mobile */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md" role="navigation" aria-label="Menu mobile">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 ${isActive ? 'text-black' : 'text-gray-600'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 ${isActive ? 'text-black' : 'text-gray-600'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </NavLink>
            <NavLink 
              to="/cities" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 ${isActive ? 'text-black' : 'text-gray-600'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Cidades
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 ${isActive ? 'text-black' : 'text-gray-600'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nós
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

