import React from 'react';
import { Grid } from './styles'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'


//FC = funcional componente
const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    );
}


export default Layout;