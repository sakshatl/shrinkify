const express = require('express');
const mongoose = require('mongoose');

// import routes
const appRoutes = require('./routes/appRoutes');
const config = require('./utils/config');

// initialising the express app
const app = express();

// middlewares
app.use(express.static('public'));
app.use(express.json( { extended: false }));

// set view engine
app.set('view engine', 'ejs');

// connection to the db and listen to a port number
const PORT = process.env.PORT || 5000;
const mongo_uri = `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@cluster0.ebnyh.mongodb.net/short-url-service?retryWrites=true&w=majority`
mongoose.connect(mongo_uri, { useUnifiedTopology: true, useNewUrlParser : true})
  .then(() => {
    app.listen(PORT, () => console.log(`DB connected and server is running on ${PORT}`));
  })
  .catch((err) => console.log('error connecting to the db'))

// app routes
app.use(appRoutes);



