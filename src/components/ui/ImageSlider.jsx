import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

// Importando os estilos do slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ 
  images, 
  className,
  showArrows = true,
  showDots = true,
  autoplay = false,
  autoplaySpeed = 5000,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive = [],
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Configurações padrão do slider
  const settings = {
    dots: showDots,
    arrows: false, // Desativamos as setas padrão e usamos nossas próprias
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: responsive.length > 0 ? responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: Math.min(slidesToScroll, 2),
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    ...props
  };

  // Funções para navegar entre os slides
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={cn('relative', className)} role="region" aria-roledescription="carousel" aria-label="Product images">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none" role="group" aria-roledescription="slide" aria-label={`Slide ${index + 1} of ${images.length}`}>
            <img 
              src={image.src} 
              alt={image.alt || `Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Setas de navegação personalizadas */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Indicador de slide atual (opcional) */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;

