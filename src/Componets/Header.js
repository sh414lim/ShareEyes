import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header``;

const List = styled.ul`
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-left: 100px;
  margin-top: 40px;
`;

const Item = styled.li`
  padding: 8px;
  font-size: 30px;
  font-weight: 600;
  background-color: ${(props) => (props.current ? "orange" : "white")};
  transition: background-color 0.7s ease-in-out;
  color: ${(props) => (props.current ? "white" : "black")};
  transition: color 0.7s ease-in-out;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

const Page = styled(Link)`
  display: flex;
  height: 10px;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Head>
    <List>
      <Item current={pathname === "/"}>
        <Page to="/">Prices</Page>
      </Item>
      <Item current={pathname === "/exchanges"}>
        <Page to="/exchanges">Exchanges</Page>
      </Item>
      <Item current={pathname === "/coins"}>
        <Page to="/coins">Coins</Page>
      </Item>
    </List>
  </Head>
));
