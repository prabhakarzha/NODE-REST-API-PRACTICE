import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://admin:YvrnNdsraSvzep8o@cluster0.gl1g8ac.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log(`Database connected `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
