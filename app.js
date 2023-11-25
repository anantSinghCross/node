const express = require('express');
const path = require('path');
const rootPath = require('./utils/path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 (if nothing matches then show this)
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
})

app.listen(3000);