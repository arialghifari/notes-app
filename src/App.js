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
import { ThemeProvider } from './context/ThemeContext';
import { useMemo, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeContextValue = useMemo(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return { theme, toggleTheme };
  }, [theme]);

  return (
    <>
      <ThemeProvider value={themeContextValue}>
        <header>
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/archived'
              element={
                <ProtectedRoute>
                  <ArchivedPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/create'
              element={
                <ProtectedRoute>
                  <CreatePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/detail/:id'
              element={
                <ProtectedRoute>
                  <DetailPage />
                </ProtectedRoute>
              }
            />

            <Route
              path='/login'
              element={
                <ProtectedRoute loginOnlyPage={false}>
                  <LoginPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/register'
              element={
                <ProtectedRoute loginOnlyPage={false}>
                  <RegisterPage />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
