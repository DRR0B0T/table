import React from 'react';
import {useSortableData} from "../../hooks/useSortableData";

export const TableRender = ({posts,searchValue,findSearchValue,onRemoveItems,selected}) => {
  const {items, requestSort, sortConfig} = useSortableData(posts);
  const getClassNamesFor = (id) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === id ? sortConfig.direction : undefined;
  };


  return (
    <table>
    <caption><strong>Table</strong></caption>
    <thead>
    <tr>
      <th>
        <button
          type="button"
          onClick={() => requestSort('id')}
          className={getClassNamesFor('id')}
        >
          User
        </button>
      </th>
      <th>
        <button
          type="button"
          onClick={() => requestSort('title')}
          className={getClassNamesFor('title')}
        >
          Title
        </button>
      </th>
      <th>
        <button
          type="button"
          onClick={() => requestSort('body')}
          className={getClassNamesFor('body')}
        >
          Body
        </button>
      </th>
    </tr>
    </thead>
    <tbody>
    {
     (searchValue ?
        findSearchValue.map((item, key) => (
        <tr key={key}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td className='tdLine'>{item.body}
            <img
              onClick={() => onRemoveItems(item.id)}
              src="img/btn-remove.svg"
              alt="Clear"/>
          </td>
        </tr>
      )) : items.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td className='tdLine'>{item.body}
              <img
                onClick={() => onRemoveItems(item.id)}
                src="img/btn-remove.svg"
                alt="Clear"/>
            </td>
          </tr>
        )))

    }
    </tbody>
  </table>
  );

};
