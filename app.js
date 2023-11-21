const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 (if nothing matches then this matches)
app.use('/', (req, res, next) => {
    res.status(404).send('<h2>Page Not Found</h2>');
})

app.listen(3000);