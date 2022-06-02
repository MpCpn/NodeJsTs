const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const app = express();
const post = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) => {

    res.send('Hello Word');

})

app.listen(post, () => {
    debug("Listening on port ",chalk.green(post));
})