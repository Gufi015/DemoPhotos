// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
Ti.API.info('MAIN');

//var url = 'https://s3-us-west-1.amazonaws.com/storage-platform.cloud.appcelerator.com/1TZyF8iwgHGerbSOjtbo8UNYiiKwuGaN/photos/70/a6/5b58c6f659470c0219374b94/tixhr55508876_original.jpg';
var cachedImage = require('cache').image;

var url = 'http://placekitten.com/200/300';
cachedImage(url, function(img) {
	$.demo.image = img;
});

