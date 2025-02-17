require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')


//Router van aqui por ejemplo:
//const userRouter = require('./controllers/usuario')
//const tareaRouter = require('./controllers/actividad')
const userRouter = require('./controllers/users')

//dependencias
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')


//Conexion a la BD (El mongoose se puede poner aqui pero lo puse arriba)
try{
    mongoose.connect(process.env.MONGO_URL)
    console.log('Conexion a BD correcta PROYECTO FINAL')
} catch(error) {
    console.log(error)
}




//crear rutas de front end localhost
app.use('/',express.static(path.resolve('views','home')))
app.use('/components',express.static(path.resolve('views','components')))
app.use('/registro',express.static(path.resolve('views','registro')))
app.use('/login',express.static(path.resolve('views','login')))
app.use('/images',express.static(path.resolve('img')))


app.use(express.json()); //esto para que lo pase como json, sino que tambien este activa
//definirlo siempre, para cuando se haga el contentains reconozca el json
//si esto no lo tenemos no va a funcionar cookie-parser y morgan
//
app.use(cors());
app.use(cookieParser())
app.use(morgan('tiny')) //tiene que tener el tiny porque viene predefinida
//lo primero que debo hacer antes de enviar a la bd es validar


//crear rutas de backend 
app.use('/api/users',userRouter)


module.exports = app;