const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./route');
const handlebars = require('express-handlebars');
const db = require('./config/db');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride(''));
app.use(express.urlencoded());
//connect to db

db.connect();

app.engine('handlebars', handlebars({
    helpers: {
        sum: (a, b) => a + b,
    }
}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);


app.listen(port, () => {
    console.log(`App listenning at https://localhost:${port}`);
})