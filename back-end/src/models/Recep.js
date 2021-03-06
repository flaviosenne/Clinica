const mongoose = require('mongoose')

const RecepSchema = mongoose.Schema({
    
    date: {
        type: Date,
        default: Date.now(),
    },
    prescription: {
        type: String,
        required: true,
    },
    consultation: {
        type: String,
        ref: 'Consultations',
        required: true,
    } 
   
})

module.exports = mongoose.model('Recep', RecepSchema, 'recep');