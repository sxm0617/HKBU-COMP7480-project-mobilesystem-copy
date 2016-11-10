var args2 = $.args;
var house_id = args2.house_id || {};

Alloy.Collections.house.fetch();

function ADInterest() {
	if (Alloy.Globals.loginUser == "") {
		var loginController = Alloy.createController("login");
		Alloy.Globals.index.setActiveTab(4);
		Alloy.Globals.index.activeTab.open(loginController.getView());
	} else {
		var user_id = "";
		var user = Alloy.Collections.user.filter(function(user) {
			if (user.get("username") == Alloy.Globals.loginUser) {
				user_id = user.get("id");
			}
			return user.get("username") == Alloy.Globals.loginUser;
		});
		var xhr = Ti.Network.createHTTPClient();    
	    xhr.open("POST", "http://158.182.109.38:1337/house/interestedBy/" + house_id + "?userId=" + user_id);
	    xhr.send();
   	}
}

function showHouse(collection) {
	return collection.where({id: parseInt(house_id)});
}

function showOnMap(e) {

	var estateMapController = Alloy.createController("estateMap", {
		estate: e.source.did
	});
	
	Alloy.Globals.index.setActiveTab(3);
	Alloy.Globals.index.activeTab.open(estateMapController.getView());
}
