import React, { useContext, useState } from "react";
import "./styles.css";
import { TableContext } from "../../contexts/TableContextProvider"


const TableNumber = () => {
  return (
    <TableContext.Consumer> 
        {({getTableNumber})=>{
        return (
          <div>
            <p className="number">Table Number: {getTableNumber}</p>
          </div>
        )
      }}
    </TableContext.Consumer>
  )
}
export default TableNumber;
