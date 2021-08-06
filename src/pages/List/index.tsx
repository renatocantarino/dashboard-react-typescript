import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../shared/FinanceCard';
import SelectInput from '../../shared/SelectInput';
import EmptyLabel from '../../shared/EmptyLabel';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content, Filters } from './styles';
import { Meses, GetCurrentMonth, GetCurrentYear } from '../../Utils/Dates'

import formatCurrency from '../../Utils/FormatCurrency';
import formatDate from '../../Utils/FormatDate';

interface IRouteParams {
    match: {
        params: { type: string }
    }
}

interface IMockData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}


//FC = funcional componente
const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IMockData[]>([]);
    const [mesSelecionado, setMesSelecionado] = useState<number>(GetCurrentMonth());
    const [anoSelecionado, setAnoSelecionado] = useState<number>(GetCurrentYear());
    const [frequencia, setFrequencia] = useState<string[]>(['recorrente', 'eventual']);


    const { type } = match.params;

    const pageParams = useMemo(() => {
        return type === 'entries'
            ? { title: 'Entradas', lineColor: '#F7931B', data: gains }
            : { title: 'Saidas', lineColor: '#E44C4E', data: expenses };
    }, [type])


    const Anos = useMemo(() => {
        let uniqueYears: number[] = [];

        pageParams.data.forEach(item => {

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
    }, [pageParams.data]);

    const meses = useMemo(() => {
        return Meses.map((item) => {
            return {
                value: item.value,
                label: item.label
            }
        });

    }, []);

    const handleFrenquencia = (tipoFrequencia: string) => {
        const selected = frequencia.findIndex(it => it === tipoFrequencia);

        if (selected >= 0) {
            const filtered = frequencia.filter(item => item !== tipoFrequencia);
            setFrequencia(filtered);
        }
        else
            setFrequencia((prev) => [...prev, tipoFrequencia]);
    }




    const handleMonthSelected = (month: string) => {
        const parseMonth = Number(month);
        setMesSelecionado(parseMonth);
    }

    const handleYearSelected = (year: string) => {
        const parseYear = Number(year);
        setAnoSelecionado(parseYear)
    }

    useEffect(() => {
        const filtered = pageParams.data.filter(item => {
            //filtro por mes e ano
            const data = new Date(item.date)
            const month = data.getMonth();
            const year = data.getFullYear();

            return month === mesSelecionado
                && year === anoSelecionado
                && frequencia.includes(item.frequency)
        })

        const formated = filtered.map(item => {
            return {
                id: String(Math.random() * pageParams.data.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? "#4E41F0" : "#E44C4E"
            }
        })
        setData(formated)
    }, [pageParams.data, mesSelecionado, anoSelecionado, frequencia])

    return (
        <Container>
            <ContentHeader title={pageParams.title} lineColor={pageParams.lineColor}>
                <SelectInput
                    options={meses}
                    defaultValue={mesSelecionado}
                    onChange={(e) => handleMonthSelected(e.target.value)} />

                <SelectInput
                    options={Anos}
                    defaultValue={anoSelecionado}
                    onChange={(e) => handleYearSelected(e.target.value)} />
            </ContentHeader>

            <Filters>
                <button
                    type='button'
                    onClick={() => handleFrenquencia('eventual')}
                    className={`tag-filter tag-recorrente  ${frequencia.includes('eventual') && 'tag-actived'}`}>
                    Eventuais
                </button>

                <button
                    type='button'
                    onClick={() => handleFrenquencia('recorrente')}
                    className={`tag-filter tag-eventual ${frequencia.includes('recorrente') && 'tag-actived'}`}>
                    Recorrentes</button>

            </Filters>

            <Content>

                {
                    data.length ? data.map(item => (<FinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subTitle={item.dateFormatted}
                        amount={item.amountFormatted} />)) : <EmptyLabel />
                }

            </Content>
        </Container>
    );
}


export default List;



