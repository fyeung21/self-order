import React from 'react';
import KitchenOrder from '../../components/KitchenOrder';
import "./styles";

const Kitchen = () => {
    return (
        <div className="kitchenBackground">
            <p>This is what the kitchen would see.</p>
            <h1>{"01/23/2020"}</h1>
            <div>
                <KitchenOrder />
            </div>
        </div>
    )
}
export default Kitchen;