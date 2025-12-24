import express from "express"
import dotenv from "dotenv"
import { sql } from "./config/db.js"


dotenv.config()
const app = express()

async function initDB(){
    try{
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NULL DEFAULT CURRENT_DATE
        )`

        console.log("Database initialized successfully")
    }catch(error){
        console.log("Error initializing DB", error)
        process.exit(1)
    }
}

//  Decimal (10,2)
//  means: a fixed point number with:
//  10 digits total
//  2 digits after the decimal point
//  so the max value can be 99999999.99 (8 digits before the decimal, 2 after)

app.get("/", (req,res) => {
    res.send("We are cooking something")
})

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