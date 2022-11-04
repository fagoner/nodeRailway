import express from "express";
import schedule from "node-schedule"


const app = express();
const PORT = process.env.PORT || 3000;
const job = schedule.scheduleJob('*/10 * * * *', function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
  });


app.get('/', (req,res)=> {
    res.send('Hola mundo!')
    
})

app.listen(PORT);
console.log(`Corriendo en el puerto ${PORT}`);