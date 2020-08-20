import React, { useState, useEffect } from 'react';
import Category from './Category';
import { toAbsoluteUrl } from '../_helpers/AssestsHelper';
import Alert from '../utils/Alert';

import {getAllCategories} from '../../services/api'

const DisplayLinks = () => {
    const [categories, setCategories] = useState([]);
    const [alert, setAlert] = useState({
        type: '',
        message: '',
        open: false
    })

    useEffect(() => {
        let unmounted=false;
        getAllCategories()
            .then((res) => {
                setCategories(res.data)
            }).catch(err => {

                setAlert({
                    open: true,
                    type: 'error',
                    message: "Can't fetch from the server"
                })
            })

            return () => { unmounted = true };
    }, [])



    return (
        <div className="links-display-container">
            <Alert alert={alert} setAlert={setAlert} />
            <h1>
                SITES LINKS
            </h1>
            <img src={toAbsoluteUrl('/media/misc/worldImage.png')} alt="World Map" className="links-title-image" />
            <div className="link-catagory-container">
                {categories.length === 0 ? '' : categories.map((item, index) => {
                    return <Category key={index}
                        urls={item.categorylinks}
                        title={item.title}
                        id={item._id}
                        categoryNumber={index + 1}
                        setAlert={setAlert} />
                })}

            </div>
        </div>

    )
}





export default DisplayLinks;
