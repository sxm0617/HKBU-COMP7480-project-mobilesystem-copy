var args = arguments[0] || {};
var id = args.house_id || {};

Alloy.Collections.house.fetch();

function CFRHouse(collection) {
	return collection.filter(function(house) {
		return house.get("price") <= 15000 && house.get("bedroom") <= 2;
	});
}

function showHouseDetails(e) {
	var houseDetailsController = Alloy.createController("houseDetails", {
		house_id: e.row.fid	
	});
	
	$.index.activeTab.open(houseDetailsController.getView());
}