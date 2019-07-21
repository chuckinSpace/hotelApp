// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
  db :'mongodb://carlosmoyanor:mydatabase2@ds353457.mlab.com:53457/hotelapp',
  secretOrKey: 'secret'
};
