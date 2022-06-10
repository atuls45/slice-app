// const '@babel/polyfill';
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :response-time ms'));

app.use(cors());
app.options('*', cors());

app.use('/api/v1/', router);

app.all('*', (req, res) => {
    res.status(404).json({ error: 'Route is Invalid' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
