import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreatePage from './pages/CreatePage';
import ArchivedPage from './pages/ArchivedPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path='/archived' element={<ProtectedRoute><ArchivedPage /></ProtectedRoute>} />
          <Route path='/create' element={<ProtectedRoute><CreatePage /></ProtectedRoute>} />
          <Route path='/detail/:id' element={<ProtectedRoute><DetailPage /></ProtectedRoute>} />
          
          <Route path='/login' element={<ProtectedRoute loginOnlyPage={false}><LoginPage /></ProtectedRoute>} />
          <Route path='/register' element={<ProtectedRoute loginOnlyPage={false}><RegisterPage /></ProtectedRoute>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
