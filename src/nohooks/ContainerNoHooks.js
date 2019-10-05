import React from 'react';
import Component1 from '../Component1';
import Component2 from '../Component2';
import ViewRestaurant from './ViewRestaurant';


const fetchRestaurantFromZomato = (containerComponent) => {
    const apiKey = "34cd2b83994acb2d7313859cd505ee80";
    fetch('https://developers.zomato.com/api/v2.1/search', {
        headers : {
            "user-key" : apiKey
        }
    })
        .then(response => {
          response.json()
            .then(data => {
                containerComponent.setState({
                    restaurant : data.restaurants
                }, ()=> { console.log("Selesai Fetch!Bersihkan console dan Silakan klik tombol hide! perhatikan render")})
            })
           .catch(error => {
               console.log(error)
           })
          
        })
        .catch(error =>{
            console.log(error)
        });
}
export default class Container extends React.Component {
    state = {
        restaurant : [],
        show : true
    }

    toogleHideShow = () => {
        this.setState({
            show : false
        })
    }

    componentDidMount(){
        fetchRestaurantFromZomato(this)
    }

    render(){
        return(
            <>
                <ViewRestaurant restaurant={this.state.restaurant} show={this.state.show} toogleHideShow={this.toogleHideShow}/>
                <Component1/>
                <Component2/>
            </>
        )
    }
} 