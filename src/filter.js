var filter = function(arr,function_performed) {

	var new_arr=[];
	for(i=0;i<arr.length;i++)
		if(function_performed( arr[i]))
			new_arr.push(arr[i]);
	return new_arr;

}
module.exports = filter;