import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MongoDB connection error: MONGO_URI is not set in environment variables.');
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
  }
};

export default connectDB;
