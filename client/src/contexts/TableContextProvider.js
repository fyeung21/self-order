import React, { useState, createContext } from 'react';
import TableNumber from '../components/TableNumber';

export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
  const [tableNumber, setTableNumber] = useState(0)

  const updateTableNumber = (value) => {
      console.log('updatetabexxxxl' + value)
      setTableNumber(value)
  }

  return (
    <TableContext.Provider
       value={
         {getTableNumber : tableNumber,
         updateTableNumber : updateTableNumber}
       }> {children}
    </TableContext.Provider>
  )
}

export default TableContextProvider;