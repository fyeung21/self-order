import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';


export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
  const [tableNumber, setTableNumber] = useState(0)
  const [redirect, setRedirect] = useState(false)
  const history = useHistory();

  //check for tableNumber cookie when page is loaded
  useEffect(()=>{
    let tableNumber = getCookie("tableNumber");
  if (tableNumber != "") {
    setTableNumber(tableNumber)
    } 
  else {
    // alert("Session expired. Back to Welcome Page. ");
    // setRedirect(true)
    console.log('run')
    history.push('/')
  }
  },[tableNumber])

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const updateTableNumber = (value) => {
      setTableNumber(value)
      //set cookie for table number so it will remain when user refresh the page
      let d = new Date();
      d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000)); //1 day
      var expires = "expires="+d.toUTCString();
      document.cookie = "tableNumber" + "=" + value + ";" + expires + ";"
  }

  return (
    <TableContext.Provider
       value={
         {getTableNumber : tableNumber,
         updateTableNumber : updateTableNumber}
       }> {children}
       {/* {redirect ? <Redirect to="/" /> : null} */}
    </TableContext.Provider>
  )
}

export default TableContextProvider;