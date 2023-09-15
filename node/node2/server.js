const express = require("express");
const bodyparser= require("body-parser")

const app = express();
const port=3000

app.use(bodyparser.json());

let items=[
    {id:1, name:"christo"},
    {id:2, name:"haha"}
]

app.post("/items",(req,res)=>{
    const newitem = req.body;
    if(!newitem.id || !newitem.name){
        return res.status(500).send("item must have an id and name")
    }

    items.push(newitem);
    res.status(201).send(`item added with id:${newitem.id}`)
});

app.get("/getitems",(req,res)=>{
    res.json(items)
});


app.put("/items/:id",(req,res)=>{
    const itemid = parseInt(req.params.id);
    const updateditem = req.body

    const index = items.findIndex((item)=> item.id === itemid);
    if(index===-1){
        return res.status(404).send("item not found")
    }

    if(!updateditem.name){
        return res.status(500).send("item must have a name!!!")
    }

    items[index].name = updateditem.name;
    res.status(201).send(`item updated with id:${itemid}`)
})

app.delete("/items/:id",(req,res)=>{
    const itemid = parseInt(req.params.id);
    

    const index = items.findIndex((item)=> item.id === itemid);
    if(index===-1){
        return res.status(404).send("item not found")
    }

 

    items.splice(index,1)
    res.status(201).send(`item updated with id:${itemid}`)
})

app.listen(port,()=>{
    console.log("server is running",port)
})