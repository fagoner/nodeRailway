import express from "express";

const app = express();

app.listen(300);
console.log("Corriendo en el puerto 3000");

app.get('/', (req,res)=> {
    res.send('Hola mundo!')
})