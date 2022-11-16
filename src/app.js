const express=require("express");
const regist=require("./register");


require("./conect.js");



const app=express();
const port=process.env.PORT ||5000;

const mongoose=require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");

app.get("/",(req,res)=>{
  res.render('register');
  //res.render('resul');
})

app.get("/register",(req,res)=>{
  res.render('resul');
  //res.render('resul');
})




app.post("/register",(req,res)=>{

 // console.log(req.body.name);
    try {
        const registEmpl=new regist({
            name:req.body.name,
            last_name:req.body.lastname,
            mobile_number:req.body.mobilenumber,
            email:req.body.email,
            emp_id:req.body.empnumber
            


        })
      const reg=  registEmpl.save();
      res.render('resul');
    } catch (error) {
        res.status(400).send(error);
    }
})

 


app.post("/resul", async(req,res)=>{

  try {

    const result=await  regist.findOne({name:req.body.idname})
 
 // console.log(result._id);
  res.render('index',{
    name:result.name,
    lastname:result.last_name,
    mobile:result.mobile_number,
    email:result.email,
    idemp:result.emp_id,
    id:result._id



  });
    
  } catch (error) {
    console.log("name not in dadabase");
    res.send('data not present');
  }

  

})
app.get("/ajay/:id",(req,res)=>{

  //console.log(req.params.id);
  regist.findOneAndDelete({_id:req.params.id},(err,pro)=>{
    if(err)
    {
      console.log("error rejected");
    }
    else{
      console.log("sucessss");
      res.render('resul')
     // alert("data delete");
      //res.redirect("/register")
    }

  })
})

app.get("/update/:id",async(req,res)=>{

 const edit=await regist.findById({_id:req.params.id})
 //console.log(edit);
 res.render('update',{

  user:edit

 })

})

app.post("/update/:id",async(req,res)=>{

  console.log(req.params.id);
  console.log(req.body.nam);


 const upd=await regist.findByIdAndUpdate({_id:req.params.id},{

    
      name:req.body.nam,
      last_name:req.body.lastnam,
      mobile_number:req.body.mobilenumbe,
      email:req.body.emai,
      emp_id:req.body.empi,
    
   

  })
  res.render('resul');
  console.log(upd);

})





app.listen(port,()=>{
    console.log("port is running");

})


