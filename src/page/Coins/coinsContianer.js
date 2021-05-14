import React from "react";
import CoinsPrsenter from "./coinsPrsenter";

export default class extends React.Component{
    state={
        name:null,
        rank:null,
        error:null,
        loading:false
    }

    render(){
        const{name,rank,error,loading}=this.state
        return(
            <CoinsPrsenter
            name={name}
            rank={rank}
            error={error}
            loading={loading}
            />
        )
    }
}