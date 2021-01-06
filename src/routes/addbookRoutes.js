const express = require("express");
const addbookRouter = express.Router();

    

addbookRouter.get("/",function(req,res){
            res.render("addbook",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/addbook",name:"Add Book"},{link:"/addauthor",name:"Add Author"}],
                title:"library",
                
            }); //; is not necessary
        });
    
   
        
    

    module.exports = addbookRouter;