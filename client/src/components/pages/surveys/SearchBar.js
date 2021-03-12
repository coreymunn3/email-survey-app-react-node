import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { filterSurveys, clearFilter } from '../../../actions/surveyActions';

const useStyles = makeStyles({
  searchbar: {
    width: '100%',
    marginBottom: '1rem',
  },
});

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(searchText);
    if (searchText !== '') {
      dispatch(filterSurveys(searchText));
    } else {
      dispatch(clearFilter());
    }
  }, [searchText]);

  return (
    <div>
      <TextField
        id='search'
        placeholder='Search...'
        variant='outlined'
        className={classes.searchbar}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
