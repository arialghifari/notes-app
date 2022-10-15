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
import { LocaleProvider } from './context/LocaleContext';

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );
  const [locale, setLocale] = useState(
    () => localStorage.getItem('locale') || 'en'
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLocale = () => {
    setLocale((prevTheme) => (prevTheme === 'en' ? 'id' : 'en'));
  };

  const themeContextValue = useMemo(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return { theme, toggleTheme };
  }, [theme]);

  const localeContextValue = useMemo(() => {
    localStorage.setItem('locale', locale);

    return { locale, toggleLocale };
  }, [locale]);

  return (
    <>
      <ThemeProvider value={themeContextValue}>
        <LocaleProvider value={localeContextValue}>
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
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
