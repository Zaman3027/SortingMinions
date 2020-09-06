import React, { useEffect, useState, useContext } from 'react';
import SortingView from './SortingView';
import { swap, generateRandomArry} from '../GlobalFunction';
import { HocContext } from './HOC';


function BubbleSort() {
    const [context,setContext] = useContext(HocContext);
    const [isSorting,setISSorting] = useState(false);
    const [getColor, setColor] = useState();
    const [arr, setArr] = useState([]);
    useEffect(() => {
        setContext({
            darkMode:context.darkMode,
            headerName:"Bubble Sort",
        })
        setArr(generateRandomArry(5, 120,setColor));
    }, [context.darkMode, setContext]);
    return (
        <SortingView
            arr={arr}
            generateArr={() => {
                setArr(generateRandomArry(5, 120,setColor))
            }}
            sortArr={() => bubbleSort(arr)}
            color={getColor}
            isSorting = {isSorting}
        />
    );

    async function  bubbleSort(arr = []) {
        setISSorting(true);
        for (let i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    let arrV = await swap(arr,i,j,getColor);
                    setArr([...arrV]);
                }
            }
        }
        setISSorting(false);
        return arr;
    }
}

export default BubbleSort;