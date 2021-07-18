import axios from "axios";

const api=axios.create({
    baseURL:"https://api.coinpaprika.com/v1/",
    params:{

    }
});


export const PricesApi={
   tickers:()=>api.get("tickers"),
}

export const ExchangesApi={
    exchanges:()=>api.get("exchanges"),
}

export const CoinsApi={
    coins:()=>api.get("coins"),
}




