import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropsTypes from 'prop-types'
import '../shared.scss';


const Alert=(props)=> {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const  AlertMessage=({alert,setAlert})=> {
  const handleClose = () => {
   setAlert(prevState=>{
    return {...prevState,
        open:false}
   })

  };

  return (
    <div className="alert-message">
      <Snackbar open={alert.open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{horizontal:'center',vertical:'top'}}>
            <Alert onClose={handleClose} severity={alert.type==='error'?"error":"success"}>
          {alert.message}
        </Alert>
      </Snackbar>
      
    </div>
  );
}


AlertMessage.PropsTypes = {
  alert:PropsTypes.object,
  setAlert: PropsTypes.func
  
}
export default AlertMessage;