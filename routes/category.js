const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const MAX_SIZE = 3 * 1024 * 1024;
const validateCategory = require('../validation/category');
const isEmpty = require('../validation/is-empty')
//Validation
//const validatePostInput = require('../../validation/post');



//DB models
const Category = require('../models/category');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/media/links-images/category"+req.params.categoryNumber);
    },
    filename: (req, file, cb) => {

        cb(null, file.originalname)
    },
   
    
});

var upload = multer({
   
    limits: { fileSize: MAX_SIZE },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {

            cb(null, true);
        }
        else {
            
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'),false);
        }
    },
    storage: storage,



})









// @route   Post api/category/test
// @desc    Tests category create
// @access  Private

router.post('/test', (req, res) => {
    let newCategoryLinks = {
        link1: {
            name: "React",
            url: "https://reactjs.org/",
            imgsrc: "media/links-images/category3/link1.png"
        },
        link2: {
            name: "React",
            url: "https://reactjs.org/",
            imgsrc: "media/links-images/category3/link2.png"
        },
        link3: {
            name: "React",
            url: "https://reactjs.org/",
            imgsrc: "media/links-images/category3/link3.png"
        },
        link4: {
            name: "React",
            url: "https://reactjs.org/",
            imgsrc: "media/links-images/category3/link4.png"
        },
        link5: {
            name: "Google",
            url: "https://reactjs.org/",
            imgsrc: "media/links-images/category3/link5.png"
        }
    }
    let recordTest = new Category({
        title: "All",
        categorylinks: newCategoryLinks
    });

    recordTest.save()
        .then(result => res.json(result))
        .catch((err) => res.json(err))
})







// @route   GET api/category/all
// @desc    Get all categories and links
// @access  Public

router.get('/all', (req, res) => {
    Category.find()
        .then(links => {
            if (!links) {
                //Error
                return res.status(404).json("Error fetch from server ")
            }
            res.json(links);
        })
})


// @route   GET api/category/:id
// @desc    Get Catagory
// @access  Public

router.get('/:id', (req, res) => {
    
  
    Category.findOne({ _id: req.params.id })
        .then(category => {
            if (!category) {
                //Error
                return res.status(404).json("error")
            }
            res.json(category);
        })
})







// @route   POST /category/update/categoryNumber
// @desc   update category 
// @access  Public


router.post('/update/:categoryNumber',upload.array('images',5), (req, res) => {
    //Validation
    const { errors, isValid } = validateCategory(req.body,req.files);
    if (!isValid) {
       
        return res.status(400).json(errors);
    }
   

    //Replace file in category 

    let link1 = JSON.parse(req.body.link1);
    let link2 =JSON.parse(req.body.link2);
    let link3 = JSON.parse(req.body.link3);
    let link4 = JSON.parse(req.body.link4);
    let link5 = JSON.parse(req.body.link5);

    
    
    Category.updateOne(
        { _id: req.body._id },
        {
            $set: {
                title: req.body.title,
                categorylinks: { link1, link2, link3, link4, link5 }
               
            }
           
            
        })
        .then((category) => res.json(category))
        .catch((err) => res.json(err));
})


module.exports = router;