var args = arguments[0] || {};
var estateName = args.estate || {};

Alloy.Collections.estate.fetch();


function showSelectedEstate(collection) {
	return collection.filter(function(estate) {
		return estate.get("Name") == estateName;
	});
}

function getEstateInfo(model) {
	var transform = model.toJSON();
	
	transform.title = transform.Name;
	transform.subtitle = transform.ChineseName;
	transform.id = transform.id;
	transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	$.mapView2.region = {
		longitude: transform.Longitude,
		latitude: transform.Latitude,
		longitudeDelta: 0.006,
		latitudeDelta: 0.006
	};
		
	return transform;
}

function showHouses(e) {
	if (e.clicksource == "rightButton") {
		var housesInEstateController = Alloy.createController("housesInEstate", {
			estate_name: e.annotation.Name
		});
		
		Alloy.Globals.index.activeTab.open(housesInEstateController.getView());
	}
}