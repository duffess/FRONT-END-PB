import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Importação das páginas
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CitiesPage from './pages/CitiesPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:productId',
        element: <SingleProductPage />,
      },
      {
        path: 'cities',
        element: <CitiesPage />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
    ],
  },
]);

export default router;

