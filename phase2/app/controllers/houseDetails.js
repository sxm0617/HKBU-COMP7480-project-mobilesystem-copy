var args2 = $.args;
var house_id = args2.house_id || {};

Alloy.Collections.house.fetch();

function ADInterest() {
	if (Alloy.Globals.loginUser == "") {
		var loginController = Alloy.createController("login");
		Alloy.Globals.index.setActiveTab(4);
		Alloy.Globals.index.activeTab.open(loginController.getView());
	} else {
		if (!isInterested()) {
			var user_id = "";
			var user = Alloy.Collections.user.filter(function(user) {
				if (user.get("username") == Alloy.Globals.loginUser) {
					user_id = user.get("id");
				}
				return user.get("username") == Alloy.Globals.loginUser;
			});
			var xhr = Ti.Network.createHTTPClient();    
		    xhr.open("POST", "http://158.182.109.38:1337/house/interestedBy/" + house_id + "?userId=" + user_id);
		    xhr.onload = function(e) {
		    	alert(this.responseText);
		    };
		    xhr.send();
	   } else {
			var xhr = Ti.Network.createHTTPClient();    
		    xhr.open("POST", "http://158.182.109.38:1337/house/uninterest/" + house_id);
		    xhr.onload = function(e) {
		    	alert(this.responseText);
		    };
		    xhr.send();
	   }
	}
}

function isInterested() {
	var interestHouse = Alloy.Collections.interest;
	interestHouse.filter(function(house) {
		return house.get("id") == house_id;
	});
	return (interestHouse.length > 0);
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
