import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(PORT, () => console.log(`API REST running in PORT: ${PORT}`));
