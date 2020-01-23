class Config {
  constructor() {
    this.env = 'production';
    this.PORT = process.env.PORT || 3000;
    this.API_BASE = '/api';
    this.MONGODB_URL = 'mongodb://up9sp9opnqktvbwa8wog:GGGS9RVl7TdYc6WDWLgD@bxtwflrzufza7zt-mongodb.services.clever-cloud.com:27017/bxtwflrzufza7zt';
  }
}

module.exports = new Config();
