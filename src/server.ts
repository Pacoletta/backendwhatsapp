import express from 'express';
import pixRoutes from './routes/pixRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(pixRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});