$.index.open();

Alloy.Collections.house.fetch();
Alloy.Collections.estate.fetch();
Alloy.Collections.user.fetch();

function getEstateInfo(model) {
	var transform = model.toJSON();
	
	transform.title = transform.Name;
	transform.subtitle = transform.ChineseName;
	transform.id = transform.id;
	transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	
	return transform;
}

function showHighlight(collection) {
	return collection.where({highlight: "1"});
}

function showHouseDetails(e) {
	var houseDetailsController = Alloy.createController("houseDetails", {
		house_id: e.row.fid		
	});
	
	$.index.activeTab.open(houseDetailsController.getView());
}

function showCFRHouse() {
	var CFRHouseController = Alloy.createController("CFRHouse");
	
	$.index.activeTab.open(CFRHouseController.getView());
}

function showCMRHouse() {
	var CMRHouseController = Alloy.createController("CMRHouse");
	
	$.index.activeTab.open(CMRHouseController.getView());
}

function showEFRHouse() {
	var EFRHouseController = Alloy.createController("EFRHouse");
	
	$.index.activeTab.open(EFRHouseController.getView());
}

function showEMRHouse() {
	var EMRHouseController = Alloy.createController("EMRHouse");
	
	$.index.activeTab.open(EMRHouseController.getView());
}