const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootPath = require('./utils/path');
const {router} = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Middleware
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// Routes Middleware
app.use('/admin', router);
app.use(shopRoutes);

// 404 (if nothing matches then show this)
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
})

app.listen(3000);