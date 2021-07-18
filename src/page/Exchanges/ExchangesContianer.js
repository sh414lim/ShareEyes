import React from "react"
import { ExchangesApi } from "../../api";
import ExchangesPresenter from "./ExchangesPresenter"

export default class extends React.Component{
    state={
        exchanges:null,
        error:null,
        loading:true
    }
    async componentDidMount(){
        try{
            const{data:exchanges}= await ExchangesApi.exchanges();
            this.setState(
                exchanges,
            )
        } catch{
                this.setState({
                    error:"Can't Find..."
                })                       
        } finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const {exchanges,error,loading}=this.state;
        return(
                <ExchangesPresenter
                exchanges={exchanges}
                error={error}
                loading={loading}
                />
        )
    }
}

