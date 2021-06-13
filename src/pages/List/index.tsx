import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinanceCard from '../../shared/FinanceCard';
import { Container, Content } from './styles';


//FC = funcional componente
const List: React.FC = () => {

    return (
        <Container>
            <ContentHeader title='Saida' lineColor='red'>
            </ContentHeader>

            <Content>
                <FinanceCard color='#313862' tagColor='#E44C4E' title='Conta de Luz'
                    subTitle='07/07/2020' amount='R$ 130,00' />
            </Content>
        </Container>
    );
}


export default List;
