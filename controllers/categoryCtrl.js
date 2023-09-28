const categoryModel = require('../models/categoryModel');
const moment = require("moment");
//get category
const getAllCategory = async (req, res) => {
        try{
          const category = await categoryModel.find();
          res.status(200).json(category);
        }catch{
          res.status(500).json(
            {error:"could not fetch Categories"}
          );
        }
  };

const addCategory = async (req,res)=>{
  try {
    // const newTransection = new transectionModel(req.body);
    const newCategory = new categoryModel(req.body);
    await newCategory.save();
    res.status(201).send("Category Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
    
};
  module.exports = {
    getAllCategory,
    addCategory
  }