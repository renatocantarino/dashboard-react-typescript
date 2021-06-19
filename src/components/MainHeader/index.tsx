import React, { useMemo } from 'react';
import Emojis from '../../Utils/Emoji';
import Toggle from '../Toggle';
import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles'


//FC = funcional componente
const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * Emojis.length);
        return Emojis[index];
    }, [])

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá , {emoji}</Welcome>
                <UserName>Renato</UserName>
            </Profile>
        </Container>
    );
}


export default MainHeader;
