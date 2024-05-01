import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.b7xhby9.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo`

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Daatabase disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Erroe while connecting database', error.message);
    })

}

export default Connection;