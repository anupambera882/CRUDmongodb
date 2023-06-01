const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const route = require('./route/router');
const app = express();
const port = 3000;
const DB_URI = "mongodb+srv://anupambera882:anupambera882@anupam.vqwwh4s.mongodb.net/practiceDB?retryWrites=true&w=majority";

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(route);

(async () => {
    await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("db is connected................");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})();