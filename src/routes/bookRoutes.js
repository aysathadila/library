const express = require("express");
const booksRouter = express.Router();

var books =[
    {
        title:"tom n jerry",
        author:"joseph Barbera",
        genre:"cartoon",
        img:"tom.jpg"
    },
    {
        title:"harry potter",
        author:"jk Rowling",
        genre:"fantasy",
        img:"harry.jpg"
    },
    {
        title:"pathummede aadu",
        author:"basheer",
        genre:"drama",
        img:"basheer.jpg"
    }
    ]
    
    
    //second method continue
    booksRouter.get("/",function(req,res){
            res.render("books",
            {
                nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"}],
                title:"library",
                books
                
            }); //; is not necessary
        });
    //this is the first method for creating another router
    // app.get("/books",function(req,res){
    //     res.render("books",
    //     {
    //         nav:[{link:"/books",name:"Books"},{link:"/author",name:"Authors"}],
    //         title:"library"
            
    //     });
    // })
    
    booksRouter.get("/:id",function(req,res){
        //colon is used since i is called from url
        const id = req.params.id
        res.render("book",
        {
            
            nav:[{
                link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"
                }],
            title:"library",
             book:books[id]
        })
        
    
    });

    module.exports = booksRouter;