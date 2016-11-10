var args = arguments[0] || {};
var username = args.username;

Alloy.Collections.interest.fetch();
Alloy.Collections.house.fetch();

function interestHouse(collection) {
	
}

function showHouseDetails(e) {
	var houseDetailsController = Alloy.createController("houseDetails", {
		house_id: e.row.fid	
	});
	
	Alloy.Globals.index.setActiveTab(0);
	Alloy.Globals.index.activeTab.open(houseDetailsController.getView());
}
