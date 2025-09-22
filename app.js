import express from 'express'
import 'dotenv/config';
import { dbConnection } from './src/database/dbConnection.js';
const app = express()
const PORT =  process.env.PORT ?? 8080;


;
app.listen(PORT,async () =>{
await  dbConnection()
  console.log(`server listening on port http://localhost:${PORT}`)
})

