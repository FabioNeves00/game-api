import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './src/routes/index.js';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 5500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.get('/', (req, res) => res.send({ Hello: 'World!' }));

app.listen(PORT, () => console.log(`API REST running in PORT: ${PORT}`));
