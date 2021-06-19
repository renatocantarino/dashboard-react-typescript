import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../shared/FinanceCard';
import SelectInput from '../../shared/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content, Filters } from './styles';
import { Meses, Anos } from '../../Utils/Dates'

import formatCurrency from '../../Utils/FormatCurrency';
import formatDate from '../../Utils/FormatDate';



interface IRouteParams {
    match: {
        params: { type: string }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}


//FC = funcional componente
const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;

    const listMemo = useMemo(() => {
        return type === 'entries'
            ? gains
            : expenses
    }, [type])

    const pageParam = useMemo(() => {
        return type === 'entries'
            ? { title: 'Entradas', lineColor: '#F7931B' }
            : { title: 'Saidas', lineColor: '#E44C4E' };
    }, [type])

    useEffect(() => {

        const data = listMemo.map(item => {
            return {
                id: String(Math.random() * listMemo.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? "#4E41F0" : "#E44C4E"
            }
        })
        setData(data)
    }, [])

    return (
        <Container>
            <ContentHeader title={pageParam.title} lineColor={pageParam.lineColor}>
                <SelectInput options={Meses} />
                <SelectInput options={Anos} />
            </ContentHeader>

            <Filters>
                <button type='button'
                    className='tag-filter tag-recorrente'>Recorrentes</button>
                <button
                    className='tag-filter tag-eventual'
                    type='button'>Eventuais</button>

            </Filters>

            <Content>
                {
                    data.map(item => (<FinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subTitle={item.dateFormatted}
                        amount={item.amountFormatted} />))
                }

            </Content>
        </Container>
    );
}


export default List;
