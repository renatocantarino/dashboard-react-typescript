import React from 'react';
import formatCurrency from '../../Utils/FormatCurrency';
import {
    LineChart, Line, XAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'

import { Header, LegendContainer, Legend, Container } from './styles'


interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

//FC = funcional componente
const HistoryCharts: React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>
            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Entrada</span>
                </Legend>
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Saidas</span>
                </Legend>
            </LegendContainer>

        </Header>


        <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                <XAxis dataKey="month" stroke="#cecece" />
                <Tooltip formatter={(value: string) => formatCurrency(Number(value))} />
                <Line type="monotone"
                    dataKey="amountEntry"
                    name="Entradas"
                    stroke={lineColorAmountEntry}
                    strokeWidth={5}
                    activeDot={{ r: 8 }}
                    dot={{ r: 5 }} />


                <Line type="monotone"
                    dataKey="amountOutput"
                    name="Saída"
                    stroke={lineColorAmountOutput}
                    strokeWidth={5}
                    activeDot={{ r: 8 }}
                    dot={{ r: 5 }} />


            </LineChart>

        </ResponsiveContainer>
    </Container>
);

export default HistoryCharts;
