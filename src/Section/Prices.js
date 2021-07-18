import React from "react";
import styled from "styled-components";
import PorpTypes from "prop-types";

const Container=styled.div``;



const Price= ({name,symbol,quotes})=>{

<Container>
    {name}/{symbol}: ${quotes}
</Container>

}

Price.PorpTypes={
    id:PorpTypes.string.isRequired,
    name:PorpTypes.string.isRequired,
    symbol:PorpTypes.string.isRequired,
    quotes:PorpTypes.shape({
        USD:PorpTypes.shape({
            price:PorpTypes.number.isRequired
        }).isRequired
    }).isRequired

}

export default Price;

