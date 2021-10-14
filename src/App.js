import React from 'react';
import Routing from "./Routing/Routing";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";


const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Routing />
        </ThemeProvider>
    );
};

export default App;