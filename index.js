const express = require("express")
const app = express()
const port = 4000

app.get("/" , ( req , res ) => {
    res.json({ message : "Hello from server" , Method : " Publishing Docker image on Docker hub using Jenkins pipeline. " })
})

app.listen( port , ()=>{
    console.log("Server is listening on port 4000.");
})