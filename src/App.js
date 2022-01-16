import { AlertProvider } from './context/alert/AlertContext';
import About from './pages/About';

function App() {
  return (
    <AlertProvider>
      <About />
    </AlertProvider>
  );
}

export default App;
