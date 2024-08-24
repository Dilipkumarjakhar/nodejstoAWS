 import dotenv from 'dotenv';
dotenv.config();
 import express from 'express';

const app=express();
app.get("/",(req,res)=>{
  return res.send({"message":"get request"});
})
const PORT=process.env._PORT;
app.listen(PORT,()=>{
  console.log("server is connected to port ",PORT);
})