const {mongoose} = require('../db/dbConnect');
const {Role} = require('./RoleSchema');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Role
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};