import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../shared/SelectInput';


import { Container } from './styles';


//FC = funcional componente
const Dashboard: React.FC = () => {

    const options = [
        { value: '0', label: 'Carro' },
        { value: '1', label: 'Moto' }
    ]
    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#fff'>
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}


export default Dashboard;
