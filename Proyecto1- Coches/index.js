const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/formulario', (req,res) => {
    res.render('index')
})

app.listen(8080,()=>{
    console.log('server started')
})
