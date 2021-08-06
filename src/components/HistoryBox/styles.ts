import styled from 'styled-components';

interface ILegendProps {
    color: string;
}


export const Header = styled.header`
 display: flex;
 width: 100%;
 justify-content: space-between;

 > h2 {
        margin-top: 5px;
        padding-left: 18px;
        }   
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 18px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;    
    margin-left: 7px; 
       
    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;        
        line-height: 40px;
        text-align: center;
    }
    > span {
        margin-left: 5px;
    }
    @media(max-width: 145px){
        font-size: 14px;
        margin: 3px 0;
        > div {
            height: 35px;
            width: 35px;
            line-height: 35px;
        }
        > span {
            margin-left: 7px;
        }
    }
`;


export const Container = styled.div`
    width: 100%;
    height: 360px;
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

   


`;

