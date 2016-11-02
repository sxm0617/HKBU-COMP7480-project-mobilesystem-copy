var args = $.args;

Alloy.Collections.house.fetch();

function CMRHouse(collection) {
	return collection.filter(function(house) {
		return house.get("price") <= 15000 && house.get("bedroom") >= 3;
	});
}

