
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

import fs from 'fs/promises'
const ruta = 'ejemplo.txt'

await fs.writeFile('ejemplo.txt', 'Hello') //Genero un txt nuevo si no existe, sino lo reemplazo


let datos = await fs.readFile(ruta, 'utf8')
console.log(datos);

await fs.appendFile(ruta, "Hello \n")

await fs.unlink(ruta)
