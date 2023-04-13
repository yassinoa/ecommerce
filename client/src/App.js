import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import ProductsScreens from './screens/ProductsScreens';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        
        <main>
          <Routes>
            <Route path='/products' element={<ProductsScreens/>} />
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/cart' element={<CartScreen/>} />
          </Routes>
           </main>
      </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
