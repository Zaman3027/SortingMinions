import React, { useState, useEffect,useContext } from "react";
import SortingView from "./SortingView";
import { swap, generateRandomArry} from '../GlobalFunction';
import { HocContext } from "./HOC";

function QuickSort() {
    const [context,setContext] = useContext(HocContext);
    const [isSorting,setISSorting] = useState(false);
    const [arr, setArr] = useState([]);
    const [getColor, setColor] = useState();
    useEffect(() => {
        setContext({
            darkMode:context.darkMode,
            headerName:"Quick Sort",
        })
        setArr(generateRandomArry(5, 120,setColor));
    }, [context.darkMode, setContext]);
    return (
        <SortingView
            arr={arr}
            generateArr={() => {
                setArr(generateRandomArry(5, 120,setColor))
            }}
            sortArr={async () => {
                await quickSort(arr, 0, arr.length - 1);
                
            }}
            color={getColor}
            isSorting={isSorting}
        />
    );

    //Quick Sort Algo starts from here:

    async function quickSort(arr = [], start, end) {
        setISSorting(true);
        if (start < end) {
            var index = await partition(arr, start, end);
            await quickSort(arr, start, index - 1);
            await quickSort(arr, index + 1, end);
            setISSorting(false)
        }

        
    }

    async function partition(arr = [], start, end) {
        let pivot = arr[end];
        var i = start - 1;
        for (var j = start; j <= end - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                arr = await swap(arr, i, j, getColor);
                setArr([...arr]);
            }
        }
        arr = await swap(arr, i + 1, end, getColor);
        setArr([...arr]);
        return i + 1;
    }
}
export default QuickSort;