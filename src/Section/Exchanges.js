import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Container=styled.div``;

const Name=styled.span``;

const Link=styled.a``;


const Exchange =({name,description,links})=>(
    <Container>
        <Name>{name}</Name>
        {description && `${description.substring(0,80)}...`}
        <Link>
        {links &&
        links.website &&
        links.website.map((w,i)=>(
            <Link key={i} href={w}>
                {w}
        </Link>
        ))}
        </Link>
            </Container>

)

Exchange.propTypes={
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    links:PropTypes.shape({
        website:PropTypes.arrayOf(PropTypes.string.isRequired)
    })
}

export default Exchange;