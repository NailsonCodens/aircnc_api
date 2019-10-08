const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://appsmongo:KzI7vbSbH35tm6ra@appsmongo-eybz6.mongodb.net/aircnc?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(9090);

