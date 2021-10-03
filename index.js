import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`API REST running in PORT: ${PORT}`));