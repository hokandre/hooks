import React, { useState } from 'react';


const ViewRestaurantWithHooks = ({ restaurant }) => {
     const [show, setShow] = useState(true);   
         
    //fetch restaurant data from zomato api
    return(
        <>
        <button onClick={()=>setShow(false)}> Hide </button>
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

export default ViewRestaurantWithHooks;