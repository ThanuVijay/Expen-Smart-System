const express = require("express");
const {
 getAllCategory, addCategory
} = require("../controllers/categoryCtrl");

const router = express.Router();



//routes
//get all categories 
router.post("/all-categories", getAllCategory);

//add category
router.post("/add-category", addCategory);


module.exports = router;