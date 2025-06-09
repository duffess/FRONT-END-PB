import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

import SectionTitle from '../components/Common/SectionTitle';
import ProductCard from '../components/UI/ProductCard';
import { products } from '../data/mockData';
import { filterProducts, sortProducts } from '../lib/utils';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    color: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Efeito para filtrar e ordenar produtos quando os filtros ou ordenação mudam
  useEffect(() => {
    let result = [...products];
    
    // Aplicar filtros
    if (searchTerm || filters.category || filters.minPrice || filters.maxPrice || filters.color) {
      result = filterProducts(result, {
        ...filters,
        searchTerm,
        minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
        maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined
      });
    }
    
    // Aplicar ordenação
    result = sortProducts(result, sortBy);
    
    setFilteredProducts(result);
  }, [searchTerm, sortBy, filters]);

  // Manipulador para limpar todos os filtros
  const handleClearFilters = () => {
    setSearchTerm('');
    setSortBy('default');
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      color: ''
    });
  };

  // Manipulador para atualizar filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossas Bicicletas Elétricas" 
          subtitle="Descubra a bicicleta elétrica perfeita para o seu estilo de vida urbano."
        />

        {/* Barra de pesquisa e filtros */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-black text-white"
            >
              <Filter size={18} />
              Filtros
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="default">Ordenar por</option>
              <option value="price-asc">Preço: Menor para Maior</option>
              <option value="price-desc">Preço: Maior para Menor</option>
              <option value="name-asc">Nome: A-Z</option>
              <option value="name-desc">Nome: Z-A</option>
            </select>
          </div>
        </div>

        {/* Painel de filtros (visível apenas quando isFilterOpen é true) */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-6 border border-gray-300 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Filtro por categoria */}
              <div>
                <label className="block text-sm font-medium mb-2">Categoria</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option value="">Todas</option>
                  <option value="electric">Elétricas</option>
                  <option value="urban">Urbanas</option>
                  <option value="sport">Esportivas</option>
                </select>
              </div>
              
              {/* Filtro por preço mínimo */}
              <div>
                <label className="block text-sm font-medium mb-2">Preço Mínimo</label>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="€"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              {/* Filtro por preço máximo */}
              <div>
                <label className="block text-sm font-medium mb-2">Preço Máximo</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="€"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              {/* Filtro por cor */}
              <div>
                <label className="block text-sm font-medium mb-2">Cor</label>
                <select
                  name="color"
                  value={filters.color}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                >
                  <option value="">Todas</option>
                  <option value="#000000">Preto</option>
                  <option value="#FFFFFF">Branco</option>
                  <option value="#FF0000">Vermelho</option>
                  <option value="#00FF00">Verde</option>
                  <option value="#0000FF">Azul</option>
                  <option value="#808080">Cinza</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 text-sm text-gray-600 hover:text-black"
              >
                Limpar Filtros
              </button>
            </div>
          </motion.div>
        )}

        {/* Lista de produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">Nenhum produto encontrado com os filtros selecionados.</p>
            <button
              onClick={handleClearFilters}
              className="mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

