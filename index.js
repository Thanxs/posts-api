import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import postRouter from './src/routes/posts.js';

const app = express();

app.use(cors());

app.use(fileUpload({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', express.static(path.resolve(__dirname, 'static')));

app.use('/api', postRouter);

app.get('/', (req, res) => {
  res.send('Welcome to posts app');
})

const PORT = process.env.PORT || 3001;

async function startApp() {
  try {
    await mongoose.connect('mongodb+srv://alex:JW7uDv2OMZhcFTZf@posts-api.2x6h6.mongodb.net/posts-api?retryWrites=true&w=majority').then(() => {
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

