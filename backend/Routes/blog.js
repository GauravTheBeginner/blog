const { Router } = require("express");
const { blog } = require("../DB/db");


const router = Router();

//get
router.get("/blogs", async(req,res)=>{
    const data = await blog.find({})
    res.status(200).json(data)
})

//read
router.get("/blogs/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await blog.findById(id)
        res.status(200).json(data)
        
    } catch (error) {
       res.json({
        msg:"can not find the blog"
       })
    }
})


//create
router.post("/blogs", async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    try {
        
        await blog.create({title,description,image})
    } catch (error) {
            console.log(error)
    }
    res.status(200).json({
        msg:"blog created"
    })

})

//update
router.put('/blogs/:id',async(req,res)=>{
const id = req.params.id;
const {title,description,image} = req.body;
try {
    const updatedBlog =  await blog.findByIdAndUpdate(id,{title,description,image})
    if(!updatedBlog){
        res.json({
            msg:"not able to update"
        })
    }
    res.json({
        msg: "blog updated successfully",
       
    });
} catch (error) {
    console.error("Error updating blog:", error);
}
})

//delete
router.delete('/blogs/:id',async(req,res)=>{
    const id = req.params.id;
     try {
        const deleteBlog =  await blog.findByIdAndDelete(id)
        if(!deleteBlog){
            res.json({
                msg:"not able to delete"
            })
        }
        res.json({
            msg: "blog deleted successfully",
           
        });
    } catch (error) {
        console.error("Error deleting blog:", error);
    }
})

module.exports =  router