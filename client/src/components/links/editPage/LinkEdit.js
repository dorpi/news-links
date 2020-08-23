import React, { useState } from 'react'
import PropsType from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import IconButton from '@material-ui/core/IconButton'

import { toAbsoluteUrl } from '../../_helpers/AssestsHelper';
import { validateImage } from '../../_helpers/ValidateImage';
import '../links-page-style.scss';

const LinkEdit =({ link, index, setLink, errors, clearError, setErrors })=> {

    const hiddenFileInput = React.useRef(null);

    const [previewFile, setPreviewFile] = useState(null)


    const _handleChange = (event) => {
        switch (event.target.id) {
            case "edit-name-link": {
                setLink(index,'name',event.target.value)
                clearError(index, 'name')
                break;
            }
            case "edit-url-link": {
                setLink(index,'url',event.target.value)
                clearError(index, 'url')
               
                break;
            }
            case "upload-button": {
                let file = event.target.files[0];
                if (file !== undefined && file !== null) {
                    let url = URL.createObjectURL(event.target.files[0])
                    let errorMessage = validateImage(file);
                    setPreviewFile(url);
                    setLink(index,'file',file)

                    if (errorMessage !== '') {
                        let errorCopy = errors
                        errorCopy.file = errorMessage;
                       
                        setErrors((prevState) => ({
                            ...prevState, ['link' + index]: errorCopy
                        }))
                    }
                    else {
                        clearError(index, 'image')
                    }
                }
                break;
            }
             default:{
                    break;
            }

        }
    }

   
    return (
        <>
            <h4>Link Number {index} </h4>
            <TextField id="edit-name-link" label={`Link ${index} Name`} value={link.name} onChange={(event) => _handleChange(event)} />
            {errors.name ? <div className="invalid-feedback">{errors.name}</div> : ''}
            <TextField id="edit-url-link" label={`Link ${index} URL`} value={link.url} onChange={(event) => _handleChange(event)} />
            {errors.url ? <div className="invalid-feedback">{errors.url}</div> : ''}

            <div className="edit-page-photo-container">
                <input
                    type="file"
                    id="upload-button"
                    onChange={(event) => _handleChange(event)}
                    style={{ display: 'none' }}
                    ref={hiddenFileInput}


                />
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {
                    hiddenFileInput.current.click();
                }} >
                    Select Image < PhotoCamera />

                </IconButton>
                <img id="edit-image-link" src={previewFile ? previewFile : toAbsoluteUrl(link.imgsrc)} className="img-style" alt="Missing" onChange={(event) => _handleChange(event)} />
            </div>
            {errors.file ? <div className="invalid-feedback">{errors.file}</div> : ''}
            <Divider />
        </>
    )
}


LinkEdit.PropsType={
    link:PropsType.object, 
    index:PropsType.number, 
    setLink: PropsType.setLink, 
    errors:PropsType.object, 
    clearError:PropsType.func, 
    setErrors:PropsType.func
}

export default LinkEdit
