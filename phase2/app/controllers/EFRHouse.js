var args = $.args;

Alloy.Collections.house.fetch();

function CFRHouse(collection) {
	return collection.where({bedroom: "<3", price: "<=15000"});
}