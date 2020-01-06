import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import "./../kitchenStyles.css";

const CancelBtn = () => {
    const [active, setActive] = useState(false)

    cancelClick = () => {
        setActive(!active)
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    const CancelledBtn = () => {
        return (
            <div>
                <h3>{time}</h3>
                <Button
                    className="btn"
                    basic
                    size="large"
                    color='grey'
                    toggle active={active}
                    onClick={this.cancelClick} >
                    Cancelled
                </Button>
            </div>
        )
    }
    const CancelBtn = () => {
        return (
            <div>
                <Button
                    className="btn"
                    size="large"
                    color="red"
                    toggle active={active}
                    onClick={this.cancelClick} >
                    Cancel
                </Button>
            </div>
        )
    }


    return (
        <div>
            {active ? <CancelledBtn /> : <CancelBtn />}
        </div>
    )

}
export default CancelBtn;