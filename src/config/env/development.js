class Config {
  constructor() {
    this.env = 'development';
    this.PORT = 3000;
    this.API_BASE = '/api';
    const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '27017';
    this.MONGODB_URL = 'mongodb://up9sp9opnqktvbwa8wog:GGGS9RVl7TdYc6WDWLgD@bxtwflrzufza7zt-mongodb.services.clever-cloud.com:27017/bxtwflrzufza7zt';
  }
}

module.exports = new Config();
