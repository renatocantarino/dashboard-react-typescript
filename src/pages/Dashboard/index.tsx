import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../shared/SelectInput';
import { Meses, GetCurrentMonth, GetCurrentYear } from '../../Utils/Dates'

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';


import { Container, Content } from './styles';
import WalletBox from '../../components/WalletBox';


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
                    amount={5000}
                    color='#4E41F0'
                    footerLabel='Atualizado com base nas entradas'
                    icon='up'
                />
                <WalletBox
                    title='Saida'
                    amount={3000}
                    color='orange'
                    footerLabel='Atualizado com base nas saidas'
                    icon='down'
                />

                <WalletBox
                    title='Saldo'
                    amount={150}
                    color='red'
                    footerLabel='Entradas - Saidas'
                    icon='dollar'
                />

            </Content>
        </Container>
    );
}


export default Dashboard;
