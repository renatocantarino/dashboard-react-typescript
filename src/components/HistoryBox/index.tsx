import React from 'react';
import {
    LineChart, Line, XAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'

import { Container } from './styles'


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
        <h2>Histórico de saldo</h2>

        <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                <XAxis dataKey="month" stroke="#cecece" />
                <Tooltip />
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
