const mongoose=require('mongoose');



const db='mongodb+srv://thakare:ZLQWQ5VnUlqH8kpq@cluster0.idmd8jd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db).
then(()=>{
    console.log("connection...");
}).catch((err)=>{
    console.log("error....."+err);
}) 


