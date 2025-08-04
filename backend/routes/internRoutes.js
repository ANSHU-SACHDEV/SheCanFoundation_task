const express=require('express');
const router=express.Router();
const Intern=require("../models/intern");


router.get('/:name',async(req,res)=>{
const name=req.params.name;

let intern=await Intern.findOne({name});
if(!intern){
  intern=await Intern.create({
    name,
    referralCode: `${name.toLowerCase()}2025`,
      totalDonations: Math.floor(Math.random() * 10000),
  });
}
res.json(intern);
});
module.exports=router;

