var Products = require('../models/productModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/products/:owner', function (req, res) {
    Products.find({ owner: req.params.owner }, function (err, product) {
      if (err) throw err;

      res.send(product);
    })
  })

  app.get('/api/product/:id', function (req, res) {
    Products.findById({ _id: req.params.id }, function (err, product) {
      if (err) throw err;

      res.send(product);
    })
  })

  app.post('api/product', function (req, res) {
    if (req.body.id) {
      Products.findByIdAndUpdate(req, body.id, {
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        hasAttachment: req.body.hasAttachment
      }, function (err, product) {
        if (err) throw err;
        res.send("Updated");
      })
    } else {
      var newProduct = Products({
        owner: "Test",
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        hasAttachment: req.body.hasAttachment
      })

      newProduct.save(function (err) {
        if (err) throw err;
        res.send("Success");
      })
    }
  })

  app.delete('api/todo', function (req, res) {
    Products.findByIdAndRemove(req.body.id, function (err) {
      if (err) throw err;
      res.send("Success");
    })
  })
}