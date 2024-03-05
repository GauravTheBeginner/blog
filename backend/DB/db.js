const mongoose = require("mongoose");


const MONGO_URI = require('../Config/config')

const connection = async () => {
  try {

    await mongoose.connect(MONGO_URI)
    console.log("connected")
  } catch (error) {
    console.log(error)
  }
}
connection()



const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
})
const adminSchema = new mongoose.Schema({
  username:String,
  password:String,
})
const admin = mongoose.model("admin",adminSchema)
const blog = mongoose.model("blog", blogSchema);

module.exports = { blog ,admin}