var args = arguments[0] || {};
var id = args.house_id || {};

Alloy.Collections.house.fetch();

function showHouse(collection) {
	return collection.where({id: parseInt(id)});
}

function showOnMap() {
	console.log("Show On Map");
}
