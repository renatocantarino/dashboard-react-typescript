import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
    color:  ${props => props.theme.colors.white};

    padding: 25px;

    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 8px;

    }
    ::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.gray} ;
        border-radius: 5px;

    }
`;

