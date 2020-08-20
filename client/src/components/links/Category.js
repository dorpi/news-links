import React,{useEffect,useState} from 'react'
import PropsTypes from 'prop-types'


import Divider from '@material-ui/core/Divider';

import Link from './Link'
import EditPage from './editPage/EditPage'

import {getCategory} from '../../services/api'





const Category = ({ urls, title ,categoryNumber,id, setAlert}) => {

const [submitForm,setSubmitForm] = useState(false)
const [categoryTitle,setCategoryTitle] =  useState(title);
const [links,setlinks] = useState(urls);

    //Get the list from the props
    
    useEffect(() => {

        getCategory(id)
        .then((res)=>{
                setCategoryTitle(res.data.title)
                setlinks(res.data.categorylinks);
        })
        .catch(err=>{
            setAlert({
                open:true,
                type:'error',
                message:err
            });
        })
    }, [submitForm,id,setAlert])


    let categoryLinks = Object.keys(links).map((key,index)=> {
          
            return <Link key={`link${index}`} 
            name={links[key].name} 
            url={links[key].url} 
            imgSrc={links[key].imgsrc}
            ></Link>
        });
   

        
       
    //Data from json to each url
    return (
        <div className="links-container" >
             <EditPage 
             title={categoryTitle} 
             links={links} 
             categoryNumber={categoryNumber} 
             id={id}
             setSubmitForm={setSubmitForm}
            
             ></EditPage>

            <h2>
                {categoryTitle}
            </h2>
            <Divider orientation="horizontal" />
            <div className="links-buttons-container" >
                {categoryLinks}
            </div>
        </div>

    )
}

Category.PropsTypes={
    urls:PropsTypes.object, 
    title :PropsTypes.string,
    categoryNumber:PropsTypes.number,
    id:PropsTypes.string, 
    setAlert:PropsTypes.func
}


export default Category;