import styled from 'styled-components';

interface GridContainerProps {
    numCols: number;
}

export const Container = styled.div`
width: 100% ;
height: 100% ;
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;
export const Title = styled.h1`

`;
export const GridContainer = styled.div<GridContainerProps>`
display: grid ;
grid-template-columns: repeat(${(props) => props.numCols}, 20px) ;
width: "fit-content";
margin-top: 50px ;
`;
export const ColumContainer = styled.div`
border: 1px solid  ${({ theme }) => theme.border};
`;
export const ButtonContainer = styled.div`
display: flex ;
align-items: center ;
justify-content: center ;
button + button {
    margin-left: 20px ;
}
`;