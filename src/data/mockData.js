// Dados mockados para o site Veloretti

// Slides do Hero
export const heroSlides = [
  {
    src: '/src/assets/hero-1.jpg',
    alt: 'Bicicleta elétrica Veloretti em ambiente urbano'
  },
  {
    src: '/src/assets/hero-2.jpg',
    alt: 'Pessoa andando de bicicleta elétrica Veloretti'
  },
  {
    src: '/src/assets/hero-3.jpg',
    alt: 'Bicicleta elétrica Veloretti estacionada'
  }
];

// Produtos
export const products = [
  {
    id: 1,
    name: 'Ace',
    price: 2399,
    description: 'A bicicleta elétrica perfeita para o ciclista urbano. Com motor potente e bateria de longa duração, a Ace é ideal para deslocamentos diários.',
    category: 'electric',
    colors: ['#000000', '#FFFFFF', '#FF0000'],
    features: [
      'Motor de 250W',
      'Bateria de 504Wh',
      'Autonomia de até 80km',
      'Velocidade máxima de 25km/h',
      'Peso de 21kg'
    ],
    images: [
      '/src/assets/ace-1.jpg',
      '/src/assets/ace-2.jpg',
      '/src/assets/ace-3.jpg'
    ],
    image: '/src/assets/ace-1.jpg',
    inStock: true
  },
  {
    id: 2,
    name: 'Ivy',
    price: 2199,
    description: 'Elegante e versátil, a Ivy é perfeita para quem busca estilo e funcionalidade. Com design minimalista e tecnologia avançada.',
    category: 'electric',
    colors: ['#000000', '#FFFFFF', '#00FF00'],
    features: [
      'Motor de 250W',
      'Bateria de 450Wh',
      'Autonomia de até 70km',
      'Velocidade máxima de 25km/h',
      'Peso de 19kg'
    ],
    images: [
      '/src/assets/ivy-1.jpg',
      '/src/assets/ivy-2.jpg',
      '/src/assets/ivy-3.jpg'
    ],
    image: '/src/assets/ivy-1.jpg',
    inStock: true
  },
  {
    id: 3,
    name: 'Bolt',
    price: 2599,
    description: 'Para os amantes de velocidade e aventura, a Bolt oferece desempenho superior e design arrojado. Ideal para trajetos longos e terrenos variados.',
    category: 'electric',
    colors: ['#000000', '#0000FF', '#FF0000'],
    features: [
      'Motor de 350W',
      'Bateria de 600Wh',
      'Autonomia de até 100km',
      'Velocidade máxima de 25km/h',
      'Peso de 23kg'
    ],
    images: [
      '/src/assets/bolt-1.jpg',
      '/src/assets/bolt-2.jpg',
      '/src/assets/bolt-3.jpg'
    ],
    image: '/src/assets/bolt-1.jpg',
    inStock: false
  },
  {
    id: 4,
    name: 'Urban',
    price: 1999,
    description: 'A companheira perfeita para a cidade. Leve, ágil e com design moderno, a Urban é ideal para quem busca praticidade no dia a dia.',
    category: 'electric',
    colors: ['#FFFFFF', '#000000', '#808080'],
    features: [
      'Motor de 200W',
      'Bateria de 400Wh',
      'Autonomia de até 60km',
      'Velocidade máxima de 25km/h',
      'Peso de 18kg'
    ],
    images: [
      '/src/assets/urban-1.jpg',
      '/src/assets/urban-2.jpg',
      '/src/assets/urban-3.jpg'
    ],
    image: '/src/assets/urban-1.jpg',
    inStock: true
  }
];

// Produtos em destaque
export const featuredProducts = products.slice(0, 2);

// Depoimentos
export const testimonials = [
  {
    name: 'João Silva',
    location: 'São Paulo, Brasil',
    rating: 5,
    text: 'Minha Veloretti Ace transformou meus deslocamentos diários. Agora chego ao trabalho sem suar e economizo muito tempo. O design é incrível e todos perguntam sobre ela!',
    image: '/src/assets/testimonial-1.jpg'
  },
  {
    name: 'Maria Oliveira',
    location: 'Rio de Janeiro, Brasil',
    rating: 4,
    text: 'A Ivy é simplesmente perfeita para a cidade. Leve, ágil e com uma bateria que dura muito mais do que eu esperava. Melhor investimento que fiz nos últimos anos.',
    image: '/src/assets/testimonial-2.jpg'
  },
  {
    name: 'Pedro Santos',
    location: 'Belo Horizonte, Brasil',
    rating: 5,
    text: 'Já tive outras bicicletas elétricas, mas a qualidade da Veloretti é incomparável. O suporte ao cliente também é excelente. Recomendo a todos!',
    image: '/src/assets/testimonial-3.jpg'
  }
];

// Cidades
export const cities = [
  {
    name: 'São Paulo',
    country: 'Brasil',
    image: '/src/assets/city-saopaulo.jpg',
    description: 'A maior cidade do Brasil agora conta com uma rede crescente de ciclovias e ciclistas Veloretti.'
  },
  {
    name: 'Rio de Janeiro',
    country: 'Brasil',
    image: '/src/assets/city-rio.jpg',
    description: 'As bicicletas Veloretti são perfeitas para explorar as belas paisagens do Rio de Janeiro.'
  },
  {
    name: 'Amsterdã',
    country: 'Holanda',
    image: '/src/assets/city-amsterdam.jpg',
    description: 'Nossa cidade natal, onde as bicicletas Veloretti foram projetadas e testadas.'
  },
  {
    name: 'Lisboa',
    country: 'Portugal',
    image: '/src/assets/city-lisbon.jpg',
    description: 'As colinas de Lisboa não são mais um problema com as bicicletas elétricas Veloretti.'
  }
];

// Perguntas frequentes
export const faqs = [
  {
    question: 'Qual é a autonomia das bicicletas Veloretti?',
    answer: 'A autonomia varia de acordo com o modelo, mas em média nossas bicicletas elétricas podem percorrer entre 60km e 100km com uma única carga, dependendo do modo de assistência utilizado e das condições do terreno.'
  },
  {
    question: 'As bicicletas Veloretti são legais no Brasil?',
    answer: 'Sim, todas as nossas bicicletas elétricas estão em conformidade com a legislação brasileira, que permite bicicletas elétricas com motor de até 350W e velocidade máxima de 25km/h.'
  },
  {
    question: 'Quanto tempo leva para carregar a bateria?',
    answer: 'O tempo de carregamento completo é de aproximadamente 4 a 6 horas, dependendo do modelo da bicicleta e da capacidade da bateria.'
  },
  {
    question: 'Vocês oferecem garantia?',
    answer: 'Sim, oferecemos garantia de 2 anos para o quadro e componentes elétricos, e 1 ano para os demais componentes, conforme os termos e condições disponíveis em nosso site.'
  },
  {
    question: 'Como funciona a entrega?',
    answer: 'Realizamos entregas para todo o Brasil. O prazo de entrega varia de acordo com a região, mas geralmente é de 7 a 15 dias úteis. A bicicleta é entregue parcialmente montada, com instruções detalhadas para a montagem final.'
  }
];

