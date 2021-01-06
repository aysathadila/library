const express = require("express");
const authorsRouter = express.Router();

var authors =[
    {
        name:"joseph Barbera",
        book:"tom n jerry",
        genre:"cartoon",
        img:"joseph.jpg"
    },
    {
        name:"jk Rowling",
        book:"harry potter",
        genre:"fantasy",
        img:"jk.jpg"
    },
    {
        name:"basheer",
        book:"pathummede aadu",
        genre:"drama",
        img:"bashir.jpg"
    }
    ]
    
    
    
    authorsRouter.get("/",function(req,res){
            res.render("authors",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"},],
                title:"library",
                authors
                
            }); 
        });
    
    
    authorsRouter.get("/:id",function(req,res){
        //colon is used since i is called from url
        const id = req.params.id
        res.render("author",
        {
            
            nav:[{
                link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"
                }],
            title:"library",
            author:authors[id]
        })
        
    
    });

    module.exports = authorsRouter;