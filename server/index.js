// index.js

import express from 'express';
import bodyParser from 'body-parser';
import router from './AppRouter/AppRouter.js';
import cors from 'cors'
const app = express();
const PORT = 4000;
app.use(cors());

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.use('/user', router);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL as id ' + connection.threadId);
// });