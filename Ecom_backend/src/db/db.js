import mongoose from "mongoose";
const connectdb = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        console.log(`db connected  /n db host = ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("db not connected",error);
    }
}

export default connectdb;