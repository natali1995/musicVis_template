function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();

		// fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, width);
		    var h = -height + map(spectrum[i], 0, 255, height, 0);

			const red = map(spectrum[i], 0, spectrum[i], 0, spectrum[i])
			fill(red, 255 - red, 0);

			rect(0, x, -h, width / spectrum.length);
			// rect(x, height, width / spectrum.length, h );
  		}

		pop();
	};
}
