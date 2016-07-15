(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"http://vovaane.github.io/micro//BG.jpg", id:"BG"},
		{src:"http://vovaane.github.io/micro//pic1.jpg", id:"pic1"},
		{src:"http://vovaane.github.io/micro//pic3.jpg", id:"pic3"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.pic1 = function() {
	this.initialize(img.pic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,254);


(lib.pic3 = function() {
	this.initialize(img.pic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("ALKB9IgSgEIgSgGQgTgIgNgRQgGgIgDgLIAAAwIhMAAIADh+IhTB+IilAAIg1hdIgOAQIAABNIhRAAIAAhNIgPgQIg1BdIhaAAIBaiSIhQhcIBXAAIA9BJIAAhJIBRAAIAABJIA8hJIBXAAIhQBcIBZCRIAAjtIBPAAIgDB7IBTh7IBJAAIAACmIBIAAQAAANAKAIQAKAIAOAAQAMAAAJgHQAJgHAAgNIAAgCQAAgOgHgHQgGgGgIgBIgOgCIgPgBIAAgsIATAAQAdAAAAgVQAAgWgeAAQgVAAgGAHQgGAGAAALIhBAAQAAgnAcgUQAcgUAtAAQAVAAAXAFQAXAGAQAOQARAOAAAZIAAAHQAAAQgEAJQgFAJgKAFQgKAFgTAEQAOAAANAHQAOAEAJAOQAEAGACAHIAAiWIBQAAIAABRIBHAAIAAhRIBQAAIAADuIhQAAIAAhbIhHAAIAABbIhQAAIAAg0QgEANgKALQgRARgZAKQgaAJgaAAQgNAAgRgCgAw9B0QgZgKgQgSQgRgSgIgWQgFgNgCgOIAABiIhRAAIAAhbIhGAAIAABbIhRAAIAAjuIBRAAIAABRIBGAAIAAhRIBRAAIAABmQACgNAFgNQAIgXAQgTQAQgSAYgLQANgGAOgDQANgDAPAAQAeAAAZAKQAYALARASQAQASAJAXQAEAMADAMQACALAAALIAAACQAAAYgIAWQgIAWgQASQgQASgYAKQgYALgfAAQggAAgYgLgAwdg5QgLAHgGAPQgGAPAAAUQAAAgANARQAMASAWAAQAVAAALgTQAMgSAAggQAAgUgHgPQgGgOgKgGQgLgHgKAAQgOAAgKAHgAj+B2QgWgIgPgNQgPgOgJgRQgKgSgEgUIgkgBIAABcIhSAAIAAjpIhpC/QgEAJgKAKQgKAKgNAGQgOAHgMAAIgrAAIAAg9IATABQAOAAAIgLIAIgPIhaiXIBVAAIAsBbIAkhbIBXAAIAAAAIBSAAIAABRIAoAAQAGgTAKgPQAJgPAPgNQAOgMAUgHIAVgGQALgCAMAAQAnAAAdASQAdASAQAeQAHAPAFAPQAEAQAAAOQAAAMgCALQgCAMgEAMQgIAWgQASQgQARgYALQgYAKgfAAQgcAAgVgHgAjugvQgOAQAAAfQAAAgANARQAMASAWAAQAVAAAMgTQALgSAAgfQAAgVgGgPQgHgOgKgGQgKgHgLAAQgVAAgMARgAUpB3IAAg/IBDAAIAAA/gARHB3IAAjuIBRAAIAABKIAsAAQAXAAATAGQATAHAMALQAMAMAGANQAHAOAAAQQAAAQgHAPQgGAPgNAMQgNANgTAHQgTAHgYAAgASYA+IAkAAQAMAAAHgIQAHgHAAgLQAAgKgGgHQgGgHgLAAIgnAAgAuGB3IAAjuIB4AAQAeAAAUAKQAVAKALAQQAKAPAAARQAAAPgIANQgIAMgOAHQANAEAKAHQAKAJAFALIADAMQACAGAAAGQAAARgKAQQgJAPgUAKQgUAKgcAAgAs1A+IAsAAQALAAAGgGQAGgFAAgIQAAgIgGgGQgGgGgLAAIgsAAgAs1gWIAfAAQANAAAHgGQAHgFAAgIQAAgHgGgGQgHgFgMAAIghAAgAU4AjIgShWIAAg/IBJAAIAAA/IgTBWg");
	this.shape.setTransform(2.2,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.4,-59.5,300,85.3);
p.frameBounds = [rect];


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("AJaB3IAAjrIDCAAIAAA6IhyAAIAAAfIBgAAIAAA3IhgAAIAAAiIB4AAIAAA5gAHCB3IAAisIhEAAIAACsIhLAAIACh9IhTB9IhLAAIAAjtIBOAAIgDB7IBTh7IEkAAIAABBIhHAAIAACsgAA4B3IAAhbIhFAAIAABbIhQAAIAAjtIBQAAIAABRIBFAAIAAhRIBQAAIAADtgAi6B3IAAhbIhigBQgWAAgPgLQgHgFgEgIQgFgFAAgKIAAhqIBRAAIAABCQAAAHAEAEQADADAHAAIA4AAIAAhQIBRAAIAADtgAmTB3IgIgfIhPAAIgIAfIiYAAIAAhbIhGAAIAABbIhQAAIAAjtIBQAAIAABRIBGAAIAAhRIBRAAIAADUIBNjUIBTAAIBWDtgAnaAnIAvAAIgXhMg");
	this.shape.setTransform(2.5,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.7,-25.7,160.4,24);
p.frameBounds = [rect];


(lib.t2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332E2B").s().p("AAcBIIgFgTIgtAAIgFATIgxAAIAlhlIAPgqIAxAAIAkBkIAQArgAgNAXIAbAAIgOgtg");
	this.shape.setTransform(127.7,279.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332E2B").s().p("AgXBIIAAhlIAAgDIgrAAIAAgnIBlAAIAfAAIAAAnIgrAAIAABkIAAAEg");
	this.shape_1.setTransform(115.8,279.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332E2B").s().p("AAABMQgHAAgIgBIgPgFQgOgFgJgKQgKgJgFgOQgFgNAAgRQAAgSAGgPQAGgPAKgKQAKgKANgEQANgFAPAAQAaAAAQAKQAQAKAHAOQAGANABANIguAAQgHgYgSAAIgBAAQgGAAgGAGQgGAGgDAJQgDAKAAAIQAAALADAJQADAJAGAFQAGAGAHAAQAJAAAHgGQAHgFACgNIAwAAIgCAMIgFALQgFALgKAIQgJAIgNAFQgNAFgOAAg");
	this.shape_2.setTransform(103.9,279.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332E2B").s().p("AgzBIIAAglIADAAIAEAAIAFAAQAJAAAEgGIAFgJIg2hbIAzAAIAZA3IAVg3IA2AAIg3BkIgKARQgCAGgGAGQgEAGgIAEQgIAEgIAAg");
	this.shape_3.setTransform(91,279.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332E2B").s().p("Ag4BIIAAhlIAAgqIBkAAIANAAIAAAfIhAAAIAABlIAAALg");
	this.shape_4.setTransform(80.1,279.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332E2B").s().p("AhDBIIAAhlIAAgqIBGAAQATAAANAGQAMAGAHAJQAFAKABAKQAAAJgFAHQgFAIgIAEQAHACAGAEQAHAFACAIIACAGIACAIQAAALgGAJQgGAJgMAGQgMAGgRAAgAgSAmIAZAAQAHgBAEgDQADgDAAgEQAAgGgEgDQgDgFgHAAIgZAAgAgSgNIASAAQAHABAEgEQAFgDAAgFQAAgFgFgDQgDgDgIAAIgSAAg");
	this.shape_5.setTransform(68.9,279.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332E2B").s().p("AAcBIIgFgTIgtAAIgFATIgxAAIAlhlIAPgqIAxAAIAkBkIAQArgAgNAXIAbAAIgOgtg");
	this.shape_6.setTransform(56,279.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BD0B23").s().p("AgtBHQgTgNgFgYIAxgEQADAIAGADQAGAEAFAAQAFAAAFgDIAFgDIADgEQADgFAAgHQAAgLgGgFQgHgFgIAAQgEgBgFADQgFACgDAFIgvAAIAQhdIBpAAIAAAoIhEAAIgGAWQAQgIAQAAQANAAANAGQAMAFAIAMQAEAFADAGQACAHAAAIIAAAGQAAAQgJAOQgKAMgQAHQgQAHgTAAQgaAAgTgMg");
	this.shape_7.setTransform(37.4,279.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD0B23").s().p("AgDBTIAAheIgnAAIAAggIAYgGQAJgDAIgIQAEgHADgPIAlAAIAAB0IAAAxg");
	this.shape_8.setTransform(24.1,278.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332E2B").s().p("AggBHQgPgHgJgKQgLgLgFgOQgEgNgBgPQABgNAEgNQAFgOALgLQAJgMAPgHQAIgDAHgCQAJgCAIAAQARAAAPAHQAPAGAKALQAKALAFAOIAFAOIABANIAAABQgBAPgEANQgFANgJAMQgKAKgPAHQgOAGgUAAQgQAAgQgGgAgMghQgGAEgEAIQgDAKgBALQABATAHALQAHAKALAAQAOAAAGgLQAIgLgBgSQAAgNgDgJQgFgIgFgEQgHgEgHAAQgFAAgHAFg");
	this.shape_9.setTransform(6,279.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#332E2B").s().p("AAVBIIAAhlIAAgCIgoAAIAABlIAAACIgyAAIAAhlIAAgqIBlAAIAmAAIAABkIAAArg");
	this.shape_10.setTransform(-7.8,279.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#332E2B").s().p("AAXBIIAAgxIgQAAIgXAxIg3AAIAjg6QgJgCgHgHQgHgFgEgHQgEgJAAgLQAAgKAGgKQAGgKAOgHQAPgHAZAAIBIAAIAABkIAAArgAgLgfQgFADAAAGQAAAFAFADQADAEAHABIAZAAIAAgaIgYAAQgIAAgDAEg");
	this.shape_11.setTransform(-26.5,279.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#332E2B").s().p("AhNBIIAAgjIACAAQAFAAADgCQAEgDADgEQAEgIABgPQABgNABgVIgBgNIAAgNIAAgPIAAgCIAAgBIBkAAIAgAAIAAAnIAABkIAAAEIgwAAIAAhkIAAgDIglAAIAAADIAAAEQgBAbgCASQgDASgEAKQgGAKgHAHQgDAFgJADQgJACgKAAQgLAAgFgCg");
	this.shape_12.setTransform(-40.6,279.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#332E2B").s().p("AAFBIQgMgFgJgIQgJgIgGgKQgFgLgDgNIgWAAIAAA3IgxAAIAAhkIAAgrIAxAAIAAAyIAZAAQADgMAGgJQAGgJAJgHQAJgIAJgEIANgEIAOgBQAYAAARALQASALAJARQAFAKADAJQACAKAAAHIgBAPQgBAGgDAIQgEANgKALQgKALgOAGQgPAGgTABQgQgBgNgEgAAOgbQgIAKAAARQAAAUAIALQAHAKANAAQANAAAHgLQAHgLAAgTQAAgMgEgJQgEgIgGgFQgGgDgHAAQgMgBgIALg");
	this.shape_13.setTransform(-57.9,279.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#332E2B").s().p("AAYBIIAAg1IABgXIgvBMIguAAIAAhlIAAgqIAvAAIAAA1IgBAUIAvhJIAsAAIAABkIAAArg");
	this.shape_14.setTransform(-75.5,279.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BD0B23").s().p("AgtBHQgTgNgFgYIAxgEQADAIAGADQAGAEAFAAQAFAAAFgDIAFgDIADgEQADgFAAgHQAAgLgGgFQgHgFgIAAQgEgBgFADQgFACgDAFIgvAAIAQhdIBpAAIAAAoIhEAAIgGAWQAQgIAQAAQANAAANAGQAMAFAIAMQAEAFADAGQACAHAAAIIAAAGQAAAQgJAOQgKAMgQAHQgQAHgTAAQgaAAgTgMg");
	this.shape_15.setTransform(-94.8,279.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BD0B23").s().p("AgDBTIAAheIgnAAIAAggIAYgGQAJgDAHgIQAGgHABgPIAmAAIAAB0IAAAxg");
	this.shape_16.setTransform(-108.1,278.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#332E2B").s().p("AAABMQgHAAgIgBIgPgFQgOgFgJgKQgKgJgFgOQgFgNAAgRQAAgSAGgPQAGgPAKgKQAKgKANgEQANgFAPAAQAaAAAQAKQAQAKAHAOQAGANABANIguAAQgHgYgSAAIgBAAQgGAAgGAGQgGAGgDAJQgDAKAAAIQAAALADAJQADAJAGAFQAGAGAHAAQAJAAAHgGQAHgFACgNIAwAAIgCAMIgFALQgFALgKAIQgJAIgNAFQgNAFgOAAg");
	this.shape_17.setTransform(-125.7,279.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,263,273.1,31.7);
p.frameBounds = [rect];


(lib.t2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#565555").s().p("AhHCDQgSgWABgjIAAjhIAwAAIAADUQAAAtAoAAQAPAAANgNQANgNAAgVIAAjSIAxAAIAAEsIgyAAIAAgeIgBAAQgWAhgmAAQgiAAgQgVg");
	this.shape.setTransform(131.1,306.1,0.305,0.304);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#565555").s().p("Ag7CZIAAktIAwAAIAAAjIACAAQAJgYAQgHQAPgIAYAAIAEAAIAAA6IgQgBQgbAAgOANQgNAMAAAgIAAC/g");
	this.shape_1.setTransform(126.1,306,0.305,0.304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#565555").s().p("AgZAbIAAg2IAzAAIAAA2g");
	this.shape_2.setTransform(122,309.8,0.305,0.304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#565555").s().p("AhICDQgRgWAAgjIAAjhIAxAAIAADUQAAAtAnAAQAQAAANgNQANgNAAgVIAAjSIAwAAIAAEsIgwAAIAAgeIgCAAQgVAhgnAAQgiAAgRgVg");
	this.shape_3.setTransform(117.2,306.1,0.305,0.304);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#565555").s().p("Ag/CGQgUgVgCgoIAygIQgBAUAJANQAJAMASAAQAVAAAIgKQAJgKAAgXQAAgLgCgHQgCgJgFgFQgEgGgJgEQgIgFgNgGQgXgJgPgHQgPgKgIgLQgIgKgDgNQgDgMAAgOQAAgkAVgXQAVgXAoAAQAuAAASAXQAUAWAAAmIgyAHQABgYgKgKQgKgLgQAAQgJAAgHADQgIAEgDAFQgEAFgCAHIgBANQAAAIABAGQACAGAGAGQAGAHAJAEQAIAGAQAFQAWAIAOAKQAOAIAHALQAHALADANQACAMAAARQAAApgUAYQgUAYgsAAQgqAAgVgVg");
	this.shape_4.setTransform(111.2,306,0.305,0.304);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#565555").s().p("AgiCWQgOgGgKgIQgJgIgGgKQgFgJgDgMIgEgTIgBgYIgBhQQAAgQABgOIAEgaQABgLADgJQAJgXATgPQAVgOAfAAQAuAAAUAZQAUAaAAArIAABJIiAAAIABAoQABAWADAIQAJAbAbAAQASAAAJgMQAJgMABgVIAyAJQgEAogVAUQgVAVgqAAQgVAAgNgFgAgShnQgJAGgGAOQgDAIgBAPIgCAkIBOAAIAAgaQAAgMgBgKQgCgLgEgIQgEgIgIgEQgIgFgMAAQgJAAgJAFg");
	this.shape_5.setTransform(105.1,306,0.305,0.304);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#565555").s().p("AAgDgQgUgBgMgDQgNgDgKgJQgJgHgEgPQgFgOAAgYIAAlzIAvAAIAAFqQAAAVAFAKQAFAJATAAIAHAAIAAAtg");
	this.shape_6.setTransform(100.6,304,0.305,0.304);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#565555").s().p("AgaCXIhIktIAzAAIAvDlIABAAIAwjlIAzAAIhIEtg");
	this.shape_7.setTransform(95.7,306,0.305,0.304);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#565555").s().p("AghDdQgLgCgLgIQgLgHgJgPQgJgPgCgZQgCgYAAgOIgBgmQAAghACgdQABgcAIgVQAIgVAQgNQAPgMAdAAQAQAAANAGQANAGAIANIACAAIAAijIAwAAIAAG6IgwAAIAAgYIgCAAQgKAOgLAGQgLAHgVAAIgUgCgAgTgfQgIAFgFANQgFAMgBAUQgCASAAAiIABAwQABAVAEAMQAEAMAJAGQAJAGANAAQAUAAALgNQAKgOAAgVIAAh3QAAgUgKgNQgKgNgVAAQgLAAgJAGg");
	this.shape_8.setTransform(89.4,303.9,0.305,0.304);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#565555").s().p("AglCWQgNgEgLgJQgKgJgGgKQgFgKgEgLQgCgIgBgLQgBgKAAgOIABhwQABgOACgMQACgKAEgKQAHgXAVgNQAUgOAhAAQAaAAAQAHQAQAHAKAMQAJAMAFAQQAEAOACAVIACBIQAAAlgDAhQgDAXgKAQQgJAPgNAJQgOAJgPADQgPADgNAAQgUAAgNgFgAgUhoQgKAFgGAPQgDAIgCAcIgCA9IABAoQABAUADAJQAIAcAeAAQAMAAAKgHQALgJADgLQACgEABgIIACgTIACgYIgCheIgDgPQgJgcgdAAQgLAAgJAFg");
	this.shape_9.setTransform(83.3,306,0.305,0.304);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#565555").s().p("Ag7CZIAAktIAxAAIAAAjIABAAQAKgYAPgHQAPgIAXAAIAGAAIAAA6IgRgBQgbAAgOANQgMAMAAAgIAAC/g");
	this.shape_10.setTransform(78.3,306,0.305,0.304);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565555").s().p("AgkCWQgNgEgLgJQgJgIgHgLQgGgKgDgLIgDgTQgBgKAAgOIgBgzIAFhXQACgKADgKQAIgWAVgOQAUgOAgAAQAaAAARAHQAPAHALAMQAJAMAEAQQAFARABASIACBIQAAAlgDAhQgDAXgKAQQgIAPgOAJQgNAJgPADQgQADgNAAQgTAAgNgFgAgUhoQgLAGgEAOQgEAIgCAcIgBA9IAAAoQACAUACAJQAJAcAdAAQANAAAJgHQALgJAEgLQACgEAAgIIAEh0IgCgVIgDgPQgIgcgeAAQgKAAgKAFg");
	this.shape_11.setTransform(72.7,306,0.305,0.304);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#565555").s().p("Ag8DBQgVgTgCglIAxgJQABATAIALQAIALAUAAQAKAAAIgFQAIgFAEgGQAEgGADgKQACgHAAgKIAAg5IgBAAQgJAQgSAIQgQAIgOAAQgaAAgOgLQgOgKgIgTQgHgRgCgYQgCgTAAgcIAAgzQAAgZADgdQACgZAJgPQAJgPALgHQAMgIAKgCIAUgCQAWAAALAHQAMAIAJAMIABAAIAAgYIAwAAIAAFDQAAARgEATQgEATgJANQgKAOgRAJQgSAIgcAAQgnAAgVgUgAgVifQgIAFgFANQgFAOgBATQgBAUAAAcIABAyQAAAQAFAQQADANAKAGQAKAHANAAQARAAAMgNQAMgMAAgTIAAh5QAAgVgKgOQgKgNgVAAQgNAAgJAGg");
	this.shape_12.setTransform(66.2,307.8,0.305,0.304);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#565555").s().p("AglCWQgNgEgLgJQgJgIgHgLQgFgKgEgLIgDgTQgBgKAAgOIABhwIADgaQACgKAEgKQAHgXAVgNQAUgOAhAAQAaAAAQAHQAQAHAKAMQAJAMAFAQQAFARABASIACBIQAAAlgDAhQgDAXgKAQQgJAPgNAJQgOAJgPADQgPADgNAAQgUAAgNgFgAgUhoQgLAGgFAOQgDAIgCAcIgCA9IABAoQABAUADAJQAIAcAeAAQAMAAAKgHQALgJADgLQACgEABgIIACgTIACgYIgCheIgDgPQgJgcgdAAQgLAAgJAFg");
	this.shape_13.setTransform(60,306,0.305,0.304);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#565555").s().p("Ag7CZIAAktIAxAAIAAAjIABAAQAKgYAPgHQAPgIAXAAIAGAAIAAA6IgRgBQgbAAgOANQgMAMAAAgIAAC/g");
	this.shape_14.setTransform(55,306,0.305,0.304);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#565555").s().p("AghCWQgNgEgLgJQgLgJgEgKQgGgKgDgLQgDgIAAgLQgCgKAAgOIABhwQABgOACgMQACgKADgKQAIgWAUgOQAUgOAgAAQAuAAASAZQAUAYAAApIgyAHQAAgbgKgNQgJgMgRAAQgJAAgKAFQgJAGgFAOQgDAIgCAcIgBA9IAAAnQABAUADAKQAEANAJAIQAJAHANAAQATAAAIgNQAJgOAAgXIAxAJQgBApgVAXQgVAWgsAAQgTAAgNgFg");
	this.shape_15.setTransform(49.7,306,0.305,0.304);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#565555").s().p("AgXDUIAAksIAvAAIAAEsgAgXijIAAgxIAvAAIAAAxg");
	this.shape_16.setTransform(45.3,304.2,0.305,0.304);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#565555").s().p("ABlCYIAAjUQAAgTgKgMQgKgLgRAAQgQAAgNALQgMAMAAAUIAADTIguAAIAAjUQAAgTgKgMQgKgLgRAAQgRAAgMANQgLAMAAAWIAADPIgwAAIAAksIAxAAIAAAeIABAAQAKgPANgKQAOgIATAAQAWAAAOAJQANAJAHAQQAOgPAQgKQAQgJAWAAQAhAAASAWQAQAWAAAiIAADhg");
	this.shape_17.setTransform(38.7,306,0.305,0.304);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#565555").s().p("AgZAbIAAg2IAzAAIAAA2g");
	this.shape_18.setTransform(31.9,309.8,0.305,0.304);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#565555").s().p("AAsCXIgsjNIgBAAIgqDNIgyAAIhDktIAyAAIArDgIACAAIArjgIAvAAIAqDiIACAAIAqjiIAzAAIhFEtg");
	this.shape_19.setTransform(26,306,0.305,0.304);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#565555").s().p("AAsCXIgsjNIAAAAIgrDNIgyAAIhDktIAyAAIArDgIACAAIAqjgIAwAAIAqDiIACAAIAqjiIAzAAIhFEtg");
	this.shape_20.setTransform(16.3,306,0.305,0.304);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#565555").s().p("AAsCXIgsjNIgBAAIgrDNIgwAAIhFktIAzAAIArDgIACAAIArjgIAvAAIArDiIABAAIAqjiIAyAAIhDEtg");
	this.shape_21.setTransform(6.5,306,0.305,0.304);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#565555").s().p("AgiCWQgNgFgLgJQgIgHgHgLQgGgKgCgLQgCgIgBgLIgDgyIAFhuQACgOACgGQAJgXAUgPQATgOAhAAQAsAAAVAZQAUAZAAAsIAABJIiAAAIABAoQABASAEAMQAHAbAcAAQASAAAJgMQAKgMAAgVIAyAJQgDAngWAVQgWAVgpAAQgUAAgOgFgAgShnQgKAGgFAOQgDAGgBARIgCAkIBPAAIAAgaQAAgMgCgKQgBgLgEgIQgFgIgIgEQgHgFgMAAQgKAAgJAFg");
	this.shape_22.setTransform(-4.7,306,0.305,0.304);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#565555").s().p("AgXCXIAAkCIg/AAIAAgrICtAAIAAArIhAAAIAAECg");
	this.shape_23.setTransform(-9.6,306,0.305,0.304);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#565555").s().p("AAsDSIAAjHIgCAAIhXDHIguAAIAAksIAvAAIAADEIABAAIBXjEIAwAAIAAEsgAgniOQgPgIgKgKQgJgLgFgOQgEgNAAgMIAoAAQAAAGAEAHQADAIAFAEQAGAIAGACQAIAEAJAAQAHAAAIgEQAHgDAGgHQAFgDAEgJQACgFAAgIIAnAAQgBANgFAMQgEANgLAMQgKAKgOAIQgPAHgSAAQgWAAgQgHg");
	this.shape_24.setTransform(-15.5,304.2,0.305,0.304);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#565555").s().p("Ag1CTQgNgIgIgNQgHgLgEgRQgDgPAAgRQAAgSAEgQQADgRAJgOQAKgMAQgJQAQgJAZAAIAtAAIAAgoQAAgTgIgJQgIgLgXABQgMgBgKAIQgLAGgEARIgugMQAHgeAXgRQAWgSAhABQApAAAWASQAXATAAAuIAADdIgxAAIAAgaIAAAAQgOARgOAFQgPAIgSgBQgTAAgNgHgAgaAXQgPAKAAAeQAAAWAJALQAJALAUAAQAUABAMgNQALgNAAgXIAAgwIgjAAQgRAAgOAMg");
	this.shape_25.setTransform(-22.2,306,0.305,0.304);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#565555").s().p("AghCWQgNgEgLgJQgLgJgEgKQgGgKgDgLQgDgIAAgLQgCgKAAgOIAEiKQACgNADgHQAJgXATgNQAUgOAgAAQAuAAASAZQAUAYAAApIgzAHQAAgcgJgMQgJgMgRAAQgJAAgKAFQgIAFgGAPQgDAIgCAcIgBBkQAAASAEAMQAEAOAJAHQAJAHANAAQATAAAIgNQAIgNAAgYIAyAJQgBAqgVAVQgVAXgsAAQgTAAgNgFg");
	this.shape_26.setTransform(-27.9,306,0.305,0.304);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#565555").s().p("Ag1CTQgNgIgHgNQgIgLgDgRQgEgOAAgSQAAgSAEgQQADgQAKgPQAIgLARgKQAQgJAZAAIAtAAIAAgoQAAgTgIgJQgIgLgXABQgLgBgLAIQgMAHgDAQIgugMQAHgeAXgRQAWgSAhABQApAAAWASQAXATAAAuIAADdIgxAAIAAgaIAAAAQgNAQgPAGQgOAIgTgBQgTAAgNgHgAgaAXQgPALAAAdQAAAWAJALQAKALATAAQAVABALgNQALgNAAgXIAAgwIgjAAQgRAAgOAMg");
	this.shape_27.setTransform(-37.4,306,0.305,0.304);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#565555").s().p("AAnCXIAAiGIhNAAIAACGIgyAAIAAktIAyAAIAACAIBNAAIAAiAIAyAAIAAEtg");
	this.shape_28.setTransform(-43.7,306,0.305,0.304);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#565555").s().p("AAsCWIAAjEIgBAAIhXDEIgvAAIAAkrIAvAAIAADDIABAAIBXjDIAwAAIAAErg");
	this.shape_29.setTransform(-53.9,306.1,0.305,0.304);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#565555").s().p("AArCWIAAjEIgBAAIhXDEIguAAIAAkrIAvAAIAADDIABAAIBWjDIAxAAIAAErg");
	this.shape_30.setTransform(-60.8,306.1,0.305,0.304);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#565555").s().p("AA2C9IAAhNIiXAAIAAkrIAwAAIAAD9IBPAAIAAj9IAvAAIAAD9IAWAAIAAB7g");
	this.shape_31.setTransform(-67.3,307.3,0.305,0.304);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#565555").s().p("AA1CWIgWhTQgDgOgGgKQgFgKgHgEQgGgFgJgCIgtgCIAACCIgxAAIAAkrIAxAAIAACDIAlgCQAHAAAHgFQAHgEAHgKQAGgJAEgOIAXhXIAuAAIgXBXQgIAYgIANQgKAPgQAFQATAFAKAOQALATAFATIAaBig");
	this.shape_32.setTransform(-74,306.1,0.305,0.304);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#565555").s().p("Ag1CTQgNgIgHgMQgIgOgDgOQgEgTAAgOQAAgPAEgTQADgPAKgQQALgNAOgIQAQgIAZgBIAuAAIAAgoQAAgRgJgLQgIgKgXAAQgKgBgMAIQgMAHgDARIgugNQAHgfAXgQQAXgRAgAAQApgBAXAUQAWASAAAvIAADcIgwAAIAAgaIgBAAQgMAQgQAHQgNAGgUABQgTgBgNgHgAgaAXQgPAMAAAdQAAAUAKANQAJAKATABQAVAAALgNQAMgNAAgXIAAgwIgkAAQgRAAgOAMg");
	this.shape_33.setTransform(-80.7,306.1,0.305,0.304);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#565555").s().p("AAtCWIAAh+IgaAAQgSAAgIAJQgKAKgHAbIgUBQIgxAAIAaheQADgMAIgPQAGgMAMgIQgagJgJgRQgLgUAAgWQAAgrAYgYQAXgYAtABIBWAAIAAErgAgWhdQgMANAAAXQAAAUANAKQAMALAVAAIAhAAIAAhbIgcAAQgbAAgMAOg");
	this.shape_34.setTransform(-90.3,306.1,0.305,0.304);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#565555").s().p("AAsCWIAAjEIgBAAIhYDEIguAAIAAkrIAvAAIAADDIABAAIBXjDIAwAAIAAErg");
	this.shape_35.setTransform(-96.9,306.1,0.305,0.304);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#565555").s().p("AhZCWIAAkrIBRAAQAwAAAXAVQAXAWAAAnQAAAVgHAOQgHAPgPAJIAAAAQATAIAHARQAHARAAAZQAAAwgZAWQgZAVgyAAgAgnBoIAiAAQAQAAAJgDQAJgEAGgGQAFgGACgJQABgKAAgLQAAgVgKgLQgKgLgdAAIghAAgAgngbIAcAAQAaAAALgKQAMgKAAgUQAAgUgLgKQgLgKgaAAIgdAAg");
	this.shape_36.setTransform(-103.6,306.1,0.305,0.304);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#565555").s().p("AglCWQgPgGgIgHQgKgIgGgKQgGgLgDgMQgCgFgCgNIgBhpIABgfIAEgaQABgNADgGQAJgYAUgNQAVgOAgAAQAZAAARAHQAQAHAKAMQAJALAFARQAEASACARIABAmIABAiQAAAggEAmQgDAYgJAPQgKAQgMAIQgOAJgPADQgPADgNAAQgSAAgPgFgAgVhnQgJAEgGAPQgEALgBAZIgBBkQABAVADAJQAIAcAeAAQANAAAJgHQAJgIAGgMIACgMIADgrIgBheIgDgPQgIgcgeAAQgLAAgKAGg");
	this.shape_37.setTransform(-110,306.1,0.305,0.304);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#565555").s().p("AhkB4QANgJAIgIQAIgIAFgKQAEgJADgQQACgOgBgWIAAizICfAAIAAEsIgwAAIAAkBIhDAAIAACJQAAAegCAUQgFAVgHAOQgIAQgMAKQgLAKgUAKg");
	this.shape_38.setTransform(-116.7,306.3,0.305,0.304);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#565555").s().p("AghCWQgPgFgJgIQgKgIgFgKQgGgLgDgMQgCgGgBgMQgCgLAAgNIABhwIADgaQACgNADgGQAJgYATgNQAUgOAgAAQAtAAATAZQAUAZAAAoIgzAHQAAgcgJgMQgJgMgRAAQgKAAgJAGQgJAFgFAOQgDAJgCAbIgBBkQAAASAEALQAEAOAJAIQAJAHANAAQATAAAIgOQAIgMAAgYIAyAJQgBApgVAWQgVAXgsAAQgRAAgPgFg");
	this.shape_39.setTransform(-122.4,306.1,0.305,0.304);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#565555").s().p("AhWDXIAAgmIAVAAQAOAAALgNQALgNAIgcIAGgaIhck2IAwAAIA+DsIACgBIA4jsIAvAAIhWFFQgJAlgKAUQgIATgLALQgLAKgNADQgKADgNABg");
	this.shape_40.setTransform(-127.8,304.3,0.305,0.304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.1,297.2,265,17.2);
p.frameBounds = [rect];


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("AJ0BRQgRgHgMgMQgLgMgGgQQgGgQAAgRQAAgPAGgPQAFgQAMgNQALgNARgIQAJgEAJgCQAKgCAKgBQAVABARAHQARAIAMAMQALANAGAPIAFARIACAPIAAABQAAARgGAQQgFAPgMANQgLAMgRAHQgQAIgWAAQgWAAgRgIgAKKgnQgHAFgEAKQgFALAAANQAAAWAJANQAJAMAPAAQAPAAAIgNQAIgNAAgVQAAgPgFgKQgEgKgHgEQgIgEgHgBQgJABgIAEgAOTBTIAAhBIAEgjIgdBkIgoAAIgdhlIAEBlIgzAAIAAilIBDAAIAdBkIAdhkIBDAAIAAClgAGxBTIAAilICEAAIAAAlIhMAAIAACAgAFcBTIAAhAIgxAAIAABAIg4AAIAAilIA4AAIAAA5IAxAAIAAg5IA4AAIAAClgACiBTIAChXIg6BXIg1AAIAAilIA3AAIgCBVIA6hVIAzAAIAAClgAghBTIgohBIgLAKIAAA3Ig4AAIAAilIA4AAIAAAzIAugzIA/AAIg6BAIBBBlgAk8BTIAAilIBVAAQARAAANAFIAMAGQAGADAEAFQAJAIAFALQAEALAAAKQAAALgEALQgEAHgJAJQgJAIgNAEQgMAFgRABIgfAAIAAAygAkEgIIAbAAQAIABAEgGQAFgEAAgIQAAgGgFgFQgFgGgIAAIgaAAgAl/BTIgGgVIg2AAIgGAVIg4AAIA8ilIA6AAIA8ClgAmwAbIAgAAIgQg0gApCBTIAAh2IgxAAIAAB2Ig4AAIAAilIChAAIAAClgAtYBTIABhXIg5BXIg1AAIAAilIA2AAIgBBVIA5hVIAzAAIAAClg");
	this.shape.setTransform(2.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,17.7,193.4,17.8);
p.frameBounds = [rect];


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("AhuB/IAAgjIhVAAIAAAhIg8ABIAAhIQAHAAAHgGQAGgGAEgIQAFgIABgFQAEgMADgRIAFgmIABgbICOAAIAAB4IASABIAABPgAiigWIgCAVQgBAJgEAPQgEAOgGALIA3AAIAAhPIgmAAgAI+BbQgRgIgLgMQgMgMgGgQQgFgQAAgRQAAgOAFgQQAGgQALgNQAMgNAQgIQAJgEAKgCQAJgCAKAAQAWAAAQAHQARAIAMAMQAMANAFAQIAGAQIABAPIAAACQAAARgGAPQgFAQgMAMQgKAMgSAIQgQAHgWAAQgWAAgRgHgAJUgeQgHAFgEALQgFAKAAANQABAWAIANQAJAMAPAAQAPAAAIgNQAIgNAAgXQAAgNgFgJQgEgKgHgFQgHgEgIAAQgJAAgIAEgAowBbQgRgIgMgMQgLgMgGgQQgGgQABgRQgBgOAGgQQAFgQAMgNQAMgNAQgIQAJgEAJgCQAKgCAKAAQAWAAARAHQAQAIAMAMQALANAGAQIAGAQIABAPIAAACQAAARgGAPQgFAQgMAMQgLAMgRAIQgQAHgWAAQgWAAgRgHgAoageQgHAFgEALQgEAKgBANQABAWAIANQAJAMAPAAQAPAAAIgNQAIgNAAgXQAAgNgEgJQgFgKgHgFQgIgEgHAAQgJAAgIAEgAB8BeIAAgoIADAAQAEAAAFgDQAFgDADgFQADgIACgSQACgRAAgWIAAgPIAAgPIgBgRIAAgCIAAgCICbAAIAAClIg4AAIAAh3IgtAAIAAAJQAAAegDAVQgDAVgGAMQgGALgHAIQgFAGgKADQgKACgMAAQgNAAgFgCgAsfBgQgKAAgJgCQgIgBgJgEQgQgGgLgLQgLgLgGgPQgFgQgBgTQAAgVAHgSQAGgRAMgLQAMgLAOgGQAPgFASAAQAgAAATAMQASALAIAQQAHAPABAPIg1AAQgIgbgUAAIgCAAQgJAAgHAGQgHAHgEALQgDALAAAKQAAAMAEAKQAEALAGAGQAHAGAKAAQALAAAIgGQAIgGACgPIA3AAIgCANIgFANQgHANgKAJQgLAKgPAGQgPAFgRAAgANBBcIAChZIg6BZIg1AAIAAikIA3AAIgCBUIA6hUIAyAAIAACkgAG8BcIgnhBIgLALIAAA2Ig4AAIAAilIA4AAIAAAzIAugzIBAAAIg8BAIBEBlgAgeBcIAAijICGAAIAAAoIhPAAIAAAWIBCAAIAAAmIhCAAIAAAXIBTAAIAAAogAl0BcIAAh3IgxAAIAAguICaAAIAAAuIgxAAIAAB3gAMQhXQgLgEgHgHQgGgHgBgKQAAgFADgGIARAAIABAFIACADQABADAGACIASADQAKAAAJgDQAJgEAAgHIAAgCIASAAIACAKQgBAKgGAIQgHAHgLAEIgLACIgMABQgNAAgKgDg");
	this.shape.setTransform(-6.8,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.8,-41.6,242.8,93);
p.frameBounds = [rect];


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("AKoBTIAAilIA4AAIAAClgAH8BTIAAikIA4AAIAAAyIAeAAQARABANAEQANAFAIAIQAJAHAEAJQAEAKAAALQAAAMgEAKQgFALgIAIQgJAJgNAEQgOAFgQAAgAI0AsIAaAAQAIgBAFgFQAEgFAAgHQAAgHgEgFQgEgFgIAAIgbAAgAFPBTIAAilIBVAAQARAAANAFIAMAGQAGADAEAEQAJAJAFALQAEAKAAALQAAALgEAKQgEAIgJAJQgJAIgNAFQgMAEgRAAIgfAAIAAAzgAGHgHIAbAAQAIgBAEgFQAFgFAAgGQAAgIgFgFQgFgFgIAAIgaAAgAECBTIAChXIg6BXIg1AAIAAilIA3AAIgCBVIA6hVIAzAAIAAClgAAXBTIAAh4IgvAAIAAgtICYAAIAAAtIgxAAIAAB4gAi9BTIAAilIBVAAQARAAANAFIAMAGQAFADAFAEQAJAJAEALQAFAKAAALQAAALgFAKQgEAIgIAJQgJAIgNAFQgNAEgQAAIgfAAIAAAzgAiFgHIAbAAQAHgBAFgFQAEgFAAgGQAAgIgEgFQgFgFgJAAIgZAAgAkBBTIgFgVIg2AAIgGAVIg4AAIA8ilIA6AAIA8ClgAkyAbIAhAAIgQg0gAodBTIAAilIBTAAQAVAAAPAHQAOAHAHALQAIAKAAANQAAAKgGAJQgFAIgKAFQAJACAHAFQAHAGADAIIADAJIABAIQAAAMgHAKQgHAMgNAGQgOAHgUAAgAnlArIAfAAQAIAAAEgEQAEgDAAgGQAAgFgEgFQgFgEgHAAIgfAAgAnlgOIAWAAQAJAAAFgFQAFgEAAgFQAAgFgFgEQgEgDgIAAIgYAAgAp1BTIgnhBIgLALIAAA2Ig4AAIAAilIA4AAIAAAzIAtgzIBBAAIg8A/IBEBmg");
	this.shape.setTransform(-20.5,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.8,-41.6,242.8,93);
p.frameBounds = [rect];


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("AliCUIAAgzIh5AAIAAAxIhXABIAAhoQALAAAJgJQAJgIAGgMQAHgLABgFQAHgRADgcQAFgbACgbIACgmIDLAAIAACsIAaABIAABygAmthDQAAAOgCARQgCAPgFAVQgGASgKAQIBRAAIAAhzIg4AAgAE2BoIgRgDIgTgHQgSgIgNgRQgNgRAAgaIBMAAQAAANAKAJQAKAHAOABQAMAAAJgIQAIgHAAgMIAAgDQAAgOgGgHQgHgFgHAAIgPgCIgPgBIAAguIAUAAQAcAAABgUQAAgXgfAAQgUABgHAGQgFAHAAALIhBAAQAAgnAcgVQAcgTAtgBQAVAAAXAGQAWAFARAOQARAOAAAZIAAAHQAAAQgFAJQgEAJgKAFQgKAFgTAEQANAAAOAHQANAGAJAOQAJALAAAUQAAAWgRASQgQARgZAKQgaAKgagBQgNAAgSgCgANjBiIAAhQIgbAAIgnBQIhbAAIA4hgQgNgCgMgKQgMgJgGgPQgHgPAAgSQAAgQAKgRQAKgQAYgMQAZgLAmAAIB9AAIAADtgAMohKQgHAHAAAJQAAAHAGAHQAHAGAJAAIAvAAIAAgpIgrAAQgNAAgGAFgAHYBiIAAjtIBRAAIAABJIAsAAQAYAAASAHQATAGAMAMQANALAFAPQAHAOAAAOQAAAQgHAQQgGAPgNAMQgNAMgSAHQgUAHgYAAgAIpApIAkAAQAMAAAIgIQAGgHAAgLQABgJgHgGQgGgGgKAAIgoAAgAAJBiIAAg8IATAAQAOAAAIgLIAIgPIhYiXIBUAAIArBbIAkhbIBZAAIhrDDQgDAJgLAKQgKAKgNAHQgOAGgMAAgAj8BiIAAjtIB6AAQAYAAASAHQAKADAIAFQAIAEAGAHQANAMAHAQQAGAPAAAQQAAAPgGAPQgGAOgMAKQgNAMgTAHQgSAGgXAAIgtAAIAABJgAisghIAnAAQALAAAHgHQAFgHABgKQAAgKgHgIQgHgHgMAAIglAAgAsEBiIgJgfIhOAAIgIAfIhQAAIBWjtIBTAAIBWDtgAtLASIAvAAIgXhMg");
	this.shape.setTransform(-20.3,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.2,-8,189.7,29.6);
p.frameBounds = [rect];


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65332A").s().p("AQgB6QAigFAAgYIgiAAIAAhGIBJAAIAAA2QAAAlgSATQgTAUgkAAgAKvCOIAAgxIh5AAIAAAvIhXABIAAhnQALAAAJgIQAJgJAGgMQAGgJACgHQAGgRAEgcQAFgcACgaIACgnIDLAAIAACtIAZABIAABxgAJkhIQAAAOgCARQgCAQgFAUQgGASgKARIBRAAIAAhzIg4AAgAjBBaQgZgJgQgTQgRgRgIgXQgJgWAAgWQAAgYAJgXQAIgXAQgSQAQgTAYgLQANgGAOgDQANgDAPAAQAeAAAZAKQAYALARATQAQARAJAXQAEAMADAMQACAMAAALIAAAEQAAAWgIAWQgIAWgQARQgQASgYAKQgYALgfAAQggAAgYgLgAihhTQgLAIgGAOQgGAPAAAVQAAAfANARQAMASAWAAQAVAAALgSQAMgTAAggQAAgUgHgPQgGgNgKgHQgLgGgKgBQgOAAgKAHgAB2BiQgPAAgMgCQgNgDgMgEQgXgJgPgPQgQgQgIgXQgGgWAAgaQAAghAHgZQAJgZARgQQAQgQAWgIQAVgHAZAAQAuAAAbAQQAbARAKAWQAKAXACAUIhLAAQgMgngdABIgDAAQgNgBgKAKQgKAKgFAQQgFAPAAARQAAASAFAMQAFAPAKAKQALAIAOABQAOAAAMgJQAMgJAEgVIBOAAQAAAJgDAJQgCAJgFAKQgJASgQAOQgQAOgVAHQgVAIgYAAgAmNBiQgOAAgNgCQgMgDgNgEQgWgJgQgPQgQgQgIgXQgIgWAAgaQAAghAJgZQAJgZARgQQARgQAVgIQAWgHAZAAQAuAAAbAQQAbARAKAWQAKAXACAUIhLAAQgNgngdABIgDAAQgNgBgJAKQgKAKgFAQQgFAPAAARQAAASAFAMQAFAPAKAKQAKAIAPABQAOAAAMgJQAMgJAEgVIBOAAQAAAJgDAJQgDAJgFAKQgJASgPAOQgQAOgWAHQgVAIgXAAgAO4BdIADh9IhTB9IhMAAIAAjuIBOAAIgCB9IBTh9IBIAAIAADugAEHBdIAAjrIDDAAIAAA6IhzAAIAAAeIBhAAIAAA4IhhAAIAAAiIB4AAIAAA5gAtaBdIAAjrIDDAAIAAA6IhzAAIAAAeIBhAAIAAA4IhhAAIAAAiIB4AAIAAA5gAvRBdIAAhbIhHAAIAABbIhQAAIAAjuIBQAAIAABRIBHAAIAAhRIBQAAIAADug");
	this.shape.setTransform(-0.1,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.2,-58.5,234.9,85.3);
p.frameBounds = [rect];


(lib.site = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#342E2C").s().p("AgZAlQgIgDgEgGQgFgHAAgIIAAg0IAgAAIAAAsQAAAEAEADQADADADAAQADAAAEgDQADgDAAgEIAAgsIAhAAIAABKIAAACIgeAAIAAgLQgEAHgGAEQgFADgIAAQgIAAgHgDg");
	this.shape.setTransform(107.4,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#342E2C").s().p("AgcAoIAAhLIAAgDIAcAAIAAAQQAEgJAFgEQAFgEAKAAIAFAAIAAAgIgFAAIgCAAQgJAAgEAEQgFADAAAJIAAAfg");
	this.shape_1.setTransform(100,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#342E2C").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_2.setTransform(94.5,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#342E2C").s().p("AgZAlQgIgDgEgGQgFgHAAgIIAAg0IAgAAIAAAsQAAAEAEADQADADADAAQADAAAEgDQADgDAAgEIAAgsIAhAAIAABKIAAACIgeAAIAAgLQgEAHgGAEQgFADgIAAQgIAAgHgDg");
	this.shape_3.setTransform(87.7,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#342E2C").s().p("AgSAnQgIgBgGgHQgGgGgCgKIAfAAQABAEADACQADADACAAIADAAIADgCQADgCAAgCQAAgDgFgDIgKgDIgMgDIgJgEQgFgCgDgEQgCgCAAgHQAAgGADgGQADgGAJgFQAJgEANgBQAMABAJADQAIADAEAGQAEAEAAAHIAAABIgcAAQAAgDgDgCQgDgCgDAAQgBABgCABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABIAAABQABADAGACIAQAFQAJACAHAEQAHACABAIIAAAFQAAAJgEAFQgFAGgJAEQgEACgGAAIgMACQgKgBgJgCg");
	this.shape_4.setTransform(78.8,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#342E2C").s().p("AAAApQgLAAgIgDQgIgEgGgFQgFgGgDgHIgDgIIAAgIQAAgGACgIQADgIAGgFQAFgHAJgDQAJgDAKgBQAMABAKAEQAJAFAGAHQAEAHADAIQACAHAAAEIAAAEIg6AAQAAADABADQABADADADQAFADAEAAQADAAAEgCQADgCAAgDIAfAAQgBAFgDAGQgDAFgGADQgFAEgHACIgJACIgJAAgAgIgSQgDACgCAIIAbAAQgBgIgEgCQgEgDgFAAQgFAAgDADg");
	this.shape_5.setTransform(69.9,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#342E2C").s().p("AgPA3IAAhMIAAghIAfAAIAABMIAAAhg");
	this.shape_6.setTransform(63,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#342E2C").s().p("AgPAnIgbhMIgCgBIAgAAIANAvIANgvIAeAAIgaBLIgBACg");
	this.shape_7.setTransform(56.7,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#342E2C").s().p("AgYAzQgIgEgFgJQgGgKAAgOQAAgOAFgIQAGgKAIgFQAIgEAIAAQAHAAAEADQAGACADAEIAAglIAgAAIAABMIAAAhIgcAAIAAgLQgCAFgHAEQgHADgGABQgJgBgJgEgAgHACQgEAFAAAHQAAAIAEAFQADAFAEAAQAHAAADgFQAEgGAAgHQAAgHgEgFQgDgEgHAAQgEAAgDAEg");
	this.shape_8.setTransform(47.5,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#342E2C").s().p("AgUAmQgLgFgGgKQgHgJAAgOQAAgLAEgIQAFgIAGgFIAHgEIAIgDQAIgCAGAAQAKAAALAEQAKAEAHAKQADAEACAHQACAFAAAHIAAAAQAAAOgGAJQgHAKgKAFQgKAEgMAAQgKAAgKgEgAgJgNQgDAGAAAHQAAAGADAHQAEAGAFABQAHAAADgHQADgHAAgGQAAgHgDgGQgEgFgGgBQgGABgDAFg");
	this.shape_9.setTransform(38.5,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#342E2C").s().p("AgbAoIAAhLIAAgDIAbAAIAAAQQADgJAGgEQAFgEAKAAIAEAAIAAAgIgDAAIgDAAQgJAAgEAEQgFADAAAJIAAAfg");
	this.shape_10.setTransform(31.1,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#342E2C").s().p("AgUAmQgLgFgGgKQgHgJAAgOQAAgLAEgIQAFgIAGgFIAHgEIAIgDQAIgCAGAAQAKAAALAEQAKAEAHAKQADAEACAHQACAFAAAHIAAAAQAAAOgGAJQgHAKgKAFQgKAEgMAAQgKAAgKgEgAgJgNQgDAGAAAHQAAAGADAHQAEAGAFABQAHAAADgHQADgHAAgGQAAgHgDgGQgEgFgGgBQgGABgDAFg");
	this.shape_11.setTransform(23.2,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#342E2C").s().p("AgSAzQgKgDgEgGQgEgFgBgGIAgAAQAAACADABIAEACQAFAAAEgDQADgDAAgFIAAgKQgJAJgLAAQgJAAgJgFQgIgEgFgIQgFgIAAgLIAAgDIAAgBQAAgGACgFQABgFADgEQAFgJAIgEQAHgEAJAAQAHAAAEADQAGADAEAFIAAgJIAdAAIAABLQAAANgIAIQgJAJgWAAQgMAAgKgDgAgGgZQgDAEAAAHQAAAIADAFQADACAEAAQAMAAAAgPQAAgHgDgEQgDgEgGAAQgFAAgCAEg");
	this.shape_12.setTransform(13.7,2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#342E2C").s().p("AgUAmQgLgFgGgKQgHgJAAgOQAAgLAEgIQAFgIAGgFIAHgEIAIgDQAIgCAGAAQAKAAALAEQAKAEAHAKQADAEACAHQACAFAAAHIAAAAQAAAOgGAJQgHAKgKAFQgKAEgMAAQgKAAgKgEgAgJgNQgDAGAAAHQAAAGADAHQAEAGAFABQAHAAADgHQADgHAAgGQAAgHgDgGQgEgFgGgBQgGABgDAFg");
	this.shape_13.setTransform(4.6,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#342E2C").s().p("AgcAoIAAhLIAAgDIAcAAIAAAQQADgJAGgEQAFgEAKAAIAFAAIAAAgIgFAAIgCAAQgJAAgFAEQgEADAAAJIAAAfg");
	this.shape_14.setTransform(-2.8,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#342E2C").s().p("AAAApQgJAAgJgDQgIgEgFgFIgGgHIgDgHQgDgIAAgHIABgGIACgIQADgIAGgFQAGgHAIgDQAJgDAJgBIACAAQANAAAJAGQAKAEAFAIQAEAHAAAHIgBACIgfAAQgBgHgDgCQgCgDgFgBQgEAAgEAHQgDAGgBAHQABAFABAEQABAFAEACQADADACAAQAFAAACgCQADgDACgGIAeAAIABACQAAALgGAHQgFAHgKADQgKADgMAAg");
	this.shape_15.setTransform(-10.9,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#342E2C").s().p("AgPA4IAAhLIAAgEIAfAAIAABLIAAAEgAgPggIAAgXIAfAAIAAAXg");
	this.shape_16.setTransform(-17.6,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#342E2C").s().p("AAkApIAAgrQAAgFgDgCQgDgDgEAAQgEAAgDADQgDACAAAFIAAArIgfAAIAAgrQAAgGgDgCQgDgDgEAAQgEAAgDADQgDADAAAFIAAArIggAAIAAhMIAAgCIAdAAIAAALQAEgGAIgEQAHgDAJAAQAHAAAEADQAGAEADAIQADgFAGgDQAFgDAFgCIALgCQAHAAAHADQAGAEAEAGQAEAIAAAJIAAAyg");
	this.shape_17.setTransform(-27,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#342E2C").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_18.setTransform(-36.4,4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#342E2C").s().p("AAMAnIgMgrIgKArIgeAAIgahMIAAgBIAeAAIAMAsIAMgsIAZAAIANAtIAKgtIAgAAIgZBLIgBACg");
	this.shape_19.setTransform(-45.2,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#342E2C").s().p("AAMAnIgMgrIgKArIgfAAIgZhMIgBgBIAfAAIAMAsIAMgsIAZAAIANAtIALgtIAeAAIgYBLIAAACg");
	this.shape_20.setTransform(-58.7,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#342E2C").s().p("AAMAnIgMgrIgKArIgeAAIgahMIAAgBIAeAAIAMAsIAMgsIAZAAIANAtIAKgtIAgAAIgZBLIgBACg");
	this.shape_21.setTransform(-72.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.7,-10.8,200.5,22.1);
p.frameBounds = [rect];


(lib.rose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2D2C").s().p("AgYA0IAAhnIAWAAQAMAAAIAHQAHAIAAAQIAAADQAAAOgGAFQgIAIgLAAIgJAAIAAAqgAgJgBIAIAAQAEAAAEgEQADgEAAgHIAAgHQAAgIgEgEQgDgDgHAAIgFAAg");
	this.shape.setTransform(19.5,24.7,0.518,0.518);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2D2C").s().p("AgYAYIAAhLIAQAAIAABNQgBAMAJAAQAKAAgBgMIAAhNIAQAAIAABLQAAAcgZAAQgYAAAAgcg");
	this.shape_1.setTransform(16.1,24.7,0.518,0.518);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2D2C").s().p("AgRAvQgIgHABgQIAAgvQgBgPAIgIQAIgGAJAAQAKAAAIAGQAIAIgBAPIAAAvQABAQgIAHQgIAGgKAAQgJAAgIgGgAgGgiQgEACAAAHIAAA0QAAAGAEADQACADAEAAQAFAAACgDQAEgEAAgFIAAg0QAAgGgEgDQgDgEgEAAQgEAAgCAEg");
	this.shape_2.setTransform(12.7,24.6,0.518,0.518);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2D2C").s().p("AALA0IgNguIgJAAIAAAuIgOAAIAAhnIATAAQARAAAHAIQAFAHAAALIAAAIQAAAKgFAHQgEACgEABIAQAxgAgLgFIAJAAQADAAAEgDQADgDAAgHIAAgHQAAgGgDgEQgDgDgFAAIgIAAg");
	this.shape_3.setTransform(9.4,24.7,0.518,0.518);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2D2C").s().p("AgTAuQgGgGAAgMIAAgzQABgNAEgGQAHgKANAAQALAAAHAGQAIAIAAANIAAAEIgQAAIAAgFQAAgFgCgDQgEgEgEAAQgDAAgEAEQgDADAAAIIAAAvQAAAHACAEQAEADAEABQAFAAADgEQACgEAAgJIAAgOIgKAAIAAgLIAaAAIAAA3IgIAAIgEgIQgCAEgFACQgEADgGAAQgLAAgFgHg");
	this.shape_4.setTransform(5.9,24.6,0.518,0.518);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2D2C").s().p("AgVA0IAAhnIArAAIAAAOIgcAAIAAAfIAYAAIAAALIgYAAIAAAgIAcAAIAAAPg");
	this.shape_5.setTransform(0.9,24.7,0.518,0.518);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2D2C").s().p("AgUAsQgFgHAAgKIAAgEIAPAAIAAADQAAAGADADQACADAFABQAGgBACgDQADgDAAgIIAAgEQAAgHgDgDQgCgDgFgCIgJgDQgKgCgDgIQgDgFAAgKIAAgDQAAgMAIgIQAHgGAJAAQAMAAAGAHQAHAHAAANIAAADIgPAAIAAgCQAAgGgCgEQgDgEgFAAQgDAAgDAEQgDADAAAHQAAAHADAEQABACAFADIAIADQAKAEADADQAFAFAAANIAAADQAAAPgHAJQgHAGgMAAQgNAAgHgJg");
	this.shape_6.setTransform(-2.3,24.6,0.518,0.518);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F2D2C").s().p("AgQAvQgJgHAAgQIAAgvQAAgPAJgIQAGgGAKAAQALAAAHAGQAHAIABAPIAAAvQgBAQgHAHQgHAGgLAAQgKAAgGgGgAgHgiQgCACAAAHIAAA0QAAAGACADQADADAEAAQAFAAADgDQADgEAAgFIAAg0QAAgGgDgDQgEgEgEAAQgDAAgEAEg");
	this.shape_7.setTransform(-5.8,24.6,0.518,0.518);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F2D2C").s().p("AALA0IgNguIgJAAIAAAuIgOAAIAAhnIATAAQARAAAHAIQAFAHAAALIAAAIQAAAKgFAHQgDACgFABIAQAxgAgLgFIAJAAQADAAAEgDQADgDAAgHIAAgHQAAgGgDgEQgDgDgFAAIgIAAg");
	this.shape_8.setTransform(-9,24.7,0.518,0.518);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#871003").s().p("ACyEyQAngSAhglQARgTAaghQgWAZgnAVQhNAthVgHQhfgIhMg/QgYgVgSgXIgOgTIABASQACAWAGAVQAYBDBEAdIj5AAIAAheQAgAhAoAQQAUAHAPABQAChdgfhKQgYg3gpgoIAhBAQAZA/ABBPQgKgCgPgGQgcgMgTgWIAAncIBaAAQhDBCAEBbQAFB7CDCXQgng3gXhPQgvikBSiFIAkAAQgJAOgFATQAKgRAOgQIArAAQgfAdgVAtQglBLAFBgQAFBaApBNQAqBRBDAkQBGAlBTgaQgkAKgugKQhegTg8hsQg1hfAbiCQAciHBYg1IE0AAIAAAnQgtgZg+ACIg1AFQBogEA4A6IAABLQgwhLhNgbQhXgehVA0Qh/BPASB/QAIA9AjAwQghg6AIhCQAGhAAogzQAmgzA6gSQA/gTBBAcQBRAkAlA/IAADQQhABkhmgCQgggBgfgLIgagLQA9A5BHgEQBDgFA4g5IAACYgAgpAbQAVBaBhAhQA4AIA1gYQBqgxgNicQABArgSAsQgiBahcAMQhfANgxhRQgthEARhEQgRA9AMA0gABdiPQgdAGgXAUQgmAggDAxQgCAvAeAmQAhAmAwADQAyAEAmggQAQgPALgTQgIALgLAKQgjAegtgEQgvgCgdgkQgegiAEgsQACguAkgdQASgQAYgIQAXgGAXAEQgQgEgPAAQgNAAgMADgABIhcQgZAWgCAgQgDAhAWAXQAVAZAhACQAhACAZgVQAYgVADgfQADghgWgYIgDgEQARAXgDAbQgDAcgVARQgWASgegBQgdgDgTgWQgSgTABgcQACgdATgTgADFibQAzAkgIA9QgEAfgOAXQA8gogZhEQgJgagSgUQgSgSgPgCIgkgEIg6gLQg0gJgeApQgPATgFAXQAegpAygQQAUgFATAAQAoAAAlAag");
	this.shape_9.setTransform(5.2,4.1,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.6,-11.8,31.7,39.2);
p.frameBounds = [rect];


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARRCWQgkgYgPgvIBkgKQADAOANAIQANAJAPgBQAVABAOgNQAOgNAAgTQAAgWgLgNQgLgOgWAAQgfAAgJATIhegEIAii+IDYAAIAABSIiTAAIgLAzQAPgLATgEQAPgEAWABQAxAAAgAcQAhAbAAAxQAABBgvAgQgnAbhBAAQg3AAgjgYgAMRCWQgkgYgNgvIBkgKQACAOAOAIQAMAJAQgBQAVABAOgNQANgNgBgTQAAgWgKgNQgLgOgWAAQgeAAgKATIhegEIAhi+IDZAAIAABSIiSAAIgLAzQAOgLATgEQAPgEAVABQAyAAAgAcQAhAbAAAxQAABBgvAgQgnAbhBAAQg3AAgkgYgAEOB4QghgtAAhOQAAhXAsgsQAngnBAAAQBDAAAmArQAoAsAABSQAABPggAtQglA2hMAAQhNAAglg2gAFWg8QgFAWgBAnQAAAwAKAXQALAcAbgBQAtAAABhjQgBhjguABQgeAAgLAmgAgwB4QgggtAAhOQAAhXAsgsQAlgnA/AAQBEAAAmArQAoAsAABSQAABPggAtQglA2hNAAQhKAAgmg2gAAYg8QgHAWAAAnQAAAwAKAXQALAcAagBQAuAAAAhjQABhjgwABQgdAAgKAmgAoVCWQgkgYgOgvIBkgKQADAOANAIQAMAJAQgBQAVABAOgNQANgNAAgTQAAgWgLgNQgLgOgVAAQgfAAgKATIhdgEIAhi+IDYAAIAABSIiSAAIgLAzQAPgLASgEQAPgEAWABQAxAAAhAcQAgAbAAAxQAABBguAgQgoAbhAAAQg4AAgjgYgAyZCEQgrgsAAhYQAAhPAnguQAngwBGAAQA1AAAiATQApAWAJAvIhcAGQgHgbghAAQgbAAgNAXQgMAUAAAjQAUgNASgGQAQgFAZAAQA3AAAgAkQAbAeAAApQAAA7gnAfQgkAdg8AAQhMAAgogqgAxQAZQgLANAAAVQAAASAOANQANANASAAQAWAAAMgNQAKgMABgWQgBgUgLgMQgMgNgTAAQgYAAgMAOgArqCnIAAhGIibAAIAAhQICdi6IBdAAIAAC/IAqAAIAABLIgqAAIAABGgAs6AWIBQAAIAAhlgA1BCaIAAggIAWAAIAAANIA7AAIAAgNIAWAAIAAAggA0QBoIgugfIAAgbIAvAAIAAgKIATAAIAAAKIANAAIAAATIgNAAIAAAngA0PBUIAAgTIgdAAgAI3BIIAAg3ICGAAIAAA3gAj7BIIAAg3ICGAAIAAA3gA06AWQgGgHgBgPQAAgJADgGQACgGAFgFQAFgEAIgDQAIgCALAAQAVAAALAJQAKAHAAASQAAAcgZACIAAgWQADAAABgCIABgFQAAgHgDgCQgEgEgHgBIADAIQACAEAAACQAAAOgHAIQgGAIgOgBQgNABgIgIgA0sgBQgBAIAIABQAEgBACgCQACgDAAgDQAAgLgIAAQgIAAABALgA0JhAQAHAAAAgMQAAgMgJAAQgJABAAALQAAAFADAGIAAAVIgtgGIAAg4IATAAIAAArIAJABIgDgJIgBgIQABgPAGgIQAHgIANABQAPgBAHAJQAIAJAAAQIgBAPQgDAGgDAEQgEAFgFACQgFACgHAAgAzwiHIAAgOIg7AAIAAAOIgWAAIAAghIBnAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.6,-17.4,269.3,34.9);
p.frameBounds = [rect];


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.setTransform(-163,-111,1.165,1.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163,-111,349.4,233);
p.frameBounds = [rect];


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.setTransform(-158,-110,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158,-110,317.9,230.7);
p.frameBounds = [rect];


(lib.metro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11113").s().p("AggAFIgZAwIgnAAIA/hxIAhA8IAig8IA/BxIgnAAIgZgwIghA4g");
	this.shape.setTransform(-97.2,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332E2B").s().p("AjZBOIAAgcIhdAAIAAh8IApAAIAABeIAoAAIAAheIAoAAIAABeIAMAAIAAA6gAL4AjQgSgRAAgdQAAgeASgSQASgSAaAAQAdAAAQANQAQANADAZIgnAAQgBgKgGgFQgGgGgJAAQgLAAgGAKQgHAJAAASQAAAOAFAHQAGALAOAAQATAAACgVIAoAAQgDAYgQAOQgQAOgZAAQggAAgRgSgAJyAjQgSgRAAgdQAAgeASgSQASgSAbAAQAcAAAQANQAQANADAZIgoAAQAAgKgGgFQgGgGgKAAQgLAAgGAKQgGAJAAASQAAAOAFAHQAGALAOAAQASAAADgVIAoAAQgEAYgQAOQgQAOgYAAQgfAAgSgSgAHlAjQgSgSAAgdQAAgeASgRQATgSAdAAQAgAAASAUQAQASAAAbQAAAdgTASQgSASgdAAQgeAAgSgSgAIBgjQgFAJAAAOQAAAMAFAKQAGAMAOAAQANAAAGgKQAGgJAAgPQAAgOgGgKQgHgLgNAAQgMAAgHAMgAgNAjQgSgSAAgdQAAgeASgRQAQgSAeAAQAgAAASAUQAQASAAAbQAAAdgTASQgSASgdAAQgeAAgQgSgAANgjQgFAJAAAOQAAAMAFAKQAHAMANAAQAMAAAHgKQAGgJAAgPQAAgOgGgKQgHgLgMAAQgNAAgHAMgANyAyIAAh8IBmAAIAAAdIg9AAIAAASIA0AAIAAAbIg0AAIAAAUIA/AAIAAAegAEXAyIAAh8IAoAAIAABeIAbAAIAAheIAnAAIAABeIAcAAIAAheIAnAAIAAB8gABxAyIAAh8IBnAAIAAAdIg+AAIAAASIA0AAIAAAbIg0AAIAAAUIBAAAIAAAegAhUAyIgegyIgKAKIAAAoIgpAAIAAh8IApAAIAAApIAkgpIAwAAIguAvIAzBNgAlxAyIAChGIgtBGIgnAAIAAh8IAoAAIgDBIIAuhIIAnAAIAAB8gAoAAyIAAgzIgnAAIAAAzIgpAAIAAh8IApAAIAAAsIAnAAIAAgsIApAAIAAB8gAqrAyIAAhfIglAAIAAgdIBzAAIAAAdIglAAIAABfgAsGAyIAAgsIgNAAIgTAsIgsAAIAagyQgJgBgHgLQgHgLAAgLQAAgTAMgKQAOgLAbAAIA8AAIAAB8gAskgpQgEADAAAGQAAAHAFADQAEACAKAAIAPAAIAAgZIgSAAQgHAAgFAEgAuJAyIAAhfIgnAAIAABfIgpAAIAAh8IB5AAIAAB8g");
	this.shape_1.setTransform(14.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-7.8,220,15.8);
p.frameBounds = [rect];


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxZCdIAAk5MAizAAAIAAE5gADGBxIAaAAIAAhEQANAUAcAAQAkAAARgZQAOgUAAgbQAAgegRgSQgRgTgdAAQgTAAgMAIQgHAEgJALIAAgTIgYAAgAlxBxIAaAAIAAhEQANAUAcAAQAjAAASgZQAOgUAAgbQAAgegQgSQgSgTgdAAQgTAAgMAIQgHAEgJALIAAgTIgYAAgAJvA9IAAAnIAYAAIAAg6IgRAAIAAhwIhsAAIAAArQAAAqgRAbIgRAAIAAA6IAYAAIAAgngAFqgzQgRATAAAcQAAAbARATQAUAXAiAAQAjAAAUgXQARgTAAgbQAAgcgRgTQgUgXgjAAQgiAAgUAXgAA3gzQgRATAAAcQAAAbARATQAUAXAiAAQAjAAATgXQARgTAAgbQAAgcgRgTQgTgXgjAAQgiAAgUAXgAjHgzQgSATAAAcQAAAbASATQATAXAjAAQAiAAAUgXQAQgTAAgbQAAgcgQgTQgUgXgiAAQgjAAgTAXgAg2A9IAaAAIAAhwIBIAAIAAgTIhiAAgAmFA9Ig+hRIA6gyIghAAIhCA6IAAg6IgaAAIAACDIAaAAIAAgyIAXgQIAxBCIAfAAgApFgkIAABhIAaAAIAAiDIgbAAIhLBiIgBAAIAAhiIgaAAIAACDIAbAAIBLhhgArpgrIgCBoIAZAAIAAiDIgjAAIgwBmIgwhmIgjAAIAACDIAZAAIgChoIACAAIAwBoIATAAIAxhog");
	this.shape.setTransform(-34.3,23,0.559,0.559);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAvQAPgcgBgpIAAgYIA4AAIAABdg");
	this.shape_1.setTransform(-2.5,22.7,0.559,0.559);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAgQgJgOAAgSQAAgRAJgOQAMgSAXAAQAYAAAMASQAIAOAAARQAAASgIAOQgMASgYAAQgXAAgMgSg");
	this.shape_2.setTransform(-28.1,22.7,0.559,0.559);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAgQgIgOAAgSQAAgRAIgOQAMgSAXAAQAYAAAMASQAIAOAAARQAAASgIAOQgMASgYAAQgXAAgMgSg");
	this.shape_3.setTransform(-42.5,22.7,0.559,0.559);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAjQgKgNAAgWQAAgxAnAAQAZAAAKAUQAFAMABAWQAAAYgPAMQgLAJgPAAQgTAAgKgPg");
	this.shape_4.setTransform(-51.3,22.7,0.559,0.559);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAgQgIgOAAgSQAAgRAIgOQAMgSAXAAQAYAAAMASQAIAOAAARQAAASgIAOQgMASgYAAQgXAAgMgSg");
	this.shape_5.setTransform(-11,22.7,0.559,0.559);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAjQgKgNAAgWQAAgxAoAAQAZAAAIAUQAHAMAAAWQgBAYgOAMQgKAJgQAAQgSAAgLgPg");
	this.shape_6.setTransform(-19.5,22.7,0.559,0.559);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#21A642").s().p("AibjCIGFBOIipBwIhrgWIgXBsIinBxg");
	this.shape_7.setTransform(-115.3,-8.4,0.559,0.559);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#21A642").s().p("AjGjFIGMAAIiPCPIhuAAIAABtIiPCPg");
	this.shape_8.setTransform(-123.7,-19.7,0.559,0.559);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#21A642").s().p("ABBBSIgVhsIhsAWIiohwIGEhOIBOGFg");
	this.shape_9.setTransform(115.4,-8.4,0.559,0.559);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#21A642").s().p("AA4A3IAAhtIhvAAIiPiPIGNAAIAAGLg");
	this.shape_10.setTransform(123.7,-19.7,0.559,0.559);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjxDnQhghTAAiPQAAiMBfhYQBehVCPgBQCgABBcBiQBbBhAAClIm7AAQAAAzAjAhQAhAfAuAAQAdAAAWgMQAYgNAMgaIDfAAQgcBlhiAyQhTAqhxABQiSgBhchOgAhMiLQgdAbAAAvIDSAAQAAgogfgfQgfgegpAAQgygBgcAcg");
	this.shape_11.setTransform(9.1,-14.4,0.559,0.559);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlTEcIAAiaQAVAEAUAAQAkAAAMgmQALglAAhqIAAj6IJDAAIAAJJIjpAAIAAmfIiAAAIAACQQAACTg2BGQgzBAhjAAQhJAAgpgOg");
	this.shape_12.setTransform(-31.7,-14.1,0.559,0.559);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ak2ElIAApJIFiAAQB0AAA+AjQBDAmAABNQAAA2gkAiQgfAfgvAGQA7APAfAYQAuAlAABDQAABVhIArQhAAnhsAAgAhWCeIBWAAQAuAAASgIQAXgKAAgfQAAgfgWgMQgUgLgtAAIhWAAgAhWg9IBWAAQAmAAAQgLQAQgKAAgYQAAgdgRgMQgPgLgmAAIhWAAg");
	this.shape_13.setTransform(-79.2,-14.4,0.559,0.559);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjnDnQhhhTAAiPQAAiRBfhWQBbhSCSAAQCAAABVA3QBgA/AMB6IjsAAQAAgjgXgYQgZgYglAAQhkAAABCdQgBBEAaAmQAaApAwAAQBOgBAMhXIDrAAQgOB+hfA/QhUA3iEAAQiQAAhbhOg");
	this.shape_14.setTransform(49.1,-14.3,0.559,0.559);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Aj7GEIAAihQBMAAAXgHQAZgIAAgbQAAgJgbhNQgnhviJl7IDqAAIBlFpIBmlpIDgAAIi8IhQgzCUgpAnQg1AziSAAQg7AAgsgEg");
	this.shape_15.setTransform(84,-8.8,0.559,0.559);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.8,-31.7,269.7,63.5);
p.frameBounds = [rect];


(lib.hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BD0B23").ss(3,0,1).p("ABfClIBeiPQAGgLgCgLQgDgLgKgHIjpiaQgKgHgMADQgMACgHAKIheCPQgHALADAKQACAMALAHIDoCaQAKAHANgDQAMgCAHgKg");
	this.shape.setTransform(70.8,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1CtIjoiaQgLgHgCgMQgDgKAHgLIBeiPQAHgKAMgCQAMgDAKAHIDpCaQAKAHADALQACALgGALIheCPQgHAKgMACIgHABQgIAAgIgFg");
	this.shape_1.setTransform(70.8,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BD0B23").ss(3,0,1).p("ACThnQgsA+hSAbQgXAIgaAEIgVACIAGBIQAGA7gwAVQgKAFgKgGQgJgFgCgLIgaiNQgEgQAKgQIAeguIAlgmQAwglA0AG");
	this.shape_2.setTransform(52,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhqCXQgKgFgCgLIgaiNQgDgQAJgQIAfguIAlgmQAwglA0AGIB0AyQgtA+hRAbQgYAIgaAEIgVACIAHBIQAGA7gxAVQgEADgFAAQgFAAgFgEg");
	this.shape_3.setTransform(52.1,35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BD0B23").ss(3,0,1).p("AAPAtIAigtQAJgOgDgPQgEgQgNgJQgOgJgPADQgOAEgJAMIgiAuQgJANAEAQQADAQANAJQAOAIAQgDQANgDAJgNg");
	this.shape_4.setTransform(46.4,71.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA4QgNgKgDgPQgEgQAJgNIAigtQAJgOAOgDQAPgDAOAIQANAKAEAPQADAQgJANIgiAuQgJANgNADIgJABQgLAAgKgGg");
	this.shape_5.setTransform(46.4,71.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BD0B23").ss(3,0,1).p("AADBBIBBhSQAKgPgEgRQgDgSgPgKQgPgKgRAEQgSAEgIAPIhBBSQgKAPAEARQADATAPAJQAPAKASgEQASgEAHgPg");
	this.shape_6.setTransform(38.9,67.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BOQgPgJgDgTQgEgRAKgPIBBhTQAIgPASgDQARgEAPAKQAPAKADARQAEASgKAPIhBBSQgHAPgSAEIgKABQgMAAgLgHg");
	this.shape_7.setTransform(38.9,67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BD0B23").ss(3,0,1).p("AATAsIAhgpQAKgNgEgSQgDgRgPgKQgPgKgRAEQgQADgKAPIgiAqQgJANADARQAEASAPAKQAPAKARgEQAQgEAKgPg");
	this.shape_8.setTransform(24.6,57.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA4QgPgJgEgSQgDgSAJgMIAigqQAKgPAQgEQARgDAPAKQAPAJADASQAEASgKAMIghAqQgKAPgQAEIgJABQgMAAgLgIg");
	this.shape_9.setTransform(24.6,57.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BD0B23").ss(3,0,1).p("AAEBCIA/hUQAKgPgDgRQgEgSgPgKQgPgKgRAEQgSAEgIAPIg/BTQgKAPAEASQADARAPAKQAPAKARgDQASgEAIgPg");
	this.shape_10.setTransform(32.1,61.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BPQgPgKgDgSQgEgSAKgPIA/hTQAIgPASgDQARgEAPAJQAPALAEARQADARgKAPIg/BUQgIAPgSAEIgKABQgMAAgKgHg");
	this.shape_11.setTransform(32.1,61.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BD0B23").ss(3,0,1).p("AgVC9IiPheQgKgHgCgMQgDgMAHgKICajpQAHgKALgDQALgCAKAGICPBfQALAGACANQADAMgHAKIibDoQgHALgLACQgLADgKgHg");
	this.shape_12.setTransform(17.8,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVC9IiPheQgKgHgCgMQgDgMAHgKICajpQAHgKALgDQALgCAKAGICPBfQALAGACANQADAMgHAKIibDoQgHALgLACIgFABQgIAAgIgFg");
	this.shape_13.setTransform(17.8,28.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BD0B23").ss(3,0,1).p("ACSgGIBCAnQAQAKASgDQATgEAKgQQAKgPgDgRQgEgSgQgLIkTizQg4glhCANQhDAOglA4IgPAYQglA4ANBCQAOBBA4AlID+CnQAOAKARgEQAQgDAKgOQAJgOgEgRQgDgQgOgJIgjgZIA8AoQAQAKASgDQATgEAKgQQAKgOgDgSQgDgRgNgLQhTg7gOgLIBsBNQAQAKASgDQASgEAKgQQALgPgEgTQgEgSgPgLIhVg1IgggVAA4CVIgPgKIgPgKIgXgQ");
	this.shape_14.setTransform(49.6,49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuDxIj+inQg4glgOhBQgNhCAlg4IAPgYQAlg4BDgOQBCgNA4AlIETCzQAQALAEASQADARgKAPQgKAQgTAEQgSADgQgKIhCgnIgggVIAgAVIBVA1QAPALAEASQAEATgLAPQgKAQgSAEQgSADgQgKIhshNQAOALBTA7QANALADARQADASgKAOQgKAQgTAEQgSADgQgKIg8goIAjAZQAOAJADAQQAEARgJAOQgKAOgQADIgJABQgMAAgKgHgAAaCBIAPAKIAPAKIgPgKIgPgKIgXgQg");
	this.shape_15.setTransform(49.6,49);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BD0B23").ss(3,0,1).p("AizhGIArhCQAlg4BDgOQBBgOA4AlIAXAQQA4AkAOBDQAOBAglA5IhJBuQghAzg1gIQgjgGhEgsIgKgKIgNgFQgngagUgSg");
	this.shape_16.setTransform(55.8,41.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAADSQgjgGhEgsIgKgKIgNgFQgngagUgSIAGirIArhCQAlg4BDgOQBBgOA4AlIAXAQQA4AkAOBDQAOBAglA5IhJBuQgdAsgsAAIgNgBg");
	this.shape_17.setTransform(55.8,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,93.2,80.5);
p.frameBounds = [rect];


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,0,0)").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,300,600)];


(lib.badge_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAvIASgkIgngDIAEgeIAmAGIgHgmIAbgGIAIAlIAhgUIAQAaIgkASIAhAaIgVAYIgfgdIgOAng");
	this.shape.setTransform(232.8,72.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ahxg1IA9gNIAUBvIAuh9IA8gMIAoDCIg+AMIgThxIguB/Ig8AMgAhNh3IAWgEQADAKAKACQAHABAMgCQAXgFAAgSIATgEQAEAUgNAOQgKANgTAFQgJABgHAAQghAAgJghg");
	this.shape_1.setTransform(215.5,78);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhkhQICdggIAKAtIheAUIAGAcIBPgRIAJAsIhPAQIAGAfIBigUIAJAtIihAhg");
	this.shape_2.setTransform(195.4,84.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYAvIA2gLQAJAcAdgHQAQgDAIgIQAHgHgCgJQgDgMgLgDQgJgCgQAEIgFABIgIgiIAGgBQAOgDAGgFQAIgHgDgLQgBgIgJgEQgHgDgMADQgYAFAAAUIg1AKQgEggAWgXQAUgUAigHQAigHAbALQAaALAGAZQADAOgGAOQgGAMgLAJQASADAJAIQAMAHAEATQAFAcgTAVQgUAUgsAJQgQAEgMAAQg7AAgRg7g");
	this.shape_3.setTransform(176.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBwIgJgsQAIABAFgBQAKgCADgMIhkh+IBIgOIAtBGIAPhTIBFgOIgpClQgHAdgMAOQgKANgTAEQgIACgHAAIgOgCg");
	this.shape_4.setTransform(154.3,91.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfhVIBegTQAngJAZAOQAYANAHAfQAOBChSARIgeAGIAKA9Ig+ANgAgEg4IgSADIAJAsIAYgGQAagFgEgXQgDgPgUAAQgHAAgHACg");
	this.shape_5.setTransform(135.6,97);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhzAxIAQgDQALgmgNg/IgLgzICiggIAeCTIARgDIATBaIg+AMIgJgtIhZATIAJAtIg+ANgAgqhJIAFAWQALA2gKAeIA0gLIgThmg");
	this.shape_6.setTransform(117.3,103.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0AeQgPgDgPgOQgOgNgEgQQgGgdARgVQASgVAqgJIBcgSIAoDBIhAANIgOhEIgTADIgOBKIhEAPgAgQgzQgaAFAEAVQAEATAegHIAUgEIgIgng");
	this.shape_7.setTransform(86,106.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhqBIQAFABAKgCQALgCACgJQADgMgGggIgVhiICqgjIAnDBIhAANIgeiTIgsAJIALA1QAMA4gNAbQgKAWgeAGQgQADgUAAg");
	this.shape_8.setTransform(65.2,111.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhzAxIAQgDQAGgVgBgZQgBgVgHgiIgKgyICigiIAeCUIARgDIATBaIg+ANIgJgtIhZASIAJAtIg9ANgAgphIIAEAVQAMA3gLAdIA0gLIgThmg");
	this.shape_9.setTransform(44.3,117.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0AeQgPgDgPgOQgOgNgEgQQgGgdARgVQATgVApgJIBcgSIAoDBIhAAMIgOhDIgTADIgOBKIhEAPgAgQgzQgaAGAEAUQAEASAegGIAUgEIgHgng");
	this.shape_10.setTransform(189.4,52.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhxhNIA9gMIAUBuIAuh8IA8gMIAoDBIg+ANIgThvIguB8Ig8AMg");
	this.shape_11.setTransform(168,56.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhnhVIBegTQAjgHAVAGQAZAIAGAbQAFAagWAVQAQABALALQALAKADAOQAMA8hUAQIhdAUgAADAKIgTAEIAIAkIAagGQAbgFgDgSQgDgMgKgCIgEAAQgIAAgOADgAgHg5IgWAFIAGAgIAZgFQAWgFgEgQQgCgLgIgBIgEgBIgNACg");
	this.shape_12.setTransform(146.6,61.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5BaQgigWgKgyQgKgrAXgiQAXghAtgJQAwgKAiAZQAfAXAJArQAKAugYAiQgXAhgtAJQgOADgKAAQgeAAgXgPgAgKg2QgUAEgGAUQgGAQAFAUQAEAXALANQAOARASgFQAngHgLg3QgFgWgMgNQgKgMgNAAIgIABg");
	this.shape_13.setTransform(125.7,65.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhhB2IgJguQAFABAKgCQALgCACgJQADgMgGggIgVhjICpgiIAoDBIhAANIgeiUIgsAJIALA2QAMA4gNAaQgKAXgeAGQgRADgPAAIgEAAg");
	this.shape_14.setTransform(104.4,70.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3BZQghgVgKgwQgJgtAWgiQAWghAqgJQAqgJAdAQQAdAQAMAlIg9AMQgEgOgLgHQgLgHgNADQgkAIALA3QALA1AlgIQAcgGgCgiIA9gMQAEAngVAaQgVAbgnAIQgOADgLAAQgfAAgXgQg");
	this.shape_15.setTransform(82.3,74.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSBwIgJgsQAJABAGgBQAJgCADgMIhkh9IBIgPIAsBHIAQhUIBFgOIgqCmQgGAcgMAOQgKANgTAEQgIACgGAAIgQgCg");
	this.shape_16.setTransform(59.6,78);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhkhQICdghIAKAuIheAUIAGAcIBPgRIAJAsIhPAQIAGAfIBigUIAJAtIihAig");
	this.shape_17.setTransform(229.5,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiYhFIBAgNIAOBEIAegGQAmgHAXALQAZANAHAdQAGAfgTAVQgRAUgmAHIhdATgAgwAaIgQADIAHAkIAXgEQAOgDAGgFQAGgFgCgLQgCgLgKgCIgGAAQgHAAgNACgAAxhuIBAgNIAnDBIhAANg");
	this.shape_18.setTransform(204.9,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhxhNIBBgNIANBEIA7gMIgOhEIBAgNIAoDBIhAANIgRhRIg7AMIARBRIhAANg");
	this.shape_19.setTransform(179,21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhkhaIBAgNIAOBEIAcgGQAmgHAYAMQAZAMAHAeQAGAegSAVQgSAUgnAIIhcATgAABAGIgOADIAHAkIAWgFQAcgFgEgSQgDgMgKgCIgEAAQgIAAgOADg");
	this.shape_20.setTransform(158,26.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhqBJQAEAAALgCQAKgCADgJQADgMgHggIgUhjICqgiIAnDBIhAANIgeiTIgsAJIALA1QALA4gMAaQgKAXgfAGQgQADgTAAg");
	this.shape_21.setTransform(137.9,30.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhHhhIBBgNIBsCzIhAANIgNgYIg9ANIgCAbIg/ANgAggAbIAngHIghhBg");
	this.shape_22.setTransform(117.8,35.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhxhNIA9gMIAUBuIAuh8IA8gMIAoDBIg+ANIgThvIguB8Ig8AMg");
	this.shape_23.setTransform(94.7,38.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA4BPIiOAdIgojBIBAgNIAfCUIA6gMIgciUIA+gNIAeCUIARgEIATBbIg+AMg");
	this.shape_24.setTransform(73.5,44);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhkhQICeggIAJAtIhdAUIAFAcIBPgRIAJAsIhPAQIAHAfIBhgUIAJAtIihAhg");
	this.shape_25.setTransform(52.1,47.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhxhNIC7gmIAnDBIhAANIgeiUIg7ANIAfCTIhAANg");
	this.shape_26.setTransform(31.5,51.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag3BZQghgVgKgwQgJgtAWgiQAWghAqgJQAqgJAdAQQAdAQAMAlIg9AMQgJgfgeAGQgRAEgHAQQgGARAFAaQALA1AlgIQAcgGgCgiIA9gMQAEAmgVAbQgVAbgnAIQgOADgLAAQgfAAgXgQg");
	this.shape_27.setTransform(10.2,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,239.6,131.9);
p.frameBounds = [rect];


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak4YIQksg9kBirQkBiqiuj9IAAAAQizkHhAk5Qg/k5A/k4QA9ksCqkBQCrkBD9itIAAgBQEGizE6g/QE4hAE4A/QEtA9EBCqIAAAAQEBCrCuD9QCzEHBAE5QA/E5g/E4Qg9EsiqEBIAAABQirEAj9CuQkHCzk6BAQidAgibAAQicAAicgggAszTWIAAAAQDyCgEbA6QEmA8Emg8QEog8D4iqIAAAAQDvijChjzIAAABQChjzA5kbQA8kng8kmQg8koiqj3IAAAAQijjvjyigQjzihkcg6Qkmg8kmA8QkoA8j3CqQjvCjihDzIAAgBQigDzg6EbQg8EmA8EnQA9EoCpD3IAAAAQCjDvDzChg");
	this.shape.setTransform(157.6,157.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD0B23").s().p("AkmWwQkbg6jyigIAAAAQjzihijjvIAAAAQipj3g9koQg8knA8kmQA6kbCgjzIAAABQChjzDvijQD3iqEog8QEmg8EmA8QEcA6DzChQDyCgCjDvIAAAAQCqD3A8EoQA8Emg8EnQg5EbihDzIAAgBQihDzjvCjIAAAAQj4CqkoA8QiUAeiSAAQiTAAiTgeg");
	this.shape_1.setTransform(157.6,157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,315.2,315.2);
p.frameBounds = [rect];


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fr3_t2
	this.instance = new lib.t4();
	this.instance.setTransform(440.3,151.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(255).to({_off:false},0).wait(1).to({regX:2.2,regY:3.8,x:341.8,y:153.8},0).wait(1).to({x:281.1,y:152.8},0).wait(1).to({x:238.4,y:152.1},0).wait(1).to({x:206.9,y:151.6},0).wait(1).to({x:183.7,y:151.2},0).wait(1).to({x:167.3,y:151},0).wait(1).to({x:157.3,y:150.8},0).wait(1).to({regX:0,regY:0,x:151.6,y:147},0).wait(53).to({x:-142.3},8,cjs.Ease.get(-1)).wait(1));

	// fr3_t1
	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(439.4,124);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(252).to({_off:false},0).wait(1).to({regX:2.5,regY:-13.7,x:341.2,y:110.3},0).wait(1).to({x:280.5},0).wait(1).to({x:237.8},0).wait(1).to({x:206.3},0).wait(1).to({x:183.1},0).wait(1).to({x:166.7},0).wait(1).to({x:156.7},0).wait(1).to({regX:0,regY:0,x:150.7,y:124},0).wait(50).to({x:-143.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// fr2_t5
	this.instance_2 = new lib.t2_5();
	this.instance_2.setTransform(439.6,134.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({_off:false},0).wait(1).to({regX:1.2,regY:278.9,x:340.1,y:412.9},0).wait(1).to({x:279.4,y:412.4},0).wait(1).to({x:236.7,y:412.1},0).wait(1).to({x:205.2,y:411.8},0).wait(1).to({x:182,y:411.6},0).wait(1).to({x:165.6,y:411.5},0).wait(1).to({x:155.6,y:411.4},0).wait(1).to({regX:0,regY:0,x:150.9,y:132.5},0).wait(127).to({x:-174.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(68));

	// fr2_t4
	this.instance_3 = new lib.t2_4();
	this.instance_3.setTransform(439.6,134.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).wait(1).to({regX:1.3,regY:305.7,x:340.2,y:439.7},0).wait(1).to({x:279.5,y:439.2},0).wait(1).to({x:236.8,y:438.9},0).wait(1).to({x:205.3,y:438.6},0).wait(1).to({x:182.1,y:438.4},0).wait(1).to({x:165.7,y:438.3},0).wait(1).to({x:155.7,y:438.2},0).wait(1).to({regX:0,regY:0,x:150.9,y:132.5},0).wait(126).to({x:-174.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(72));

	// fr2_t3
	this.instance_4 = new lib.t2_3();
	this.instance_4.setTransform(439.6,134.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({_off:false},0).wait(1).to({regX:2.5,regY:26.6,x:341.4,y:160.6},0).wait(1).to({x:280.7,y:160.1},0).wait(1).to({x:238,y:159.8},0).wait(1).to({x:206.5,y:159.5},0).wait(1).to({x:183.3,y:159.3},0).wait(1).to({x:166.9,y:159.2},0).wait(1).to({x:156.9,y:159.1},0).wait(1).to({regX:0,regY:0,x:150.9,y:132.5},0).wait(125).to({x:-174.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(76));

	// fr2_t2
	this.instance_5 = new lib.t2_2();
	this.instance_5.setTransform(439.6,134.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).wait(1).to({regX:-6.9,regY:-0.6,x:332,y:133.4},0).wait(1).to({x:271.3,y:132.9},0).wait(1).to({x:228.6,y:132.6},0).wait(1).to({x:197.1,y:132.3},0).wait(1).to({x:173.9,y:132.1},0).wait(1).to({x:157.5,y:132},0).wait(1).to({x:147.5,y:131.9},0).wait(1).to({regX:0,regY:0,x:150.9,y:132.5},0).wait(125).to({x:-174.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(79));

	// fr2_t1
	this.instance_6 = new lib.t2_1();
	this.instance_6.setTransform(439.6,134.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(101).to({_off:false},0).wait(1).to({regX:-20.5,regY:-25.9,x:318.4,y:108.1},0).wait(1).to({x:257.7,y:107.6},0).wait(1).to({x:215,y:107.3},0).wait(1).to({x:183.5,y:107},0).wait(1).to({x:160.3,y:106.8},0).wait(1).to({x:143.9,y:106.7},0).wait(1).to({x:133.9,y:106.6},0).wait(1).to({regX:0,regY:0,x:150.9,y:132.5},0).wait(125).to({x:-174.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(82));

	// fr1_t2
	this.instance_7 = new lib.t1_1();
	this.instance_7.setTransform(439.8,150.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(1).to({regX:-20.4,regY:6.8,x:318.7,y:155.6},0).wait(1).to({x:258,y:154.6},0).wait(1).to({x:215.3,y:153.9},0).wait(1).to({x:183.8,y:153.4},0).wait(1).to({x:160.6,y:153},0).wait(1).to({x:144.2,y:152.8},0).wait(1).to({x:134.2,y:152.6},0).wait(1).to({regX:0,regY:0,x:151.1,y:145.8},0).wait(74).to({x:-148.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(218));

	// fr1_t2
	this.instance_8 = new lib.t1();
	this.instance_8.setTransform(439.8,150.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({regX:-0.1,regY:-34.4,x:339,y:114.4},0).wait(1).to({x:278.3,y:113.4},0).wait(1).to({x:235.6,y:112.7},0).wait(1).to({x:204.1,y:112.2},0).wait(1).to({x:180.9,y:111.8},0).wait(1).to({x:164.5,y:111.6},0).wait(1).to({x:154.5,y:111.4},0).wait(1).to({regX:0,regY:0,x:151.1,y:145.8},0).wait(76).to({x:-148.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(296.7,98.8,294,43), new cjs.Rectangle(216,98.2,249,36), new cjs.Rectangle(158.4,97.2,244,36), new cjs.Rectangle(117.6,96.5,240,37), new cjs.Rectangle(88.1,95.9,236,37), new cjs.Rectangle(65.9,95.6,486.8,87), new cjs.Rectangle(50.6,95.3,377.3,80.6), new cjs.Rectangle(40.6,95.1,322.7,79.8), new cjs.Rectangle(37,95.1,282.5,78.1), new cjs.Rectangle(37,95.1,249,78.6), new cjs.Rectangle(37,95.1,231,77.2), new cjs.Rectangle(37,95.1,231,77.9), new cjs.Rectangle(37,95.1,231,77.8), rect=new cjs.Rectangle(34.9,95.1,233.1,77.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(34.9,94.1,238.1,78.7), new cjs.Rectangle(32.3,95.1,232,77.7), new cjs.Rectangle(17.3,95.1,234,77.7), new cjs.Rectangle(-9.1,95.1,245.1,82.7), new cjs.Rectangle(-45.9,95.1,271.2,77.7), new cjs.Rectangle(-93.1,95.1,305.3,77.7), new cjs.Rectangle(-150.6,95.1,681.1,77.7), new cjs.Rectangle(-218.5,95.1,625.3,77.7), new cjs.Rectangle(-297.8,95.1,640,77.7), new cjs.Rectangle(-152.7,97.9,711.9,74.9), new cjs.Rectangle(-220.6,97.6,655.1,75.2), new cjs.Rectangle(-299.9,97.5,671.8,75.3), new cjs.Rectangle(69.3,97.3,507.1,83.1), new cjs.Rectangle(59.3,97.3,393.4,77.4), new cjs.Rectangle(55.8,97.2,332.3,76), new cjs.Rectangle(55.8,97.2,555.7,362.7), new cjs.Rectangle(55.8,97.2,431,355.9), new cjs.Rectangle(54.5,97.2,368.7,355.5), new cjs.Rectangle(54.5,97.2,559.1,355.1), new cjs.Rectangle(54.5,97.2,434.4,354.9), new cjs.Rectangle(47.6,97.2,377.6,355.7), new cjs.Rectangle(32.3,97.2,348.2,354.6), new cjs.Rectangle(22.3,97.2,325.6,354.5), new cjs.Rectangle(18.8,97.2,304,354.5), new cjs.Rectangle(18.8,97.2,286.7,354.5), new cjs.Rectangle(16.4,97.2,279,354.5), rect=new cjs.Rectangle(12.9,97.2,279,354.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(12.9,96.2,279,355.5), rect=new cjs.Rectangle(12.9,97.2,279,354.5), rect, new cjs.Rectangle(5,97.2,286.9,354.5), new cjs.Rectangle(-34.7,97.2,326.6,354.5), new cjs.Rectangle(-85.5,97.2,377.4,354.5), new cjs.Rectangle(-148.5,97.2,440.4,354.5), new cjs.Rectangle(-222.7,97.2,514.6,354.5), new cjs.Rectangle(-308.1,97.2,600,354.5), new cjs.Rectangle(-149.8,118.2,441.7,333.5), new cjs.Rectangle(-224,118.2,518.8,338.5), new cjs.Rectangle(-309.4,118.2,601.3,333.5), new cjs.Rectangle(-148.6,149.2,440.5,302.5), new cjs.Rectangle(-222.8,149.2,514.7,302.5), new cjs.Rectangle(-308.1,149.2,605,302.5), new cjs.Rectangle(-122.5,394.5,409.3,57.2), new cjs.Rectangle(-185.5,394.5,458.1,57.2), new cjs.Rectangle(-259.7,394.5,509.8,57.2), new cjs.Rectangle(-345.1,96.3,905.8,355.3), new cjs.Rectangle(-128.4,97.3,563.5,335.2), new cjs.Rectangle(-191.4,97.3,562.8,335.2), new cjs.Rectangle(-265.6,97.3,885.1,335.2), new cjs.Rectangle(-351,97.3,845.7,335.2), new cjs.Rectangle(100.9,97.3,330.2,72.8), new cjs.Rectangle(85.6,97.3,300.8,72.1), new cjs.Rectangle(64.8,97.3,289,72.5), new cjs.Rectangle(42.6,97.3,286,72.1), new cjs.Rectangle(27.3,97.3,284,70.9), new cjs.Rectangle(17.3,97.3,284,70.7), rect=new cjs.Rectangle(13.7,97.3,284,71.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(13.7,96.3,284,72.7), rect=new cjs.Rectangle(13.7,97.3,284,71.7), rect, new cjs.Rectangle(12,97.3,285.7,71.7), new cjs.Rectangle(-34.9,97.3,332.7,71.7), new cjs.Rectangle(-95.9,97.3,393.7,71.7), new cjs.Rectangle(-169.9,97.3,472.7,76.7), new cjs.Rectangle(-257.9,97.3,551,71.7), new cjs.Rectangle(-6.6,137,287,32), new cjs.Rectangle(-31.6,137,291,32), new cjs.Rectangle(-67.7,137,299,32), new cjs.Rectangle(-115.1,137,312,32), new cjs.Rectangle(-171.6,137,323,32), new cjs.Rectangle(-238.3,137,337,32), new cjs.Rectangle(-316.2,137,356,32)];


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hands
	this.instance = new lib.hands();
	this.instance.setTransform(-12.7,-50.9,0.077,0.077,0,0,0,44.9,38.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:45.1,regY:38.7,scaleX:0.08,scaleY:0.08,alpha:0.005},0).wait(1).to({scaleX:0.09,scaleY:0.09,alpha:0.02},0).wait(1).to({scaleX:0.12,scaleY:0.12,alpha:0.047},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.089},0).wait(1).to({scaleX:0.21,scaleY:0.21,y:-50.8,alpha:0.146},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.223},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-12.6,alpha:0.32},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-12.7,y:-50.7,alpha:0.439},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-12.6,alpha:0.574},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-50.6,alpha:0.714},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-12.7,alpha:0.838},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-12.6,alpha:0.931},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.984},0).wait(1).to({regX:45,regY:38.6,scaleX:0.95,scaleY:0.95,x:-12.8,y:-50.9,alpha:1},0).wait(1).to({regX:45.1,regY:38.7,scaleX:0.95,scaleY:0.95,x:-12.7,y:-50.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-12.6,y:-50.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-12.7},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-50.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-12.6,y:-50.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-12.7,y:-50.7},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({regX:45,regY:38.6,scaleX:0.6,scaleY:0.6,x:-12.8,y:-50.9},0).wait(1).to({regX:45.1,regY:38.7,scaleX:0.61,scaleY:0.61,x:-12.7,y:-50.8},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({regX:45,scaleX:0.79,scaleY:0.79,x:-12.8},0).wait(1).to({regX:45.1,scaleX:0.78,scaleY:0.78,x:-12.7},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-50.9},0).wait(45));

	// badge_txt
	this.instance_1 = new lib.badge_txt();
	this.instance_1.setTransform(3,22.6,0.047,0.047,0,0,0,119.7,66.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:119.8,regY:65.9,scaleX:0.05,scaleY:0.05,x:3.1,alpha:0.005},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:3,alpha:0.02},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:3.1,alpha:0.047},0).wait(1).to({scaleX:0.12,scaleY:0.12,y:22.5,alpha:0.089},0).wait(1).to({scaleX:0.17,scaleY:0.17,alpha:0.146},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.223},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.32},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.439},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:22.4,alpha:0.574},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.714},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:3.2,y:22.3,alpha:0.838},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:3.1,alpha:0.931},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:3.2,alpha:0.984},0).wait(1).to({regX:119.7,regY:65.8,scaleX:0.91,scaleY:0.91,x:3,y:22.6,alpha:1},0).wait(1).to({regX:119.8,regY:65.9,scaleX:0.9,scaleY:0.9,x:3.1,y:22.7},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:22.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:22.7},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.68,scaleY:0.68},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({regY:65.8,scaleX:0.64,scaleY:0.64,y:22.6},0).wait(1).to({regY:65.9,scaleX:0.64,scaleY:0.64,y:22.7},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:22.8},0).wait(1).to({regX:119.7,scaleX:0.75,scaleY:0.75,y:22.7},0).wait(1).to({regX:119.8,scaleX:0.75,scaleY:0.75,x:3.2},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:3.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:3,y:22.6},0).wait(38));

	// badge
	this.instance_2 = new lib.badge();
	this.instance_2.setTransform(348.5,-1,0.701,0.701,0,0,0,157.6,157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.7,x:346.6},0).wait(1).to({scaleX:0.7,x:340.8},0).wait(1).to({scaleX:0.7,x:330.3},0).wait(1).to({scaleX:0.69,x:314.4},0).wait(1).to({scaleX:0.69,x:292.1},0).wait(1).to({scaleX:0.68,x:262.7},0).wait(1).to({scaleX:0.68,x:225.3},0).wait(1).to({scaleX:0.67,x:179.7},0).wait(1).to({scaleX:0.66,x:127.6},0).wait(1).to({scaleX:0.65,x:74},0).wait(1).to({scaleX:0.64,x:26.1},0).wait(1).to({scaleX:0.63,x:-9.2},0).wait(1).to({scaleX:0.63,x:-29.7},0).wait(1).to({regX:157.5,scaleX:0.63,x:-36},0).wait(1).to({regX:157.6,x:-35.1},0).wait(1).to({scaleX:0.63,x:-32.3},0).wait(1).to({scaleX:0.63,x:-27.1},0).wait(1).to({scaleX:0.64,x:-18.7},0).wait(1).to({scaleX:0.64,x:-6.9},0).wait(1).to({scaleX:0.65,x:6},0).wait(1).to({scaleX:0.66,x:15},0).wait(1).to({regX:157.5,scaleX:0.66,x:17.8},0).wait(1).to({regX:157.6,x:16.8},0).wait(1).to({scaleX:0.66,x:12.7},0).wait(1).to({scaleX:0.67,x:4.5},0).wait(1).to({scaleX:0.67,x:-5.5},0).wait(1).to({regX:157.4,scaleX:0.68,x:-9.5},0).wait(1).to({regX:157.6,scaleX:0.68,x:-8.1,y:-0.9},0).wait(1).to({scaleX:0.69,x:-3.4},0).wait(1).to({scaleX:0.7,x:0.1,y:-1},0).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(186.1,-113.4,332,231);
p.frameBounds = [rect, new cjs.Rectangle(210.3,-112.3,277,226), new cjs.Rectangle(204.6,-112.3,276,226), new cjs.Rectangle(195.4,-112.3,274,226), new cjs.Rectangle(181,-112.3,270,226), new cjs.Rectangle(161.5,-112.3,265,226), new cjs.Rectangle(135,-112.3,259,226), new cjs.Rectangle(-16.3,-112.3,370,226), new cjs.Rectangle(-17.4,-112.3,320.8,226), new cjs.Rectangle(-17.9,-112.4,264,226), new cjs.Rectangle(-36,-112.4,223,226), new cjs.Rectangle(-78.3,-112.4,212,226), new cjs.Rectangle(-110.7,-112.4,206,226), new cjs.Rectangle(-129.4,-112.4,203,226), new cjs.Rectangle(-136.5,-113.4,207,231), new cjs.Rectangle(-134.8,-112.3,202,226), new cjs.Rectangle(-132.3,-112.3,203,226), new cjs.Rectangle(-127.6,-112.3,204,226), new cjs.Rectangle(-119.9,-112.3,205,226), new cjs.Rectangle(-109.2,-112.3,208,226), new cjs.Rectangle(-97.5,-112.3,210,226), new cjs.Rectangle(-89.3,-112.3,212,226), new cjs.Rectangle(-87.8,-113.4,217,231), new cjs.Rectangle(-87.9,-112.3,212,226), new cjs.Rectangle(-92.4,-112.3,213,226), new cjs.Rectangle(-101.5,-112.3,215,226), new cjs.Rectangle(-112.6,-112.3,222.9,226), new cjs.Rectangle(-117.8,-113.4,229.6,231), new cjs.Rectangle(-116.1,-112.3,227.6,226), new cjs.Rectangle(-113.4,-112.3,223.6,226), rect=new cjs.Rectangle(-111.3,-112.4,226,226), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:



(lib.the_village_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnMain.addEventListener( "click", function() {
		        window.callClick();
		} );
	}
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(299).call(this.frame_299).wait(26));

	// btn
	this.button_1 = new lib.btnMain();
	this.button_1.setTransform(150,300,1,1,0,0,0,150,300);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.btnMain(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#342E2C").ss(1,1,1).p("EgXbgwXMAu3AAAMAAABgvMgu3AAAg");
	this.shape.setTransform(150,309.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.button_1}]}).wait(325));

	// frames
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#342E2C").ss(1,1,1).p("EgXbgu2MAu3AAAMAAABdtMgu3AAAg");
	this.shape_1.setTransform(150,299.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(325));

	// logo
	this.instance = new lib.logo("synched",0);
	this.instance.setTransform(149.7,50.8,2.112,2.112);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.349},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0.559},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.707},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.816},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.897},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.953},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(312));

	// txt
	this.instance_1 = new lib.txt("synched",0);
	this.instance_1.setTransform(135.5,171.8,1,1,0,0,0,137.7,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(325));

	// pic3.jpg
	this.instance_2 = new lib.p3();
	this.instance_2.setTransform(587.9,312.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(251).to({_off:false},0).wait(1).to({regX:11.7,regY:5.5,x:446.8,y:318.4},0).wait(1).to({x:354.9},0).wait(1).to({x:290},0).wait(1).to({x:242.2},0).wait(1).to({x:207},0).wait(1).to({x:182.2},0).wait(1).to({x:167.1},0).wait(1).to({regX:0,regY:0,x:150,y:312.9},0).wait(55).to({x:-248.9,y:312.7},10,cjs.Ease.get(-1)).wait(1));

	// pic2.jpg
	this.instance_3 = new lib.p2();
	this.instance_3.setTransform(587.9,309.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101).to({_off:false},0).wait(1).to({regX:173.1,regY:-1,x:608.2,y:308.6},0).wait(1).to({x:516.3},0).wait(1).to({x:451.4},0).wait(1).to({x:403.6},0).wait(1).to({x:368.4},0).wait(1).to({x:343.6},0).wait(1).to({x:328.5},0).wait(1).to({regX:0,regY:0,x:150,y:309.6,mode:"synched",startPosition:0,loop:false},0).wait(140).to({mode:"single",startPosition:84},0).to({x:-217.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// pic1.jpg
	this.instance_4 = new lib.p1();
	this.instance_4.setTransform(587.9,312.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.9,regY:5.3,x:468.8,y:318.2},0).wait(1).to({scaleY:1,x:389.8},0).wait(1).to({x:330.7,y:318.3},0).wait(1).to({x:284.3},0).wait(1).to({x:247.1},0).wait(1).to({x:217.3},0).wait(1).to({x:193.5},0).wait(1).to({x:175.2},0).wait(1).to({x:162},0).wait(1).to({x:153.8},0).wait(1).to({regX:0,regY:0,x:150,y:313},0).wait(88).to({scaleY:1,y:312.9},0).to({x:-205.8},8,cjs.Ease.get(-1)).to({_off:true},1).wait(217));

	// phone
	this.instance_5 = new lib.phone();
	this.instance_5.setTransform(148.7,248.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(1).to({x:149,y:314.1,alpha:0.274},0).wait(1).to({x:149.3,y:357.4,alpha:0.455},0).wait(1).to({x:149.4,y:389.8,alpha:0.589},0).wait(1).to({x:149.6,y:415.2,alpha:0.695},0).wait(1).to({x:149.7,y:435.6,alpha:0.78},0).wait(1).to({x:149.8,y:452,alpha:0.848},0).wait(1).to({x:149.9,y:465,alpha:0.903},0).wait(1).to({y:475,alpha:0.944},0).wait(1).to({x:150,y:482.3,alpha:0.975},0).wait(1).to({y:486.8,alpha:0.993},0).wait(1).to({y:488.4,alpha:1,mode:"synched",startPosition:0},0).wait(311));

	// rose
	this.instance_6 = new lib.rose("synched",0);
	this.instance_6.setTransform(150,544.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:262,alpha:1},14,cjs.Ease.get(1)).wait(311));

	// metro
	this.instance_7 = new lib.metro();
	this.instance_7.setTransform(-153.9,541.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(1).to({regX:3,x:-53.9},0).wait(1).to({x:4.4},0).wait(1).to({x:45.6},0).wait(1).to({x:75.9},0).wait(1).to({x:98.3},0).wait(1).to({x:114},0).wait(1).to({x:123.6},0).wait(1).to({regX:0,x:124,mode:"synched",startPosition:0},0).wait(311));

	// WWW.MICROGORODVLESU.RU
	this.instance_8 = new lib.site();
	this.instance_8.setTransform(-152.5,567.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({regX:16.4,regY:1.3,x:-39.1,y:568.7},0).wait(1).to({x:19.2},0).wait(1).to({x:60.4},0).wait(1).to({x:90.7},0).wait(1).to({x:113.1},0).wait(1).to({x:128.8},0).wait(1).to({x:138.4},0).wait(1).to({regX:0,regY:0,x:125.4,y:567.4,mode:"synched",startPosition:0},0).wait(306));

	// BG.jpg
	this.instance_9 = new lib.BG();
	this.instance_9.setTransform(0,601,1.002,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(149,299,848.9,621.2);
p.frameBounds = [rect, new cjs.Rectangle(149,299,665.9,621.2), new cjs.Rectangle(149,299,578.9,621.2), new cjs.Rectangle(149,299,513.8,621.2), new cjs.Rectangle(149,299,462.4,621.2), new cjs.Rectangle(14.9,283.8,569.7,636.5), new cjs.Rectangle(-123.9,296.1,661.3,624.1), new cjs.Rectangle(-13.9,299,525.6,621.2), new cjs.Rectangle(44.4,299,446.9,621.2), new cjs.Rectangle(85.6,299,390.5,621.2), new cjs.Rectangle(116,299,351,621.2), new cjs.Rectangle(-102.2,299,821.8,621.2), new cjs.Rectangle(7.7,299,606.1,621.2), new cjs.Rectangle(66.1,299,484.1,621.2), new cjs.Rectangle(107.3,299,398.2,621.2), new cjs.Rectangle(137.6,299,334.3,621.2), new cjs.Rectangle(141,299,540.4,621.2), new cjs.Rectangle(141,299,434.7,621.2), new cjs.Rectangle(141,299,370.1,621.2), new cjs.Rectangle(141,299,326.3,621.2), rect=new cjs.Rectangle(141,299,323,621.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(138.7,299,325.4,621.2), new cjs.Rectangle(101.9,299,367.2,621.2), new cjs.Rectangle(54.7,299,403.8,621.2), new cjs.Rectangle(-2.8,299,1279.8,621.2), new cjs.Rectangle(-70.7,299,1145,621.2), new cjs.Rectangle(-150,299,1132.3,621.2), new cjs.Rectangle(-18,299,935.4,621.2), new cjs.Rectangle(-89.1,299,958.7,621.2), new cjs.Rectangle(-172.4,299,1006.8,621.2), new cjs.Rectangle(-267.8,299,1077.5,621.2), new cjs.Rectangle(149,299,645.4,621.2), new cjs.Rectangle(149,299,639.1,621.2), new cjs.Rectangle(149,299,638.3,621.2), new cjs.Rectangle(149,299,631.6,621.2), new cjs.Rectangle(149,299,620.4,621.2), new cjs.Rectangle(149,299,602,621.2), new cjs.Rectangle(149,299,577.5,621.2), new cjs.Rectangle(149,299,545,621.2), new cjs.Rectangle(149,299,504.7,621.2), new cjs.Rectangle(149,299,454.5,621.2), new cjs.Rectangle(149,299,397,621.2), new cjs.Rectangle(149,299,339,621.2), rect=new cjs.Rectangle(149,299,302,621.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(113.1,299,337.9,621.2), new cjs.Rectangle(62.3,299,388.8,621.2), new cjs.Rectangle(-0.7,299,451.8,621.2), new cjs.Rectangle(-74.9,299,526,621.2), new cjs.Rectangle(-160.3,299,611.3,621.2), new cjs.Rectangle(-2.1,299,453.1,621.2), new cjs.Rectangle(-76.2,299,527.3,621.2), new cjs.Rectangle(-161.6,299,612.6,621.2), new cjs.Rectangle(-0.8,299,451.8,621.2), new cjs.Rectangle(-75,299,526,621.2), new cjs.Rectangle(-160.4,299,611.4,621.2), new cjs.Rectangle(25.3,299,425.8,621.2), new cjs.Rectangle(-37.7,299,488.8,621.2), new cjs.Rectangle(-111.9,299,1136.9,621.2), new cjs.Rectangle(-197.3,299,1002.5,621.2), new cjs.Rectangle(19.3,299,683.8,621.2), new cjs.Rectangle(-43.7,299,676,621.2), new cjs.Rectangle(-117.9,299,866.1,621.2), new cjs.Rectangle(-203.2,299,845.7,621.2), new cjs.Rectangle(-179.2,299,759.1,621.2), new cjs.Rectangle(141.4,299,392.8,621.2), new cjs.Rectangle(136,299,364.6,621.2), rect=new cjs.Rectangle(136,299,355,621.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(112.9,299,383.2,621.2), new cjs.Rectangle(51.9,299,435.2,621.2), new cjs.Rectangle(-22.2,299,497.2,621.2), new cjs.Rectangle(-110.1,299,567.2,621.2), new cjs.Rectangle(65.2,299,385.8,621.2), new cjs.Rectangle(25.3,299,425.8,621.2), new cjs.Rectangle(-23.6,299,474.6,621.2), new cjs.Rectangle(-81.4,299,532.5,621.2), new cjs.Rectangle(-148.3,299,599.3,621.2), new cjs.Rectangle(-224.1,299,675.1,621.2), new cjs.Rectangle(-308.9,299,759.9,621.2)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;