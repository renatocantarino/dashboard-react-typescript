import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Layout from './components/Layout'

//theme
import dark from './styles/themes/dark'
import light from './styles/themes/light'


const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
}


export default App;


