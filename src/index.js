import express from 'express';
import apis from './routes/apis';
import views from './routes/views';

require('dotenv').config();

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', views);

app.use('/apis', apis);

app.listen(process.env.APP_PORT, () => console.log(`Server running on port: ${process.env.APP_PORT}`));
