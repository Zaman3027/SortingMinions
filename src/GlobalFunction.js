import { orange, green, indigo, purple, teal, brown } from '@material-ui/core/colors';

async function swap(arr = [], x, y,getColor) {
    document.getElementById(arr[x]).style.backgroundColor = "red";
    document.getElementById(arr[y]).style.backgroundColor = "red";
    await sleep(25);
    var b = arr[x];
    arr[x] = arr[y];
    arr[y] = b;
    document.getElementById(arr[x]).style.backgroundColor = getColor;
    document.getElementById(arr[y]).style.backgroundColor = getColor;
    return arr;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateRandomArry(starting, ending,setColor) {
    setColor(color());
    const arr = [];
    for (var i = starting; i <= ending; i++) {
        arr.push(Math.floor(Math.random() * (ending - starting + 1)) + starting);
    }
    return arr;
}
let randdomColor = [orange[500], green[500], indigo[500], purple[500], teal[500], brown[500]]
const color = ()=> randdomColor[Math.floor(Math.random() * 6)];

export {
    color,
    generateRandomArry,
    swap,
    sleep
}