import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kulkarniprathmesh2022:Pass1905@cluster0.zgfrwpe.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}