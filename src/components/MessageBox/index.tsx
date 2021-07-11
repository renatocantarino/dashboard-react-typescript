import React from 'react';
import { Container } from './styles';

declare interface IBoxProps {
    title: string;
    description: string;
    footerText: string
    icon: string;
}

const MessageBox: React.FC<IBoxProps> = ({ title, description, footerText, icon }) => {

    return (
        <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt="happy" />
                </h1>
                <p> {description} </p>
            </header>
            <footer>
                {footerText}
            </footer>
        </Container>
    )

}

export default MessageBox;
