const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.APP_PORT || 3000;

const app = express();
app.use(morgan('combined'));
app.use(cors());

app.get('/api/status', (req, res) => {
	res.sendStatus(200);
});

app.get('/api/hello', (req, res) => {
	res.send('HELLO FROM THE BACKEND!');
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
