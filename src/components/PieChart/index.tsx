import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import { Container, SideLeft, Legend, LegendContainer, SideRight } from './styles'

interface ChartProps {
    data: {
        name: string,
        value: number,
        color: string
    }[];
}

//FC = funcional componente
const PieCharts: React.FC<ChartProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map((indicator) => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.value}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="value">
                        {
                            data.map((indicator, index) => (
                                <Cell key={index} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default PieCharts;
