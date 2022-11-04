import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=> {
    res.send('Hola mundo!')
    
})

app.listen(PORT);
console.log(`Corriendo en el puerto ${PORT}`);