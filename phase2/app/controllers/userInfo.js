var args = arguments[0] || {};
var user = args.username;

function userChk() {
	if (user == "") {
		$.welcome.text = "";
		$.logIo.title = "Login";
	} else {
		$.welcome.text = "Hi, " + user;
		$.logIo.title = "Logout";
	}
}

function userLog(e) {
	if (e.row.title == "Login") {
		var loginController = Alloy.createController("login");
		Alloy.Globals.index.activeTab.open(loginController.getView());
	} else {
		user = "";
		userChk();
	}
}

function interest() {
	
}
