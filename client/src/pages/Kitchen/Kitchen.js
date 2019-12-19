import React from "react";
import KitchenCard from "./../../components/KitchenCard";
import { Button } from "semantic-ui-react";
import "./styles";
import TableNumber from '../../components/TableNumber';


const Kitchen = () => {
  // const date = new Date();
  
    return (
        <div className="kitchenBackground">
            <p>This is what the kitchen would see.</p>
            <h1>{"01/23/2020"}</h1>
            <div>
                <h3>{"time created 14:20"}</h3>
                <TableNumber />
                <div>
                    <KitchenCard />
                    <KitchenCard />
                    <KitchenCard />
                </div>
                <h3>{"time done 14:40 (will show time when 'done' is pressed)"}</h3>
                <Button basic color="blue">Done</Button>
            </div>
        </div>
        <h3>{"time done 14:40 (will show time when 'done' is pressed)"}</h3>
        <Button basic color="blue">
          Done
        </Button>
      </div>
    </div>
  );
};
export default Kitchen;
