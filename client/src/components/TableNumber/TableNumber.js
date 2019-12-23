import React, { Fragment, useContext, useState } from "react";
import "./styles.css";
import { TableContext } from "../../contexts/TableContextProvider"


const TableNumber = () => {
  return (
    <TableContext.Consumer> 
        {({getTableNumber})=>{
        return (
          <Fragment>
              Table Number: {getTableNumber}
          </Fragment>
        )
      }}
    </TableContext.Consumer>
  )
}
export default TableNumber;
