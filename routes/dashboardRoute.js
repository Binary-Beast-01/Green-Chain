const express = require("express");

const router = express.Router();

// authentication routes
router.get("/dashboard",(req,res)=>{
    res.render('dashboard')
})

module.exports = router;