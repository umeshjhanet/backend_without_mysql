
const express = require('express');
var cors = require('cors')


const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}

app.use(cors(corsOrigin));
app.use(cors())


const app = express ();
app.use(express.json());

var corsOptions = {
  origin: 'backend-nodejs-nine.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", 3001);
  });
  app.get("/users", cors(corsOptions), (request, response) => {
    const status = [
       {
        id:1,
        username:'Pooja',
        password: '7303665110',
       },
       {
        id:2,
        username:'Sharma',
        password: '7303665110',
       },

     ] ;
    
    response.json(status);
 });