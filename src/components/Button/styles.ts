import { darken } from "polished";
import styled from "styled-components";

export const ButtonContainer = styled.button`
margin-top: 30px;
border: none;
width: 302px;
height: 45px;
font-size: 16px;
line-height: 16px;
background: ${({ theme }) => theme.border};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.border)};
};
`;