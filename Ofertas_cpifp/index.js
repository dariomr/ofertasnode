
import express from 'express'

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','ejs')
app.use(express.static('./public')); //directorio público para estilos e imágenes

import Oferta from './entities/Oferta.js';
import {ofertas} from './data/ofertas.js' //listado de ofertas

//vista con la lista simple y filtrada
app.get('/',(req,res)=>{
    let arrayOfertas = []
    let arrayFiltrado = []
    let nombre = req.query.oferta
    console.log(nombre)

    if(nombre) {
        for(let i = 0; i < ofertas.length; i++) { 
            let oferta = ofertas[i];
            if (oferta.nombre == nombre) {
                arrayFiltrado.push(oferta.nombre, oferta.descripcion)
                res.render('index',{ofertas: arrayFiltrado})
            }
        }
    } 
    else {
        arrayOfertas = [...ofertas]
        res.render('index',{ofertas: arrayOfertas})
    }
})

app.post('/',(req,res)=>{
    const {nombre, descripcion} = req.body
    const newOferta = new Oferta(nombre, descripcion)
    res.render('index', {ofertas: [...ofertas, newOferta]})
})

app.get('/nuevo',(req,res)=>{
    res.render('form')
})

app.listen(8070,()=>{
    console.log('server started')
})
