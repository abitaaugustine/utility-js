const reduce = (arr,adder) => {
	var reduceVal = adder;
    for(i=0;i<arr.length;i++)
    	reduceVal+=arr[i];

    return reduceVal;
}
module.exports = reduce;
