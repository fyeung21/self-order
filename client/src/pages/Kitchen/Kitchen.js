import React from 'react';
import KitchenOrder from '../../components/KitchenOrder';
import { Grid, Button } from 'semantic-ui-react';
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

    setInterval(time, 1000);

    const history = useHistory()
    const clickHandler4 = () => {
        history.push('/menucontrol')
    }


    return (
        <div className="kitchenBackground">
            <div className="kitHeader">
                <h1>{today}</h1>
                <h1 id="currentTime" className="timeNow"></h1>
                <Button onClick={clickHandler4}><h1>Menu Control</h1></Button>
            </div>
            <Grid columns={3} relaxed className="test">
                <Grid.Column className="kitchenGrid">
                    <KitchenOrder />
                </Grid.Column>
                <Grid.Column className="kitchenGrid">
                    <KitchenOrder />
                </Grid.Column>
                <Grid.Column className="kitchenGrid">
                    <KitchenOrder />
                </Grid.Column>
            </Grid>
        </div>
    );
};
export default Kitchen;
