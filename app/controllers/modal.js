// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

Ti.API.info("=================comienza cliente=======================");
/*
 $.btnGet.addEventListener('click', function (e) {

 //var url = "https://api.cloud.appcelerator.com/v1/photos/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true";

 var url = "https://jsonplaceholder.typicode.com/posts";
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
 }); */

/*
var clientHttp = Ti.Network.createHTTPClient({
	onload : function() {
		// label.text = this.responseText;
		var result = JSON.parse(this.responseText);

		for (var i = 0; i < result.resultados.length; i++) {

			if (result.resultados[i].resultado != undefined) {
				/*var label = Ti.UI.createLabel({
					color : 'black',
					top : 10,
					//bottom : 10,
					left : 10,
					text : result.resultados[i].resultado.titulo,
					height : Ti.UI.SIZE,
					
				});

				//$.modal.add(label);
			}

		}

	},
	onerror : function(e) {
		alert(e.error);
	},
	timeout : 3000,
});

clientHttp.open('GET', 'https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json');
clientHttp.send(); 

*/