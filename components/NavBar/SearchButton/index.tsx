import React, { FC, useRef } from 'react';
import SearchIcon from '@mui/icons-material/SearchTwoTone';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

type SearchButtonProps = {
  isSearchActive: boolean;
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchButton: FC<SearchButtonProps> = ({
  isSearchActive,
  setIsSearchActive,
}) => {
  const { push, query } = useRouter();
  const SearchFieldRef = useRef<HTMLInputElement>(null);
  const onSearchClick = () => {
    setIsSearchActive((prev) => !prev);
    if (SearchFieldRef.current != null) {
      SearchFieldRef.current.classList.toggle('search-field-expanded');
    }
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    push({
      pathname: '/products',
      query: { searchQuery: e.target.searchTxt.value },
    });
    console.log('form submit', e);
  };
  return (
    <form className='search-btn-wrap' onSubmit={onSearch}>
      <TextField
        name='searchTxt'
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
    </form>
  );
};

export default SearchButton;
