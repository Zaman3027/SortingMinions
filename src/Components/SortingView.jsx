import React from "react"
import { makeStyles, BottomNavigation, BottomNavigationAction, Paper } from "@material-ui/core";
import { Home, LocalActivity, PlayArrow } from "@material-ui/icons"
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "90vh",
        justifyContent: "center"
    },
    barRoot: {
        display: 'flex',
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        height: "100%"
    },
    bar: {
        margin: 2.5,
        width: 5,
        backgroundColor: props => props.color,
        fontSize: 0,
        borderRadius: 10,
        boxShadow: "1px 1px 2px #424242a0"
    },
    bottomBar: {
        position: "fixed",
        bottom: 0,
        width: 600,
        height: 60,
    }
});

function SortingView({ arr, generateArr, sortArr, color, isSorting }) {
    const history = useHistory();
    const classes = useStyle({ color });
    return (
        <div className={classes.root}>
            <div className={classes.barRoot}>
                {arr.map((val, ind) => (<div className={classes.bar}
                    style={{
                        height: (val * 2),
                    }}
                    key={ind} id={val} >{val}</div>))}
            </div>
            <Paper className={classes.bottomBar} elevation={10}>
                <BottomNavigation showLabels value="a">
                    <BottomNavigationAction label="Home" value="a" 
                    onClick={()=>history.replace('/')}
                    icon={<Home color={color} />} />
                    <BottomNavigationAction
                        label="Generate Array" value="a" icon={<LocalActivity />}
                        disabled={isSorting} onClick={generateArr} />

                    <BottomNavigationAction
                        label="Start Sort" value="a" disabled={isSorting} icon={<PlayArrow />}
                        onClick={sortArr} />
                </BottomNavigation>
            </Paper>
        </div>
    );
}

export default SortingView;