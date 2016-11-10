var args2 = $.args;
var id = args2.house_id || {};

Alloy.Collections.house.fetch();

function showHouse(collection) {
	return collection.where({id: parseInt(id)});
}

function showOnMap(e) {

	var estateMapController = Alloy.createController("estateMap", {
		estate: e.source.did
	});
	
	Alloy.Globals.index.setActiveTab(3);
	Alloy.Globals.index.activeTab.open(estateMapController.getView());
}
