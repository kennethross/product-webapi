const Product = require('../models/productModel');
var Products = require('../models/productModel');

module.exports = function (app) {
  app.get('/api/setupProducts', function (req, res) {
    var starterProducts = [
      {
        owner: "test",
        title: "Ketchup",
        price: "5",
        location: "NSK",
        hasAttachment: false
      },
      {
        owner: "test",
        title: "Milo",
        price: "5",
        location: "NSK",
        hasAttachment: false
      },
      {
        owner: "test",
        title: "Walls Durian Ice Cream",
        price: "5",
        location: "NSK",
        hasAttachment: false
      }
    ];

    Product.create(starterProducts, function(err,results) {
      res.send(results);
    });

  });
}

// id: String,
//   title: String,
//   price: String,
//   location: String,
//   hasAttachment: Boolean