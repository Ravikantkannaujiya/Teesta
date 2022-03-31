const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    
    id: {type: String, required: true},
    fisrt_name: {type: String, required: true},
    last_name: {type: Number, required: true},
    email: {type: String, required: true},
    gender: {type: String, required: true,enum: ['Male', 'Female' ]},
    ip_address:{type:String},
    accountno: {type: Number, required: true},
    mobileno: {type: Number, required: true}
});

module.exports= mongoose.model('user', userSchema);
