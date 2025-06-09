import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes do Tailwind de forma eficiente, evitando duplicações
 * @param {...string} inputs - Classes CSS a serem combinadas
 * @returns {string} - String de classes CSS combinadas
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formata um preço para exibição
 * @param {number} price - Preço a ser formatado
 * @param {string} currency - Símbolo da moeda (padrão: '€')
 * @returns {string} - Preço formatado
 */
export function formatPrice(price, currency = '€') {
  return `${currency}${price.toFixed(2)}`;
}

/**
 * Trunca um texto para um tamanho máximo
 * @param {string} text - Texto a ser truncado
 * @param {number} maxLength - Tamanho máximo do texto
 * @returns {string} - Texto truncado
 */
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Gera um ID único
 * @returns {string} - ID único
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Filtra um array de produtos com base em critérios
 * @param {Array} products - Array de produtos
 * @param {Object} filters - Critérios de filtragem
 * @returns {Array} - Produtos filtrados
 */
export function filterProducts(products, filters = {}) {
  return products.filter(product => {
    // Filtra por preço
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    
    // Filtra por categoria
    if (filters.category && product.category !== filters.category) return false;
    
    // Filtra por cor
    if (filters.color && !product.colors.includes(filters.color)) return false;
    
    // Filtra por termo de busca
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    return true;
  });
}

/**
 * Ordena um array de produtos
 * @param {Array} products - Array de produtos
 * @param {string} sortBy - Critério de ordenação
 * @returns {Array} - Produtos ordenados
 */
export function sortProducts(products, sortBy = 'default') {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sortedProducts;
  }
}

