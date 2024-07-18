import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('secretURL1').then(()=>console.log("DB Connected"));
}
