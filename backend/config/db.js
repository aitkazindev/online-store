import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MangoDB connection SUCCESS ${connection.connection.host}`);
    } catch (error) {
        console.log("Could not connect to the database", error); 
        process.exit(1); // process code 1 code means error 0 means success
    }
}
    