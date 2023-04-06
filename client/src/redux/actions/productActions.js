import axios from "axios"
import {setProducts,setError,setLoading} from "../slices/products"

export const getProducts=()=> async(dispatch)=>{
  dispatch(setLoading(true))
  try {
    const {data}= await axios.get('/api/products')
    dispatch( setProducts(data))
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ?error.response.data.message
          :error.response
          ?error.response
          :"An unaxepted error has occured. Please try again later"
      )
    )
  }
}