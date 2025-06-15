import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Importação das páginas
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CitiesPage from './pages/CitiesPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import CookiePolicy from './pages/CookiePolicy';
import LegalPage from './pages/LegalPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsPage from './pages/TermsPage';
import WarrantyPage from './pages/WarrantyPage';

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
      {
        path: 'legalpage',
        element:<LegalPage/>
      },
      {
        path: 'privacypolicy',
        element:<PrivacyPolicy/>
      },
      {
        path: 'termspage',
        element:<TermsPage/>
      },
      {
        path: 'warrantypage',
        element:<WarrantyPage/>
      },
      {
        path: 'cookiepolicy',
        element:<CookiePolicy/>
      },
    ],
  },
]);

export default router;

