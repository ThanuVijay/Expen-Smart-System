const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    catid:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true, "Title is required"],
      },
      image: {
        type: String, 
      }
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("category", categorySchema);
module.exports = categoryModel;