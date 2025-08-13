import mongoose from "mongoose";

const dbConnect =async()=>{
  try {
      const dbConnection= await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database connected : ${dbConnection.connection.name} ${dbConnection.connection.host}`)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

export default dbConnect;