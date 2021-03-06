import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// default route in path

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes); 

const CONNECTION_URL =
  'mongodb+srv://gmbc92:gmbc92@cluster0.uviw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
try {
  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
    );
} catch (e) {
  console.log(e.message);
  console.log('problema na conexao com o mongoose');
}

mongoose.set('useFindAndModify', false);
