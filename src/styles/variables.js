/**
 * Variáveis de estilo extraídas do design do Figma para o site Veloretti
 * Este arquivo contém as cores, tipografia e outras variáveis de estilo
 * que serão utilizadas em toda a aplicação para manter consistência visual.
 */

export const colors = {
  // Cores principais
  primary: {
    main: '#000000', // Preto principal
    light: '#333333',
    dark: '#000000',
  },
  secondary: {
    main: '#FFFFFF', // Branco
    light: '#F5F5F5',
    dark: '#E0E0E0',
  },
  accent: {
    main: '#FF0000', // Vermelho para elementos de destaque
    light: '#FF3333',
    dark: '#CC0000',
  },
  background: {
    main: '#FFFFFF',
    light: '#F9F9F9',
    dark: '#F0F0F0',
  },
  text: {
    primary: '#000000',
    secondary: '#666666',
    light: '#999999',
  },
};

export const typography = {
  fontFamily: {
    primary: '"Inter", sans-serif',
    secondary: '"Helvetica", "Arial", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem', // 30px
    '3xl': '2.25rem',  // 36px
    '4xl': '3rem',     // 48px
    '5xl': '3.75rem',  // 60px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem',   // 48px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',  // 2px
  md: '0.25rem',   // 4px
  lg: '0.5rem',    // 8px
  xl: '1rem',      // 16px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const zIndex = {
  behind: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
};

