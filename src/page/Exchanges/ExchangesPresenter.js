import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Componets/Section";
import Load from "../../Componets/Load";

const Container=styled.div``;

const Name=styled.div``;

const ExchangesPresenter =({exchanges,error,loading})=>
loading ? (<Load/>
    ) :(
    <Container>
        {exchanges && exchanges.length > 0 && (
            <Section>
                {exchanges.map(exchange=>(
                    <Name key={exchange.id}>
                        {exchange.name}
                        {exchange.description}
                        {exchange.list.website}
                        </Name>
                ))}
            </Section>
        )}
    </Container>
)

ExchangesPresenter.propTypes={
    exchanges:PropTypes.array,
    loading:PropTypes.bool
}



export default ExchangesPresenter;