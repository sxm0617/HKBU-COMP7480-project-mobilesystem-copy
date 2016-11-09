var args = arguments[0] || {};

function userChk() {
	console.log("Check current user: " + Alloy.Globals.loginUser);
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
	    console.log("After clicking logout button: " + Alloy.Globals.loginUser);
	    $.welcome.text = "";
		$.logIo.title = "Logout";
	    userChk();
	}
}

function interest() {
	console.log(Alloy.Globals.loginUser);
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
