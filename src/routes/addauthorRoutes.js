const express = require("express");
const addauthorRouter = express.Router();

    

addauthorRouter.get("/",function(req,res){
            res.render("addauthor",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/addbook",name:"Add Book"},{link:"/addauthor",name:"Add Author"}],
                title:"library",
                
            }); //; is not necessary
        });
    
   
        
    

    module.exports = addauthorRouter;