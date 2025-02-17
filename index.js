const app = require('./app')
const http = require('http')
const server = http.createServer(app)

server.listen(3000,()=>{
    console.log('ESTA CORRIENDO EL SERVIDOR-ACTIVO MODULO 7!!')
})



 