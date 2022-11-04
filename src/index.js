import express from "express";
import { PORT } from "./config";

const app = express();

app.listen(PORT);
console.log("Corriendo en el puerto 3000");

app.get('/', (req,res)=> {
    res.send('Hola mundo!')
})