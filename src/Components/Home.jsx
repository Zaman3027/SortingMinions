import React, { useContext, useEffect } from "react"
import { Paper, Typography, makeStyles } from "@material-ui/core";
import cardImageOne from '../assest/card_image.png'
import cardImageTwo from '../assest/card_image_two.png'
import cardImageThree from '../assest/card_image_three.png'
import cardImageFour from '../assest/card_image_four.png'
import cardImageFive from '../assest/card_image_five.png'
import { useHistory } from 'react-router-dom'
import { HocContext } from "./HOC";
const algos = ["Bubble Sort", "Quick Sort", "Heap Sort"];
const links = ['bubbleSort', 'quickSort', 'heapSort'];
const images = [cardImageOne, cardImageTwo, cardImageThree, cardImageFour, cardImageFive];
const useStyle = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    },
    paper: {
        padding: 10,
        height: 300,
        width: 300,
        margin: 20,
        alignContent: 'center',
        transition: "all 150ms linear",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            padding: 15,
            filter: 'brightness(0.85)'
        }
    },
    image: {
        height: "80%",
        marginTop: "auto"
    },
})
export const Home = () => {
    const history = useHistory();
    const [context, setContext] = useContext(HocContext);
    const classes = useStyle({ darkMode: context.darkMode });
    useEffect(() => {
        setContext({
            darkMode: context.darkMode,
            headerName: "Minion Sorting",
        });
    }, [context.darkMode, setContext])
    return (
        <div className={classes.root}>
            {algos.map((val, index) => (
                <Paper className={classes.paper}
                    key={index} elevation={5}
                    style={{ background: cardImageOne }}
                    onClick={()=>history.push('/SortingMinions/'+links[index])}
                >
                    <Typography variant='h6' color='inherit'>{val}</Typography>
                    <img className={classes.image} src={images[index]} alt="ima" />
                </Paper>
            ))}
        </div>);
}