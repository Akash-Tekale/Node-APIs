import { MongoClient } from "mongodb";
// import axios from "axios";

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function  dbconnection (){
    let result =await client.connect();
    let db= result.db('users');
    return db.collection('user')
}

export default dbconnection