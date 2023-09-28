const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");
const { route } = require("./userRoute");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);

//get transections
router.post("/get-transection", getAllTransection);

//edit transections 
router.post("/edit-transection",editTransection);

//delete transections
router.post("/delete-transection",deleteTransection);

module.exports = router;