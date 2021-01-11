function minVal (first,second) {
    if (first < second) {
    	return first;
    }
    return second;  
}

const min = (arr,length) => {
    if (length == 1)
    	return arr[0];

    return minVal(arr[length],min(arr, length - 1));
}
module.exports = min;
