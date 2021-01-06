const express = require("express");
const dashboardRouter = express.Router();

    

dashboardRouter.get("/",function(req,res){
            res.render("dashboard",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/addbook",name:"Add Book"},{link:"/addauthor",name:"Add Author"}],
                title:"library",
                
            }); 
        });
    
   
        
    

    module.exports = dashboardRouter;