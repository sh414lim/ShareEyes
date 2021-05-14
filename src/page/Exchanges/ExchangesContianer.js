import React from "react"
import ExchangesPresenter from "./ExchangesPresenter"

export default class extends React.Component{
    state={
        name:null,
        description:null,
        error:null,
        loading:null
    }

    render(){
        const {name,description,error,loading}=this.state;
        return(
                <ExchangesPresenter
                name={name}
                description={description}
                error={error}
                loading={loading}
                />
        )
    }
}