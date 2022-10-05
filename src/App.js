import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreatePage from './pages/CreatePage';
import ArchivePage from './pages/ArchivePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
