import mongoose, { model } from "mongoose";

const productSchema = mongoose.Schema(
    {
        productId : {
            type : String,
            require : true,
            unique : true
        },

        name : {
            type : String,
            required : true,
        },

        description : {
            type : String,
            required : true,
        },

        altName : {
            type : [String],
            default : []
        },

        price : {
            type : Number,
            required : true
        },
        
        labelledPrice : {
            type : Number,

        },

        catagory : {
            type : String,
            default : "Others"
        },

        images : {
            type : [String],
            default : ["/images/default-product-1.png" , "/images/default-product-2.png"]
        },

        isVisible : {
            type : Boolean,
            default : true,
            required : true
        },

        brand : {
            type : String,
            default : "Generic"
        },

        model : {
            type : String,
            default : "Standard"
        }
    }
)

const Product = mongoose.model("products" , productSchema)

export default Product;