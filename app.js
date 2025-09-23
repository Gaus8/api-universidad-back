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
PORT = 3000
MONGODB_STRING = mongodb+srv://gaus80:U6qX9rGGE3nIwocv@cluster0.pzozh.mongodb.net/pagina_universidad?retryWrites=true&w=majority&appName=Cluster0
JWT_TOKEN = 'esto es un token por ahora'
EMAIL = 'proyectosdegestionubate@gmail.com'
PASSWORD_EMAIL = 'rhcq rahh vbau bzqk'
