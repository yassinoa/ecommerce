import { Box, Center, Wrap, WrapItem } from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import {products} from '../products'

const ProductsScreens = () => {
  return (
    <Wrap spacing="30px" justify="center" >
      {products.map((product)=>(
        <Box key={product._id}>
          <Center w="250px" h="550px">
            <ProductCard product={product} />
          </Center>
        </Box>
      ))}
    </Wrap>
  )
}

export default ProductsScreens