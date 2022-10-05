import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreatePage from './pages/CreatePage';
import ArchivedPage from './pages/ArchivedPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archived' element={<ArchivedPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
