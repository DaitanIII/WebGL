var sumPositiveArray = function(array) {
	return array
			.reduce(function(item) {
				return item > 0;
			})
			.reduce(function(previous,current){
				return previous + current;
			});
}
