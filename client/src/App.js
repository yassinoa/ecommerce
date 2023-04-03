import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import ProductsScreens from './screens/ProductsScreens';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
          <Route path='/products' element={<ProductsScreens/>} />
          </Routes>
           </main>
      </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
