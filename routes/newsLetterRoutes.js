const express=require('express');
const router=express.Router();
const newsletterController=require('../controllers/letterController');

router.post('/subscribe',newsletterController.subscribeToNewsletter);

module.exports=router;
