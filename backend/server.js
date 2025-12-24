import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.get("/", (req,res) => {
    res.send("We are cooking something")
})

const PORT = process.env.PORT
const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }catch(error){
        console.log("Error in running Server")
    }
}

start()