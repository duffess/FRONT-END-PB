import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

const TestimonialCard = ({ 
  testimonial, 
  className,
  variant = 'default', // 'default' ou 'featured'
}) => {
  const { name, location, rating, text, image } = testimonial;

  // Renderiza as estrelas com base na avaliação
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={cn(
            'w-4 h-4',
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          )} 
        />
      );
    }
    return stars;
  };

  return (
    <div 
      className={cn(
        'bg-white p-6 shadow-md',
        variant === 'featured' ? 'md:p-8' : '',
        className
      )}
    >
      {/* Cabeçalho do depoimento */}
      <div className="flex items-center mb-4">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          {location && <p className="text-sm text-gray-600">{location}</p>}
        </div>
      </div>

      {/* Avaliação em estrelas */}
      {rating && (
        <div className="flex mb-4">
          {renderStars(rating)}
        </div>
      )}

      {/* Texto do depoimento */}
      <p className={cn(
        'text-gray-700',
        variant === 'featured' ? 'text-lg' : ''
      )}>
        "{text}"
      </p>
    </div>
  );
};

export default TestimonialCard;

