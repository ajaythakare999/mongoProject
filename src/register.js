const mongoose=require("mongoose");


const schemaE=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    mobile_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    emp_id:{
        type:String,
        required:true
    },
    
    

    
});

const regist=new mongoose.model("regist",schemaE);

module.exports=regist;


