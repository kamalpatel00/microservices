const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name : {
        type: String, require: true
    },
    mobile: {
        type: Number, require: true
    }
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;