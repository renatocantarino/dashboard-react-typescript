import styled from 'styled-components';

declare interface IContainerProps {
    color: string
}

declare interface ITagProps {
    color: string
}

export const Container = styled.li<IContainerProps>`   
    background-color: ${props => props.color};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    transition: all .3s;
    position: relative;
    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }    
`;

export const Tag = styled.div<ITagProps>`   
    background-color: ${props => props.color};
    position: absolute;
    width: 10px;
    height: 60%;
    left: 0;
`;



