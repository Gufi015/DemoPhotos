// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

Ti.API.info("=================comienza cliente=======================");

$.btnGet.addEventListener('click', function (e) {
	
	var url = "https://api.cloud.appcelerator.com/v1/photos/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true";
	Ti.API.info('=============btnGet==========================');
	var client = Ti.Network.createHTTPClient({
		onload: function (e) {
			Ti.API.info(this.responseText);
			alert(this.responseText);
		},
		error: function (e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout: 3000
	});
	client.open('GET', url);
	client.send();
});

