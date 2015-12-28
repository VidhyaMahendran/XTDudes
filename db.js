var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var XTEngineerSchema = new Schema(
    {
        username: String,
        emailid: String,
        technology: String
    }
);

// Mongoose Model definition
var XTEngineer = mongoose.model('XTEngineer', XTEngineerSchema);

mongoose.connect('mongodb://127.0.0.1/sapient');
