import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import ProductsScreens from './screens/ProductsScreens';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        
        <main>
          <Routes>
          <Route path='/' element={<LandingScreen/>} />
            <Route path='/products' element={<ProductsScreens/>} />
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/cart' element={<CartScreen/>} />
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/registration' element={<RegistrationScreen/>} />
            <Route path='/profile' element={<ProfileScreen/>} />
          </Routes>
           </main>
           <Footer/>
      </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
