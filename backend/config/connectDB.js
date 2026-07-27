
import mongoose from "mongoose"

const connectDB=async()=>{
    try{

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DataBase connected");
    }catch(error){
        console.log(error.message);
        process.exit(1);//ye kya krta h->socho agr database connect hi nahi hua aur server fir bhi chlta rha and fir jb koi register krega to error aayega isiliye agr databse connect na ho to hum server ko bnd kr dete h "process.exit(1)" ka yahi kam hota h      
     
   
    }
}

export default connectDB;