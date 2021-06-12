import React from 'react';
import {
    Container,
    Header,
    Title,
    LogoImg,
    MenuItemLink,
    MenuContainer
} from './styles'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp

} from 'react-icons/md'


import logo from '../../assets/logo.svg'

//FC = funcional componente
const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt='minha logo' />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowDownward />
                    Saidas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}


export default Aside;
