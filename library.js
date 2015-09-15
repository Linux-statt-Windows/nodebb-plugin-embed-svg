(function(module) {
	"use strict";

	var EmbedSVG = {};
      
	EmbedSVG.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }

        if (data.postData.content.match(/svg/)) {
            var url = data.postData.content.replace(/(.)*<img src="/, '');
            url = url.replace(/" alt=(.)*/, '');

            var embedded_svg = '<img src="' + url + '" width="280" height="280" border="0" alt="SVG Grafik" />'
            data.postData.content = data.postData.content.replace(/<img src=(.)*\/>/, embedded_svg)
        }

        callback(null, data);
    };

	module.exports = EmbedSVG;
}(module));
