import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false, limit: '30mb' }));
app.use(bodyParser.json({ type: 'application/*+json', limit: '30mb' }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('server son');
});

app.listen(port, () => {
  console.log('server started');
});
