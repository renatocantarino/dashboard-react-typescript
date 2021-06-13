import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../shared/SelectInput';
import { Container } from './styles';


//FC = funcional componente
const List: React.FC = () => {
    const options = [
        { value: '0', label: 'Carro' },
        { value: '1', label: 'Moto' }
    ]
    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='red'>
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}


export default List;
