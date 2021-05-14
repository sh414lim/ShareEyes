import axios from "axios";

const api=axios.create({
    baseURL:"https://api.coinpaprika.com/v1/",
    params:{
        language:"en-us"
    }
});


export const Prices={
    name:()=>api.get("tickers/name"),
    symbol:()=>api.get("tickers/symbol"),
    beta_value:()=>api.get("tickers/beta_value")
}

export const Exchanges={
    name:()=>api.get("exchanges/name"),
    description:()=>api.get("exchanges/description")
}

export const Coins={
    name:()=>api.get("coins/name"),
    rank:()=>api.get("coins/rank")
}

