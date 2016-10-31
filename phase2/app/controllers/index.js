$.index.open();

Alloy.Collections.house.fetch();
Alloy.Collections.estate.fetch();
Alloy.Collections.user.fetch();

function showId(e) {
	console.log(e.value);
}

function getEstateInfo(model) {
	var transform = model.toJSON();
	
	transform.title = transform.Name;
	transform.subtitle = transform.ChineseName;
	
	return transform;
}

function lowerPrice(model) {
	var transform = model.toJSON();
	if (transform.price >= 15000) {
		transform.remove();
	}
	return transform;
}
