var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return `mongodb+srv://${configValues.uname}:${configValues.pwd}@clusterk.v4uvs.mongodb.net/Catalog?retryWrites=true&w=majority`;
  },
  getSecretAccessToken: function() {
    return configValues.accessTokenSecret;
  }
}