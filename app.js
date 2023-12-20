const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('65832302f3c76206178bde71')
    .exec()
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// ROUTES ----
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

// CONNECTION ----
console.log('\nConnecting to MongoDB...')
mongoose.connect('mongodb+srv://admin-user:mongocluster@notes.mau7f.mongodb.net/shop?retryWrites=true&w=majority')
  .then(result => {
    return User.findOne().exec()
  })
  .then(user => {
    console.log(user)
    if(!user){
      const user = new User({
        name: 'Anant',
        email: 'anant.singh@gmail.com',
        cart: {
          items: []
        }
      });
      return user.save();
    }
  })
  .then(() => {
    app.listen(3000);
    console.log('Connection established. Server is running...');
  })
  .catch(err => console.error(err));