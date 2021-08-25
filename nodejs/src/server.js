/*
* © Copyright 2021 SfJwmy4A_test@oncosmos.com
* MIT License
*
*/

const express = require('express');
const app = express();
const ConsulConfig = require('./consulconfig');
const consul = new ConsulConfig();

const ID_SRV = process.env.ID_SERV || "";
const SERVICE_CONTAINER_IP = process.env.SERVICE_CONTAINER_IP || "";
const HOSTNAME_REAL = process.env.HOSTNAME_REAL || "";
const HOSTNAME_CONTAINER = process.env.HOSTNAME_CONTAINER || "";
const SERVICE_NAME="nodeapp";
const SERVICE_ID="m_"+ID_SRV;
const SCHEMA='http';
//const PORT=process.argv[2]*1;

app.get('/health',(req,res) =>{

   res.end("OK.")
   
});

app.get('/', (req, res) => {
  
  let texto=`<H1>Servicio ${SERVICE_ID} nombre: ${SERVICE_NAME} real hostname: ${HOSTNAME_REAL} service ip: ${SERVICE_CONTAINER_IP}</H1>`
  
  consul.getAgent().service.list(function(err,result){
     
      if (err){
         throw err
      }
      res.end('Hello from App Engine! <br>'+texto+"<br>"+JSON.stringify(result));

   })
   
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}...`);
});


//Registro de servicios

let check ={
   //id: SERVICE_ID,
   name: SERVICE_NAME,
   //address: HOSTNAME_CONTAINER,
   port: PORT,
   tags: ["web"],
   chek: {
      http: SCHEMA+"://"+HOSTNAME_REAL+":"+PORT+'/health',
      ttl:'5s',
      interval: '5s',
      timeout: '5s',
      deregistercriticalserviceafter:'1m'
   }  
};

//Registro servicio
consul.getAgent().service.register(check,function(err){
   if (err){
      throw err
   }
});
