//const { default: Oferta } = require("../entities/Oferta");

// import y export
import Oferta from '../entities/Oferta.js'

const ofertas = [
    new Oferta("Programador/a backend", "Trabajo con PHP y nodejs"),
    new Oferta("Programador/a frontend", "Trabajo JavaScript"),
    new Oferta("test", "test"),
    new Oferta("test", "test2")
]

export {ofertas}