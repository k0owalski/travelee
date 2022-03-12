import { createGlobalStyle } from 'styled-components';
import backgroundImage from 'img/background.jpg';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Quicksand', sans-serif;
        color: #333;

        overflow-x: hidden;

        @supports (backdrop-filter: none) {
            color: #fff;
        }
    }

    #root {
        width: 100vw;
        min-height: 100vh;
        padding: 9rem 0 0;
        background: linear-gradient(112.68deg, rgba(244, 43, 79, 0.56) 0%, rgba(243, 148, 61, 0.56) 100%), url("${backgroundImage}") no-repeat fixed bottom;
        background-size: cover;
    }
`;

export default GlobalStyle;
