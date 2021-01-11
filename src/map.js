var map = function(arr,function_performed) {
	if(arr.length < 1)
		return [];
	else{
		var new_arr=[];
		for(i=0;i<arr.length;i++)
			new_arr.push(function_performed( arr[i]));
		return new_arr;
	}
}
module.exports = map;