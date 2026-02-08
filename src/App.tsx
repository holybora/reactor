import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';

/**
 * Main App component with routing configuration
 * Sets up React Router and defines all application routes
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
