const exp = require('constants');
const express = require('express');
const http = require('http');
const hostName = 'localhost';
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));



app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes/:dishId', dishRouter);


app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderId', leaderRouter);

app.use('/promotions', promoRouter);
app.use('/promotions/:promoId', promoRouter);

const server = http.createServer(app);

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});