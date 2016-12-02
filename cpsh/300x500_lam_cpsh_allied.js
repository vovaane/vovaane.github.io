(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"http://vovaane.github.io/cpsh/images/bg_afisha_cpsh_allied.jpg", id:"bg_afisha_cpsh_allied"},
		{src:"http://vovaane.github.io/cpsh/images/Bitmap5.png", id:"Bitmap5"},
		{src:"http://vovaane.github.io/cpsh/images/bred_afisha_cpsh_allied.png", id:"bred_afisha_cpsh_allied"},
		{src:"http://vovaane.github.io/cpsh/images/cloud_cpsh_allied.png", id:"cloud_cpsh_allied"},
		{src:"http://vovaane.github.io/cpsh/images/light_afisha_cpsh_allied.png", id:"light_afisha_cpsh_allied"},
		{src:"http://vovaane.github.io/cpsh/images/marion_afisha_cpsh_allied.png", id:"marion_afisha_cpsh_allied"},
		{src:"http://vovaane.github.io/cpsh/images/people_afisha_cpsh_allied.png", id:"people_afisha_cpsh_allied"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg_afisha_cpsh_allied = function() {
	this.initialize(img.bg_afisha_cpsh_allied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,47);


(lib.bred_afisha_cpsh_allied = function() {
	this.initialize(img.bred_afisha_cpsh_allied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,309);


(lib.cloud_cpsh_allied = function() {
	this.initialize(img.cloud_cpsh_allied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,318);


(lib.light_afisha_cpsh_allied = function() {
	this.initialize(img.light_afisha_cpsh_allied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,362);


(lib.marion_afisha_cpsh_allied = function() {
	this.initialize(img.marion_afisha_cpsh_allied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,350);


(lib.people_afisha_cpsh_allied = function() {
	this.initialize(img.people_afisha_cpsh_allied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,517);


(lib.txt_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA4IAAgDQAHAAADgCIAEgEQABgCAAgJIAAhHQAAgJgBgDIgEgDQgDgCgHAAIAAgDIAuAAQAZAAAKAJQAKAIAAANQAAALgGAIQgHAGgMADQgIACgRAAIAAAfQAAAJABADQABACACABQACACAHAAIAAADgAgEAAIAEAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgGgFgIAAIgEAAg");
	this.shape.setTransform(194,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA4IAAgDIAEAAQAFAAADgCQACgBABgDQABgCAAgJIAAhIIAAgJQgBgDgCgBQgEgDgFAAIgEAAIAAgDIBcAAIAAAhIgDAAQgCgMgFgFQgEgFgIgDQgFgBgMAAIgKAAIAAAtIACAAQAJAAAFgGQAFgHABgNIADAAIAAA5IgDAAQgBgKgDgGQgDgGgFgCQgDgCgHAAIAAAfIABAMIADADQACACADAAIAHAAQAPAAAKgIQAJgHAEgPIAEAAIgGAkg");
	this.shape_1.setTransform(181.9,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3A0QgEgEAAgGQAAgGACgDQADgDAFgBQAKABABAMQAAAEAEAAQAFABAGgIQAGgGACgNQACgMAAgVIAAgVIgBgMQgBgEgDgBQgEgCgIABIAAgDIBaAAIAAADQgKAAgCACQgDADAAAIIAABMQAAAKADACQACADAKAAIAAADIg5AAIAAgDIAKgBQADgBABgDQABgDAAgGIAAhXIgZAAIAAAiIgBAfQgBAKgFALQgEAJgIAGQgHAEgJAAQgIABgFgFg");
	this.shape_2.setTransform(169,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADBJIAAgDIADAAQAIAAADgDQACgDAAgKIAAg8IglA9QAAAIACADQACAEAIAAIAEAAIAAADIg8AAIAAgDIAEAAQAIAAACgDQADgDAAgKIAAhIQAAgLgCgDQgCgCgJAAIgEAAIAAgDIA8AAIAAADIgEAAQgHAAgDADQgCADAAAKIAAA8IAlg9QAAgJgCgDQgCgDgJAAIgDAAIAAgDIA8AAIAAADIgEAAQgIAAgCACQgDADAAALIAABIQAAAKADADQACADAIAAIAEAAIAAADgAgXg1QgIgEAAgHQAAgDACgDQADgCADAAQAHAAADAJQACAEAEACQADADAEAAQAFAAADgDQADgCACgEQAEgJAHAAQADAAADADQACABAAAFQAAAGgIAFQgIADgQAAQgQABgHgFg");
	this.shape_3.setTransform(155.3,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyA4IAAgDIAEAAQAFAAADgCQACgBABgDQABgCAAgJIAAhIIAAgJQgBgDgCgBQgEgDgFAAIgEAAIAAgDIBcAAIAAAhIgDAAQgCgMgFgFQgEgFgIgDQgFgBgMAAIgKAAIAAAtIACAAQAJAAAFgGQAFgHABgNIADAAIAAA5IgDAAQgBgKgDgGQgDgGgFgCQgDgCgHAAIAAAfIABAMIADADQACACADAAIAHAAQAPAAAKgIQAJgHAEgPIAEAAIgGAkg");
	this.shape_4.setTransform(141.8,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA4IAAgDQAHAAADgCIAEgEQABgCAAgJIAAhHQAAgJgBgDIgEgDQgDgCgHAAIAAgDIAuAAQAZAAAKAJQAKAIAAANQAAALgGAIQgHAGgMADQgIACgRAAIAAAfQAAAJABADQABACACABQACACAHAAIAAADgAgEAAIAEAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgGgFgIAAIgEAAg");
	this.shape_5.setTransform(130.1,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA4IAAgDIAEAAQAFAAADgCQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgJIAAhUIgIAAQgLAAgGAEQgHAHgCANIgDAAIAAgfIBjAAIAAAfIgCAAQgEgLgCgEQgEgFgGgDQgDgBgHAAIgJAAIAABUQAAAJABACIAEAEQADACAEAAIAEAAIAAADg");
	this.shape_6.setTransform(118.2,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyA4IAAgDQAKAAADgDQACgDABgJIAAhIQAAgMgCgDQgDgDgLAAIAAgDIA4AAIAAADQgGAAgDACIgDADQgCACABAJIAAAgIAMAAQAZAAAKAHQAMAIAAAOQAAAKgGAHQgFAHgJADQgJAEgPAAgAgHAkQgBAIADADQACADAEAAQAKAAAFgGQAFgHAAgKQAAgJgEgHQgFgGgFgCQgGgBgIAAg");
	this.shape_7.setTransform(100.6,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA4IAAgDIAEAAQAFAAADgCQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgJIAAhUIgIAAQgMAAgFAEQgHAHgCANIgDAAIAAgfIBjAAIAAAfIgCAAQgEgLgCgEQgEgFgFgDQgEgBgHAAIgJAAIAABUQAAAJABACIAEAEQADACAEAAIAEAAIAAADg");
	this.shape_8.setTransform(88.4,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyA4IAAgDIAEAAQAFAAADgCQACgBABgDQABgCAAgJIAAhIIAAgJQgBgDgCgBQgEgDgFAAIgEAAIAAgDIBcAAIAAAhIgDAAQgCgMgFgFQgEgFgIgDQgFgBgMAAIgKAAIAAAtIACAAQAJAAAFgGQAFgHABgNIADAAIAAA5IgDAAQgBgKgDgGQgDgGgFgCQgDgCgHAAIAAAfIABAMIADADQACACADAAIAHAAQAPAAAKgIQAJgHAEgPIAEAAIgGAkg");
	this.shape_9.setTransform(75.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtA4IAAgDQAHAAADgCIAEgEQABgCAAgJIAAhHQAAgJgBgDIgEgDQgDgCgHAAIAAgDIAuAAQAZAAAKAJQALAIgBANQAAALgGAIQgHAGgMADQgIACgRAAIAAAfQAAAJABADQABACACABQACACAIAAIAAADgAgEAAIAEAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgFgFgIAAIgEAAg");
	this.shape_10.setTransform(64.2,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcA4IAAgDIAEAAQAFAAADgCQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgJIAAhUIgIAAQgMAAgEAEQgIAHgBANIgEAAIAAgfIBjAAIAAAfIgDAAQgDgLgCgEQgEgFgFgDQgDgBgIAAIgJAAIAABUQAAAJABACIAEAEQADACAEAAIAEAAIAAADg");
	this.shape_11.setTransform(52.3,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtAlQgNgQAAgVQAAgYARgRQARgRAYABQAagBARARQAQAQAAAZQAAAUgMAQQgRAWgeAAQgcAAgRgVgAgWgkQgGANAAAXQAAAcAKAOQAHAKALAAQAIAAAGgFQAHgFAEgLQAEgMAAgTQAAgUgEgLQgEgLgGgFQgHgFgIAAQgOAAgIAQg");
	this.shape_12.setTransform(39.1,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASA4IAAgDIADAAQAFAAADgCQADgBAAgDQABgCAAgJIAAhRIgoBlIgDAAIgshkIAABNIABAKQABAEADADQAEADAIAAIAAADIgnAAIAAgDIABAAIAIgBQADgCABgCIADgGIAAgIIAAhGIAAgKIgFgEQgDgCgEAAIgEAAIAAgDIAuAAIAeBIIAehIIAuAAIAAADIgDAAQgFAAgDACQgBAAAAABQgBAAAAABQgBAAAAABQAAAAgBABQgBACAAAIIAABIQAAAJABACIAEAEQADACAFAAIADAAIAAADg");
	this.shape_13.setTransform(23.5,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAzQgOgHgHgOQgIgNAAgPQAAgPAIgOQAJgOAPgIQAOgIAOAAQALAAAOAFIAKADQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCABgEIADAAIAAAnIgDAAQgEgQgKgIQgKgIgMAAQgLAAgHAGQgJAGgEAKQgFANAAAPQAAANAEAMQAEANAIAGQAGAHANAAQALAAAJgFQAJgFAJgLIAAAKQgJAJgKAFQgLAEgNAAQgQAAgPgHg");
	this.shape_14.setTransform(8.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.3,22.9);


(lib.title_regisser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(31.5,3.2,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.5,3.2,213.9,31.7);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_57 = new cjs.Graphics().p("ACQGpIAAtRIeUAAIAANRg");
	var mask_graphics_58 = new cjs.Graphics().p("ADnGpIAAtRIeUAAIAANRg");
	var mask_graphics_59 = new cjs.Graphics().p("AFaGpIAAtRIeUAAIAANRg");
	var mask_graphics_60 = new cjs.Graphics().p("AHoGpIAAtRIeUAAIAANRg");
	var mask_graphics_61 = new cjs.Graphics().p("AJ+GpIAAtRIeUAAIAANRg");
	var mask_graphics_62 = new cjs.Graphics().p("AMEGpIAAtRIeUAAIAANRg");
	var mask_graphics_63 = new cjs.Graphics().p("ANtGpIAAtRIeUAAIAANRg");
	var mask_graphics_64 = new cjs.Graphics().p("AO7GpIAAtRIeUAAIAANRg");
	var mask_graphics_65 = new cjs.Graphics().p("AP0GpIAAtRIeUAAIAANRg");
	var mask_graphics_66 = new cjs.Graphics().p("AQdGpIAAtRIeUAAIAANRg");
	var mask_graphics_67 = new cjs.Graphics().p("AQ4GpIAAtRIeUAAIAANRg");
	var mask_graphics_68 = new cjs.Graphics().p("ARKGpIAAtRIeUAAIAANRg");
	var mask_graphics_69 = new cjs.Graphics().p("ARTGpIAAtRIeUAAIAANRg");
	var mask_graphics_70 = new cjs.Graphics().p("ARWGpIAAtRIeUAAIAANRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_graphics_57,x:208.5,y:23.3}).wait(1).to({graphics:mask_graphics_58,x:217.2,y:23.3}).wait(1).to({graphics:mask_graphics_59,x:228.7,y:23.3}).wait(1).to({graphics:mask_graphics_60,x:242.8,y:23.3}).wait(1).to({graphics:mask_graphics_61,x:257.9,y:23.3}).wait(1).to({graphics:mask_graphics_62,x:271.2,y:23.3}).wait(1).to({graphics:mask_graphics_63,x:281.8,y:23.3}).wait(1).to({graphics:mask_graphics_64,x:289.6,y:23.3}).wait(1).to({graphics:mask_graphics_65,x:295.3,y:23.3}).wait(1).to({graphics:mask_graphics_66,x:299.3,y:23.3}).wait(1).to({graphics:mask_graphics_67,x:302.1,y:23.3}).wait(1).to({graphics:mask_graphics_68,x:303.8,y:23.3}).wait(1).to({graphics:mask_graphics_69,x:304.8,y:23.3}).wait(1).to({graphics:mask_graphics_70,x:305.1,y:23.3}).wait(10));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As0C0IBigWIAAArIhiAIgAntBkIBjgWIAAAuIhjAXgAivAXIBjgXIAAA8IhjAVgAAjgXIAmgIIgrA4IgjAJgACXg1IBjgcIAABIIhjAVgAHRiCIBjgaIAABbIhjARgAMDjQIAyAAIhbBXIg4ATg");
	this.shape.setTransform(320.7,26.1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuzD4QgugTglghQhIhEgGhrIhFAAIAACvQAAAbAXAKQAGACASACIAdAEIAAALIj6AAIAAgLQAlgBAPgHQAXgHAAgcIAAmKQAAgbgXgKQgUgHgggCIAAgLID6AAIAAALQggADgVAFQgXAIAAAdIAADFIBFAAQACh2BLhJQBNhHBsAAQBvAABLBHQAkAiAUAxQAUAxAAA6QAAB8hQBKQhIBEhxAAQgzAAgvgRgAu9i2QgmBBgBB3QAABwAkBBQAnBIBLAAQBMgBAmhHQAkhBAAhyQAAhrghhBQgnhMhOAAQhIAAgnBCgA69D2QgugSgkghQhPhKAAh0QAAh7BOhJQBLhJBtABQBwgBBKBJQAkAhATAxQAVAxAAA6QAAB8hQBKQhIBEhxAAQgzABgvgTgA7Hi4QgmBCAAB3QgBBwAkBBQAnBIBLAAQBMAAAmhHQAkhBAAhyQAAhsghhAQgnhNhOAAQhIAAgnBBgAn2EHQgEiEgEhLIAEAAQAGAAAFANIAJAhQATBEAfAeQAmAmBFgBQA/AAAggiQAageAAgwQAAhDgrggQgngchKAAIgdABIgCgSQCpgUAAhlQgBgughgXQgegUgvgBIgQABQgaADgSAKQghASgVAkQgOAWgOAnQgIAVgGAAIgFAAIAHi3IAJAAIAXAiQAwgQA4gEQAUgDATABQBsgBAzAsQAlAfAAAqQAAAqgoAgQgwAmhgAFIgBADQBoAGA0AiQAwAgABA5QAAA9gzAnQg7AshwABQgtgBgmgIQgbgHgmgOIgZAigEgkRADCQhGhIgBh1QAAh0BLhMQBKhNByAAQAqAAAmAMQAiAKAXARIAYgjIAIAAIADDCIgIAAQgZhSgqgvQgvgyg7AAQhFAAglA/QgkA+gBB1QAABrAqA8QAqA/BPgBQBxAAA6h2IAKAEQgcBBguAmQg4AwhLgBQhuABhFhFgADzD8IAAgLQAogDANgEQAXgIAAgcIAAhCIAAAAIBigVIABAAIAABVQAAAcAXAJQANAFAmADIAAALgAhRD8IAAgLQAlgCAOgFQAXgIAAgZIABAAIBggUIAAAPQAAAbAXAKQANAFAoADIAAALgEAhgAD8IAAgLQAogDANgEQAXgJAAgbIAAlaIjmFBIAAAXQAAAbAYAKQANAFAoADIAAALIj5AAIAAgLQAlgCAOgFQAXgIAAgcIAAmJQAAgcgXgJQgYgJgbgBIAAgKID5AAIAAAKQgbABgaAIQgYAHAAAdIAAFGIDmlBIAAgDQAAgcgXgJQgWgJgfgBIAAgKID5AAIAAAKQgaABgaAIQgXAFABAfIAAGJQgBAcAXAJQANAFAnADIAAALgAXMD8IAAgLQAdgDAMgEQASgHAAgSQABgbibiwIgLAAIAAC9QAAAaAVALQASAGAhADIAAALIj2AAIAAgLQAngDANgFQAXgIAAgaIAAkNIAAAAIBjgVIAABTIABAAIB2hsIABgBIAvgKIhRBLQBKBRBuCTQAgApAcANQASAJAfACIAAALgAN5D8IAAgLQAogDANgEQAXgJAAgbIAAjKIBigVIAADdQAAAcAYAJQANAFAlADIAAALgAIyD8IAAgLQAmgCAOgFQAXgIAAgcIAAiGIABAAIBigUIAABVIBIhlIAAAAIAkgIIAAAAIhsCZIAAAXQAAAcAWAJQAOAFAnADIAAALgAgHC9IAAmAQAAgcgXgJQgXgJgcgBIAAgKID3AAIAAAKQgbABgaAIQgXAHAAAdIAACrIDlAAIAAipQAAgcgXgJQgVgJgggBIAAgKID5AAIAAAKQgaABgZAIQgXAGAAAeIAAEZIgBAAIhiAYIAAAAIAAhrIjlAAIAACjIhgAZgAJ9AeIAAjhQAAgcgXgJQgYgJgcgBIAAgKID5AAIAAAKQgbABgaAIQgWAHAAAdIAADLIhjAYgAPFjAIAAgDQAAgcgXgJQgVgJgggBIAAgKID4AAIAAAKQgZABgZAIQgYAFAAAfIAAB9IhiAYIAAhkIhWB5IAAAAIgmAKgAT/h9IAAhHQAAgagXgLQgVgIgfgBIAAgLID4AAIAAALQgbABgYAHQgYAIABAdIAAAwIhjAYgAYyjYQAHgThLgHIAAgLIDIAAIAAALQgxAEgjAaIg7APQAJgMACgHg");
	this.shape_1.setTransform(239.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,478.6,53.1);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.267)").s().p("AAAB4Ik/Q3IEFxHIszMGIMHszIxJEGIQ4lBIw4lAIRJEFIsHsyIMzMGIkGxIIFAQ4IFBw4IkGRIIMzsGIsHMyIRJkFIw4FAIQ4FBIxIkGIMGMzIszsHIEGRJg");
	this.shape.setTransform(159.3,159.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.376)").s().p("AgmCUIr1TPIKwz2Iz3KvITPr0I2kgoIWkgmIzPr0IT3KvIqwz3IL1TPIAm2kIAnWkIL1zPIqwT3IT3qvIzPL0IWkAmI2kAoITPL0Iz3qvIKwT2Ir1zPIgnWkg");
	this.shape_1.setTransform(159.3,159.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.6,318.5);


(lib.name2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAhAAQAKAAAHAEQAHAEAEAHQAEAGAAAJQAAAJgFAFQgEAGgIAEQgIADgIABIgNAAIAAAZgAgNAAIANAAQAGAAAEgCQAEgDAAgGQAAgGgEgDQgEgEgGAAIgNAAg");
	this.shape.setTransform(146.5,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAqIAAgbIgOAAIgQAbIgWAAIAVgfQgIgDgFgGQgFgFAAgKQAAgNAIgHQAJgIAOAAIAlAAIAABTgAgKgVQgDADgBAHQABAFADADQAEADAGAAIARAAIAAgYIgRAAQgGAAgEADg");
	this.shape_1.setTransform(135.5,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA3IAAg3IgiA3IgSAAIAAhSIATAAIAAA1IAjg1IARAAIAABSgAgMgmQgFgFgBgJIAKgCQABAEADACQACACACAAQAEAAACgCQACgCABgEIALACQgBAJgGAFQgFAEgIAAQgHAAgFgEg");
	this.shape_2.setTransform(124.9,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAqIAAg1IgiA1IgSAAIAAhTIATAAIAAA1IAjg1IARAAIAABTg");
	this.shape_3.setTransform(113.6,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAqIAAhCIgZAAIAAgRIBDAAIAAARIgZAAIAABCg");
	this.shape_4.setTransform(103.1,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAlQgLgGgGgKQgFgJAAgMQAAgLAFgJQAGgKALgGQAKgGALAAQAMAAALAGQAKAGAGAKQAFAJAAALQAAAMgFAJQgGAKgKAGQgLAGgMAAQgLAAgKgGgAgMgWQgFAEgDAGQgEAGAAAGQAAAHAEAFQACAGAHAFQAFADAGAAQAHAAAGgDQAGgEADgGQADgGAAgHQAAgGgDgGQgDgFgGgFQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(92.1,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAqIgYgkIgKAKIAAAaIgTAAIAAhTIATAAIAAAlIAgglIAWAAIgiAkIAkAvg");
	this.shape_6.setTransform(81.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIggAAIAAAiIgSAAIAAhTIASAAIAAAiIAgAAIAAgiIATAAIAABTg");
	this.shape_7.setTransform(64.1,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAlQgKgGgGgKQgFgJAAgMQAAgLAFgJQAGgKAKgGQALgGALAAQANAAAJAGQALAGAFAKQAGAJAAALQAAAMgGAJQgFAKgLAGQgJAGgNAAQgLAAgLgGgAgMgWQgFAEgEAGQgDAGAAAGQAAAHADAFQAEAGAFAFQAGADAGAAQAHAAAFgDQAHgEACgGQADgGABgHQgBgGgDgGQgCgFgHgFQgFgDgHAAQgGAAgGADg");
	this.shape_8.setTransform(52.5,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIAAg1IgiA1IgSAAIAAhTIATAAIAAA1IAjg1IARAAIAABTg");
	this.shape_9.setTransform(40.7,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAhAAQAKAAAHAEQAHAEAEAHQAEAGAAAJQAAAJgFAFQgEAGgIAEQgIADgIABIgNAAIAAAZgAgNAAIANAAQAGAAAEgCQAEgDAAgGQAAgGgEgDQgEgEgGAAIgNAAg");
	this.shape_10.setTransform(30.4,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZAqIgIgTIgiAAIgIATIgSAAIAkhTIAPAAIAkBTgAAKAHIgKgaIgKAaIAUAAg");
	this.shape_11.setTransform(19.4,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXAqIAAg1IgXAiIAAAAIgWgiIAAA1IgSAAIAAhTIAUAAIAUAkIAWgkIAUAAIAABTg");
	this.shape_12.setTransform(7.4,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.2,17.6);


(lib.name1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAqIAAhCIgZAAIAAgRIBDAAIAAARIgZAAIAABCg");
	this.shape.setTransform(86.1,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAqIAAhCIgZAAIAAgRIBDAAIAAARIgZAAIAABCg");
	this.shape_1.setTransform(76.3,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAqIAAg1IgiA1IgSAAIAAhTIATAAIAAA1IAjg1IARAAIAABTg");
	this.shape_2.setTransform(65.8,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAqIAAhCIgfAAIAABCIgSAAIAAhTIBEAAIAABTg");
	this.shape_3.setTransform(54.7,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAyIAAgRIgzAAIgBARIgRAAIAAgiIAIAAIAGgPIADgQIABgYIAAgKIA7AAIAABBIAKAAIgDAigAgIgYQAAANgCAKQgCAIgDAJIAeAAIAAgxIgXAAg");
	this.shape_4.setTransform(37.9,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAnQgIgDgHgHIAMgMQAFAEAGADQAEACAIAAQAEAAAFgCQAFgCADgFQADgEACgGIghAAIAAgOIAhAAQgCgFgDgFQgDgDgGgDQgEgCgEgBQgHABgFACQgFACgFAEIgKgMQAGgGAHgDQAHgEAMAAQALAAAKAGQAKAGAFAKQAFAJAAALQAAAMgFAJQgFAKgKAGQgKAGgLAAQgMAAgIgEg");
	this.shape_5.setTransform(26.8,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAhAAQAKAAAHAEQAHAEAEAHQAEAGAAAJQAAAJgFAFQgEAGgIAEQgIADgIABIgNAAIAAAZgAgNAAIANAAQAGAAAEgCQAEgDAAgGQAAgGgEgDQgEgEgGAAIgNAAg");
	this.shape_6.setTransform(16.9,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAqIAAhTIA/AAIAAARIgsAAIAAAPIAUAAQAKAAAGADQAHADADAEQAEAGAAAIQgBANgIAHQgIAGgPABgAgPAZIASAAQAHAAADgDQADgCAAgGQAAgEgDgDQgDgDgHAAIgSAAg");
	this.shape_7.setTransform(6.5,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,17.6);


(lib.light3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF5E2","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,29.8).s().p("AjMDNQhUhVgBh4QABh2BUhWQBWhUB2gBQB4ABBVBUQBUBWAAB2QAAB4hUBVQhVBUh4AAQh2AAhWhUg");
	this.shape.setTransform(29,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.light_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF7E00","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,237.9).s().p("A6AaBQqyqyAAvPQAAvOKyqyQKyqyPOAAQPPAAKyKyQKyKyAAPOQAAPPqyKyQqyKyvPAAQvOAAqyqyg");
	this.shape.setTransform(235.6,235.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,471.1,471.1);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light_afisha_cpsh_allied();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,362);


(lib.data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADA4IAAgDQAHAAADgCQADgBABgCQABgDAAgJIAAggIgHAAIgiA0IgkAAIAAgDQAFgBADgCIAIgJIAbgmQgLgDgFgDQgKgIABgNQAAgKAFgIQAHgHAJgDQAJgDATAAIA0AAIAAADQgIAAgDACIgDADQgBADAAAJIAABHQAAAJABACIADAEQADACAIAAIAAADgAgIgrQgGAHAAAMQAAAJADAGQADAFAGACQAEACALAAIAFAAIAAgxIgJAAQgLAAgGAGg");
	this.shape.setTransform(210.7,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA4IAAgDQAHAAADgCIAEgEQABgCAAgJIAAhHQAAgJgBgDIgEgDQgDgCgHAAIAAgDIAuAAQAYAAALAJQAKAIAAANQABALgHAIQgHAGgMADQgIACgRAAIAAAfQAAAJABADQABACACABQACACAHAAIAAADgAgEAAIAEAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgGgFgIAAIgEAAg");
	this.shape_1.setTransform(197.7,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyA4IAAgDQAKAAADgDQACgDAAgJIAAhLQAAgJgDgDQgDgDgJAAIAAgDIBeAAIAAAfIgDAAQgCgJgDgFQgEgFgFgCQgFgDgKAAIgUAAIAAAsIANAAQAYAAAMAHQALAIgBAOQABAKgGAHQgGAHgIADQgIAEgRAAgAgIAkQAAAIADADQACADAFAAQAJAAAFgGQAFgHAAgKQAAgJgFgHQgEgGgGgCQgFgBgJAAg");
	this.shape_2.setTransform(184.9,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFA5IAAgDIACAAQAGAAADgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgDIgCgGIgGgOIgmAAIgFALQgCAGAAADQAAAFAEACQACABAJABIAAADIglAAIAAgDQAGgBAEgEQADgEAGgNIAnhYIABAAIApBbQAFANAEADQADACAFABIAAADgAgaATIAgAAIgPglg");
	this.shape_3.setTransform(171.3,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA5IgUgrQgEgIgDgBQgCgCgFAAIAAAmQAAAIADACQADADAIgBIAAAEIg5AAIAAgEQAJAAAEgCQADgDAAgJIAAhKQAAgJgDgDQgCgEgIAAIgDAAIAAgDIA5AAIAAADIAAAAQgJAAgCADQgDADAAAJIAAAhIAOAAQADgBADgEQADgEACgLQADgMADgHQADgGAGgEQAFgDAIAAQAIAAAFAEQAFAEAAAIQAAAEgEAEQgCADgGAAQgJgBgBgKQAAgGgDAAQgEAAgDAEQgCAEgEALIgFAQQgCAGgEAEIAIABIAGAFIAKASIALAUQADAFADACQAEACAFAAIAAAEg");
	this.shape_4.setTransform(157.2,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyA4IAAgDIAEAAQAFAAADgCQACgBABgDQABgCAAgJIAAhIIAAgJQgBgDgCgBQgEgDgFAAIgEAAIAAgDIBcAAIAAAhIgDAAQgCgMgFgFQgEgFgIgDQgFgBgMAAIgKAAIAAAtIACAAQAJAAAFgGQAFgHABgNIADAAIAAA5IgDAAQgBgKgDgGQgDgGgFgCQgDgCgHAAIAAAfIABAMIADADQACACADAAIAHAAQAPAAAKgIQAJgHAEgPIAEAAIgGAkg");
	this.shape_5.setTransform(143.2,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA1BIQgBgOgKgKQgJgJgRAAIgcAAQgSAAgKAJQgLAIgCAQIgCAAIAAgkQAUgEAJgXQAIgWAAgoQAAgJgCgDQgEgDgLAAIAAgDIBcAAIAAADQgLAAgDADQgDADABAJIAABJIABAKQABADADABQAEACAHAAIAAAkgAgKg2QAAAUgDATQgDARgEALQgFALgIAIIAmAAQAIAAACgBQABgBAAgGIAAhYIgaAAg");
	this.shape_6.setTransform(129.8,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbA5IAAgDIACAAQAIAAADgBQADgDABgDQABgCAAgLIAAg4IAAgKIgDgDQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgEAAgGADIgCgDIAngTIAEAAIAABaQAAALABACQAAADADACQADACAGAAIADAAIAAADg");
	this.shape_7.setTransform(111.7,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAzQgOgHgIgOQgIgNAAgPQAAgPAJgOQAIgOAOgIQAPgIAOAAQAMAAANAFIAJADQABAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCAAgEIAEAAIAAAnIgEAAQgDgQgKgIQgKgIgNAAQgKAAgHAGQgIAGgEAKQgGANAAAPQAAANAEAMQAEANAIAGQAGAHANAAQALAAAIgFQAKgFAJgLIAAAKQgJAJgLAFQgKAEgOAAQgPAAgOgHg");
	this.shape_8.setTransform(93.2,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtAlQgNgQAAgVQAAgYARgRQARgRAYABQAagBARARQAQAQAAAZQAAAUgMAQQgRAWgeAAQgcAAgRgVgAgWgkQgGANAAAXQAAAcAKAOQAHAKALAAQAIAAAGgFQAHgFAEgLQAEgMAAgTQAAgUgEgLQgEgLgGgFQgHgFgIAAQgOAAgIAQg");
	this.shape_9.setTransform(72.6,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEA4IAAgDIADAAQAFAAADgCQACgBACgDIAAgLIAAgiIglAAIAAAiQAAAJABACIADAEQADACAFAAIAEAAIAAADIg7AAIAAgDIAEAAQAEAAADgCQADgBABgDQABgCAAgJIAAhIQAAgIgBgCIgEgEQgDgCgEAAIgEAAIAAgDIA7AAIAAADIgEAAQgFAAgDACQAAAAgBABQAAAAgBABQAAAAgBABQAAAAAAABQgBACAAAIIAAAgIAlAAIAAggIAAgKIgEgEQgDgCgFAAIgDAAIAAgDIA6AAIAAADIgDAAQgFAAgDACIgEAEIAAAKIAABIIAAALIAEAEQADACAFAAIADAAIAAADg");
	this.shape_10.setTransform(57.5,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADA4IAAgDIADAAQAIAAADgDQACgEAAgKIAAg7IglA9QAAAIACADQACAEAIAAIAEAAIAAADIg8AAIAAgDIAEAAQAIAAACgDQADgEAAgKIAAhIQAAgKgCgDQgCgDgJAAIgEAAIAAgDIA8AAIAAADIgEAAQgHAAgDAEQgCADAAAJIAAA8IAlg8QAAgJgCgDQgCgEgJAAIgDAAIAAgDIA8AAIAAADIgEAAQgIAAgCADQgDADAAAKIAABIQAAALADADQACADAIAAIAEAAIAAADg");
	this.shape_11.setTransform(42.4,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUA5IgUgrQgFgIgBgBQgCgCgGAAIAAAmQAAAIADACQADADAIgBIAAAEIg5AAIAAgEQAJAAAEgCQADgDAAgJIAAhKQAAgJgCgDQgDgEgIAAIgDAAIAAgDIA5AAIAAADIAAAAQgIAAgEADQgCADAAAJIAAAhIAOAAQACgBADgEQADgEADgLQAEgMADgHQADgGAFgEQAFgDAIAAQAIAAAFAEQAFAEAAAIQAAAEgDAEQgDADgFAAQgKgBAAgKQgBgGgEAAQgEAAgCAEQgDAEgDALIgFAQQgCAGgEAEIAJABIAEAFIAKASIAMAUQADAFADACQAEACAFAAIAAAEg");
	this.shape_12.setTransform(27.7,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzA4IAAgDQAJAAACgCQADgBABgDQABgCAAgJIAAhHQAAgJgBgDQgBgCgDgBQgCgCgJAAIAAgDIA0AAQAUAAAIAEQAIADAFAHQAEAHAAAHQAAAJgFAGQgHAGgPAEQARACAGAFQAKAIAAAMQAAAMgLAJQgMAKgYAAgAgIAkIAAAFQAAAEABACQADADAEAAQAFAAAFgDQAGgDADgGQADgFAAgHQAAgIgEgGQgDgHgGgCQgHgDgKAAgAgIgwIAAAsQAJAAAGgDQAGgCADgFQACgFAAgIQAAgHgCgFQgDgFgGgCQgFgCgHAAIgDAAg");
	this.shape_13.setTransform(7.7,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.1,22.9);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud_cpsh_allied();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,318);


(lib.btnb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.294)").ss(1,1,1,3,true).p("AV9kDIAAIHMgr5AAAIAAoHg");
	this.shape.setTransform(140.5,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE9238").s().p("A18EEIAAoHMAr5AAAIAAIHg");
	this.shape_1.setTransform(140.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bred_afisha_cpsh_allied();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,309);


(lib.bgbtn_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#987E59").s().p("AtlCqIAAlTIbKAAIAAFTg");
	this.shape.setTransform(87,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,34);


(lib.bg_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwEkQgQgPAAgbIAAjpQAAgVAKgMQAKgMAQgBIAAgCQgPgCgIgNQgIgMAAgYIAAiqQgBgaAPgOQAOgOAfgBQAfABAOAOQAPAOAAAaIAACqQAAAYgHAMQgIANgQACIAAACQAQABAKAMQAKAMAAAVIAADpQAAAbgRAPQgSAQgeAAQgfAAgRgQgAgbgHQgIAHABASIAADjQgBASAIAJQAHAKAUAAQAUAAAIgKQAHgJAAgSIAAjjQAAgSgHgHQgIgLgUABQgUgBgHALgAgXkSQgGAIAAAQIAACwQAAAOAGAJQAHAIAQAAQARAAAHgIQAGgJAAgOIAAiwQAAgQgGgIQgHgIgRAAQgQAAgHAIg");
	this.shape.setTransform(5.3,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACExIAAouIgBAAIghA5IAAgtIAog/IAZAAIAAJhg");
	this.shape_1.setTransform(-10.8,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLDsIAAjeIjfAAIAAgZIDfAAIAAjgIAZAAIAADgIDdAAIAAAZIjdAAIAADeg");
	this.shape_2.setTransform(42.3,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-47.3,101.9,191.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		//root.btn.addEventListener('click', click);
		root.btn.addEventListener('mouseover', over);
		root.btn.addEventListener('mouseout', out);
		
		//function click(){
		//	window.showVideo();
		//}
		
		function over(){
			root.parent.gotoAndPlay('over');
		}
		
		function out(){
			root.parent.gotoAndPlay('out');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btn = new lib.btnb();
	this.btn.setTransform(0,0.2,0.838,1.061,0,0,0,140.4,26.1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnb(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-28.5,237.6,57.2);


(lib.marion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 2
	this.instance = new lib.star();
	this.instance.setTransform(34.5,176.9,0.018,0.018,0,0,0,160.6,160.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regX:159.3,regY:158.9,scaleX:0.15,scaleY:0.15,rotation:360,y:176.8},17).to({regX:160.6,regY:160.6,scaleX:0.02,scaleY:0.02,rotation:720,y:176.9},14).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.marion_afisha_cpsh_allied();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,350);


(lib.light2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light_all();
	this.instance.setTransform(230.6,246.6,1,1,0,0,0,235.6,235.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},11).to({alpha:0},12).to({regX:235.5,scaleX:0.79,scaleY:0.79,x:230.5,alpha:0.102},6).to({regX:235.6,scaleX:1,scaleY:1,x:230.6,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,11,471.1,471.1);


(lib.couple_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_39 = new cjs.Graphics().p("AhIKeQgDgBgBgDQgCgDABgHIAGgeQABgJAEgOQADgLADgFIAEgIIAOgtIAAgQIAEgUQACgHACgCIgBAAQgFgDgEgEIgDgEIAAgJIAAgDIACgBQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABAAIAAABIAAgBIANAAIAFABQAEABgBAFQAAAEgFABIAAACIAGADQACACAAADQgBAEgFABQABADgBAEIgDAMQgDAJAAAHIgBAOIgOAtIgEAJIgIAXQgDALgBANIgEAXQgBAFgCABIgDABIgCAAgAhsKDQgCgCABgFIADgHIANgrIACgLIABgFIABgIIAGgVIABgHIAHgaQABgHgBgOQgBgGACgEQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQADgCACACQACABABAIIAAAeIgEAOIgDALIgBAKIgFAOIgSBJQgCAGgEACQgCACgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgJHFQgEAAgBgGQAAgEACgFIAAAAIgCgBQgCAAAAgEIACgOIABgKQAAgIAHgVQABgEACAAIADAAIABAAIADgQIgCgEIABgGQADgKgCgLIAAgFQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAThhAXhlIAYhkIgBgBQgBgFADgDIABAAIAAgDIABgIIABgRIABgWIgBgBIgFgGQgBgFACgEQAFgIAKgBQAJAAAIAIQAEAFABAFQAAAIgGADQAFAEgCAHQgCAEgDACIgCAMIgFAWIgEAjQgBANgEARQgBAFgCAGIAAACIgHAVIAAADIgBACIgBAFIAAADQAAADgDAHIgDAEIgGAVIgBAEQgJAhgDAUQgDAYgDAGIgGANIgEAVQgCAKgJAXIgCAEIgBABIgDASIgGApIADACIAAAAIAAAHIgEgDIgBAEQgGAdgGAVQgDAIgGAAIAAAAgAgHGWIAAACIAAAFIAAgCIABgBIAAgDIAAgCgAAkEDIADgEIgBgBIgCAFgAA4CwIgDALIAEgNIgBACgABgAEIAAACIAAgCgAhLGiQgCgDAAgFIAAgHIACgFIAAgJIACgIIAGgVIACgFIABgFIACgFIAAgJIACgIIABgGIACgEIAAgJIABgFIACgEIACgFQgBgMACgFQACgGAGgCQADAAACAEQABACAAADIgCARIgCARIgCAIIgDAHIgBAIIgKApQgFAPAAAEIgBAIIgBADIABADQADAGgFADQgBABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQgDAAgCgDgAjrD1QgCgCAAgDIAAgKIACgFIABgEIABgEQABgBAAgLQAAgEACgBIAEgCIABAAQAEABABADIABADIAAAbIgBAGIgBADIgCABIgEAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgDgAjZC9QgDgCABgFIADgHIAVgdIAhgeIAFgGIAIgJIACgCIABgBIAJgJIACAAIAAgBQAMgPAPgKIAJgGIAHgGQACgBADADQADACgBADQAAADgFAFIgWATIACACQABAEgCADIgDABIgOAFIgDADIgFAFQgCAEgCACIgDABIgrArIgTAZIgFAGQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBgAAQgFQgDAAgBgEIgBgFIAAgMIABgDIABgCQAAgEABgBIABgCIABgFIACgDIABgEIABgEIABgLIABgEQACgDADABIABgBIAEACIACAFIgBAFIAAAJIgBAEIgBADIgCAEIgBAFIgDAIIgBAGIgBAFQABAGgCADQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgBAAgABxhIQgGgDABgGIABgDIgBgFIAAgTIABgEIABgEIgBgDIAAgJIACgDIAAgBIAAgGIAAgDIACgCQAEgEADAAIAEACIADgCIAFAAIAFADQACACAAAFIgBAEIgCACIAAAFIgCACIgBADIAAALIgEAMIgBAEIgCAGIAAABIgCAEIgBAEIgEAFQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAgACWigIgEgBIgIgFIgCgDIAAgDIAAgGQABgEACgBIAEgCIADgCIABABIABgBIAJAAQAEAAAEACQACACACAGQAGgCADAGIABACIgDAFIgEACIgEAEIgOABgAB9jFQgCgCAAgEIAAgGIABgCIABgBIABgEIAEgEIACgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIADgBQADAAABADQACADgBAEIgCAEIgDACIAAADIgCADIAAAGQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgCABgACIj5QgEgEACgFIACgEIAAgCIACgBQADgCAAgCIAAgCIACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQADABABACQACACAAAEIgBAEQgBAEgGAFIgBAEQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgCgCgACUkiIgDgCQgCgCAAgDIABgDIADgEIACgEIADgEQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABAAIADAAQAFABAAAEQABACgCADIgEAGIAAADQgCADgEABIgCABgACDlrIAEgVQABgLADgHIABADQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAIAAAQIgCAEIAAAPIgBAGIgDAEIgCAFIgCACIAAADIgDADIgCABgACdlVQgDgCgBgCIABgEIABgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIACgCIACgCIADgCIABABIABgBQABAAAAAAQABABAAAAQABAAAAAAQAAAAABABQADACgBAFIgDAHQgDAFgCABIgDAAIgDgBgACmmCQgDgDABgHIABgEIAEgBIABAAIAAgBQAEAAACABQADACAAADIgCAEQgDAGgDABIgFgBgAC3mzIgCAAIgDgCQgCgBAAgEQAAgDABgCQACgDADABIAAAAQAGAAABAFIgBAEIgBADIgDACgACKnpIgBAAIAAgCIAAgBIABgCIAAgBIABAAIABABIABABIgBACIAAAAIAAABIgBABIgBAAgADRoOIAAgIQAAgJABgCIADgDIABgGQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgEIABgBQAEgIgBgJIAAgDIACgCIAAgEIADgJQgBgGACgDQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIACAAQAEgBABAGIAAAJIAAAHIgCADIAAAEIgCACIgBAEIAAAKIgCAFQgBAFgBACIgDADIAAAEIgDAGQgCADAAAFIAAAFQgCAFgEAAQgEAAgCgEgAgboWIgNgGQgDgCgCgCQgCgDAAgJIAGhPIAGgRIACgDQAEgIAIgFQAFgCADABQAFABABAEQAAAEgDACIgGAEQgEAEgDAIIgGAPIgBAGIgCAIIAAANQAAAHgBAFIgBAGQgBAJABAUIAPAJQAEACABAEQAAAEgFACIgCAAIgGgCgAAFpnIgDgBIgLgBQgDgBgCgDQgCgDADgDIADgCIACAAIAKAAIAGAAQAEADgBAFIgCAFQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_graphics_39,x:27.4,y:325.3}).wait(121));

	// light2
	this.instance = new lib.light3();
	this.instance.setTransform(29,221.7,1,1,0,0,0,29,29);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:14.9,y:448.2},40).wait(26).to({scaleX:1.47,scaleY:1.47,x:28.1,y:212.7},0).to({regX:29.1,scaleX:1.76,scaleY:1.76,x:-9.4,y:436.2},44).wait(11));

	// Layer 1
	this.instance_1 = new lib.people_afisha_cpsh_allied();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359,517);


(lib.couple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light
	this.instance = new lib.light();
	this.instance.setTransform(147,175,1,1,0,0,0,125,181);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},10).to({alpha:0.699},9).to({alpha:0},6).wait(1));

	// couple
	this.instance_1 = new lib.couple_v();
	this.instance_1.setTransform(179.5,258.5,1,1,0,0,0,179.5,258.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,359,523);


(lib.cloud_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.cloud();
	this.instance.setTransform(14,115,0.509,0.509,180,0,0,150,159.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:59,alpha:0.148},43).to({y:3,alpha:0},36).to({_off:true},1).wait(80));

	// Layer 1
	this.instance_1 = new lib.cloud();
	this.instance_1.setTransform(150,109,1,1,0,0,0,150,159);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:59,alpha:0.148},79).to({y:9,alpha:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-50,362.4,318);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(11));

	// btn
	this.instance = new lib.Symbol6();
	this.instance.setTransform(108.6,19.5,0.919,0.708,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// txt
	this.instance_1 = new lib.txt_btn();
	this.instance_1.setTransform(109.1,19.5,1,1,0,0,0,101.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.93,scaleY:0.93},5).wait(6).to({scaleX:1,scaleY:1},4).wait(1));

	// mask
	this.instance_2 = new lib.bgbtn_black();
	this.instance_2.setTransform(108.3,19.5,1.245,1.149,0,0,0,87,17);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:1},4).wait(6).to({alpha:0},3).to({_off:true},1).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#987E59").ss(1.6,1,1).p("Aw5jCMAhzAAAIAAGFMghzAAAg");
	this.shape.setTransform(108.3,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,218.6,41);


(lib.bg_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud
	this.instance = new lib.cloud_v();
	this.instance.setTransform(-133.9,114.6,1,1,0,0,0,150,159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circle_light
	this.instance_1 = new lib.light2();
	this.instance_1.setTransform(447.7,238.6,1,1,0,0,0,235.6,235.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.bg_afisha_cpsh_allied();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346.3,-94.4,1024.6,694.5);


(lib.mc_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_213 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(213).call(this.frame_213).wait(1));

	// bg_black
	this.instance = new lib.bg_black();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(204));

	// 16+
	this.instance_1 = new lib._16();
	this.instance_1.setTransform(29,78,0.344,0.344,0,0,0,52.3,52.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({alpha:0.699},19).wait(6));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.setTransform(149.3,624.2,1,1,0,0,0,108.3,19.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({y:506.2},0).to({alpha:1},19).wait(6));

	// film_regisser
	this.instance_3 = new lib.title_regisser();
	this.instance_3.setTransform(148.1,504.8,1,1,0,0,0,137.7,16.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({alpha:1},20).wait(100).to({alpha:0},19).to({_off:true},1).wait(19));

	// data
	this.instance_4 = new lib.data();
	this.instance_4.setTransform(150.2,467.2,1,1,0,0,0,110.6,11.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({alpha:1},18).wait(148));

	// title
	this.instance_5 = new lib.title();
	this.instance_5.setTransform(149.6,428.7,0.56,0.559,0,0,0,239.3,26.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({alpha:1},20).wait(155));

	// name2
	this.instance_6 = new lib.name2();
	this.instance_6.setTransform(230.7,77.4,1,1,0,0,0,77.1,8.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({regX:76.5,regY:7.8,x:229,y:76.4,alpha:0.055},0).wait(1).to({x:227.7,alpha:0.119},0).wait(1).to({x:226.2,alpha:0.193},0).wait(1).to({x:224.5,alpha:0.276},0).wait(1).to({x:222.7,alpha:0.366},0).wait(1).to({x:220.9,alpha:0.457},0).wait(1).to({x:219.1,alpha:0.546},0).wait(1).to({x:217.5,alpha:0.628},0).wait(1).to({x:216,alpha:0.702},0).wait(1).to({x:214.7,alpha:0.765},0).wait(1).to({x:213.7,alpha:0.819},0).wait(1).to({x:212.8,alpha:0.864},0).wait(1).to({x:212,alpha:0.901},0).wait(1).to({x:211.4,alpha:0.93},0).wait(1).to({x:211,alpha:0.954},0).wait(1).to({x:210.6,alpha:0.972},0).wait(1).to({x:210.4,alpha:0.985},0).wait(1).to({x:210.2,alpha:0.993},0).wait(1).to({x:210.1,alpha:0.998},0).wait(1).to({regX:77.1,regY:8.8,x:210.7,y:77.4,alpha:1},0).wait(56).to({regX:76.5,regY:7.8,x:210.1,y:74.7,alpha:0.971},0).wait(1).to({y:72.7,alpha:0.938},0).wait(1).to({y:70.5,alpha:0.901},0).wait(1).to({y:67.9,alpha:0.858},0).wait(1).to({y:65,alpha:0.81},0).wait(1).to({y:61.8,alpha:0.756},0).wait(1).to({y:58.2,alpha:0.696},0).wait(1).to({y:54.3,alpha:0.632},0).wait(1).to({y:50.4,alpha:0.567},0).wait(1).to({y:46.5,alpha:0.502},0).wait(1).to({y:42.9,alpha:0.441},0).wait(1).to({y:39.6,alpha:0.386},0).wait(1).to({y:36.6,alpha:0.336},0).wait(1).to({y:34,alpha:0.293},0).wait(1).to({y:31.7,alpha:0.254},0).wait(1).to({y:29.6,alpha:0.221},0).wait(1).to({y:27.9,alpha:0.191},0).wait(1).to({y:26.3,alpha:0.165},0).wait(1).to({y:24.9,alpha:0.142},0).wait(1).to({y:23.7,alpha:0.122},0).wait(1).to({y:22.6,alpha:0.104},0).wait(1).to({y:21.7,alpha:0.088},0).wait(1).to({y:20.8,alpha:0.074},0).wait(1).to({y:20.1,alpha:0.062},0).wait(1).to({y:19.5,alpha:0.051},0).wait(1).to({y:18.9,alpha:0.042},0).wait(1).to({y:18.4,alpha:0.033},0).wait(1).to({y:18,alpha:0.026},0).wait(1).to({y:17.6,alpha:0.02},0).wait(1).to({y:17.3,alpha:0.015},0).wait(1).to({y:17,alpha:0.011},0).wait(1).to({y:16.8,alpha:0.007},0).wait(1).to({y:16.7,alpha:0.005},0).wait(1).to({y:16.6,alpha:0.003},0).wait(1).to({y:16.5,alpha:0.001},0).wait(1).to({y:16.4,alpha:0},0).wait(1).to({regX:77.1,regY:8.8,x:210.7,y:17.4},0).to({_off:true},1).wait(77));

	// name1
	this.instance_7 = new lib.name1();
	this.instance_7.setTransform(38.9,77.4,1,1,0,0,0,47.1,8.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(1).to({regX:46.3,regY:9.8,x:39.2,y:78.4,alpha:0.055},0).wait(1).to({x:40.5,alpha:0.119},0).wait(1).to({x:42,alpha:0.193},0).wait(1).to({x:43.7,alpha:0.276},0).wait(1).to({x:45.5,alpha:0.366},0).wait(1).to({x:47.2,alpha:0.457},0).wait(1).to({x:49,alpha:0.546},0).wait(1).to({x:50.7,alpha:0.628},0).wait(1).to({x:52.1,alpha:0.702},0).wait(1).to({x:53.4,alpha:0.765},0).wait(1).to({x:54.5,alpha:0.819},0).wait(1).to({x:55.4,alpha:0.864},0).wait(1).to({x:56.1,alpha:0.901},0).wait(1).to({x:56.7,alpha:0.93},0).wait(1).to({x:57.2,alpha:0.954},0).wait(1).to({x:57.5,alpha:0.972},0).wait(1).to({x:57.8,alpha:0.985},0).wait(1).to({x:58,alpha:0.993},0).wait(1).to({x:58.1,alpha:0.998},0).wait(1).to({regX:47.1,regY:8.8,x:58.9,y:77.4,alpha:1},0).wait(56).to({regX:46.3,regY:9.8,x:58.1,y:76.7,alpha:0.971},0).wait(1).to({y:74.7,alpha:0.938},0).wait(1).to({y:72.5,alpha:0.901},0).wait(1).to({y:69.9,alpha:0.858},0).wait(1).to({y:67,alpha:0.81},0).wait(1).to({y:63.8,alpha:0.756},0).wait(1).to({y:60.2,alpha:0.696},0).wait(1).to({y:56.3,alpha:0.632},0).wait(1).to({y:52.4,alpha:0.567},0).wait(1).to({y:48.5,alpha:0.502},0).wait(1).to({y:44.9,alpha:0.441},0).wait(1).to({y:41.6,alpha:0.386},0).wait(1).to({y:38.6,alpha:0.336},0).wait(1).to({y:36,alpha:0.293},0).wait(1).to({y:33.7,alpha:0.254},0).wait(1).to({y:31.6,alpha:0.221},0).wait(1).to({y:29.9,alpha:0.191},0).wait(1).to({y:28.3,alpha:0.165},0).wait(1).to({y:26.9,alpha:0.142},0).wait(1).to({y:25.7,alpha:0.122},0).wait(1).to({y:24.6,alpha:0.104},0).wait(1).to({y:23.7,alpha:0.088},0).wait(1).to({y:22.8,alpha:0.074},0).wait(1).to({y:22.1,alpha:0.062},0).wait(1).to({y:21.5,alpha:0.051},0).wait(1).to({y:20.9,alpha:0.042},0).wait(1).to({y:20.4,alpha:0.033},0).wait(1).to({y:20,alpha:0.026},0).wait(1).to({y:19.6,alpha:0.02},0).wait(1).to({y:19.3,alpha:0.015},0).wait(1).to({y:19,alpha:0.011},0).wait(1).to({y:18.8,alpha:0.007},0).wait(1).to({y:18.7,alpha:0.005},0).wait(1).to({y:18.6,alpha:0.003},0).wait(1).to({y:18.5,alpha:0.001},0).wait(1).to({y:18.4,alpha:0},0).wait(1).to({regX:47.1,regY:8.8,x:58.9,y:17.4},0).to({_off:true},1).wait(77));

	// bred
	this.instance_8 = new lib.bred();
	this.instance_8.setTransform(49.5,270.5,1,1,0,0,0,79.5,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:50.7},0).wait(1).to({x:51.9},0).wait(1).to({x:53.3},0).wait(1).to({x:54.8},0).wait(1).to({x:56.5},0).wait(1).to({x:58.3},0).wait(1).to({x:60.2},0).wait(1).to({x:62.1},0).wait(1).to({x:64.1},0).wait(1).to({x:65.9},0).wait(1).to({x:67.7},0).wait(1).to({x:69.3},0).wait(1).to({x:70.8},0).wait(1).to({x:72.1},0).wait(1).to({x:73.3},0).wait(1).to({x:74.4},0).wait(1).to({x:75.3},0).wait(1).to({x:76.1},0).wait(1).to({x:76.8},0).wait(1).to({x:77.4},0).wait(1).to({x:77.9},0).wait(1).to({x:78.3},0).wait(1).to({x:78.7},0).wait(1).to({x:79},0).wait(1).to({x:79.2},0).wait(1).to({x:79.4},0).wait(1).to({x:79.5},0).wait(73).to({x:78.4,y:268.5,alpha:0.971},0).wait(1).to({x:77.1,y:266.2,alpha:0.938},0).wait(1).to({x:75.6,y:263.6,alpha:0.901},0).wait(1).to({x:73.9,y:260.6,alpha:0.858},0).wait(1).to({x:72,y:257.2,alpha:0.81},0).wait(1).to({x:69.8,y:253.4,alpha:0.756},0).wait(1).to({x:67.4,y:249.2,alpha:0.696},0).wait(1).to({x:64.8,y:244.8,alpha:0.632},0).wait(1).to({x:62.2,y:240.2,alpha:0.567},0).wait(1).to({x:59.6,y:235.6,alpha:0.502},0).wait(1).to({x:57.2,y:231.4,alpha:0.441},0).wait(1).to({x:55,y:227.5,alpha:0.386},0).wait(1).to({x:53,y:224.1,alpha:0.336},0).wait(1).to({x:51.3,y:221,alpha:0.293},0).wait(1).to({x:49.7,y:218.3,alpha:0.254},0).wait(1).to({x:48.4,y:215.9,alpha:0.221},0).wait(1).to({x:47.2,y:213.9,alpha:0.191},0).wait(1).to({x:46.1,y:212,alpha:0.165},0).wait(1).to({x:45.2,y:210.4,alpha:0.142},0).wait(1).to({x:44.4,y:209,alpha:0.122},0).wait(1).to({x:43.7,y:207.8,alpha:0.104},0).wait(1).to({x:43.1,y:206.7,alpha:0.088},0).wait(1).to({x:42.5,y:205.7,alpha:0.074},0).wait(1).to({x:42,y:204.8,alpha:0.062},0).wait(1).to({x:41.6,y:204.1,alpha:0.051},0).wait(1).to({x:41.2,y:203.4,alpha:0.042},0).wait(1).to({x:40.9,y:202.8,alpha:0.033},0).wait(1).to({x:40.6,y:202.3,alpha:0.026},0).wait(1).to({x:40.4,y:201.9,alpha:0.02},0).wait(1).to({x:40.2,y:201.6,alpha:0.015},0).wait(1).to({x:40,y:201.3,alpha:0.011},0).wait(1).to({x:39.8,y:201,alpha:0.007},0).wait(1).to({x:39.7,y:200.8,alpha:0.005},0).wait(1).to({y:200.7,alpha:0.003},0).wait(1).to({x:39.6,y:200.6,alpha:0.001},0).wait(1).to({y:200.5,alpha:0},0).wait(1).to({x:39.5},0).to({_off:true},1).wait(77));

	// marion
	this.instance_9 = new lib.marion();
	this.instance_9.setTransform(251,280,1,1,0,0,0,87,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:175,x:249.9,y:310},0).wait(1).to({x:248.7},0).wait(1).to({x:247.3},0).wait(1).to({x:245.7},0).wait(1).to({x:244},0).wait(1).to({x:242.2},0).wait(1).to({x:240.3},0).wait(1).to({x:238.4},0).wait(1).to({x:236.5},0).wait(1).to({x:234.6},0).wait(1).to({x:232.9},0).wait(1).to({x:231.2},0).wait(1).to({x:229.7},0).wait(1).to({x:228.4},0).wait(1).to({x:227.2},0).wait(1).to({x:226.2},0).wait(1).to({x:225.2},0).wait(1).to({x:224.4},0).wait(1).to({x:223.7},0).wait(1).to({x:223.2},0).wait(1).to({x:222.6},0).wait(1).to({x:222.2},0).wait(1).to({x:221.9},0).wait(1).to({x:221.6},0).wait(1).to({x:221.4},0).wait(1).to({x:221.2},0).wait(1).to({x:221.1},0).wait(1).to({x:221},0).wait(1).to({regY:145,y:280},0).wait(71).to({regY:175,x:222.2,y:308,alpha:0.971},0).wait(1).to({x:223.5,y:305.7,alpha:0.938},0).wait(1).to({x:225,y:303.1,alpha:0.901},0).wait(1).to({x:226.7,y:300.1,alpha:0.858},0).wait(1).to({x:228.6,y:296.7,alpha:0.81},0).wait(1).to({x:230.8,y:292.9,alpha:0.756},0).wait(1).to({x:233.1,y:288.7,alpha:0.696},0).wait(1).to({x:235.7,y:284.3,alpha:0.632},0).wait(1).to({x:238.3,y:279.7,alpha:0.567},0).wait(1).to({x:240.9,y:275.1,alpha:0.502},0).wait(1).to({x:243.3,y:270.9,alpha:0.441},0).wait(1).to({x:245.6,y:267,alpha:0.386},0).wait(1).to({x:247.5,y:263.6,alpha:0.336},0).wait(1).to({x:249.3,y:260.5,alpha:0.293},0).wait(1).to({x:250.8,y:257.8,alpha:0.254},0).wait(1).to({x:252.2,y:255.4,alpha:0.221},0).wait(1).to({x:253.4,y:253.4,alpha:0.191},0).wait(1).to({x:254.4,y:251.5,alpha:0.165},0).wait(1).to({x:255.3,y:249.9,alpha:0.142},0).wait(1).to({x:256.1,y:248.5,alpha:0.122},0).wait(1).to({x:256.8,y:247.3,alpha:0.104},0).wait(1).to({x:257.5,y:246.2,alpha:0.088},0).wait(1).to({x:258,y:245.2,alpha:0.074},0).wait(1).to({x:258.5,y:244.3,alpha:0.062},0).wait(1).to({x:259,y:243.6,alpha:0.051},0).wait(1).to({x:259.3,y:242.9,alpha:0.042},0).wait(1).to({x:259.7,y:242.3,alpha:0.033},0).wait(1).to({x:259.9,y:241.8,alpha:0.026},0).wait(1).to({x:260.2,y:241.4,alpha:0.02},0).wait(1).to({x:260.4,y:241.1,alpha:0.015},0).wait(1).to({x:260.6,y:240.8,alpha:0.011},0).wait(1).to({x:260.7,y:240.5,alpha:0.007},0).wait(1).to({x:260.8,y:240.3,alpha:0.005},0).wait(1).to({x:260.9,y:240.2,alpha:0.003},0).wait(1).to({x:261,y:240.1,alpha:0.001},0).wait(1).to({y:240,alpha:0},0).wait(1).to({regY:145,y:210},0).to({_off:true},1).wait(77));

	// light
	this.instance_10 = new lib.light3();
	this.instance_10.setTransform(147.1,-135,4.652,4.652,0,0,0,29,29);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).wait(1).to({scaleX:4.87,scaleY:4.87,x:147,y:-137.8},0).wait(1).to({scaleX:5.13,scaleY:5.13,x:147.1,y:-141.1},0).wait(1).to({scaleX:5.44,scaleY:5.44,y:-145},0).wait(1).to({scaleX:5.79,scaleY:5.79,y:-149.5},0).wait(1).to({scaleX:6.17,scaleY:6.17,y:-154.3},0).wait(1).to({scaleX:6.56,scaleY:6.56,y:-159.3},0).wait(1).to({scaleX:6.93,scaleY:6.93,y:-163.9},0).wait(1).to({scaleX:7.26,scaleY:7.26,y:-168.1},0).wait(1).to({scaleX:7.54,scaleY:7.54,y:-171.7},0).wait(1).to({scaleX:7.78,scaleY:7.78,y:-174.6},0).wait(1).to({scaleX:7.97,scaleY:7.97,y:-177.1},0).wait(1).to({scaleX:8.13,scaleY:8.13,y:-179.1},0).wait(1).to({scaleX:8.26,scaleY:8.26,y:-180.8},0).wait(1).to({scaleX:8.36,scaleY:8.36,y:-182.1},0).wait(1).to({scaleX:8.44,scaleY:8.44,y:-183},0).wait(1).to({scaleX:8.5,scaleY:8.5,y:-183.8},0).wait(1).to({scaleX:8.54,scaleY:8.54,y:-184.4},0).wait(1).to({scaleX:8.57,scaleY:8.57,y:-184.7},0).wait(1).to({scaleX:8.59,scaleY:8.59,y:-185},0).wait(1).to({scaleX:8.59,scaleY:8.59,x:147,y:-185.1},0).wait(1).to({scaleX:8.35,scaleY:8.35,x:147.1,y:-181.9},0).wait(1).to({scaleX:8.05,scaleY:8.05,y:-178.1},0).wait(1).to({scaleX:7.69,scaleY:7.69,y:-173.6},0).wait(1).to({scaleX:7.28,scaleY:7.28,y:-168.4},0).wait(1).to({scaleX:6.85,scaleY:6.85,y:-162.9},0).wait(1).to({scaleX:6.43,scaleY:6.43,y:-157.6},0).wait(1).to({scaleX:6.06,scaleY:6.06,y:-152.8},0).wait(1).to({scaleX:5.73,scaleY:5.73,y:-148.7},0).wait(1).to({scaleX:5.47,scaleY:5.47,y:-145.4},0).wait(1).to({scaleX:5.26,scaleY:5.26,y:-142.7},0).wait(1).to({scaleX:5.09,scaleY:5.09,y:-140.5},0).wait(1).to({scaleX:4.95,scaleY:4.95,y:-138.8},0).wait(1).to({scaleX:4.85,scaleY:4.85,x:147,y:-137.5},0).wait(1).to({scaleX:4.77,scaleY:4.77,y:-136.5},0).wait(1).to({scaleX:4.72,scaleY:4.72,y:-135.8},0).wait(1).to({scaleX:4.68,scaleY:4.68,x:147.1,y:-135.3},0).wait(1).to({scaleX:4.66,scaleY:4.66,y:-135.1},0).wait(1).to({scaleX:4.65,scaleY:4.65,y:-135},0).to({_off:true},1).wait(150));

	// couple
	this.instance_11 = new lib.couple();
	this.instance_11.setTransform(-140.5,335.5,1,1,0,0,0,179.5,258.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(125).to({_off:false},0).wait(1).to({regY:255.5,x:-129.4,y:332.5},0).wait(1).to({x:-118.5},0).wait(1).to({x:-107.8},0).wait(1).to({x:-97.3},0).wait(1).to({x:-87},0).wait(1).to({x:-77},0).wait(1).to({x:-67.1},0).wait(1).to({x:-57.5},0).wait(1).to({x:-48.1},0).wait(1).to({x:-38.9},0).wait(1).to({x:-29.9},0).wait(1).to({x:-21.2},0).wait(1).to({x:-12.6},0).wait(1).to({x:-4.3},0).wait(1).to({x:3.9},0).wait(1).to({x:11.8},0).wait(1).to({x:19.5},0).wait(1).to({x:27},0).wait(1).to({x:34.3},0).wait(1).to({x:41.4},0).wait(1).to({x:48.3},0).wait(1).to({x:55},0).wait(1).to({x:61.5},0).wait(1).to({x:67.8},0).wait(1).to({x:73.9},0).wait(1).to({x:79.8},0).wait(1).to({x:85.5},0).wait(1).to({x:91},0).wait(1).to({x:96.4},0).wait(1).to({x:101.5},0).wait(1).to({x:106.5},0).wait(1).to({x:111.3},0).wait(1).to({x:115.9},0).wait(1).to({x:120.3},0).wait(1).to({x:124.5},0).wait(1).to({x:128.6},0).wait(1).to({x:132.5},0).wait(1).to({x:136.2},0).wait(1).to({x:139.8},0).wait(1).to({x:143.2},0).wait(1).to({x:146.4},0).wait(1).to({x:149.5},0).wait(1).to({x:152.4},0).wait(1).to({x:155.1},0).wait(1).to({x:157.7},0).wait(1).to({x:160.2},0).wait(1).to({x:162.4},0).wait(1).to({x:164.6},0).wait(1).to({x:166.6},0).wait(1).to({x:168.4},0).wait(1).to({x:170.1},0).wait(1).to({x:171.6},0).wait(1).to({x:173},0).wait(1).to({x:174.3},0).wait(1).to({x:175.4},0).wait(1).to({x:176.4},0).wait(1).to({x:177.2},0).wait(1).to({x:178},0).wait(1).to({x:178.5},0).wait(1).to({x:179},0).wait(1).to({x:179.3},0).wait(1).to({x:179.5},0).wait(1).to({regY:258.5,y:335.5},0).wait(26));

	// bg_big
	this.instance_12 = new lib.bg_big();
	this.instance_12.setTransform(290,399.5,1,1,0,0,0,290,399.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(99).to({_off:false},0).to({alpha:1},37).wait(78));

	// bg_black
	this.instance_13 = new lib.bg_black();
	this.instance_13.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,0,368,644.5);


// stage content:
(lib._300x500_lam_cpsh_allied = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAnEMAAAhOHMAu2AAAMAAABOHg");
	mask.setTransform(150,250);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#44545F").ss(1.6,1,1).p("EgXbgm+MAu3AAAMAAABN9Mgu3AAAg");
	this.shape.setTransform(150,249.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mc_all
	this.instance = new lib.mc_all();
	this.instance.setTransform(150.1,252,1,1,0,0,0,150,300);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,250,300,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;