import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { dbConnection } from './src/database/dbConnection.js';
import { routerEstudiante } from './src/routes/estudianteRoutes.js';

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api', routerEstudiante)

const PORT =  process.env.PORT ?? 8000;


app.listen(PORT, async() =>{
await  dbConnection();
  console.log(`server listening on port http://localhost:${PORT}`)
})

