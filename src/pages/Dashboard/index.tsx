import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../shared/SelectInput';
import { Meses, Anos } from '../../Utils/Dates'


import { Container } from './styles';


//FC = funcional componente
const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#fff'>
                <SelectInput options={Meses} onChange={() => { }} />
                <SelectInput options={Anos} onChange={() => { }} />
            </ContentHeader>
        </Container>
    );
}


export default Dashboard;
