const {User} = require('../models/UserSchema');
const {Role} = require('../models/RoleSchema');

module.exports = function(server){
server.post('/roles', async (req, res) => {
    console.log('Aqui REQ.BODY: ', req.body)
    const role = new Role(req.body);
    console.log('Aqui el Role: ', role)
    await role.save();
    res.json(role);
})
server.post('/users', async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
})

server.get('/users', async(req, res) => {
    const users = await User.find().populate('role');
    res.send(users);
})

server.get('/', (req, res) => {
    res.send('Hello World');
});
}