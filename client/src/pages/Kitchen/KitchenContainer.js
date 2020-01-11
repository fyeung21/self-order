import React, { Component } from "react";
import Kitchen from "./Kitchen";

class KitchenContainer extends Component {
    render() {
        document.cookie = "tableNumber=kitchen; expires=01 Jan 2100 00:00:00 UTC;"
        document.cookie = "orderId=kitchen; expires=01 Jan 2100 00:00:00 UTC;"
        return <Kitchen />;
    }
}
export default KitchenContainer;