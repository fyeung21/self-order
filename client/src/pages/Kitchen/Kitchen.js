import React from 'react';
import KitchenOrder from '../../components/KitchenOrder';
import { Grid } from 'semantic-ui-react'
import "./styles";

const Kitchen = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (
        <div className="kitchenBackground">
            <h1>{today}</h1>
            <p>This is what the kitchen would see.</p>
            <Grid columns={3}>
                <Grid.Column>
                    <KitchenOrder />
                </Grid.Column>
                <Grid.Column>
                    <KitchenOrder />
                </Grid.Column>
                <Grid.Column>
                    <KitchenOrder />
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default Kitchen;