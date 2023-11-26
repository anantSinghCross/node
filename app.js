const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootPath = require('./utils/path');
const {router} = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// Routes Middleware
app.use('/admin', router);
app.use(shopRoutes);

// 404 (if nothing matches then show this)
app.use('/', (req, res, next) => {
    res.status(404).render('404.ejs', {docTitle: '404 Not Found'});
})

app.listen(3000);