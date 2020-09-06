import React, { createContext, useState } from 'react'
import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const HocContext = createContext();
const useStyle = makeStyles({
    root: {
        height: "100vh",
        backgroundColor: theme => theme.darkMode ? "#424242" : "#fff",
        transition: 'all 200ms linear',
    }
})
export function HOCProvider(props) {

    const [hocState, setHocState] = useState({
        darkMode: false,
        headerName: "Minions Sorting",
    });

    const theme = createMuiTheme({
        palette: {
            type: hocState.darkMode?"dark":"light",
            primary: {
                main: green[500],
            },
            secondary: {
                main: green[800],
            },
        }
    });

    
    const classes = useStyle({ darkMode: hocState.darkMode });
    return (
        <HocContext.Provider value={[hocState, setHocState]}>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    {props.children}
                </div>
            </ThemeProvider>
        </HocContext.Provider>
    )
}
