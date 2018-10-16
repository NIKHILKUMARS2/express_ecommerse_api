const mongoose = require('mongoose')
const Schema =  mongoose.Schema;


let cartSchema = new Schema(
    {
    
        productID : {
            type : String,
            unique : true
        },
        name : {
            type : String,
            default : ''
        }
    }
)
    
mongoose.model('Cart', cartSchema);