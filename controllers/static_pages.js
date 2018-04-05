const path = require('path');

const StaticPages= {
  home: (req, res) => {
    res.sendFile(path.resolve('views/static/home.html'));
  }
};

module.exports = StaticPages;
