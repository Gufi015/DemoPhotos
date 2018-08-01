// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var url ="https://api.cloud.appcelerator.com/v1/photos/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true";
var client = Ti.Network.createHTTPClient({
	onload: function(e){
		Ti.API.info('JSON: '+ this.responseText);
		alert('Success');
	},
	onerror: function(e){
		Ti.API.debug(e.error);
		alert('error');
	},
	timeout:5000
});
