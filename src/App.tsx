import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'


//theme
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import AppRoutes from './routes';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <AppRoutes />
        </ThemeProvider>
    );
}


export default App;


