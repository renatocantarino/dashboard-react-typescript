import React from 'react';

import { Container, Title, Controls } from './styles'

interface IContentHeaderProps {
    title: string
    lineColor: string
    children: React.ReactNode
}

//FC = funcional componente
const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {

    return (
        <Container>
            <Title lineColor={lineColor}>
                <h3>{title}</h3>
            </Title>
            <Controls>
                {children}
            </Controls>
        </Container>)
}

export default ContentHeader;
