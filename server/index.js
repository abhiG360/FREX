import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

app.get('/',(req,res)=>{
  res.send('APP IS RUNNING');
});

// const CONNECTION_URL = "mongodb+srv://abhimanyugaur:abhimanyugaur16@cluster0.alwb6un.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// Set the options globally before making the connection
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)))
  .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));


