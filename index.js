import express from "express";
var app = express()
import dbconnection from "./db/db.js";
import { ObjectId } from "mongodb";

app.use(express.json());

// GET method to get data
app.get('/', async (req, res) => {

    let data = await dbconnection()
    data = await data.find().toArray()
    res.send(data)
})

// POST method for send data
app.get('/data', async (req, res) => {

    var Name = req.body.name;
    var Number = req.body.number;
    var Address = req.body.address;

    let data1 = await dbconnection();

    let result = await data1.insertOne({
        "name": Name,
        "number": Number,
        "address": Address
    })
    // console.log(result)
    console.log(result)
    res.send(result)
})



app.put('/put', async (req, res) => {

    let data = await dbconnection();
    let result = await data.updateOne(
        { "name": "ganesh" },
        {$set:req.body}
    )
    console.log(req.body)
    res.send({ result: "ok " })
})

app.delete('/delete/:id',async (req,res)=>{
    const data = await dbconnection();
    const result = await data.deleteOne({_id: new ObjectId(req.params.id)})
    console.log(req.params.id)
    res.send(result)
})

app.listen(1200)