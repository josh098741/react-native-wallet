import dotenv from "dotenv"
import express from "express"

import { initDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"
import transactionsRoute from "./routes/transactionsRoute.js"

dotenv.config()
const app = express()

//middleware
app.use(rateLimiter)
app.use(express.json())


app.use("/api/transactions", transactionsRoute)

const PORT = process.env.PORT || 5001
const start = async () => {
    try{
        await initDB()
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }catch(error){
        console.log("Error in running Server")
    }
}

start()