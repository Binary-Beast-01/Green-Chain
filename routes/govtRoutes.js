const express = require("express");

const router = express.Router();

// authentication routes
router.get("/all-emmision",(req,res)=>{
    res.render('allEmmision')
})

module.exports = router;