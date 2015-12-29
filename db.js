var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var XTEngineerSchema = new Schema(
    {
        fullname: String,
        empid: String,
        emailid: String,
        role: String,
        manager: String,
        doj: Date,
        technology: String
    }
);

// Mongoose Model definition
var XTEngineer = mongoose.model('xtengineer', XTEngineerSchema);

mongoose.connect('mongodb://127.0.0.1/sapient');
