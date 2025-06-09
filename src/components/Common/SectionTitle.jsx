import { cn } from '../../lib/utils';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'left', 
  className,
  titleClassName,
  subtitleClassName
}) => {
  return (
    <div 
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <h2 
        className={cn(
          'text-3xl md:text-4xl font-bold mb-4',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'text-gray-600 text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

