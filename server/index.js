import dotenv from 'dotenv'
import express from "express"
import connectToDatabase from "./database.js"
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectToDatabase()
const app = express()
app.use(express.json())

const port =process.env.PORT || 5001;

app.use('/api/users',userRoutes)

app.use("/api/products",productRoutes)

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})