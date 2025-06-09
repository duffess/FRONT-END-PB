import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;

