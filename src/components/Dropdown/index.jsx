import React from 'react';
import classes from "./select.module.scss";


export const Dropdown = ({users,setSelected, selected,posts }) => {


  const handleChange = (event) => {
    setSelected(event.target.value);
  }


  return (
    <label>
      Список пользователей
    <select
      className={classes.select}
      onChange={handleChange}
    >
      {
         users.map(item => (
           <option
          key={item.id}
          value={item.id}
            >
             {item.name}
           </option>))
      }
    </select>
    </label>
  );
};
