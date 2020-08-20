import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

import LinkEdit from './LinkEdit';
import Alert from '../../utils/Alert';

import { isEmpty } from '../../_helpers/is-empty';
import '../links-page-style.scss'




import { updateCategoryData } from '../../../services/api';


const EditPage = ({ title, links, categoryNumber, id, setSubmitForm }) => {

    const [toggleEditPage, setToggleEditPage] = React.useState(false);
    const [errors, setErrors] = useState({});
    const [categoryTitle, setCategoryTitle] = useState("");
    const [categoryLinks, setCategoryLinks] = useState({})
    const [alert, setAlert] = useState({
        type: '',
        message: '',
        open: false
    })
    useEffect(() => {

        if (toggleEditPage) {
            setErrors({ link1: {}, link2: {}, link3: {}, link4: {}, link5: {} })
            setCategoryTitle(title);
            setCategoryLinks({
                link1: {
                    name: links['link1'].name,
                    imgsrc: links['link1'].imgsrc,
                    url: links['link1'].url
                },
                link2: {
                    name: links['link2'].name,
                    imgsrc: links['link2'].imgsrc,
                    url: links['link2'].url
                },
                link3: {
                    name: links['link3'].name,
                    imgsrc: links['link3'].imgsrc,
                    url: links['link3'].url
                },
                link4: {
                    name: links['link4'].name,
                    imgsrc: links['link4'].imgsrc,
                    url: links['link4'].url
                },
                link5: {
                    name: links['link5'].name,
                    imgsrc: links['link5'].imgsrc,
                    url: links['link5'].url
                }
            });
        }
    }, [toggleEditPage,title,links])

    const toggleDrawer = (open) => event => {
        setToggleEditPage(open)
    };

    const setLink = (index, atr, value) => {
        let linkCopy = categoryLinks['link' + index];

        linkCopy[atr] = value;
        setCategoryLinks(prevState => {
            return { ...prevState, ['link' + index]: linkCopy }
        })
    }

    const clearError = (index, type) => {
        const linkCopy = errors['link' + index];

        switch (type) {
            case 'name': {
                delete linkCopy.name
                break;
            }
            case 'url': {
                delete linkCopy.url
                break;
            }
            case 'image': {
                delete linkCopy.file
                break;
            }
            default: {
                break;
            }
        }
        setErrors({
            ...errors, ['link' + index]: { ...linkCopy }
        });
    }




    const onChange = (event) => {

        if (event.target.value.length < 24)
            setCategoryTitle(event.target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();

        let formData = new FormData();
        formData.set('title', categoryTitle);
        formData.set('_id', id);

        Object.keys(categoryLinks).forEach((link, index) => {

            if (categoryLinks[link].file) {
                formData.append('images', categoryLinks[link].file, "link" + (index + 1) + ".png");
            }
            formData.append('link' + (index + 1), JSON.stringify({
                name: categoryLinks[link].name,
                url: categoryLinks[link].url,
                imgsrc: categoryLinks[link].imgsrc
            }));

        });

        if (isEmpty(errors.link1) && isEmpty(errors.link2) && isEmpty(errors.link3) && isEmpty(errors.link4) && isEmpty(errors.link5)) {

            updateCategoryData(categoryNumber, formData).then(res => {
             
                if (res.status === 200) {
                    setSubmitForm(prevState => {
                        return !prevState
                    })

                    setAlert({
                        open: true,
                        type: 'success',
                        message: 'Update success'
                    });
                    setToggleEditPage(false);


                }
            }).catch(err => {
                setErrors(err.response.data)

                setAlert({
                    open: true,
                    type: 'error',
                    message: 'Error update category'
                });

            });
        }
        else {
            setAlert({
                open: true,
                type: 'error',
                message: 'Please fix the highlighted errors before submit'
            });
        }
    }

    // List in the backdrop
    const list = (
        <div className="link-page-edit-page-container">

            <form className="edit-page-form-style" onSubmit={(evt) => onSubmit(evt)} >
                <TextField required id="standard-required" label="Title" value={categoryTitle} onChange={(event) => onChange(event)} />
                {Object.keys(categoryLinks).map((key, index) => {
                    return <LinkEdit key={`link-edit${index}`} link={categoryLinks[key]} setLink={setLink} index={index + 1} errors={errors[key]} clearError={clearError} />
                })}
                <Button size="small" type="submit" variant="contained" color="primary">Submit</Button>
                <Button size="medium" onClick={toggleDrawer(false)} variant="contained" color="secondary">Close</Button>
            </form>

        </div>
    );




    return (
        <div className="link-page-edit-button-container">
            <IconButton onClick={toggleDrawer(true)} className="link-page-edit-button">
                <EditIcon />
            </IconButton>
            <Dialog
                open={toggleEditPage}
                onClose={() => setToggleEditPage(false)}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="dialog-title" >Edit Category</DialogTitle>
                <DialogContent>
                    {list}
                </DialogContent>
            </Dialog>
            <Alert alert={alert} setAlert={setAlert} />
        </div>
    );
}
EditPage.propTypes = {
    title: PropTypes.string,
    links: PropTypes.object,
    categoryNumber: PropTypes.number,
    id: PropTypes.string,
    setSubmitForm: PropTypes.func,
    setAlert: PropTypes.func
}
export default EditPage;



