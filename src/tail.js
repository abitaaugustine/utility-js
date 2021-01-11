var tail = function(arr,length) {
	var arrtail = [];
    for(i = 1 ; i < length ; i++)
    	arrtail.push(arr[i]);
    return arrtail;
}
module.exports = tail;