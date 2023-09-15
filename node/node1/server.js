const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const outputfolder = "./output";


if(!fs.existsSync(outputfolder)){
    fs.mkdirSync(outputfolder)
}

const PORT = 3000

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

app.get("/createfile",(req,res) =>{
    const currentTime = new Date();

    const year = currentTime.getFullYear().toString();
    const month = (currentTime.getMonth()+1).toString();
    const date = currentTime.getDate().toString();
    const hours = currentTime.getHours().toString();
    const mins = currentTime.getMinutes().toString();
    const secs = currentTime.getSeconds().toString();

    const datetimeforfilename = `${year}-${month}-${date}-${hours}-${mins}-${secs}`

    const filepath = path.join(outputfolder,datetimeforfilename);

    fs.writeFile(filepath,currentTime.toISOString(),(err)=>{
        if(err){
            res.status(500).send(`error creating file ${err}`);
            return;
        }

        res.send(`file created successfully at: ${filepath}`)
    })
})