import React from "react";
import PricesPrsenter from "./pricesPrsenter";

export default class extends React.Component{
    state={
        name:null,
        symbol:null,
        beta_value:null,
        error:null,
        loading:false
    }


    render(){
        const{name,symbol,beta_value,error,loading}=this.state;
        return(
            <PricesPrsenter
            name={name}
            symbol={symbol}
            beta_value={beta_value}
            error={error}
            laoding={loading}
            />
        )
    }

}