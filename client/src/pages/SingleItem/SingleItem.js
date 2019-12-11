import React, { Component } from 'react';
import ItemCard from './../../components/ItemCard'

class SingleItem extends Component {
    render() {
        return (
            <div>
                <p>this is one single item page found at /single-item/:id</p>
                <ItemCard />
            </div>
        );
    }
}
export default SingleItem;