import React, { useContext, useState } from "react";
import "./styles.css";
import TableContextProvider, { TableContext } from "../../contexts/TableContextProvider"


const TableNumber = () => {
  // const [number, setNumber] = useState(0)
  // const value = useContext(TableContext);
  // setNumber(tableNumber)
  // console.log("!!" + value)
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
