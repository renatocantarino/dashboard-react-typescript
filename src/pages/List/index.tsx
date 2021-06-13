import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../shared/FinanceCard';
import { Container, Content, Filters } from './styles';

import { Meses, Anos } from '../../Utils/Dates'
import SelectInput from '../../shared/SelectInput';


//FC = funcional componente
const List: React.FC = () => {

    return (
        <Container>
            <ContentHeader title='Saida' lineColor='red'>
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
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
                <FinanceCard tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
            </Content>
        </Container>
    );
}


export default List;
