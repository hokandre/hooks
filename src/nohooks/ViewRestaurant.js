import React from 'react';

const ViewRestaurant = ({ restaurant, show, toogleHideShow }) => {
         
    //fetch restaurant data from zomato api
    return(
        <>
        <button onClick={toogleHideShow}> Hide </button>
        {
            show ? 
            (
                <ul>
                    {restaurant.map(res => (<li key={res.restaurant.id}>{res.restaurant.name}</li>))}
                </ul>
            ) : 
            null
        }
        </>     
    )
}

export default ViewRestaurant;