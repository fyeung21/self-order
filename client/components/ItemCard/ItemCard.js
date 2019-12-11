import React, { Component } from 'react';

class ItemCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>{"Image here"}</p>
                </div>
                <div>
                    <div>
                        <p>{"Name of Item"}</p>
                    </div>

                    <div>
                        <p>$ {"Price of Item"} / {"3"} pcs</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemCard;