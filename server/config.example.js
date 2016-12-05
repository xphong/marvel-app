module.exports = {
  database: process.env.MONGO_URI || 'localhost/marvel',
  publicKey: '<MARVEL_API_PUBLIC_KEY>',
  privateKey: '<MARVEL_API_PRIVATE_KEY>'
};
