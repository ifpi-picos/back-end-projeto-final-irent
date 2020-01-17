class Config {
  constructor() {
    this.env = 'production';
    this.PORT = 3000;
    this.API_BASE = '/api';
    this.MONGODB_URL = 'mongodb+srv://usuario_admin:David2019naruto@cluster0-tkwsz.mongodb.net/test?retryWrites=true&w=majority';
  }
}

module.exports = new Config();
