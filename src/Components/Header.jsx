import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Badge } from "@material-ui/core"
import { WbSunnyOutlined, NightsStay } from "@material-ui/icons"
import { HocContext } from "./HOC";
const useStyle = makeStyles({
    headerText: {
        alignItems: 'center',
        fontSize: 36,
        letterSpacing: 10,
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100wh"
    },
    darkMode: {
        position: 'fixed',
        right: 50,
    }
});
function Header({ sort }) {
    const [hocState, setHocState] = useContext(HocContext);
    const classes = useStyle();
    return (
        <div>
            <AppBar position="static" elevation={1} className={classes.root} color="" >
                <Toolbar variant='regular'  >
                    <Typography className={classes.headerText}
                        variant="h6" color="primary">{hocState.headerName}</Typography>
                    <IconButton
                        color="secondary"
                        className={classes.darkMode}
                        onClick={()=>setHocState({
                            darkMode:!hocState.darkMode,
                            headerName: hocState.headerName
                        })}
                        >
                        <Badge color="secondary">
                            {hocState.darkMode?<WbSunnyOutlined />:<NightsStay/>}
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;