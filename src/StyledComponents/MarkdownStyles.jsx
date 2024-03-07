import { styled } from 'styled-components';

const MarkdownStyles = styled.div`
    background-color: #ffffff;
    padding: 50px;
    border-radius: 8px;
    color: #000000;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    h1, h2, h3, h4, h5, h6 {
        margin-top: 20px;
        font-weight: bold;
    }

    h1 { font-size: 32px; }
    h2 { font-size: 24px; }
    h3 { color: gray; font-size: 20px; }
    h4 { font-size: 20px; }
    h5 { color: green; font-size: 16px; }
    h6 { font-size: 16px; }

    p { margin-top: 5px; font-size: 16px; }

    ul { list-style-type: disc; margin-left: 25px; }
    ol { list-style-type: number; margin-left: 25px; }

    code { 
          width:100% !important; 
       max-width:720px !important;
    }
`;

export default MarkdownStyles;
