import Axios from 'axios';





export const updateCategoryData=(categoryNumber,formData)=>{
     return Axios.post('http://localhost:5000/api/category/update/' + categoryNumber, formData)
    };



export const getAllCategories = ()=>{
     return Axios.get('http://localhost:5000/api/category/all')
    }

export const getCategory = (id)=>{
     return Axios.get('http://localhost:5000/api/category/'+id)
    }