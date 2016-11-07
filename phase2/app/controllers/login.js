var args = $.args;

Alloy.Collections.user.fetch();

function login() {
	var userCollection  = Alloy.Collections.user.filter(function(user) {
		return user.get("username") == $.username.value && user.get("password") == $.password.value;
	});
	if (userCollection.length > 0) {
		var userInfoController = Alloy.createController("userInfo", {
			username: $.username.value
		});		
		Alloy.Globals.index.activeTab.open(userInfoController.getView());
	} else {
		alert("Wrong Username or Password");
	}
}
