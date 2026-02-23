
import mongoose from 'mongoose';

const connectDB =async () => {
    try{
    const con =await mongoose.connect(
  process.env.mongo_URL || "mongodb://localhost:27017/user"
    );
console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
}
}
export default connectDB;