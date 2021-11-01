import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Section/Prices";
import Load from "../../Componets/Load";

const Container=styled.div``;

const Item=styled.div``;


const pricesPrsenter =({tickers,error,loading})=>
loading ? (<Load/>
    ) :(
    <Container>
        {tickers && tickers.length > 0 && (
            <Section>
                {tickers.map(tickers=>(
                    <Item key={tickers.id}>{tickers.name}/{tickers.symbol}:${tickers.beta_value}</Item>
                ))}
            </Section>
            
        )}
    </Container>
)

pricesPrsenter.propTypes={
    tickers:PropTypes.array,
    loading:PropTypes.bool
}



export default pricesPrsenter;