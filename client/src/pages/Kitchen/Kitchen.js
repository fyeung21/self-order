import React from 'react';
import KitchenOrder from '../../components/KitchenOrder';
import { Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import "./styles";

const Kitchen = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    var currentTime = document.getElementById('currentTime');

    function time() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();

        currentTime.textContent = h + ":" + m;
    }

    setInterval(time, 0);

    const history = useHistory()
    const goToMenu = () => {
        history.push('/menu-control')
    }


    return (
        <div className="kitchenBackground">
            <div className="kitHeader">
                <h1>{today}</h1>
                <h1 id="currentTime" className="timeNow"></h1>
                <Button onClick={goToMenu}><h3>Menu Control</h3></Button>
            </div>
            <div className="kitchenFlex">
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
                <div className="kitOrderCont">
                    <KitchenOrder />
                </div>
            </div>
        </div >
    );
};
export default Kitchen;
