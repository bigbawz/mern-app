import 'dotenv/config';
import express from 'express';
import goalRoutes from './routes/goalRoutes.js';
import errorHandler from './middleware/error.js';
import { error } from 'console';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

app.use(errorHandler); // For error handling

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));