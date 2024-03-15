const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
  title:String,
  category:String,
  file:String,
});

module.exports=mongoose.model('Product',productSchema);
