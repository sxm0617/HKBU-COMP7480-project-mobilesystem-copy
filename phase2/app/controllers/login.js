var args = $.args;

Alloy.Collections.user.fetch();

function login() {	
	var xhr = Ti.Network.createHTTPClient();    
    xhr.open("POST", "http://158.182.111.118:1337/user/login");
    xhr.onload = function(e) {
    	if (this.responseText == "No such user" || this.responseText == "Wrong password") {
        	alert(this.responseText);
      	} else {
      		var userInfoController = Alloy.createController("userInfo");	
			Alloy.Globals.loginUser = $.username.value;	
			Alloy.Globals.index.activeTab.open(userInfoController.getView());
      	}
    };
    
    xhr.send({
        "username": $.username.value,
        "password": $.password.value
    });
}
