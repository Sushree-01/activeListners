const Newsletter=require('../models/newsLetterModel');
const nodemailer=require('nodemailer');

exports.subscribeToNewsletter=async (req,res)=>{
  try{
    const {email}=req.body;
    const newSubscriber=new Newsletter({email});
    await newSubscriber.save();
    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'your-email@gmail.com',
        pass:'your-password',
      },
    });
    const mailOptions={
      from:'your-email@gmail.com',
      to:email,
      subject:'Subscription Confirmation',
      text:'Thank you for subscribing to the Mentoons newsletter!',
    };
    await transporter.sendMail(mailOptions);
    res.status(201).json({message:'Subscription successful'});
  } catch (error) {
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};
