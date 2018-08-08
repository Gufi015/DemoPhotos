exports.image = function(url, callback, directory) {

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

};
