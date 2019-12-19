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

const Kitchen = () => {
  // const date = new Date();
  
    return (
        <div className="kitchenBackground">
            <h1>{today}</h1>
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
        <h3>{"time done 14:40 (will show time when 'done' is pressed)"}</h3>
        <Button basic color="blue">
          Done
        </Button>
    </div>
  );
};
export default Kitchen;
