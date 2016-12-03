module.exports = {
  database: process.env.MONGO_URI || 'localhost/marvel',
  publicKey: 'yourMarvelPublicKey',
  privateKey: 'yourMarvelPrivateKey'
};
