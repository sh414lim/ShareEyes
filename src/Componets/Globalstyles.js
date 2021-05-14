import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
  ${reset}
  h1{
    font-size:50px;
    height:30px;
    width:80%;
    padding-left:100px;
    margin-top:50px;
    font-weight:500;
  }
  h2{
    font-size:25px;
    font-weight:500;
    margin-left:100px;
    margin-top:25px;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  }
`;

export default globalStyle;
