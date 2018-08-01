$.index.open();
$.btnMain.addEventListener('click', function(e){
	Ti.API.info('Click');
	var main = Alloy.createController('main').getView();
	main.open();
});

$.button.addEventListener('click', function(e){
	var modal = Alloy.createController('modal').getView();
	modal.open();
});
