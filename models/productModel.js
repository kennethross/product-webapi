var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var productSchema = new Schema({
  // id: String,
  owner: String,
  title: String,
  price: String,
  location: String,
  hasAttachment: Boolean
})

var Product = mongoose.model('Product', productSchema);

module.exports = Product;