const Product=require('../models/productModel');

exports.getAllProducts=async(req,res)=>{
  try{
    const products=await Product.find();
    res.status(200).json(products);
  }catch(error){
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};

exports.getProductById=async(req,res)=>{
  try{
    const product=await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({message:'Product not found'});
    }
    res.status(200).json(product);
  }catch(error){
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};

exports.createProduct=async (req,res)=>{
  try{
    const {title,category,file}=req.body;
    const existingProduct=await Product.findOne({title});
    if(existingProduct){
      return res.status(400).json({message:'Product with same title already exists'});
    }
    const newProduct=new Product({title,category,file});
    await newProduct.save();
    res.status(201).json({message:'Product created successfully',product:newProduct});
  }catch(error){
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};

exports.updateProduct=async(req,res)=>{
  try{
    const {title,category,file}=req.body;
    const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{title,category,file},{new:true});
    if(!updatedProduct){
      return res.status(404).json({message:'Product not found'});
    }
    res.status(200).json({message:'Product updated successfully',product:updatedProduct});
  }catch(error){
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};

exports.deleteProduct=async(req,res)=>{
  try{
    const deletedProduct=await Product.findByIdAndDelete(req.params.id);
    if(!deletedProduct){
      return res.status(404).json({message:'Product not found'});
    }
    res.status(200).json({message:'Product deleted successfully'});
  } catch(error){
    console.error(error);
    res.status(500).json({message:'Internal server error'});
  }
};
