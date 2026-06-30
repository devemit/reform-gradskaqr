import { LanguageProvider } from './contexts/language-context';
import MainHeader from './components/navbar/main-header';
import { AppRoutes } from './routes/app-routes';

const App = () => {
  return (
    <LanguageProvider>
      <MainHeader />
      <AppRoutes />
    </LanguageProvider>
  );
};

export default App;
