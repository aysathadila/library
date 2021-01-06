const express = require("express");
const loginRouter = express.Router();

    

    loginRouter.get("/",function(req,res){
            res.render("login",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"}],
                title:"library",
                
            }); //; is not necessary
        });
    
   
        
    

    module.exports = loginRouter;