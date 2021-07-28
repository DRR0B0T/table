import React from 'react';
import classes from './search.module.scss'

export const Search = ({ searchValue, setSearchValue, onChangeSearchInput}) => {



  return (
    <div className={classes.content}>
      <div className={classes.search}>
        <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : ''} </h1>
        <div className={classes.searchBlock}>
          {searchValue &&
            <img
            onClick={() => setSearchValue('')}
            className={classes.clear}
            src="img/btn-remove.svg"
            alt="Clear"/>
            }
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder='Поиск...'/>
        </div>
      </div>

    </div>

  )
};
