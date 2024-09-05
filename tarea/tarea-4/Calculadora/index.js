import { createContext } from "vm";
import { readFile, appendFile, open, writeFile, write, unlink } from "fs"

const readStream= createReadStream('./data.txt')
readStream.on('data', (chunk) => {
    console.log('===============================================');
     console.log(chunk);
    console.log('===============================================');
})

readStream.open('open', ()=>{
    console.log('Stream opened');
    
})
readStream.open('end', ()=>{
    console.log('Stream closed');
    
})