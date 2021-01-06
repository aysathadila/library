const express = require("express");
const signupRouter = express.Router();

    

signupRouter.get("/",function(req,res){
            res.render("signup",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"}],
                title:"library",
                
            });
        });
    
   
        
    

    module.exports = signupRouter;