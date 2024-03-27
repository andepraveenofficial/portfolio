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

    details{
      width:100%;
       max-width:920px !important;
    }

h1, h2, h3, h4, h5, h6 {
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}

    h1 { font-size: 36px; color: #F06292; }
    h2 { font-size: 28px; color: #64B5F6; }
    h3 { font-size: 24px; color: #FFB74D; }
    h4 { font-size: 20px; color: #81C784; }
    h5 { font-size: 18px; color: #BA68C8; }
    h6 { font-size: 16px; color: #4DB6AC; }

    p { margin-top: 10px; font-size: 18px; }

    ul { list-style-type: disc; margin-left: 25px; }
    ol { list-style-type: number; margin-left: 25px; }

code { 
    width: 100% !important; 
    max-width: 920px !important;
}


code:not(.ch-code-scroll-parent) {
    font-family: 'Fira Code', monospace;
    padding: 5px;
    border-radius: 5px;
    background-color: #f4f4f4;
    color: #333333;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden; /* Ensures box shadow doesn't bleed outside */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
}


thead {
  background-color: #f0f0f0;
}


tr {
  border-bottom: 1px solid #ddd;
}


tr:nth-child(even) {
  background-color: #f5f5f5;
}


th,
td {
  padding: 15px; /* Increased padding for better spacing */
  text-align: left;
}


th {
  font-weight: bold;
  color: #333; /* Darker text color */
}


tr:hover {
  background-color: #e0e0e0; /* Lighter background color on hover */
}
 
`;

export default MarkdownStyles;
