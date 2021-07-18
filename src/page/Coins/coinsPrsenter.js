import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Componets/Section";
import Load from "../../Componets/Load";

const Container=styled.div``;

const Item=styled.div``;


const coinsPrsenter =({coins,error,loading})=>
loading ? (<Load/>
    ) :(
    <Container>
        {coins && coins.length > 0 && (
            <Section>
                {coins.map(coin=>(
                    <Item key={coin.id}>#{coin.rank}{coin.name}/{coin.symbol}</Item>
                ))}
            </Section>
            
        )}
    </Container>
)

coinsPrsenter.propTypes={
    tickers:PropTypes.array,
    loading:PropTypes.bool
}



export default coinsPrsenter;