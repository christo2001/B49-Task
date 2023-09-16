const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const outputfolder = "./output";


if(!fs.existsSync(outputfolder)){
    fs.mkdirSync(outputfolder)
}

const PORT = 3000



app.get("/createfile",(req,res) =>{
    const currentTime = new Date();

    const year = currentTime.getFullYear().toString();
    const month = (currentTime.getMonth()+1).toString();
    const date = currentTime.getDate().toString();
    const hours = currentTime.getHours().toString();
    const mins = currentTime.getMinutes().toString();
    const secs = currentTime.getSeconds().toString();

    const datetimeforfilename = `${year}-${month}-${date}-${hours}-${mins}-${secs}.txt`

    const filepath = path.join(outputfolder,datetimeforfilename);

    fs.writeFile(filepath,currentTime.toISOString(),(err)=>{
        if(err){
            res.status(500).send(`error creating file ${err}`);
            return;
        }

        res.send(`file created successfully at: ${filepath}`)
    })
})

app.get('/getfile',(req,res)=>{
    fs.readdir(outputfolder,(err,files)=>{
        if(err){
            res.status(500).send(`error reading file ${err}`);
            return;
        }

        const textfiles = files.filter((file)=>path.extname(file) ==='.txt');
        res.json(textfiles)
    })
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

