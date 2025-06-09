import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Check, ShoppingCart } from 'lucide-react';

import { Button } from '../components/Common/Button';
import ImageSlider from '../components/UI/ImageSlider';
import ProductCard from '../components/UI/ProductCard';
import { products } from '../data/mockData';

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efeito para rolar para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Efeito para buscar o produto e produtos relacionados
  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === Number(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors[0]);
        
        // Encontrar produtos relacionados (excluindo o produto atual)
        const related = products
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 3);
        
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }, 500);
  }, [productId]);

  // Manipulador para aumentar a quantidade
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Manipulador para diminuir a quantidade
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Manipulador para adicionar ao carrinho
  const handleAddToCart = () => {
    // Aqui seria implementada a lógica de adicionar ao carrinho
    console.log('Adicionado ao carrinho:', {
      product,
      color: selectedColor,
      quantity
    });
    
    // Exibir uma mensagem de sucesso (em uma implementação real, usaríamos um toast)
    alert('Produto adicionado ao carrinho!');
  };

  // Renderiza o conteúdo da página
  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <p className="text-gray-600 mb-8">O produto que você está procurando não existe ou foi removido.</p>
          <Button to="/products" variant="default">
            Voltar para produtos
          </Button>
        </div>
      </div>
    );
  }

  // Preparar as imagens para o slider
  const sliderImages = product.images.map(src => ({
    src,
    alt: product.name
  }));

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Navegação de volta */}
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-black">
            <ChevronLeft size={20} />
            <span>Voltar para produtos</span>
          </Link>
        </div>

        {/* Detalhes do produto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galeria de imagens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageSlider 
              images={sliderImages} 
              className="w-full aspect-square"
            />
          </motion.div>

          {/* Informações do produto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">€{product.price}</p>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {/* Status de estoque */}
            <div className="mb-6">
              <p className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? (
                  <>
                    <Check size={18} className="mr-2" />
                    Em estoque
                  </>
                ) : (
                  'Fora de estoque'
                )}
              </p>
            </div>
            
            {/* Seleção de cor */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Cor</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Selecionar cor ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Seleção de quantidade */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Quantidade</h3>
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="w-12 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Botão de adicionar ao carrinho */}
            <Button
              onClick={handleAddToCart}
              variant="default"
              size="lg"
              fullWidth
              disabled={!product.inStock}
              className="mb-6"
            >
              <ShoppingCart size={20} className="mr-2" />
              Adicionar ao carrinho
            </Button>
            
            {/* Características do produto */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Produtos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Produtos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;

