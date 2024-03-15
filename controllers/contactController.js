const Contact=require('../models/contactModel');

exports.submitContactForm=async(req,res)=>{
  try{
    const{name,email,mobile,message}=req.body;
    const newMessage=new Contact({name,email,mobile,message});
    await newMessage.save();
    res.status(201).json({message:'Form submitted successfully'});
  } catch(error){
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};
