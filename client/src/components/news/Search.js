import React ,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import PropTypes  from 'prop-types'


const SearchComponent = (props) =>{

const [inputValue,setInputValue] = useState("Corona");



const onChange=(event)=>{
    setInputValue(event.target.value)
}
const onKeyPress=(event)=>{
  if(event.key==='Enter')
    props.onSearch(event,inputValue);
}
 
  return (
    <Paper className="search-container" >
      <InputBase
        className="text-box"
        placeholder="Search News by keywords"
        inputProps={{ 'aria-label': 'Search News by keywords'}}
        onChange={(event)=>onChange(event)}
        onKeyPress={(event=>onKeyPress(event))}
      />
       <Divider orientation="vertical" flexItem />
      <IconButton   className="search-icon" aria-label="search" onClick={(event)=>props.onSearch(event,inputValue)} >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchComponent.propTypes = {
  onSearch: PropTypes.func,

}

export default SearchComponent