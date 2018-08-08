/*exports.image = function(url, callback, directory) {

	if (directory === 'Undefined') {
		var directory = 'cachedImages';
	};

	var filename = Ti.Utils.md5HexDigest(url);
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, directory, filename);

	if (file.exists()) {
		callback(file.nativePath);
		file = null;
	} else {
		checkIfPathExistOrCreateIt(directory);
		retries = 5;
	}

};

function checkIfPathExistOrCreateIt(directory) {
	var fileSystem = Ti.Filesystem.applicationDataDirectory;
	var folder = Ti.Filesystem.getFile(fileSystem, directory);
	if (!folder.exists()) {
		folder.createDirectory();
	}
};

function getRemoteFile(url, retries, success) {
	var http = Ti.Network.createHTTPClient();
	http.onload = function() {
		if (http.status == 200) {
			success(http.responseData);
		} else {
			if (retries > 0) {
				getRemoteFile(url, success, retrie - 1);
			} else {
				console.log('Bastantes intentos' + url);
			}
		}

	};

	http.open('GET', url);
	http.send();

}; */


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
		getRemoteFile(url, function (responseData){
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
		onload :  function(){
			if(this.status== 200){
				Ti.API.info('se pudo descargar');
				success(this.responseData);
			}else{
				console.log('no se pudo descargar');
			}
		},
		onerror : function(e){
			console.log('entro en el error: ' + e.error);
		},
		timeout : 10000,
	});

	http.open('GET', url);
	http.send();

};





