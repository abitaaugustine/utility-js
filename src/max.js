function maxVal (first,second) {
    if (first > second) {
    	return first;
    }
    return second;  
}

const max = (arr,length) => {
    if (length == 1)
    	return arr[0];

    return maxVal(arr[length],max(arr, length - 1));
}
module.exports = max;
