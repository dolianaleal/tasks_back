
/*
import { error } from 'console'
import fs from 'fs'

const ruta = 'ejemplo.txt'
*/

/*
//fs.writeFileSync('ejemplo.txt','Hello') //Genero un txt nuevo si no existe, sino lo reemplazo

if (fs.existsSync(ruta)) {

    let datos = fs.readFileSync(ruta, 'utf8')
    console.log(datos);

    fs.appendFileSync(ruta,"Hello \n")

    fs.unlinkSync(ruta)
} 
    */

/*
fs.writeFile(ruta, 'Hola', (error) => {

    if (error)
        console.log("Error al escribir archivo")
    fs.readFile (ruta,'utf8', (error) => {
        if (error)
            console.log("Error en la lectura del archivo")
        fs.appendFile(ruta, 'Hola \n', (error) => {
            if (error)
                console.log("Error en modificar archivo")
            fs.unlink(ruta, (error) => {
                if(error)
                    console.log("Error en la eliminacion de archivo")
            })
        })
    })

})
*/

//----------- 2nd task

/*
import fs from 'fs/promises'
const ruta = 'ejemplo.txt'

await fs.writeFile('ejemplo.txt', 'Hello') //Genero un txt nuevo si no existe, sino lo reemplazo


let datos = await fs.readFile(ruta, 'utf8')
console.log(datos);

await fs.appendFile(ruta, "Hello \n")

await fs.unlink(ruta)

*/

import fs from 'fs/promises'
import crypto from 'crypto'
const ruta = 'productos.json'

const leerProductos = async () => {
    try {
        const data = await fs.readFile(ruta, 'utf8') //Lo leo como un JSON
        const productos = JSON.parse(data)
        console.log(productos)
        return productos

    } catch (error) {
        console.log("Error en lectura de productos", error)

    }


}

const agregarProductos = async (nuevoProducto) => {

    try {
        const prods = await leerProductos()
        prods.push(nuevoProducto) // Al transformalo de JSON a objeto, lo puedo tratar como un array de js
        await fs.writeFile(ruta, JSON.stringify(prods)) // Para guardarlo lo vuelvo a transformar en JSON
        console.log("Producto almacenado")     
    } catch (error) {
        console.log("Error al agregar producto:", error)
    }
}

const newProduct = {
    id: crypto.randomBytes(5).toString('hex'), //genero ID unico
    nombre: "Arroz",
    marca: "Test",
    precio: 100,
    stock: 10
}

agregarProductos(newProduct)
