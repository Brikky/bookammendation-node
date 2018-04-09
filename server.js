const express = require('express');
const path = require('path');

const app = express();
app.use(require('./routes'));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Node server running on ${port}`);
});
