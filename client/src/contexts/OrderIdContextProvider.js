import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';


export const OrderIdContext = createContext();

const OrderIdContextProvider = ({ children }) => {
  const [orderId, setOrderId] = useState(0)
  const [redirect, setRedirect] = useState(false)
  const history = useHistory();

  //check for orderId cookie when page is loaded
  useEffect(()=>{
    let orderId = getCookie("orderId");
  if (orderId != "") {
    setOrderId(orderId)
    } 
  else {
    // alert("Session expired. Back to Welcome Page. ");
    // setRedirect(true)
    console.log('useeffect get orderid')
    history.push('/')
  }
  },[orderId])

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

  const updateOrderId = (value) => {
      setOrderId(value)
      //set cookie for orderId number so it will remain when user refresh the page
      let d = new Date();
      d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000)); //1 day
      var expires = "expires="+d.toUTCString();
      document.cookie = "orderId" + "=" + value + ";" + expires + ";"
  }

  return (
    <OrderIdContext.Provider
       value={
         {getOrderId : orderId,
         updateOrderId : updateOrderId}
       }> {children}
       {/* {redirect ? <Redirect to="/" /> : null} */}
    </OrderIdContext.Provider>
  )
}

export default OrderIdContextProvider;