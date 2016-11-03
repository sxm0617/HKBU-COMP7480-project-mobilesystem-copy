var args = $.args;

Alloy.Collections.house.fetch();

function CFRHouse(collection) {
	return collection.filter(function(house) {
		return house.get("price") > 15000 && house.get("bedroom") >= 3;
	});
}

function showHouseDetails(e) {
	var houseDetailsController = Alloy.createController("houseDetails", {
		house_id: e.row.fid	
	});
	
	Alloy.Globals.index.setActiveTab(0);
	Alloy.Globals.index.activeTab.open(houseDetailsController.getView());
}