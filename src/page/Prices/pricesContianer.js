import React from "react";
import { PricesApi } from "../../api";
import PricesPrsenter from "./pricesPrsenter";

export default class extends React.Component{
    state={
        tickers:null,
        error:null,
        loading:true
    }

    async componentDidMount(){
        try{
            const {data:tickers}= await PricesApi.tickers();
            this.setState({
                tickers,
            })
        }catch{
                this.setState({
                    error:"Can't Find List"
                })
        }finally{
            this.setState({
                loading:false
            })
        }
    }


    render(){
        const{tickers,error,loading}=this.state;
        return(
            <PricesPrsenter
            tickers={tickers}
            error={error}
            laoding={loading}
            />
        )
    }

}