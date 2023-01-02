import React, { FC, useRef } from 'react';
import SearchIcon from '@mui/icons-material/SearchTwoTone';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
type SearchButtonProps = {
  isSearchActive: boolean;
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchButton: FC<SearchButtonProps> = ({
  isSearchActive,
  setIsSearchActive,
}) => {
  const SearchFieldRef = useRef<HTMLInputElement>(null);
  const onSearchClick = () => {
    console.log('clicked');
    setIsSearchActive((prev) => !prev);
    if (SearchFieldRef.current != null) {
      SearchFieldRef.current.classList.toggle('search-field-expanded');
    }
  };

  return (
    <div className='search-btn-wrap'>
        <TextField
          className='search'
          size='small'
          placeholder='Search Wines'
          ref={SearchFieldRef}
        />
        <IconButton onClick={onSearchClick}>
          {isSearchActive ? (
            <CancelIcon className='color-black' fontSize='large' />
          ) : (
            <SearchIcon className='color-black' fontSize='large' />
          )}
        </IconButton>
    </div>
  );
};

export default SearchButton;
