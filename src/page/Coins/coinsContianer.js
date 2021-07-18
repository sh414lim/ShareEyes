import React from "react";
import { CoinsApi } from "../../api";
import CoinsPrsenter from "./coinsPrsenter";

export default class extends React.Component{
    state={
        coins:null,
        error:null,
        loading:false
    }
    async componentDidMount(){
        const {data:coins}=await CoinsApi.coins();
        this.setState({
            coins,
        })
    }

    render(){
        const{coins,error,loading}=this.state
        return(
            <CoinsPrsenter
            coins={coins}
            error={error}
            loading={loading}
            />
        )
    }
}