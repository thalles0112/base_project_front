import { createGlobalStyle } from "styled-components";
const height = window.innerHeight

export const GlobalStyle = createGlobalStyle`
#main-app{
    height: 100vh;
    width: 100vw;
}


*{
    font-family: 'Roboto';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    

`