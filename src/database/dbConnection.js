import mongoose from "mongoose";

const dbString = process.env.MONGODB_STRING;

export const dbConnection = async () => {
  try {
    const mongoConnection  = await mongoose.connect(dbString);
    const dbName = mongoConnection.connection.name;
    console.log(`connection stablished, database name: ${dbName}`)
  }
  catch(error){
    handleError(error);
  }
 

  
}