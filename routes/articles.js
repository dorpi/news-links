const express = require('express');
const router = express.Router();

const Axios = require('axios')




// @route   Post api/articles/articles/subject
// @desc    Tests category create
// @access  Private

router.get('/:subject',(req,res)=>{
    let date = new Date();
    let fromDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    //let articles ;
    console.log(req.params.subject);
    Axios.get(`http://newsapi.org/v2/everything?q=${req.params.subject}&from=${fromDate}sortBy=popularity&apiKey=9004100c7c244cb4aa12b6d74c177f0e`)
    .then((result)=>{
        //console.log(res)
       res.json(result.data.articles)
    })
    .catch(err=>{
        //console.log(err)
    })
    
})



module.exports = router;