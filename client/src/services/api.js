import Axios from 'axios';





export const updateCategoryData=(categoryNumber,formData)=>{
     return Axios.post('/api/category/update/' + categoryNumber, formData)
    };



export const getAllCategories = ()=>{
     return Axios.get('/api/category/all')
    }

export const getCategory = (id)=>{
     return Axios.get('/api/category/'+id)
    }



export const getArticles = (subject)=>{
     return Axios.get('http://localhost:5000/api/articles/'+subject)
}