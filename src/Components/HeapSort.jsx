import React,{useContext, useEffect, useState} from "react";
import { HocContext } from "./HOC";
import SortingView from "./SortingView";
import { generateRandomArry, swap } from "../GlobalFunction";


export const HeapSort = ()=>{
    const [context, setContext] = useContext(HocContext);
    const [arr,setArr] = useState([]);
    const [isSorting,setISSorting] = useState(false);
    const [getColor, setColor] = useState();
    useEffect(()=>{
        setContext({
            darkMode : context.darkMode,
            headerName:'Heap Sort',
        });
        setArr(generateRandomArry(5, 120,setColor));
    },[context.darkMode, setContext]);
    return (
        <div>
            <SortingView
            arr={arr}
            generateArr={() => {
                setArr(generateRandomArry(5, 120,setColor))
            }}
            sortArr={() => heapSort(arr)}
            color={getColor}
            isSorting = {isSorting}
        />
        </div>
    );

    async function heapSort(arr =[]){
        setISSorting(true);
        for(let i = Math.floor((arr.length/2))-1; i>=0; i--)
            await heapyfi(arr,arr.length,i);
        
        for(let i = arr.length-1; i>0; i--){
            let arrV = await swap(arr, i,0,getColor);
            setArr([...arrV]);
            await heapyfi(arr,i,0);
        }
        setISSorting(false);
    }

    async function heapyfi(arr=[],i,j){
        var largest = j;
        var left = Math.floor(j*2+1);
        var right = Math.floor(j*2+2);
        if(right<i && arr[largest]<arr[right])
            largest = right;
        if(left<i && arr[largest]<arr[left])
            largest = left;
        
        if(largest!==j){
            let arrV = await swap(arr,j,largest,getColor);
            setArr([...arrV]);
            await heapyfi(arr,i,largest);
        }
    }
}