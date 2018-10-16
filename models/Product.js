const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

let productSchema = new Schema(
{
    productName : {
        type : String,
        default : ''
    },
    productID : {
        type : String,
        unique : true
    },
    productCategory : {
        type : String,
        default : ''
    },
    productPrice : {
        type : Number,
        default : ''
    },
    productBrand : {
        type : String,
        default : ''
    },
    productIsInStock : {
        type : Boolean,
        default : true
    },
    productSizes: [],
    numberOfPiecesAvailable : {
        type : Number,
        default : ''
    },
    addedOn : {
        type : Date,
        default : Date.now
    }
  }
)

mongoose.model('Product', productSchema);