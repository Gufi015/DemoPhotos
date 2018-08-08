exports.image = function(url, callback) {
	Ti.API.info('====== entra a caché');
	Ti.API.info(url);

	var filename = Ti.Utils.md5HexDigest(url);
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, filename + '.png');

	if (file.exists()) {
		Ti.API.info('==== existe ');
		callback(file.nativePath);
		file = null;
	} else {
		Ti.API.info('==== NO existe ');
		getRemoteFile(url, function(responseData) {
			var fileNew = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, filename + '.png');
			fileNew.write(responseData);
			callback(fileNew.nativePath);
			file = null;
			fileNew = null;
		});
	}

};

function getRemoteFile(url, success) {
	var http = Ti.Network.createHTTPClient({
		onload : function() {
			if (this.status == 200) {
				Ti.API.info('se pudo descargar');
				success(this.responseData);
			} else {
				console.log('no se pudo descargar');
			}
		},
		onerror : function(e) {
			console.log('entro en el error: ' + e.error);
		},
		timeout : 10000,
	});

	http.open('GET', url);
	http.send();

};

