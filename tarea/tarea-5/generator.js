// import { createReadStream } from 'fs'
import { readFile, appendFile, open, writeFile, write, unlink } from "fs"


const numerosMil= [];
for(let i =1; i <=1000; i++){
    numerosMil.push(i)
}

writeFile('numeros.txt', `${numerosMil}`, (error) => {
    if(error) console.log(error)
    else console.log("file updated")
})



