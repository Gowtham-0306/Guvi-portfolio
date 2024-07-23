const mongoose = require("mongoose");


const userDataSchema = mongoose.Schema({


Username : {type : String  , required : true  , unique : false} ,

email : { type : String , required : true , unique : false} ,
phonenumber : {type : Number , default : 0},

Projectdetails : {type : String  , required : true  , unique : false} ,


    
},
{timestamps : true}
);







const userDatamodel = mongoose.model("userRegistrations" , userDataSchema);


module.exports = { 
    userDatamodel , 
};