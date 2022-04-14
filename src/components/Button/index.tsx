import React, { ButtonHTMLAttributes } from "react";
import {
    ButtonContainer
} from './styles';
interface ButtonProps {
text: string;
onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({text, onClick}) => {
return (
    <ButtonContainer onClick={onClick}>
        {text}
    </ButtonContainer>
);
};

export default Button;