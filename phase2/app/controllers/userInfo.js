var args = arguments[0] || {};

function userChk() {
	if (Alloy.Globals.loginUser == "") {
		$.welcome.text = "";
		$.logIo.title = "Login";
	} else {
		$.welcome.text = "Hi, " + Alloy.Globals.loginUser;
		$.logIo.title = "Logout";
	}
}

function userLog(e) {	
	if (e.row.title == "Login") {
		var loginController = Alloy.createController("login");
		Alloy.Globals.index.activeTab.open(loginController.getView());
	} else {
	    Alloy.Globals.loginUser = "";
	    userChk();
	}
}

function interest() {
	if (Alloy.Globals.loginUser == "") {
		var loginController = Alloy.createController("login");
		Alloy.Globals.index.activeTab.open(loginController.getView());
	} else {
		var interestController = Alloy.createController("interest", {
			username: Alloy.Globals.loginUser
		});
		Alloy.Globals.index.activeTab.open(interestController.getView());
	}
}
