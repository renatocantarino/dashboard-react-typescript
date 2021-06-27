import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import { Container } from './styles';

import dollarIcon from '../../assets/dollar.svg'
import upIcon from '../../assets/arrow-up.svg'
import downIcon from '../../assets/arrow-down.svg'


interface IWalletBoxProps {
    title: string;
    color: string;
    amount: number;
    footerLabel: string;
    icon: 'dollar' | 'up' | 'down';
}

//FC = funcional componente
const WalletBox: React.FC<IWalletBoxProps> = ({ title, color, amount,
    footerLabel, icon }) => {

    const IconSelected = useMemo(() => {
        switch (icon) {
            case 'dollar': return dollarIcon;
            case 'down': return downIcon;
            case 'up': return upIcon;
            default: return dollarIcon;
        }
    }, [icon])

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimals={2}
                    decimal=','
                    preserveValue
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={IconSelected} alt={title} />
        </Container>
    );
}


export default WalletBox;
