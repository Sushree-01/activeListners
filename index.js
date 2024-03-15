const express=require('express');
const connection=require('./confige/db')
const errorHandler=require('./middlewares/errorHandler');
const productRoutes=require('./routes/productRoutes');
const newsletterRoutes=require('./routes/newsLetterRoutes');
const contactRoutes=require('./routes/contactRoutes');
require("dotenv").config()
const cors=require("cors")
const app=express()
app.use(express.json())
const PORT=process.env.PORT || 3000;

app.use(cors())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

app.use('/products',productRoutes);
app.use('/newsletter',newsletterRoutes);
app.use('/contact',contactRoutes);
app.use(errorHandler); 

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connnection succesfully to db")
    }catch(error){
      console.log(error)  
    }
    console.log("Port Running at 8080")
})










