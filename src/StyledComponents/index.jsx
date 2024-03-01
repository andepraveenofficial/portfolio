import styled from "styled-components"

export const Heading = styled.h1`
  font-family: "Tangerine", cursive;
  font-weight: 700;
  font-style: normal;
  font-size:45px;
`;


export const ProjectIcon = styled.div`
  font-size: 8rem;
  transition: all 0.3s ease-in-out;
  color: #fff; /* Set default color */

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color: ${(props) => props.hoverColor}; /* Change color on hover */
  }
`;

export const ProjectTitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.titleColor}; /* Apply the color here */
`;