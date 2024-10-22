
const fs = require('node:fs');
const { start } = require('node:repl');
const path=require('path');

fs.readFile('./start.txt','utf8',(err,data)=>{
    if(err)throw(err)
        console.log(data)
})

fs.writeFile(path.join(__dirname,'testwring.txt'),"writing is working here",(err)=>{
    if(err)throw(err)
        console.log('writing completed')
fs.appendFile(path.join(__dirname,'testwring.txt'),'\n\nupdating is working',(err)=>{
    if(err)throw(err)
        console.log('append completed')

 fs.rename(path.join(__dirname,'testwring.txt'),path.join(__dirname,'testingrenamed.txt'),(err)=>{
    if(err)throw(err)
        console.log('rename completed')
 })
    
})
})