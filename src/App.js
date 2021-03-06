import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SolarBody from './pages/SolarBody';
import NasaPhoto from './pages/NasaPhoto';
import Alert from './components/layout/Alert';
import { AlertProvider } from './context/alert/AlertContext';
import { SolarProvider } from './context/solar/SolarContext';
import { PhotoProvider } from './context/photo/PhotoContext';

function App() {
  return (
    <SolarProvider>
      <AlertProvider>
        <PhotoProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen'>
              <Navbar />
              <main className='container mx-auto px- pb-12'>
                <Alert />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/solarbody/:id' element={<SolarBody />} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='/nasa' element={<NasaPhoto />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </PhotoProvider>
      </AlertProvider>
    </SolarProvider>
  );
}

export default App;
