import React from 'react';
import { Container, ToggleLabel, Selector } from './styles'

//FC = funcional componente
const Toggle: React.FC = () => (

    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <Selector
            checked={false}
            onChange={(ev) => console.log('mudou')}>
        </Selector>
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle;
