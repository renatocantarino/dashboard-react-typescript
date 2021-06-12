import React, { useMemo } from 'react';
import emojis from '../../Utils/emoji';
import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles'


//FC = funcional componente
const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, [])

    return (
        <Container>
            <h1>Toggle</h1>
            <Profile>
                <Welcome>Olá , {emoji}</Welcome>
                <UserName>Renato</UserName>

            </Profile>
        </Container>
    );
}


export default MainHeader;
