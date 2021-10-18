const express = require('express')
const app = express()

app.set('view engine','ejs')

// ruta o path, requestHandler
app.get('/',(req,res)=>{
    const elements = ['Uno', 'Dos', 'Tres', 'Cuatro']
    // view, options
    res.render('index',{elements: elements})
})

app.get('/profiles', (req,res)=>{
    const persona = {
        nombre : 'dario',
        intereses: 'nodejs, ejs'
    }
    const persona2 = {
        nombre : 'jorge',
        intereses: 'react, nodejs'
    }
    res.render('profiles',{persona, persona2}) // actualmente, si se envía la variable como valor, crea una clave con el mismo nombre
    //por ello, en profile.ejs accedemos con la clave persona
})

app.listen(8080,()=>{
    console.log('server started')
})