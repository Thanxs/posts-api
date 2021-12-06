import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import postRouter from './routes/posts';

const app = express();

app.use(cors());

app.use(fileUpload({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', express.static(path.resolve(__dirname, 'static')));

app.use('/api', postRouter);

const PORT = process.env.PORT || 3001;

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string).then(() => {
      console.log('Connected to database successfully!');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

startApp();

