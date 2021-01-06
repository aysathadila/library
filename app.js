const express = require("express");
const booksRouter = require("./src/routes/bookRoutes");
const authorsRouter = require("./src/routes/authorRoutes");
const loginRouter = require("./src/routes/loginRoutes");
const signupRouter = require("./src/routes/signupRoutes");
const addbookRouter = require("./src/routes/addbookRoutes");
const addauthorRouter = require("./src/routes/addauthorRoutes");
const dashboardRouter = require("./src/routes/dashboardRoutes");


const app = express();

// this is used so that we can get both css and js into the html
app.use(express.static("./public"));
//for using ejs template engine
app.set("view engine","ejs");
//setting the path
app.set("views",__dirname +"/src/views");

app.use("/books",booksRouter);
app.use("/author",authorsRouter);
app.use("/login",loginRouter);
app.use("/signup",signupRouter);
app.use("/addbook",addbookRouter);
app.use("/addauthor",addauthorRouter);
app.use("/dashboard",dashboardRouter);


app.get("/",function(req,res) {
    // res.sendFile(__dirname +"/src/views/index.html");
    
    //dirname is used to get full path
    res.render("index",
    {
        nav:[{
            link:"/books",name:"Books"},{link:"/author",name:"Authors"},{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"
            }],
        title:"library"
        
    });
    //render is used for ejs
    
})

app.listen(4567);