import { Link } from 'react-router-dom';
import { Button } from '../components/Common/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button to="/" size="lg">
          Voltar para a página inicial
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

