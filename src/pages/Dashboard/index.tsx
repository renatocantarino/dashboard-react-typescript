import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../shared/SelectInput';
import { Meses, GetCurrentMonth, GetCurrentYear } from '../../Utils/Dates'

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';


import { Container, Content } from './styles';
import WalletBox from '../../components/WalletBox';

import MessageBox from '../../components/MessageBox';
import happy from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import PieCharts from '../../components/PieChart';



//FC = funcional componente
const Dashboard: React.FC = () => {

    const [mesSelecionado, setMesSelecionado] = useState<number>(GetCurrentMonth());
    const [anoSelecionado, setAnoSelecionado] = useState<number>(GetCurrentYear());

    const Anos = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const year = new Date(item.date).getFullYear();
            if (!uniqueYears.includes(year))
                uniqueYears.push(year)
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    }, []);

    const meses = useMemo(() => {
        return Meses.map((item) => {
            return {
                value: item.value,
                label: item.label
            }
        });

    }, []);


    const totalGains = useMemo(() => {
        let total: number = 0;
        gains.forEach(item => {
            const data = new Date(item.date);
            const ano = data.getFullYear();
            const mes = data.getMonth() + 1;

            if (mes === mesSelecionado && ano === anoSelecionado) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('invalid amount.');
                }
            }
        });
        return total;
    }, [anoSelecionado, mesSelecionado]);


    const totalExpense = useMemo(() => {
        let total: number = 0;
        expenses.forEach(item => {
            const data = new Date(item.date);
            const ano = data.getFullYear();
            const mes = data.getMonth() + 1;

            if (mes === mesSelecionado && ano === anoSelecionado) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('invalid amount.');
                }
            }
        });
        return total;
    }, [anoSelecionado, mesSelecionado]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpense;
    }, [totalGains, totalExpense]);



    const returnMessage = (title: string, descrption: string,
        iconType: string, footerText: string) => {
        return {
            title: title,
            description: descrption,
            icon: iconType,
            footerText: footerText
        }
    }

    const message = useMemo(() => {

        if (totalBalance < 0) {
            return returnMessage('Gastou tudo Porraaa!',
                'sua carteira esta na merda',
                sad,
                'já pensou em PARAR DE GASTARRR?');

        }
        return returnMessage(
            'Muito bem!',
            'sua carteira esta positiva',
            happy,
            'já pensou em investir em hinode?')

    }, [totalBalance]);
    const ExpensesXGains = useMemo(() => {
        const total = totalGains + totalExpense;
        const percentGains = (totalGains / total) * 100;
        const percentExpense = (totalExpense / total) * 100;
        const data = [
            {
                name: 'Entrada',
                value: Number(percentGains.toFixed(1)),
                color: '#E44C4E'
            },
            {
                name: 'Saida',
                value: Number(percentExpense.toFixed(1)),
                color: '#F7931B'
            }
        ]

        return data;
    }, [totalGains, totalExpense]);

    const handleMonthSelected = (month: string) => {
        const parseMonth = Number(month);
        setMesSelecionado(parseMonth);
    }

    const handleYearSelected = (year: string) => {
        const parseYear = Number(year);
        setAnoSelecionado(parseYear)
    }

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='red'>
                <SelectInput
                    options={meses}
                    defaultValue={mesSelecionado}
                    onChange={(e) => handleMonthSelected(e.target.value)} />

                <SelectInput
                    options={Anos}
                    defaultValue={anoSelecionado}
                    onChange={(e) => handleYearSelected(e.target.value)} />
            </ContentHeader>
            <Content>

                <WalletBox
                    title='Entradas'
                    amount={totalGains}
                    color='#4E41F0'
                    footerLabel='Atualizado com base nas entradas'
                    icon='up'
                />
                <WalletBox
                    title='Saida'
                    amount={totalExpense}
                    color='orange'
                    footerLabel='Atualizado com base nas saidas'
                    icon='down'
                />

                <WalletBox
                    title='Saldo'
                    amount={totalBalance}
                    color='red'
                    footerLabel='Entradas - Saidas'
                    icon='dollar'
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    icon={message.icon}
                    footerText={message.footerText} />

                <PieCharts data={ExpensesXGains} />

            </Content>
        </Container>
    );
}

export default Dashboard;
