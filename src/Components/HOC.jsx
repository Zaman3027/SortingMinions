import React, { createContext, useState } from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import banana from '../assest/banana.png'
import bananaYellow from '../assest/banana-yellow.png'

export const HocContext = createContext();
const useStyle = makeStyles({
    root: {
        height: "100vh",
        backgroundImage: theme => theme.darkMode ? `url(${banana})` : `url(${bananaYellow})`,
        backgroundSize: 40,
        backgroundRepeat: 'repeat-y|repeat-x',
        backgroundColor: theme => theme.darkMode ? "#222222" : "#fff",
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
            type: hocState.darkMode ? "dark" : "light",
            primary: {
                main: '#F1C40Fa2',
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
