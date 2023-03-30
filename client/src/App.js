import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <main> </main>
      </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
