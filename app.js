const {server} = require('./server/server');
require('dotenv').config();

const {API_PORT} = process.env;

server.listen(API_PORT, () => {
    console.log(`Server is running on port ${API_PORT}`);
})
