const mongoose = require('mongoose');
var todolist = mongoose.model('todolist',{
    task : { type: String },
    status : { type: String }
});
module.exports = todolist;