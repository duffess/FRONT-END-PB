import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Button } from '../Common/Button';

const ProductCard = ({ 
  product, 
  className,
  variant = 'default', // 'default' ou 'featured'
}) => {
  const { id, name, price, image, colors = [] } = product;

  return (
    <div 
      className={cn(
        'group',
        variant === 'featured' ? 'flex flex-col md:flex-row gap-8' : '',
        className
      )}
      role="article"
      aria-labelledby={`product-${id}-title`}
    >
      {/* Imagem do produto */}
      <div 
        className={cn(
          'relative overflow-hidden bg-gray-100',
          variant === 'featured' ? 'md:w-1/2' : 'aspect-square mb-4'
        )}
      >
        <Link to={`/products/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Informações do produto */}
      <div className={cn(
        variant === 'featured' ? 'md:w-1/2 flex flex-col justify-center' : ''
      )}>
        <h3 className="text-xl font-semibold mb-2" id={`product-${id}-title`}>
          <Link to={`/products/${id}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        
        <p className="text-lg font-medium mb-4">€{price}</p>
        
        {/* Cores disponíveis */}
        {colors.length > 0 && (
          <div className="flex gap-2 mb-4">
            {colors.map((color, index) => (
              <div 
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={`Color option ${index + 1}`}
                role="img"
                aria-label={`Color option ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Botão de compra */}
        {variant === 'featured' ? (
          <div className="mt-4">
            <Button to={`/products/${id}`} size="lg">
              Ver detalhes
            </Button>
          </div>
        ) : (
          <Button to={`/products/${id}`} variant="outline" fullWidth>
            Ver detalhes
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

