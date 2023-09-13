const { connect, connection } = require("mongoose");

const conn = {
    isConnected: false,
}

const connectDB = async () => {
  if(conn.isConnected) return;
  const db = await connect("mongodb://127.0.0.1/testMongo");
  conn.isConnected = db.connections[0].readyState;
};

connection.on('connected', () => {
    console.log('Mongoose is connected');
});
connection.on('error', (err) => {
    console.log('Mongoose connection error', err);
});

 module.exports = connectDB;