// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const {Schema}=mongoose;

const internDashboardSchema=new Schema(
  {
    name:{type:String,required:true},
    referralCode:{type:String,required:true},
    totalDonations:{type:Number,required:true,default:true}


  }
);

module.exports=mongoose.model('intern',internDashboardSchema);