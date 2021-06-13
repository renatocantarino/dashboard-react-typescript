import React from 'react';
import { Container, Tag } from "./styles";

declare interface ICardProps {
    color: string
    tagColor: string
    title: string
    subTitle: string
    amount: string
}

const FinanceCard: React.FC<ICardProps> = ({ color, tagColor, title, subTitle, amount }) => (
    <Container color={color}>
        <Tag color={tagColor} />
        <div>
            <span>{title}</span>
            <small>{subTitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
)

export default FinanceCard;