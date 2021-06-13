import styled from 'styled-components';

interface ITitleProps {
   lineColor: string
}

export const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
`;

export const Title = styled.div<ITitleProps>`

> h3 {
   color:  ${props => props.theme.colors.white};   

   &::after{
      content: '';
      display: block;
      width: 25px;
      border-bottom: 8px solid ${props => props.lineColor};      
   }
  }

`;

export const Controls = styled.div`
  display: flex;
  `;

