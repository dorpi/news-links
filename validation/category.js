const isEmpty = require('./is-empty.js')

const Validator = require('validator');


module.exports = function validateProfileInput(data, files) {
    let errors = { link1: {}, link2: {}, link3: {}, link4: {}, link5: {} };

    const link1 = !isEmpty(data.link1) ? JSON.parse(data.link1) : '';
    const link2 = !isEmpty(data.link2) ? JSON.parse(data.link2) : '';
    const link3 = !isEmpty(data.link2) ? JSON.parse(data.link3) : '';
    const link4 = !isEmpty(data.link4) ? JSON.parse(data.link4) : '';
    const link5 = !isEmpty(data.link5) ? JSON.parse(data.link5) : '';



    if (!Validator.isLength(link1.name, { min: 2, max: 15 })) {
        errors.link1.name = 'Name needs to be between 2 and 15 characters'
    }
    if (!Validator.isLength(link2.name, { min: 2, max: 15 })) {
        errors.link2.name = 'Name needs to be between 2 and 15 characters'
    }
    if (!Validator.isLength(link3.name, { min: 2, max: 15 })) {
        errors.link3.name = 'Name needs to be between 2 and 15 characters'
    }
    if (!Validator.isLength(link4.name, { min: 2, max: 15 })) {
        errors.link4.name = 'Name needs to be between 2 and 15 characters'
    }
    if (!Validator.isLength(link5.name, { min: 2, max: 15 })) {
        errors.link5.name = 'Name needs to be between 2 and 15 characters'
    }





    if (isEmpty(link1.url)) {
        errors.link1.url = 'URL is required'
    }
    else if (!Validator.isURL(link1.url)) {
        errors.link1.url = 'Please enter valid URL';
    }
    if (isEmpty(link2.url)) {
        errors.link2.url = 'URL is required'
    }
    else if (!Validator.isURL(link2.url)) {
        errors.link2.url = 'Please enter valid URL';
    }
    if (isEmpty(link3.url)) {
        errors.link3.url = 'URL is required'
    }
    else if (!Validator.isURL(link3.url)) {
        errors.link3.url = 'Please enter valid URL';
    }
    if (isEmpty(link4.url)) {
        errors.link4.url = 'URL is required'
    }
    else if (!Validator.isURL(link4.url)) {
        errors.link4.url = 'Please enter valid URL';
    }

    if (isEmpty(link5.url)) {
        errors.link5.url = 'URL is required'
    }
    else if (!Validator.isURL(link5.url)) {
        errors.link5.url = 'Please enter valid URL';
    }




    return {
        errors,
        isValid: isEmpty(errors.link1) && isEmpty(errors.link2) && isEmpty(errors.link3) && isEmpty(errors.link4) && isEmpty(errors.link5)
    }
}