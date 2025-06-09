import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Definindo as variantes do botão usando class-variance-authority
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-none font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-gray-800",
        outline: "border border-black bg-transparent text-black hover:bg-black hover:text-white",
        ghost: "bg-transparent text-black hover:bg-gray-100",
        red: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-4 py-1 text-sm",
        lg: "h-14 px-8 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size, fullWidth, href, to, ...props }, ref) => {
    // Se for um link interno (react-router)
    if (to) {
      return (
        <Link
          to={to}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref}
          {...props}
        />
      );
    }
    
    // Se for um link externo
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref}
          {...props}
        />
      );
    }
    
    // Caso contrário, é um botão normal
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

