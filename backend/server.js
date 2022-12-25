const express=require("express");
const dotenv=require("dotenv");

dotenv.config();

const app=express();


const notes=require("./data/notes");


app.get('/',(req,res)=>{
    res.send("hello vinod");
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})


app.get("/api/notes/:id",(req,res)=>{
    const note=notes.find((n)=>n.id===1);
    console.log(note);
    res.send(note);
})


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("running successfully");
})