
import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
} from 'recharts'
import formatCurrency from '../../Utils/FormatCurrency';


import {
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight
} from './styles'


interface IBarChartProps {
    title: string;
    data: {
        label: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}


const BarCharts: React.FC<IBarChartProps> = ({ title, data }) => (
    <Container>
        <SideLeft>
            <h2>{title}</h2>
            <LegendContainer>
                {

                    data.map((indicator) => (
                        <Legend key={indicator.label}
                            color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.label}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 5, right: 40, left: 20, bottom: 5 }}>
                    <Bar dataKey="amount" >
                        {data.map((indicator) => (<Cell
                            key={indicator.label}
                            fill={indicator.color} />))}
                    </Bar>
                    <Tooltip
                        cursor={{ fill: 'none' }}
                        formatter={(value: any) => formatCurrency(Number(value))}
                    />
                </BarChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default BarCharts;
