(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"http://vovaane.github.io/camry/car.png", id:"car"},
		{src:"http://vovaane.github.io/camry/legal1.png", id:"legal1"},
		{src:"http://vovaane.github.io/camry/legal2.png", id:"legal2"},
		{src:"http://vovaane.github.io/camry/legal3.png", id:"legal3"},
		{src:"http://vovaane.github.io/camry/spark.png", id:"spark"},
		{src:"http://vovaane.github.io/camry/toyota.png", id:"toyota"},
		{src:"http://vovaane.github.io/camry/wheel.png", id:"wheel"}
	]
};



// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,112);


(lib.legal1 = function() {
	this.initialize(img.legal1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,276);


(lib.legal2 = function() {
	this.initialize(img.legal2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,152);


(lib.legal3 = function() {
	this.initialize(img.legal3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,204);


(lib.spark = function() {
	this.initialize(img.spark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,84);


(lib.toyota = function() {
	this.initialize(img.toyota);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,27);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.white_plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhICIAAwEIJDAAIAAQEg");
	this.shape.setTransform(30,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AkrIIIAAwPIJXAAIAAQPg");
	this.shape_1.setTransform(30,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,104);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAUIgDgFIgDgBIgCABIgEAFIgrA6IgZgQIAvg/Igog9IAagPIAkA1IACAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAIADgBIACgEIAjg1IAaAPIgoA8IAxBAIgZAQg");
	this.shape.setTransform(108.4,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3A0IAKgGIAIgGQADgEADgFIAEgLIABgIQgFgCgFgDQgGgEgEgDQgEgFgCgHQgCgGAAgJQAAgMAEgJQAEgKAHgGQAIgGAJgDQAKgEAMAAIA4AAIAACWIggAAIAAg3IgWAAIgCAKIgDAPQgCAHgFAGQgFAGgIAFQgHAGgLAFgAgGgyQgFABgDADQgEADgCAEQgCAEAAAHQAAALAHAFQAIAFAJAAIAWAAIAAgsIgWAAIgIABg");
	this.shape_1.setTransform(94,66.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_2.setTransform(80.5,66.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BLIAAiVIA6AAQAKAAAKACQAJACAHAFQAHAEAEAIQAEAHAAAKQAAAMgFAIQgFAIgHAEIAJAEQAFACADAFQAEAEACAGQACAGAAAHQAAALgEAIQgEAJgHAGQgHAFgJADQgKADgMAAgAgbAxIAeAAQAFAAAEgBQAFgBADgDQADgCACgEQACgDAAgFQAAgGgCgEQgDgEgEgCQgDgDgGAAIgJgBIgbAAgAgbgNIAaAAQAIAAAGgEQAHgEAAgKQAAgKgHgEQgHgDgMAAIgVAAg");
	this.shape_3.setTransform(66.9,66.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghBIQgOgHgIgLQgJgLgEgOQgEgPAAgOQAAgOAEgOQAEgOAJgLQAJgLAOgHQAOgGASAAQAUAAAOAGQAOAHAIALQAJALAEAOQAEAOAAAOQAAAOgEAPQgEAOgJALQgJALgOAHQgOAGgTAAQgTAAgOgGgAgRguQgHAEgFAHQgFAHgCAJQgDAKAAAJQAAAKADAJQACAKAFAHQAFAHAHAEQAIAEAJAAQAKAAAIgEQAHgEAFgHQAFgHACgKQADgJAAgKQAAgJgDgKQgCgJgFgHQgFgHgHgEQgIgEgKAAQgJAAgIAEg");
	this.shape_4.setTransform(51.8,66.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAA0IAHgFIAGgDIADgDIADgDIAEgHIADgMIALhgIBcAAIAACVIggAAIAAh6IghAAIgHBHIgDATQgCAHgFAHQgFAGgHAFQgHAHgOAGg");
	this.shape_5.setTransform(36.1,67);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBIQgOgGgJgKQgJgLgEgOQgEgPAAgQQAAgQAFgOQAFgPAKgKQAKgLAOgGQAPgFARAAQAQAAAMADQAMADALAFIgKAZIgNgFIgLgDIgJgBIgIAAQgUAAgMANQgLAOAAAXQAAAZAMANQALANATAAIAMAAIAJgCIALgEIANgEIAJAYIgNAGIgNAEIgOADIgQAAQgSAAgPgGg");
	this.shape_6.setTransform(22.7,66.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBNIgLgCIAEgaIAJACIAKABQAGAAAEgCQAEgDADgHQgNgBgHgFQgIgGgEgLIgdhSIAdgMIAdBTQACAFACACQACACAEgBIAfhaIAeAJIgnBtQgEALgEAGQgEAIgGADQgFAFgFABQgIACgJAAIgNgBg");
	this.shape_7.setTransform(8.9,66.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGAUIgDgFIgDgBIgCABIgEAFIgrA6IgYgQIAug/Igog9IAagPIAkA1IADAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAIADgBIACgEIAjg1IAaAPIgoA8IAxBAIgZAQg");
	this.shape_8.setTransform(200.6,41.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA0BLIAAiVIAfAAIAACVgAhTBLIAAiVIAgAAIAAA5IAhAAQAXAAAOALQANAKAAAXQAAAXgPANQgPAMgbAAgAgyAxIAYAAIALgBQAEgBAEgCQAEgDACgEQABgEAAgHQAAgGgBgEQgCgEgDgCQgEgCgFgBIgJgBIgaAAg");
	this.shape_9.setTransform(183.4,41.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBLIAAg/Ig7AAIAAA/IggAAIAAiVIAgAAIAAA8IA7AAIAAg8IAhAAIAACVg");
	this.shape_10.setTransform(166.3,41.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4BLIAAiVIAfAAIAAA5IAfAAQAZAAANAMQAOAJAAAXQAAAXgQANQgOAMgcAAgAgYAxIAXAAIAJgBQAFgBADgCQAEgDADgEQACgEAAgHQAAgGgCgEQgCgEgEgCQgEgCgEgBIgJgBIgYAAg");
	this.shape_11.setTransform(152.3,41.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhAA0IAHgFIAGgDIADgDIADgDIAEgHIADgMIALhgIBcAAIAACWIggAAIAAh7IghAAIgHBHIgDATQgCAHgFAIQgFAFgHAFQgHAHgOAGg");
	this.shape_12.setTransform(137.5,41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdAgIg6AAIgOAuIgegHIAkh2QACgIADgFQAEgGAEgEQAFgDAGgCQAHgCAGAAQAJAAAGABQAGADAFADQAEAEACAFQADAFACAHIAlB4IgfAHgAgDgxIgDAFIgPAyIAqAAIgOgyQgBgDgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_13.setTransform(123.6,41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggBNIgLgCIAEgZIAJABIAKABQAGAAAEgCQAEgCADgIQgNgBgHgFQgIgGgEgLIgdhSIAdgMIAdBTQACAFACACQACACAEAAIAfhbIAeAJIgnBtQgEALgEAHQgEAHgGADQgFAFgFACQgIABgJAAIgNgBg");
	this.shape_14.setTransform(111,41.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAoBaIAAgeIhPAAIAAAeIggAAIAAg5IAPAAQAEgEADgFQADgGACgHIAEgOIADgUIAHhCIBaAAIAAB6IAMAAIAAA5gAgFgPQgDAQgDAMQgEAMgFAIIAxAAIAAhfIgdAAg");
	this.shape_15.setTransform(96.7,42.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_16.setTransform(82.2,41.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6BLIAAiVIA6AAQAKAAAKACQAJACAHAFQAHAEAEAIQAEAHAAAKQAAAMgFAIQgFAIgHAEIAJAEQAFACADAFQAEAEACAGQACAGAAAHQAAALgEAIQgEAJgHAGQgHAFgJADQgKADgMAAgAgbAxIAeAAIAJgBQAFgBADgDQADgCACgEQACgDAAgFQAAgGgCgEQgDgEgEgCQgDgDgGAAIgJgBIgbAAgAgbgNIAaAAQAIAAAGgEQAHgEAAgKQAAgKgHgEQgHgDgMAAIgVAAg");
	this.shape_17.setTransform(68.6,41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_18.setTransform(54.1,41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAoBaIAAgeIhPAAIAAAeIggAAIAAg5IAPAAQAEgEADgFQADgGACgHIAEgOIADgUIAHhCIBaAAIAAB6IAMAAIAAA5gAgFgPQgDAQgDAMQgEAMgFAIIAxAAIAAhfIgdAAg");
	this.shape_19.setTransform(39.1,42.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeBLIAAg/Ig7AAIAAA/IggAAIAAiVIAgAAIAAA8IA7AAIAAg8IAhAAIAACVg");
	this.shape_20.setTransform(24.5,41.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_21.setTransform(9.6,41.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdAgIg6AAIgOAuIgegHIAkh3IAFgMQAEgGAEgEQAFgDAGgCQAHgCAGAAQAJAAAGABQAGACAFAEQAEAEACAFQADAFACAHIAlB4IgfAHgAgDgxIgDAGIgPAxIAqAAIgOgxQgBgEgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_22.setTransform(166.9,16.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAeBLIAAg/Ig7AAIAAA/IggAAIAAiVIAgAAIAAA8IA7AAIAAg8IAhAAIAACVg");
	this.shape_23.setTransform(151.9,16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_24.setTransform(133.4,16.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_25.setTransform(118.7,16.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyBLIAAiVIBlAAIAAAbIhFAAIAAB6g");
	this.shape_26.setTransform(106,16.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2BLIAAiVIBrAAIAAAaIhMAAIAAAhIA6AAIAAAZIg6AAIAAAnIBOAAIAAAag");
	this.shape_27.setTransform(93.6,16.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhAA0IAHgFIAGgDIADgDIADgDIAEgHIADgMIALhgIBcAAIAACWIggAAIAAh7IghAAIgHBHIgDATQgCAHgFAIQgFAFgHAFQgHAGgOAHg");
	this.shape_28.setTransform(79.1,16.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_29.setTransform(65.3,16.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag6BLIAAiVIA6AAQAKAAAKACQAJACAHAFQAHAEAEAIQAEAHAAAKQAAAMgFAIQgFAIgHAEIAJAEQAFACADAFQAEAEACAGQACAGAAAHQAAALgEAIQgEAJgHAGQgHAFgJADQgKADgMAAgAgbAxIAeAAIAJgBQAFgBADgDQADgCACgEQACgDAAgFQAAgGgCgEQgDgEgEgCQgDgDgGAAIgJgBIgbAAgAgbgNIAaAAQAIAAAGgEQAHgEAAgKQAAgKgHgEQgHgDgMAAIgVAAg");
	this.shape_30.setTransform(51.6,16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAdBLIAAhVIg5A/IAAAWIggAAIAAiVIAgAAIAABXIA5g/IAAgYIAgAAIAACVg");
	this.shape_31.setTransform(37.1,16.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2BLIAAiVIA4AAQALAAAJADQAKACAHAGQAIAGAEAKQAEAJAAANQAAAMgEAJQgEAHgHAHQgIAGgKAEQgKADgMAAIgXAAIAAA0gAgXgBIAXAAIAHgBQAFgBADgDQAEgDACgEQACgFAAgGQAAgIgCgFQgCgEgEgDQgDgDgFgBIgHAAIgXAAg");
	this.shape_32.setTransform(23.8,16.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAdBLIAAh6Ig5AAIAAB6IggAAIAAiVIB5AAIAACVg");
	this.shape_33.setTransform(9.6,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,81.9);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBQIgRgEIAFgaIAMAEQAHABAHAAQAFAAAEgCQAFgCABgIIACgHQgJAAgGgCQgHgCgFgEQgFgEgDgGQgDgGgCgIIgUhOIAggHIASBKQADAIACADQADAEAEAAIAEAAIAXhZIAgAHIghB9QgEAQgMAIQgLAHgPAAIgRgCg");
	this.shape.setTransform(65,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA5IAAhVIgPAAIAAgaIAiAAIAFALQAGgHAIgDQAHgCAIAAIAIAAIAJABIgFAaIgFAAIgHgBQgIAAgGADIgJAGIAABNg");
	this.shape_1.setTransform(53.7,46.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1A7IAAhDQABgLgEgFQgDgDgIAAIgKABIgLADIACAHIAAAHIAABEIgfAAIAAhDQABgLgDgFQgEgDgIAAQgGgBgFACIgJAEIAABRIggAAIAAhTIgIgVIAbgNIAGAMIAPgGQAJgDAKAAQAJAAAIADQAFACAFAEIAQgGQAKgDAKAAQAMAAAIADQAIAEAEAFQAFAHACAIQACAIAAAJIAABGg");
	this.shape_2.setTransform(39,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAxIgPAGQgIAEgLAAQgJAAgIgDQgIgBgFgFQgHgEgDgHQgDgHgBgKQAAgKAFgHQAEgFAGgEQAHgEAHgCQAIgCAJAAIAWAAIAAgEQAAgJgGgEQgEgEgHAAIgOABQgIABgLAEIgIgXQAJgEAMgCQALgDANAAQAMAAAKADQAJAEAEAGQAGAGABAIQACAJAAAKIAAApIAMAQIgYAQgAgSAMQgEADAAAGQAAAHAEAEQAFADAHAAQAGAAAEgCIAJgEIAAgVIgTAAQgHAAgFAEg");
	this.shape_3.setTransform(23.8,46.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBMQgPgHgJgLQgKgLgEgPQgEgPAAgRQAAgRAFgPQAFgPAKgLQALgLAPgGQAQgGASAAQAQAAANADQANADALAFIgKAbIgOgFIgLgDIgKgCIgJAAQgUAAgNAOQgMAOAAAZQAAAbANANQAMAOAUAAIAMgBIAKgCIALgDIANgGIAKAaIgNAGIgOAEIgPADIgQABQgUAAgPgGg");
	this.shape_4.setTransform(9.7,44.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXAxIgPAGQgIAEgLAAQgJAAgIgDQgIgBgGgFQgFgEgEgHQgEgHABgKQAAgKADgHQAEgFAHgEQAGgEAJgCQAHgCAJAAIAVAAIAAgEQAAgJgEgEQgGgEgGAAIgOABQgIABgKAEIgJgXQAJgEALgCQAMgDANAAQANAAAIADQAKAEAFAGQAFAGACAIQACAJAAAKIAAApIAKAQIgWAQgAgRAMQgFADAAAGQAAAHAFAEQADADAIAAQAGAAADgCIAKgEIAAgVIgUAAQgHAAgDAEg");
	this.shape_5.setTransform(68.3,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBHQgIgCgFgFQgGgEgCgHQgDgHAAgLIAAgyIgPAAIAAgaIAPAAIAAgfIAeAAIAAAfIAhAAIAAAaIghAAIAAAuQgBAJAFADQAFADAFAAIAKAAIAMgDIAGAYIgIACIgIACIgJACIgJAAQgJAAgFgCg");
	this.shape_6.setTransform(57.5,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA2QgLgEgIgIQgHgJgDgKQgEgLAAgMQAAgLAEgLQAEgLAHgIQAIgIALgFQAKgEANAAQAPAAALAEQALAFAHAIQAHAIADALQAEALAAALQAAAMgEALQgDAKgIAJQgHAIgLAEQgLAFgOAAQgNAAgLgFgAgRgYQgHAJAAAPQAAAQAHAIQAGAJALAAQAMAAAGgJQAHgIAAgQQAAgggZAAQgLAAgGAIg");
	this.shape_7.setTransform(46,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBQIgRgEIAFgaIAMAEQAHABAHAAQAFAAAEgCQAFgCABgIIACgHQgJAAgGgCQgHgCgFgEQgFgEgDgGQgDgGgCgIIgUhOIAggHIASBKQADAIACADQADAEAEAAIAEAAIAXhZIAgAHIghB9QgEAQgMAIQgLAHgPAAIgRgCg");
	this.shape_8.setTransform(33.1,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYA2QgLgEgIgIQgHgJgDgKQgEgLAAgMQAAgLAEgLQAEgLAHgIQAIgIALgFQAKgEANAAQAPAAALAEQALAFAHAIQAHAIADALQAEALAAALQAAAMgEALQgDAKgIAJQgHAIgLAEQgLAFgOAAQgNAAgLgFgAgRgYQgHAJAAAPQAAAQAHAIQAGAJALAAQAMAAAGgJQAHgIAAgQQAAgggZAAQgLAAgGAIg");
	this.shape_9.setTransform(20,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBPIAAiBIgvAAIAAgcIB9AAIAAAcIgvAAIAACBg");
	this.shape_10.setTransform(8.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,82,59.2);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB0720").s().p("AgGAkIAAg5IgXAAIAAgOIA7AAIAAAOIgXAAIAAA5g");
	this.shape.setTransform(3.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.1,7.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBHIAAh9IguAAIAAgRIBvAAIAAARIgvAAIAAB9g");
	this.shape.setTransform(118.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBFQgNgHgJgKQgIgKgDgOQgEgOAAgOQAAgNAEgOQAEgNAIgLQAIgKANgGQANgHAQAAQARAAANAHQANAGAIAKQAIALAEANQAEAOAAANQAAAOgEAOQgEAOgIAKQgIAKgNAHQgNAGgRAAQgRAAgMgGgAgTg1QgJAFgGAIQgGAIgCAKQgDALAAALQAAAMADALQACALAGAIQAGAHAJAFQAJAFAKAAQALAAAJgFQAJgFAGgHQAFgIADgLQADgLAAgMQAAgLgDgLQgDgKgFgIQgGgIgJgFQgJgEgLAAQgKAAgJAEg");
	this.shape_1.setTransform(106,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBHIAAh9IgtAAIAAgRIBtAAIAAARIguAAIAAB9g");
	this.shape_2.setTransform(88.3,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkBHIAAhiIhHBRIAAARIgUAAIAAiOIAUAAIAABkIBHhQIAAgUIAUAAIAACOg");
	this.shape_3.setTransform(75.2,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwBWIAAgdIhfAAIAAAdIgTAAIAAgtIALAAQAGgFADgGQAEgGADgHIAEgRIAEgWIAHg/IBQAAIAAB+IALAAIAAAtgAgNgPIgDASQgBAJgDAHIgEAMIgHAKIBDAAIAAhuIgqAAg");
	this.shape_4.setTransform(60.8,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBHIAAiOIBhAAIAAARIhOAAIAAAsIA8AAIAAAPIg8AAIAAAyIBQAAIAAAQg");
	this.shape_5.setTransform(48.2,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIA0AAQAJABAJACQAKACAGAGQAHAGAEAIQADAJAAAMQAAAKgDAIQgEAHgHAGQgGAGgKADQgJADgKAAIgfAAIAAA1gAgeACIAdAAIAKgBQAGgBAEgCQAFgDAEgGQACgGAAgIQAAgJgCgHQgDgGgFgDQgFgDgFgBIgLgBIgdAAg");
	this.shape_6.setTransform(35.8,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAFIgWAAIAABBIgTAAIAAiOIATAAIAAA+IANAAIAFAAIAEgBIADgCIAEgFIAZgqQAEgEAFgFQAFgDAIgBIAGAAIAFABIgCARQgGgBgDABQgFACgDAFIgbAoIgCAEIgCACIA3BAIgOALg");
	this.shape_7.setTransform(23.4,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIAzAAQAJABAIABQAKACAGAFQAIAEADAHQAFAHAAAKQgBAFgBAFQgCAEgDAEIgFAHIgHAGQAEABAFACQAEABAFAFQAEAEACAGQACAHABAIQgBAJgDAIQgEAIgGAFQgGAFgJADQgJADgLgBgAgiA3IAmAAQANABAJgGQAJgGAAgNQAAgGgCgEIgEgHIgGgFIgGgCIgJgCIgIAAIgiAAgAgigJIAhAAQAFgBAFgBQAGgCADgCQAEgDACgFQADgEAAgHQgBgMgIgEQgKgFgOAAIgcAAg");
	this.shape_8.setTransform(6,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,6,186,31);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAHIgIAPIgJgGIAMgOIgSgCIAEgKIARAHIgCgSIAJAAIgCASQAIgEAJgDIAEAKQgJABgJABIAMAOIgJAGIgJgPg");
	this.shape.setTransform(99.7,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAHIgIAPIgJgGIAMgOIgSgCIAEgKIARAHIgCgSIAJAAIgCASQAIgEAJgDIAEAKQgJABgJABIAMAOIgJAGIgJgPg");
	this.shape_1.setTransform(94.9,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABEB+QgNgFgHgKQgIgKgFgNQgDgNAAgQQAAgPAEgNQAFgOAIgKQAJgHANgGQAOgGARAAQAQAAAMAGQAMAFAIAIQAIAKAFANQAEAOAAAPQAAAQgFANQgEAOgJAJQgIAKgNAFQgNAGgQAAQgSAAgNgGgABRAhQgHAJABARQgBARAHAJQAGAKANAAQAMAAAGgJQAGgJAAgSQAAgSgGgJQgGgJgMAAQgNAAgGAKgAh7B/IDGj+IA0AAIjFD+gAiBAHQgMgFgJgIQgIgKgEgNQgEgNAAgPQAAgQAEgNQAFgNAJgKQAJgKANgGQAOgGARAAQAPAAANAGQAMAFAIAKQAJAKADANQAFAOAAAQQAAAPgFANQgEAOgIAJQgKAIgMAGQgNAFgQAAQgSAAgNgGgAh1hUQgGAJAAASQAAAQAGAKQAHAJANAAQALAAAHgJQAGgIAAgSQAAgTgGgJQgHgJgLAAQgNAAgHAKg");
	this.shape_2.setTransform(71,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPCAIAAg7IhLAAQgXAAgLgLQgMgLAAgSQAAgSATgTIBuh3IAuAAIAACYIAmAAIAAAsIgmAAIAAA7gAg1ANQgDADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACACAEAAIBAAAIAAhTg");
	this.shape_3.setTransform(40.7,34.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAqIAShcIAtAKIgaBbg");
	this.shape_4.setTransform(23.8,47.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSCAIBtjGIADgGQAAgFgGAAIh3AAIAAguICZAAQASAAAKAIQAKAIAAAMQAAANgJAPIhtDHg");
	this.shape_5.setTransform(9.5,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,8,112,50.8);


(lib.spark_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spark();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,84);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.129,0.894,1],-110.7,-3.9,108.3,-3.9).s().p("AlmBgIhVgRQh4gZh1gkQhZgbhYgaQhmgchpgIQgaACgQgSQDigXDngDIDUgDQBkgBBgAQICjAWQCMATCQARQCNASCSAJQBrAKBuAEQBjADBhAJQBTAFBQAUQAPAGAOAHQAFADAEAFIgCAEQixAzjGgDIhTAAQlpAJjqAAQldAAg9gVg");
	this.shape.setTransform(110.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.6,23.5);


(lib.s_1777123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBeQgNgFgIgHQgIgHgDgJQgEgKABgJQAAgJACgIQADgHAEgGQAFgGAFgFIAMgGQgJgGgJgJQgHgLAAgQQAAgMAEgLQAFgKAHgHQAJgIAMgEQANgDAOAAQAdAAAQAMQAPAOABAXQAAAOgIAMQgHALgMAHQAPAFAIALQAJAKgBATQABAPgHALQgFAKgKAHQgJAHgNAEQgNAEgMAAQgTAAgNgFgAgXAZQgFAIAAAMQABAHACAFQACAFAEADQAFADAFABQAFABAEAAQAFAAAEgBQAFgBADgDQAEgDACgGQACgFAAgJQABgJgGgHQgFgGgNgEIgOgEQgHAFgEAIgAgKhEQgEACgDADQgDAEgBAEIgBAJIABAHQABAEACAEQADAEAEADQAFADAGACIAMAEQAGgGAEgIQAEgJgBgJQABgKgGgHQgGgHgNABQgFAAgGACg");
	this.shape.setTransform(97.6,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBeQgNgFgIgHQgIgHgDgJQgEgKAAgJQABgJADgIQACgHAEgGQAEgGAHgFIALgGQgJgGgJgJQgHgLAAgQQAAgMAFgLQADgKAIgHQAJgIAMgEQANgDANAAQAeAAAQAMQAPAOAAAXQAAAOgHAMQgIALgLAHQAPAFAJALQAHAKABATQAAAPgHALQgFAKgKAHQgKAHgMAEQgNAEgMAAQgTAAgNgFgAgYAZQgDAIAAAMQgBAHADAFQADAFAEADQADADAGABQAFABAEAAQAEAAAFgBQAFgBADgDQAEgDADgGQABgFABgJQgBgJgFgHQgGgGgMgEIgOgEQgHAFgFAIgAgJhEQgFACgDADQgDAEgBAEIgBAJIABAHQABAEADAEQACAEAFADQAEADAGACIALAEQAIgGADgIQADgJABgJQgBgKgFgHQgGgHgNABQgGAAgEACg");
	this.shape_1.setTransform(81.6,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAQIAAgfIBVAAIAAAfg");
	this.shape_2.setTransform(67.4,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBeQgNgFgIgHQgIgHgDgJQgDgKgBgJQAAgJADgIQADgHAEgGQAFgGAFgFIANgGQgLgGgHgJQgIgLAAgQQAAgMAEgLQAFgKAIgHQAIgIAMgEQAMgDAOAAQAeAAAQAMQAQAOAAAXQgBAOgHAMQgIALgLAHQAPAFAJALQAHAKAAATQAAAPgFALQgGAKgKAHQgJAHgNAEQgNAEgMAAQgSAAgOgFgAgYAZQgDAIAAAMQAAAHACAFQADAFAEADQAEADAFABQAFABAEAAQAEAAAFgBQAFgBAEgDQADgDACgGQADgFAAgJQAAgJgGgHQgGgGgMgEIgOgEQgIAFgEAIgAgJhEQgFACgDADQgDAEgBAEIgBAJIABAHQABAEADAEQACAEAEADQAFADAGACIALAEQAIgGADgIQAEgJAAgJQAAgKgGgHQgGgHgNABQgFAAgFACg");
	this.shape_3.setTransform(53.4,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJBgIAAgsIg3AAQgNAAgHgIQgGgGAAgMQAAgJAFgIIAKgNIBIhbIAkAAIAAB1IAWAAIAAAeIgWAAIAAAsgAgeAIIgDAEIgBAEQAAAEACABIAHABIAiAAIAAg+g");
	this.shape_4.setTransform(37.4,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAQIAAgfIBVAAIAAAfg");
	this.shape_5.setTransform(23.1,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBdQgNgHgIgLQgIgMgEgQQgDgRAAgUQAAgVAEgUQADgTAKgPQAKgPAPgJQAPgJAVABIANAAIALACIANADIAOAHIgPAbQgLgGgIgCQgIgCgIAAQgJAAgEAEQgHAEgEAGQgFAHgCAJQgDAJAAALQAHgEAJgCQAHgDALAAQANAAAKAFQALAEAGAIQAIAIADAJQAEAMAAAOQAAAOgFAMQgEAMgIAJQgJAJgNAEQgNAFgQABQgRgBgNgFgAgMAEIgJAFIAAAGIAAAHIABARQAAAJADAGQADAHAEAEQAFAEAFAAQAOAAAEgKQAGgKAAgQQAAgSgHgIQgHgGgKAAQgHAAgFADg");
	this.shape_6.setTransform(9.1,10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBdQgPgFgNgIIAOgbQAMAGALADQALAEAPAAQAHAAAHgCQAGgDAEgEQAEgEACgGIACgLQAAgOgKgHQgKgHgQAAIgVAAIAAgVIAtgsIACgCIAAgCIgBgDIgDAAIhIAAIAAggIBgAAQANAAAGAFQAGAGAAAKQAAAHgDAGQgCAFgIAHIglAiQAbACAOAOQAOALAAAZQAAAcgSARQgTAQghAAQgWAAgPgEg");
	this.shape_7.setTransform(-7.6,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBdQgPgFgNgIIAOgbQAMAGALADQALAEAPAAQAHAAAHgCQAGgDAEgEQAEgEACgGIACgLQAAgOgKgHQgKgHgQAAIgVAAIAAgVIAtgsIACgCIAAgCIgBgDIgDAAIhIAAIAAggIBgAAQANAAAGAFQAGAGAAAKQAAAHgDAGQgCAFgIAHIglAiQAbACAOAOQAOALAAAZQAAAcgSARQgTAQghAAQgWAAgPgEg");
	this.shape_8.setTransform(-23.6,10.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpBlQANgMAJgNQAIgNAFgNQAFgMABgNIAAgZIAAgYQgCgNgEgNQgFgNgJgNQgIgNgNgNIAZgXQAMALAJANQALANAJAQQAIAPAEATQAFASAAAUQAAAVgFASQgEATgIAPQgIAQgLANQgJANgMALg");
	this.shape_9.setTransform(-42.4,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBhQgMAAgIgFQgHgFAAgNQAAgJAEgHQAFgHAJgJIAvgsQAHgHAEgFQAFgGACgEIADgKIABgJQAAgLgGgFQgHgGgJAAQgJAAgOAFQgNAFgMAIIgRgaQANgJARgHQASgHATAAQASAAAMAFQAMAEAHAIQAGAHADAKQADAKAAAKQAAATgKAPQgKAOgRAQIgjAiIgDADIgBADIABACIACAAIBMAAIAAAhg");
	this.shape_10.setTransform(-55.1,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BhIAAggIArAAIAAhwIAAgDIgCAAIgEACIgeAVIgTgZIArghQAIgGAHgCQAHgDAHAAQAWAAAAAWIAACLIApAAIAAAgg");
	this.shape_11.setTransform(-71,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBeQgNgFgIgHQgIgHgDgJQgDgKAAgJQAAgJADgIQACgHAEgGQAEgGAHgFIALgGQgKgGgIgJQgHgLAAgQQAAgMAFgLQAEgKAHgHQAJgIAMgEQAMgDAPAAQAdAAAQAMQAPAOAAAXQABAOgIAMQgIALgLAHQAPAFAIALQAJAKAAATQAAAPgHALQgFAKgKAHQgKAHgMAEQgNAEgMAAQgTAAgNgFgAgYAZQgEAIAAAMQABAHACAFQADAFADADQAEADAGABQAFABAEAAQAEAAAFgBQAFgBADgDQAEgDADgGQABgFAAgJQAAgJgFgHQgFgGgNgEIgOgEQgHAFgFAIgAgKhEQgEACgDADQgDAEgBAEIgBAJIABAHQABAEACAEQADAEAFADQAEADAGACIAMAEQAGgGAEgIQADgJAAgJQAAgKgFgHQgGgHgNABQgGAAgFACg");
	this.shape_12.setTransform(-87.1,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFBmQgLgNgIgQQgIgPgFgTQgEgSAAgVQAAgUAEgSQAFgTAIgPQAIgQALgNQAJgNANgLIAZAXQgNANgJANQgIANgFANQgFANgBANQgBANAAALIAAAZQACANAFAMQAEANAJANQAJANANAMIgaAZQgNgLgIgNg");
	this.shape_13.setTransform(-99.8,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE100F").s().p("AgRAoQgHgCgFgHQgEgFgCgIQgCgIgBgKQAAgJADgHQACgJAGgGQAFgFAHgEQAIgDAHAAQAUAAAJAMQAKALgBAUQAAAKgBAIQgDAIgFAGQgFAFgHAEQgIADgJAAQgKAAgHgEgAgJgTQgEAGAAANQAAAOAEAGQADAHAGAAQAHAAADgHQAEgGAAgOQAAgMgDgHQgDgHgIABQgFgBgEAHg");
	this.shape_14.setTransform(74.5,-14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE100F").s().p("AgjAqIAAhTIApAAQAMAAAHAGQAHAFAAAMQAAAFgCAFQgCAEgGADQAIABADAGQADAFAAAGQAAANgHAFQgIAGgOABgAgLAaIALAAIAEAAIAEgBIADgDIABgFQAAgGgEgDQgDgBgFAAIgLAAgAgLgIIAKAAQAFAAACgBQADgDAAgFQAAgEgDgCQgDgBgEgBIgKAAg");
	this.shape_15.setTransform(65.9,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE100F").s().p("AgRAoQgIgCgEgHQgEgFgDgIQgCgIAAgKQABgJACgHQACgJAFgGQAGgFAHgEQAHgDAIAAQAUAAAKAMQAJALAAAUQAAAKgCAIQgDAIgFAGQgFAFgIAEQgHADgJAAQgKAAgHgEgAgKgTQgDAGAAANQAAAOADAGQAEAHAGAAQAHAAAEgHQADgGAAgOQAAgMgDgHQgDgHgIABQgFgBgFAHg");
	this.shape_16.setTransform(56.8,-14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE100F").s().p("AgKAqIAAhBIgaAAIAAgSIBJAAIAAASIgZAAIAABBg");
	this.shape_17.setTransform(48.5,-14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE100F").s().p("AgjAqIAAhTIApAAQAMAAAHAGQAHAFAAAMQAAAFgCAFQgCAEgGADQAIABADAGQADAFAAAGQAAANgHAFQgIAGgOABgAgLAaIALAAIAEAAIAEgBIADgDIABgFQAAgGgEgDQgDgBgFAAIgLAAgAgLgIIAKAAQAFAAACgBQADgDAAgFQAAgEgDgCQgDgBgEgBIgKAAg");
	this.shape_18.setTransform(40.6,-14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE100F").s().p("AASAaIgjAAIgJAhIgZgDIAZhYIAEgKIAFgJQADgEAFgCQAFgCAEAAQAGABAFABQAEACAEADQADACADAGQACAEABAIIAYBYIgaADgAgBgiIgCAEIgKAjIAaAAIgIgjIgDgEQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_19.setTransform(30.6,-16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE100F").s().p("AgjA8IAAhiIgFgMIATgJIAIAMQAFgFAGgEQAEgDAHAAQAQAAAIAMQAIAMAAAVQAAAKgDAGQgDAIgFAGQgFAFgHAEQgIADgJAAIgFgBIgGgBIAAAigAgEgnIgGAHIAAAoIAFABIAFACQAHgBAFgGQAEgGAAgMIAAgMIgCgIIgFgFQgCgCgFAAQgCAAgEACg");
	this.shape_20.setTransform(17.1,-13.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE100F").s().p("AgKAqIAAhBIgaAAIAAgSIBJAAIAAASIgZAAIAABBg");
	this.shape_21.setTransform(8.5,-14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE100F").s().p("AAMAqIAAgiIgXAAIAAAiIgZAAIAAhTIAZAAIAAAhIAXAAIAAghIAZAAIAABTg");
	this.shape_22.setTransform(-0.2,-14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CE100F").s().p("AgPApQgHgDgEgGQgGgGgBgHQgCgJAAgKQAAgIACgIQADgJAEgGQAFgFAHgEQAIgDAHAAQAKAAAGADQAHAEAEAFQAFAGACAJQACAIAAAIIgHAHIgpAAQABAKAEAEQAFAFAFABQAHAAAGgCQAFgBAFgDIAHAQQgHAEgIABQgIACgKAAQgIAAgIgDgAgHgWQgDAEgBALIAYAAQAAgSgMAAQgEAAgEADg");
	this.shape_23.setTransform(-9.2,-14.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CE100F").s().p("AAYBFIAAgXIhIAAIAAhyIAZAAIAABdIAiAAIAAhdIAZAAIAABdIAOAAIAAAsg");
	this.shape_24.setTransform(-18.8,-15.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CE100F").s().p("AALAhQgGAFgFADQgEADgHAAQgLAAgHgHQgHgHABgMQAAgPAJgEQAIgGASAAIAJAAIAAgEQAAgGgDgEQgDgFgFABQgHAAgFABQgHABgEACIgHgPQAHgEAJgBQAJgCAHAAQAIAAAGACQAHACADAFQAEAEABAHQACAGAAAKIAAAeIAGAMIgTAJgAgJAGQgDACgBAHQABAHACACQADADAFAAQACgBACgCQAFgBACgCIAAgRIgJAAQgGAAgDACg");
	this.shape_25.setTransform(-32.2,-14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CE100F").s().p("AgKAqIAAhBIgaAAIAAgSIBJAAIAAASIgZAAIAABBg");
	this.shape_26.setTransform(-40.4,-14.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CE100F").s().p("AgRAoQgIgCgEgHQgFgFgCgIQgCgIAAgKQABgJACgHQADgJAEgGQAGgFAHgEQAIgDAHAAQAUAAAKAMQAIALABAUQAAAKgCAIQgDAIgFAGQgFAFgIAEQgHADgJAAQgKAAgHgEgAgKgTQgDAGAAANQAAAOADAGQAEAHAGAAQAHAAAEgHQADgGAAgOQAAgMgDgHQgDgHgIABQgFgBgFAHg");
	this.shape_27.setTransform(-48.6,-14.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CE100F").s().p("AAMA8IAAgsIgXAdIAAAPIgZAAIAAhSIAZAAIAAAoIAXgaIAAgOIAZAAIAABSgAgGgiIgJgEQgEgCgDgEQgDgEgCgGIANgFQADAFAEADQAEADAEAAQAGAAAEgDQAEgDACgFIANAFQgBAGgEAEQgDAEgEACIgIAEIgJABIgHgBg");
	this.shape_28.setTransform(-57.9,-16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CE100F").s().p("AgRAoQgIgCgEgHQgFgFgCgIQgCgIAAgKQABgJACgHQADgJAEgGQAGgFAHgEQAIgDAHAAQAUAAAKAMQAIALABAUQAAAKgCAIQgDAIgFAGQgFAFgIAEQgHADgJAAQgKAAgHgEgAgKgTQgDAGAAANQAAAOADAGQAEAHAGAAQAHAAAEgHQADgGAAgOQAAgMgDgHQgDgHgIABQgFgBgFAHg");
	this.shape_29.setTransform(-67.1,-14.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CE100F").s().p("AgLA5IAAhdIggAAIAAgUIBXAAIAAAUIggAAIAABdg");
	this.shape_30.setTransform(-74.5,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,-29.1,215.3,58.4);


(lib.s_377123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBeQgNgEgIgIQgIgIgDgIQgDgKAAgJQAAgJACgHQADgIAEgGQAFgGAFgFIAMgGQgJgGgJgJQgHgLAAgQQAAgMAEgLQAEgKAIgHQAJgIAMgDQANgEAOgBQAdAAAQAOQAQANAAAXQAAAOgIAMQgHALgMAHQAPAFAIALQAJAKgBATQAAAPgFALQgGAKgKAIQgJAGgNAEQgNADgMAAQgSABgOgFgAgXAZQgFAJAAALQAAAHADAFQACAEAEAEQAEADAGABQAFABAEAAQAFAAAEgBQAFgBAEgDQADgEACgFQACgFAAgJQABgKgGgGQgFgHgNgDIgOgEQgIAGgDAHgAgKhEQgEACgDADQgDAEgBAEIgBAJIABAIQABADACAEQADAEAEADQAFADAGACIAMAEQAGgGAEgIQADgJAAgJQABgKgGgHQgGgHgNAAQgFABgGACg");
	this.shape.setTransform(97.3,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBeQgNgEgIgIQgIgIgDgIQgDgKAAgJQAAgJADgHQACgIAEgGQAEgGAHgFIALgGQgKgGgIgJQgHgLAAgQQAAgMAFgLQAEgKAHgHQAJgIAMgDQAMgEAPgBQAdAAAQAOQAPANAAAXQABAOgIAMQgIALgLAHQAPAFAIALQAJAKAAATQAAAPgHALQgFAKgKAIQgKAGgMAEQgNADgMAAQgTABgNgFgAgYAZQgEAJAAALQABAHACAFQADAEADAEQAEADAGABQAFABAEAAQAEAAAFgBQAFgBADgDQAEgEADgFQABgFAAgJQAAgKgFgGQgFgHgNgDIgOgEQgHAGgFAHgAgKhEQgEACgDADQgDAEgBAEIgBAJIABAIQABADACAEQADAEAFADQAEADAGACIAMAEQAGgGAEgIQADgJAAgJQAAgKgFgHQgGgHgNAAQgGABgFACg");
	this.shape_1.setTransform(81.2,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAQIAAgfIBVAAIAAAfg");
	this.shape_2.setTransform(67,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBeQgNgEgIgIQgIgIgDgIQgDgKgBgJQAAgJAEgHQACgIAEgGQAEgGAGgFIANgGQgLgGgHgJQgIgLAAgQQAAgMAEgLQAFgKAIgHQAIgIAMgDQAMgEAOgBQAeAAAQAOQAPANAAAXQAAAOgHAMQgIALgLAHQAPAFAJALQAHAKABATQgBAPgFALQgGAKgKAIQgKAGgMAEQgNADgMAAQgSABgOgFgAgYAZQgDAJAAALQAAAHACAFQADAEAEAEQAEADAFABQAFABAEAAQAEAAAFgBQAFgBAEgDQADgEADgFQACgFAAgJQgBgKgFgGQgGgHgMgDIgOgEQgIAGgEAHgAgJhEQgFACgDADQgDAEgBAEIgBAJIABAIQABADADAEQACAEAFADQAEADAGACIALAEQAIgGADgIQADgJABgJQgBgKgFgHQgGgHgNAAQgGABgEACg");
	this.shape_3.setTransform(53,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBdQgPgFgNgIIAOgbQAMAGALADQALAEAPAAQAHAAAHgCQAGgDAEgEQAEgEACgGIACgLQAAgOgKgHQgKgHgQAAIgVAAIAAgVIAtgsIACgCIAAgCIgBgDIgDAAIhIAAIAAggIBgAAQANAAAGAFQAGAGAAAKQAAAHgDAGQgCAFgIAHIglAiQAbACAOAOQAOALAAAZQAAAcgSARQgTAQghAAQgWAAgPgEg");
	this.shape_4.setTransform(36.3,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAQIAAgfIBVAAIAAAfg");
	this.shape_5.setTransform(22.8,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBdQgNgHgIgLQgIgMgEgQQgEgRABgUQAAgVADgTQAEgUAKgPQAKgPAPgJQAPgJAVAAIANABIALACIANADIAOAIIgPAaQgLgGgIgCQgIgCgIAAQgJAAgEAEQgHAEgEAGQgFAHgCAJQgDAJAAALQAHgEAKgCQAGgDALAAQANAAAKAFQALAEAGAIQAIAIADAJQADAMABAOQAAAOgFAMQgEAMgIAJQgJAJgNAFQgNAEgQAAQgRAAgNgFgAgMAEIgJAEIAAAHIAAAHIABARQAAAJADAGQADAGAEAFQAFAEAFAAQAOAAAEgKQAGgKAAgQQAAgSgIgIQgGgGgKAAQgHAAgFADg");
	this.shape_6.setTransform(8.8,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBdQgPgFgNgIIAOgbQAMAGALADQALAEAPAAQAHAAAHgCQAGgDAEgEQAEgEACgGIACgLQAAgOgKgHQgKgHgQAAIgVAAIAAgVIAtgsIACgCIAAgCIgBgDIgDAAIhIAAIAAggIBgAAQANAAAGAFQAGAGAAAKQAAAHgDAGQgCAFgIAHIglAiQAbACAOAOQAOALAAAZQAAAcgSARQgTAQghAAQgWAAgPgEg");
	this.shape_7.setTransform(-7.9,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBdQgPgFgNgIIAOgbQAMAGALADQALAEAPAAQAHAAAHgCQAGgDAEgEQAEgEACgGIACgLQAAgOgKgHQgKgHgQAAIgVAAIAAgVIAtgsIACgCIAAgCIgBgDIgDAAIhIAAIAAggIBgAAQANAAAGAFQAGAGAAAKQAAAHgDAGQgCAFgIAHIglAiQAbACAOAOQAOALAAAZQAAAcgSARQgTAQghAAQgWAAgPgEg");
	this.shape_8.setTransform(-24,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpBlQANgMAJgNQAIgNAFgNQAFgMABgNIAAgZIAAgYQgCgNgEgNQgFgNgJgNQgIgNgNgNIAZgXQAMALAJANQALANAJAQQAIAPAEATQAFASAAAUQAAAVgFASQgEATgIAPQgIAQgLANQgJANgMALg");
	this.shape_9.setTransform(-42.8,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBhQgMAAgIgFQgHgFAAgNQAAgJAEgHQAFgHAJgJIAvgsQAHgHAEgFQAFgGACgEIADgKIABgJQAAgLgGgFQgHgGgJAAQgJAAgOAFQgNAFgMAIIgRgaQANgJARgHQASgHATAAQASAAAMAFQAMAEAHAIQAGAHADAKQADAKAAAKQAAATgKAPQgKAOgRAQIgjAiIgDADIgBADIABACIACAAIBMAAIAAAhg");
	this.shape_10.setTransform(-55.5,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BhIAAggIArAAIAAhwIAAgDIgCAAIgEACIgeAVIgTgZIArghQAIgGAHgCQAHgDAHAAQAWAAAAAWIAACLIApAAIAAAgg");
	this.shape_11.setTransform(-71.4,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBeQgNgEgIgIQgIgIgDgIQgEgKABgJQAAgJACgHQADgIAEgGQAFgGAGgFIALgGQgKgGgIgJQgHgLAAgQQAAgMAFgLQAEgKAHgHQAJgIAMgDQAMgEAPgBQAdAAAQAOQAPANAAAXQABAOgIAMQgHALgMAHQAPAFAIALQAJAKgBATQABAPgHALQgFAKgKAIQgKAGgMAEQgNADgMAAQgTABgNgFgAgXAZQgFAJAAALQABAHACAFQADAEADAEQAEADAGABQAFABAEAAQAFAAAEgBQAFgBADgDQAEgEACgFQACgFAAgJQABgKgGgGQgFgHgNgDIgOgEQgHAGgEAHgAgKhEQgEACgDADQgDAEgBAEIgBAJIABAIQABADACAEQADAEAEADQAFADAGACIAMAEQAGgGAEgIQAEgJgBgJQABgKgGgHQgGgHgNAAQgGABgFACg");
	this.shape_12.setTransform(-87.4,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFBmQgLgNgIgQQgIgPgFgTQgEgSAAgVQAAgUAEgSQAFgTAIgPQAIgQALgNQAJgNANgLIAZAXQgNANgJANQgIANgFANQgFANgBANQgBANAAALIAAAZQACANAFAMQAEANAJANQAJANANAMIgaAZQgNgLgIgNg");
	this.shape_13.setTransform(-100.1,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE100F").s().p("AAMA8IAAgsIgXAdIAAAPIgZAAIAAhSIAZAAIAAAoIAXgaIAAgOIAZAAIAABSgAgGgiIgJgEQgEgCgDgEQgDgEgCgGIANgFQADAFAEADQAEADAEAAQAGAAAEgDQAEgDACgFIANAFQgBAGgEAEQgDAEgEACIgIAEIgJABIgHgBg");
	this.shape_14.setTransform(94.3,-17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE100F").s().p("AAMApIAAgqIgXAbIAAAPIgZAAIAAhRIAZAAIAAAoIAXgbIAAgNIAZAAIAABRg");
	this.shape_15.setTransform(85,-15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE100F").s().p("AgEAIIgHAAIAAAhIgYAAIAAhSIAYAAIAAAhIAGAAIADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAGgSIACgEIADgEIAFgCIAHgBIAGAAIAGACIgCANIgEgBQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABIgCADIgFAOIgCAEIgDADIAXAnIgXAEg");
	this.shape_16.setTransform(76.4,-15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE100F").s().p("AgMApQgHgDgFgFQgEgGgCgJQgCgIAAgKQAAgTAKgMQALgMASAAQAIAAAFABIALAFIgGAQIgHgDQgEgCgGABQgIAAgDAGQgFAHABAMQgBANAFAHQADAGAIABQAFgBAEgBIAJgDIAHAPQgGAEgIACQgHABgIAAQgIAAgIgDg");
	this.shape_17.setTransform(68.2,-15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE100F").s().p("AgjA8IAAhiIgFgMIATgJIAIALQAFgEAGgEQAEgDAHAAQAQAAAIAMQAIAMAAAVQAAAKgDAGQgDAIgFAGQgFAFgHAEQgIADgJAAIgFAAIgGgCIAAAigAgEgnIgGAHIAAAoIAFACIAFABQAHAAAFgIQAEgEAAgNIAAgLIgCgJIgFgGQgCgBgFAAQgCgBgEADg");
	this.shape_18.setTransform(59.4,-14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE100F").s().p("AgRAoQgHgCgFgHQgEgGgCgHQgCgJgBgJQAAgJADgHQACgJAGgGQAFgFAHgEQAIgDAHAAQAUAAAJALQAKAMgBAUQAAAJgBAJQgDAIgFAGQgFAFgHAEQgIADgJAAQgKAAgHgEgAgJgTQgEAHAAAMQAAANAEAHQADAGAGABQAHgBADgGQAEgGAAgOQAAgMgDgHQgDgGgIAAQgFAAgEAGg");
	this.shape_19.setTransform(50.2,-15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE100F").s().p("AAWApIAAgyIgLATQgCAEgCACQgDACgEAAQgEAAgCgCQgDgCgCgEIgKgSIAAAxIgVAAIAAhRIAZAAIAQAjIABACIAAABIABgBIABgCIASgjIAXAAIAABRg");
	this.shape_20.setTransform(40.3,-15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE100F").s().p("AAMApIAAgqIgXAbIAAAPIgZAAIAAhRIAZAAIAAAoIAXgbIAAgNIAZAAIAABRg");
	this.shape_21.setTransform(30.4,-15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE100F").s().p("AgjA8IAAhiIgFgMIATgJIAIALQAFgEAGgEQAEgDAHAAQAQAAAIAMQAIAMAAAVQAAAKgDAGQgDAIgFAGQgFAFgHAEQgIADgJAAIgFAAIgGgCIAAAigAgEgnIgGAHIAAAoIAFACIAFABQAHAAAFgIQAEgEAAgNIAAgLIgCgJIgFgGQgCgBgFAAQgCgBgEADg");
	this.shape_22.setTransform(20.9,-14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CE100F").s().p("AARA5IAAhcIghAAIAABcIgaAAIAAhxIBVAAIAABxg");
	this.shape_23.setTransform(10.8,-17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CE100F").s().p("AgjA8IAAhiIgFgMIATgJIAIALQAFgEAGgEQAEgDAHAAQAQAAAIAMQAIAMAAAVQAAAKgDAGQgDAIgFAGQgFAFgHAEQgIADgJAAIgFAAIgGgCIAAAigAgEgnIgGAHIAAAoIAFACIAFABQAHAAAFgIQAEgEAAgNIAAgLIgCgJIgFgGQgCgBgFAAQgCgBgEADg");
	this.shape_24.setTransform(-2.8,-14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CE100F").s().p("AgLApIAAg/IgZAAIAAgSIBJAAIAAASIgZAAIAAA/g");
	this.shape_25.setTransform(-11.4,-15.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CE100F").s().p("AAMApIAAgiIgXAAIAAAiIgZAAIAAhRIAZAAIAAAgIAXAAIAAggIAZAAIAABRg");
	this.shape_26.setTransform(-20.1,-15.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CE100F").s().p("AgOApQgIgDgEgFQgGgGgBgJQgCgIAAgKQAAgIACgIQADgJAEgGQAFgFAHgEQAIgDAHAAQAKAAAGADQAHADAEAGQAEAGADAJQACAIAAAIIgHAHIgpAAQABAKAFAEQAEAGAFAAQAHgBAGgBQAFgBAFgDIAHAPQgIAFgHACQgIABgJAAQgJAAgHgDgAgHgWQgDAFgBAKIAYAAQAAgSgMAAQgEAAgEADg");
	this.shape_27.setTransform(-29.1,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CE100F").s().p("AAYBEIAAgWIhJAAIAAhxIAaAAIAABcIAiAAIAAhcIAZAAIAABcIAOAAIAAArg");
	this.shape_28.setTransform(-38.7,-16.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CE100F").s().p("AALAiQgHAFgEACQgEADgHAAQgLAAgHgHQgHgHAAgMQABgPAIgEQAKgGARAAIAJAAIAAgDQAAgHgDgEQgDgEgFAAQgHgBgFACQgHABgEACIgGgPQAGgDAJgCQAJgCAHAAQAIAAAGACQAHACADAFQAEAEACAGQABAIAAAJIAAAfIAGALIgTAJgAgJAHQgDABgBAIQABAFACADQADACAFABQACAAADgCQADgCADgDIAAgQIgJAAQgGABgDACg");
	this.shape_29.setTransform(-52.1,-15.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CE100F").s().p("AgKApIAAg/IgaAAIAAgSIBJAAIAAASIgZAAIAAA/g");
	this.shape_30.setTransform(-60.3,-15.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CE100F").s().p("AgRAoQgHgCgFgHQgFgGgCgHQgCgJAAgJQABgJACgHQADgJAEgGQAFgFAIgEQAIgDAHAAQAUAAAKALQAIAMABAUQAAAJgDAJQgCAIgFAGQgFAFgIAEQgHADgJAAQgKAAgHgEgAgKgTQgDAHAAAMQAAANADAHQAEAGAGABQAHgBAEgGQADgGAAgOQAAgMgDgHQgDgGgIAAQgGAAgEAGg");
	this.shape_31.setTransform(-68.5,-15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CE100F").s().p("AAMA8IAAgsIgXAdIAAAPIgZAAIAAhSIAZAAIAAAoIAXgaIAAgOIAZAAIAABSgAgGgiIgJgEQgEgCgDgEQgDgEgCgGIANgFQADAFAEADQAEADAEAAQAGAAAEgDQAEgDACgFIANAFQgBAGgEAEQgDAEgEACIgIAEIgJABIgHgBg");
	this.shape_32.setTransform(-77.8,-17.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CE100F").s().p("AgRAoQgHgCgFgHQgFgGgCgHQgCgJAAgJQABgJACgHQADgJAEgGQAFgFAIgEQAIgDAHAAQAUAAAKALQAIAMABAUQAAAJgDAJQgCAIgFAGQgFAFgIAEQgHADgJAAQgKAAgHgEgAgKgTQgDAHAAAMQAAANADAHQAEAGAGABQAHgBAEgGQADgGAAgOQAAgMgDgHQgDgGgIAAQgGAAgEAGg");
	this.shape_33.setTransform(-87,-15.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CE100F").s().p("AgLA5IAAhdIggAAIAAgUIBXAAIAAAUIggAAIAABdg");
	this.shape_34.setTransform(-94.4,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-30.2,215.3,58.5);


(lib.s_1777copy123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAASIALgNIAEgDIABgCIgBgBIgDgDIgMgNIAKgGIARANIAEAFQACADAAACQAAAFgCACIgGAFIgQAMgAggASIAOgNIADgDIABgCIgBgBIgCgDIgPgNIAMgGIAQANIAEAFQABADAAACQAAAFgBACIgFAFIgQAMg");
	this.shape.setTransform(106.5,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAxIAAhQIgEgKIAPgHIAHAKQADgEAGgDQACgDAHAAQANAAAGAKQAGAKAAARQAAAIgCAFQgCAGgEAFQgFAFgFACQgHADgHAAIgEgBIgFgBIAAAcgAgDgfIgFAFIAAAgIAEACIAEAAQAFAAAFgFQADgEAAgKIgBgJIgBgHIgDgFQgDgBgEAAQgBAAgDACg");
	this.shape_1.setTransform(98.9,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgEgEQgEgFgBgHQgCgGAAgIQAAgGACgHQACgHAEgFQAEgEAGgDQAGgDAGAAQAQAAAIAKQAHAJAAAQQAAAIgBAGQgCAHgEAFQgEAFgHACQgGADgHAAQgIAAgFgDgAgHgPQgDAFAAAKQAAALADAFQADAFAEAAQAGAAADgFQADgFAAgLQAAgKgDgFQgDgFgGAAQgEAAgDAFg");
	this.shape_2.setTransform(91.4,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAhIAAg0IgUAAIAAgNIA7AAIAAANIgVAAIAAA0g");
	this.shape_3.setTransform(84.7,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgEgEQgEgFgBgHQgCgGAAgIQAAgGACgHQACgHAEgFQAEgEAGgDQAGgDAGAAQAQAAAIAKQAHAJAAAQQAAAIgBAGQgCAHgEAFQgEAFgHACQgGADgHAAQgIAAgFgDgAgHgPQgDAFAAAKQAAALADAFQADAFAEAAQAGAAADgFQADgFAAgLQAAgKgDgFQgDgFgGAAQgEAAgDAFg");
	this.shape_4.setTransform(78,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaAuIgCg5IgMAXIgFAHQgDACgEAAQgFAAgCgCQgDgCgCgFIgLgVIgCA3IgUAAIAFhbIAUAAIATArIABACIAAAAIABAAIABgCIAVgrIASAAIAFBbg");
	this.shape_5.setTransform(69.1,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJAbIgJAGQgDADgFAAQgKAAgFgGQgGgGAAgKQABgMAGgDQAIgFAOAAIAHAAIAAgCQAAgFgDgEQgCgDgDAAIgLABIgJADIgEgNQAFgDAHgBIANgCQAHAAAEACQAFACADADQADAEACAFQACAGAAAIIAAAYIADAJIgPAIgAgHAFQgDACAAAGQAAAFADABQACACADAAIAEgBIAFgDIAAgNIgHAAQgEAAgDABg");
	this.shape_6.setTransform(57.9,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAhIAAg0IgVAAIAAgNIA7AAIAAANIgUAAIAAA0g");
	this.shape_7.setTransform(51.2,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgEgEQgEgFgBgHQgCgGAAgIQAAgGACgHQACgHAEgFQAEgEAGgDQAGgDAGAAQAQAAAIAKQAHAJAAAQQAAAIgBAGQgCAHgEAFQgEAFgHACQgGADgHAAQgIAAgFgDgAgHgPQgDAFAAAKQAAALADAFQADAFAEAAQAGAAADgFQADgFAAgLQAAgKgDgFQgDgFgGAAQgEAAgDAFg");
	this.shape_8.setTransform(44.5,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJAwIAAgjIgSAXIAAAMIgTAAIAAhBIATAAIAAAfIASgUIAAgLIAUAAIAABBgAgFgbQgEgBgCgCQgEgCgDgDQgCgEgBgEIAKgFQACAFADABQAEADACAAQAFAAADgDQAEgBACgFIALAFQgCAEgDAEQgCADgDACQgDACgFABIgHABIgFgBg");
	this.shape_9.setTransform(37,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgEgEQgEgFgBgHQgCgGAAgIQAAgGACgHQACgHAEgFQAEgEAGgDQAGgDAGAAQAQAAAIAKQAHAJAAAQQAAAIgBAGQgCAHgEAFQgEAFgHACQgGADgHAAQgIAAgFgDgAgHgPQgDAFAAAKQAAALADAFQADAFAEAAQAGAAADgFQADgFAAgLQAAgKgDgFQgDgFgGAAQgEAAgDAFg");
	this.shape_10.setTransform(29.5,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAuIAAhLIgZAAIAAgQIBFAAIAAAQIgZAAIAABLg");
	this.shape_11.setTransform(23.6,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGAMIgGgFQAAgCAAgEQAAgDAAgDIAFgFIAQgNIAMAGIgPANIgCADIgBABIABACIADADIAOANIgLAGgAgYAMIgGgFQgCgCAAgEQAAgDACgDIAEgFIARgNIAJAGIgLANIgDADIgBABIABACIAEADIALANIgJAGg");
	this.shape_12.setTransform(17.2,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtQgHgDgFgGQgEgGgDgJQgCgKAAgLQAAgWAKgNQALgNASAAQATABALALQAKANAAAXQAAAXgKANQgKAMgUAAQgKAAgIgDgAgGgeQgDABgDAFQgDAEgBAGIgBAOQAAARAFAIQADAHAJAAQAEABADgCQAEgCACgEQADgDABgHIABgPQAAgQgFgIQgDgIgKAAQgCAAgEACg");
	this.shape_13.setTransform(5.8,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAtQgIgDgFgGQgFgGgCgJQgCgKAAgLQAAgWALgNQAJgNATAAQATABAKALQALANAAAXQAAAXgKANQgLAMgTAAQgKAAgHgDgAgGgeQgEABgCAFQgCAEgCAGIgBAOQAAARAEAIQAFAHAIAAQAEABAEgCQADgCACgEQACgDACgHIABgPQAAgQgEgIQgFgIgJAAQgDAAgDACg");
	this.shape_14.setTransform(-3.6,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAtQgHgDgFgGQgFgGgCgJQgCgKAAgLQAAgWAKgNQAKgNATAAQATABALALQAKANAAAXQAAAXgKANQgKAMgUAAQgKAAgIgDgAgGgeQgDABgDAFQgDAEgBAGIgBAOQAAARAEAIQAEAHAJAAQAEABADgCQAEgCACgEQADgDABgHIABgPQAAgQgFgIQgDgIgKAAQgDAAgDACg");
	this.shape_15.setTransform(-13,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAIIAAgOIAnAAIAAAOg");
	this.shape_16.setTransform(-23.3,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAxIAAhQIgEgKIAPgHIAHAKQADgEAFgDQAEgDAGAAQANAAAGAKQAGAKAAARQAAAIgCAFQgDAGgEAFQgDAFgHACQgFADgIAAIgEgBIgFgBIAAAcgAgDgfIgFAFIAAAgIAEACIAEAAQAFAAAFgFQADgEAAgKIgBgJIgBgHIgDgFQgDgBgDAAQgCAAgDACg");
	this.shape_17.setTransform(-35.4,4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAhQgGgDgEgEQgEgFgBgHQgCgGAAgIQAAgGACgHQACgHAEgFQAEgEAGgDQAGgDAGAAQAQAAAIAKQAHAJAAAQQAAAIgBAGQgCAHgEAFQgEAFgHACQgGADgHAAQgIAAgFgDgAgHgPQgDAFAAAKQAAALADAFQADAFAEAAQAGAAADgFQADgFAAgLQAAgKgDgFQgDgFgGAAQgEAAgDAFg");
	this.shape_18.setTransform(-42.9,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAhIAAg0IgVAAIAAgNIA7AAIAAANIgVAAIAAA0g");
	this.shape_19.setTransform(-49.6,2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAIAbIgIAGQgDADgFAAQgKAAgFgGQgGgGABgKQgBgMAIgDQAHgFAOAAIAHAAIAAgCQAAgFgCgEQgCgDgEAAIgKABIgJADIgGgNQAGgDAIgBIAMgCQAGAAAFACQAGACACADQAEAEABAFQABAGAAAIIAAAYIAEAJIgOAIgAgHAFQgDACAAAGQAAAFACABQACACAFAAIADgBIAFgDIAAgNIgHAAQgEAAgDABg");
	this.shape_20.setTransform(-56.1,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAhIgLgGIAHgLIAIAEQAEACAHAAQAEAAACgCQACgCAAgEQAAgEgDgCQgCgCgFAAIgLAAIAAgMIAKAAQAEAAADgBQADgCAAgEIAAgDIgCgDIgDgCIgDAAIgEAAIgFABIgFACIgEACIgFgLIALgFQAGgDAHAAQAHAAAFACQAFABADADQADADABADIABAIIAAADIgCAEIgDAEIgEAEQAGAAADAEQACAFAAAFQAAAKgHAGQgHAGgNAAQgJAAgGgDg");
	this.shape_21.setTransform(-62.9,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAKAhIAAghIgTAVIAAAMIgUAAIAAhBIAUAAIAAAgIATgVIAAgLIAUAAIAABBg");
	this.shape_22.setTransform(-69.7,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAJAhIAAgbIgSAAIAAAbIgTAAIAAhBIATAAIAAAaIASAAIAAgaIAUAAIAABBg");
	this.shape_23.setTransform(-77.3,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAIAbIgIAGQgDADgFAAQgKAAgFgGQgFgGAAgKQgBgMAIgDQAHgFAOAAIAHAAIAAgCQAAgFgCgEQgCgDgEAAIgKABIgJADIgGgNQAGgDAIgBIAMgCQAGAAAGACQAEACADADQAEAEABAFQACAGgBAIIAAAYIAFAJIgPAIgAgHAFQgDACAAAGQAAAFACABQADACAEAAIADgBIAFgDIAAgNIgHAAQgEAAgDABg");
	this.shape_24.setTransform(-84.4,2.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIAtAAIAAANIgZAAIAAA0g");
	this.shape_25.setTransform(-90.3,2.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAxIAAhQIgEgKIAPgHIAHAKQAEgEAEgDQADgDAGAAQANAAAHAKQAGAKAAARQAAAIgCAFQgDAGgEAFQgEAFgGACQgFADgIAAIgEgBIgFgBIAAAcgAgDgfIgFAFIAAAgIAEACIAEAAQAGAAADgFQAEgEAAgKIAAgJIgCgHIgEgFQgCgBgDAAQgCAAgDACg");
	this.shape_26.setTransform(-97.3,4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAtQgIgDgFgGQgEgGgDgJQgCgKAAgLQAAgWALgNQAJgNATAAQATABAKALQALANAAAXQAAAXgKANQgLAMgTAAQgKAAgHgDgAgGgeQgEABgCAFQgCAEgCAGIgBAOQAAARAEAIQAFAHAIAAQAEABAEgCQADgCACgEQACgDACgHIABgPQAAgQgFgIQgEgIgJAAQgCAAgEACg");
	this.shape_27.setTransform(-105.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.6,-9.3,225.2,20.9);


(lib.ruble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAIIAAgPIBRAAIAAAPg");
	this.shape.setTransform(4.2,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAIIAAgOIAcAAIAAAOg");
	this.shape_1.setTransform(1.5,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BLIAAiVIA1AAQALAAAJACQAKADAHAGQAHAGAEAJQAEAJAAANQAAAKgEAJQgEAHgHAGQgHAGgKADQgKAEgLAAIggAAIAAA4gAggADIAfAAIAKgCQAHgBAEgCQAGgDACgGQADgGABgJQgBgKgDgHQgCgGgFgDQgFgEgHgBIgKgBIgfAAg");
	this.shape_2.setTransform(7.2,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.6,15.2);


(lib.reflection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0.737)","rgba(0,0,0,0.337)","rgba(0,0,0,0)"],[0.133,0.42,0.663,0.941],1.9,-32,1.9,32.2).s().p("AvCFbIgtiMIgthsQgtiSAtiVIAtgSQgFhGAtg+ICMAAQAvA0AAAzIB7ATQAnguBngBIJyAeIH7A+QAHgsBJguIDXAUQBXBLAVBxQAoAFAPA4QgEAwgfAWQghCihQBzg");
	this.shape.setTransform(107.6,34.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.3,69.5);


(lib.red_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#810C1B","#A81124","#AB1123"],[0,0.345,0.882],-1.6,-37.1,-2.3,15).s().p("AH9FsI6soQIAAimICjgiIMYAAIiBA3IYlC4IAAHpg");
	this.shape.setTransform(120,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,73);


(lib.logo_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB0720").s().p("AgaAbQgLgLAAgQQAAgOALgMQAMgLAOAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgOAAgMgLgAgOgQQgGAHAAAJQAAAJAGAIQAHAHAHAAQAIAAAHgHQAGgIAAgJQAAgJgGgHQgGgHgJAAQgHAAgHAHg");
	this.shape.setTransform(4,4,1.034,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.light_stripe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAB6BD","#CF223B","#C4152C"],[0.039,0.376,1],-120.9,0.8,121,0.8).s().p("AzhA3MAnCgB+IAAARMgnCAB+g");
	this.shape.setTransform(120,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0.8,250,14.5);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,112);


(lib.black_plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.black_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah3B3QgygxAAhGQAAhFAygzQAygwBFgBQBGABAxAwQAzAzAABFQAABGgzAxQgxAzhGAAQhFAAgygzg");
	this.shape.setTransform(17,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(108,108,110,0)","#6C6C6E","#6C6C6E","#BCBDC0","#CCCDCF","#B8BABC"],[0.043,0.298,0.349,0.588,0.769,1],-0.9,-73.9,0.9,74).s().p("AyvLtIAA3ZMAlfAAAIAAXZg");
	this.shape.setTransform(120,325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E0E0E0","#CECFCF","#ADAFB2","#656668"],[0,0.365,0.604,0.957],2,-34,0,2,-34,200.6).s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.wheel_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 2
	this.instance = new lib.wheel_1();
	this.instance.setTransform(0,0,1,1,0,0,0,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:18.2,y:0.1},0).wait(1).to({rotation:36,x:0.1},0).wait(1).to({rotation:53.3,x:0,y:0},0).wait(1).to({rotation:70.1,y:0.1},0).wait(1).to({rotation:86.4,y:0},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:117.6,y:0.1},0).wait(1).to({rotation:132.5,y:0},0).wait(1).to({rotation:147},0).wait(1).to({rotation:160.9},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:187.5},0).wait(1).to({rotation:200},0).wait(1).to({rotation:212.1},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:234.8},0).wait(1).to({rotation:245.4,x:0.1},0).wait(1).to({rotation:255.6},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:283.3},0).wait(1).to({rotation:291.6,x:0},0).wait(1).to({rotation:299.4,x:0.1},0).wait(1).to({rotation:306.7,x:0},0).wait(1).to({rotation:313.6},0).wait(1).to({rotation:320,y:0.1},0).wait(1).to({rotation:325.9,x:0.1},0).wait(1).to({rotation:331.4},0).wait(1).to({rotation:336.3,y:0},0).wait(1).to({rotation:340.8},0).wait(1).to({rotation:344.9,x:0,y:0.1},0).wait(1).to({rotation:348.4},0).wait(1).to({rotation:351.5},0).wait(1).to({rotation:354.1},0).wait(1).to({rotation:356.2,y:0},0).wait(1).to({rotation:357.9,x:0.1,y:0.1},0).wait(1).to({rotation:359.1,x:0},0).wait(1).to({rotation:359.8,x:0.1,y:0},0).wait(1).to({rotation:360,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.txt03_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AgOFAIAAlSIAdAAIAAFSg");
	var mask_graphics_6 = new cjs.Graphics().p("AgQFAIAAlSIAhAAIAAFSg");
	var mask_graphics_7 = new cjs.Graphics().p("AgXFAIAAlSIAvAAIAAFSg");
	var mask_graphics_8 = new cjs.Graphics().p("AgiFAIAAlSIBFAAIAAFSg");
	var mask_graphics_9 = new cjs.Graphics().p("AgxFAIAAlSIBjAAIAAFSg");
	var mask_graphics_10 = new cjs.Graphics().p("AhEFAIAAlSICJAAIAAFSg");
	var mask_graphics_11 = new cjs.Graphics().p("AhaFAIAAlSIC1AAIAAFSg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah0FAIAAlSIDpAAIAAFSg");
	var mask_graphics_13 = new cjs.Graphics().p("AiQFAIAAlSIEhAAIAAFSg");
	var mask_graphics_14 = new cjs.Graphics().p("AivFAIAAlSIFfAAIAAFSg");
	var mask_graphics_15 = new cjs.Graphics().p("AjQFAIAAlSIGhAAIAAFSg");
	var mask_graphics_16 = new cjs.Graphics().p("AjzFAIAAlSIHnAAIAAFSg");
	var mask_graphics_17 = new cjs.Graphics().p("AkXFAIAAlSIIvAAIAAFSg");
	var mask_graphics_18 = new cjs.Graphics().p("Ak+FAIAAlSIJ9AAIAAFSg");
	var mask_graphics_19 = new cjs.Graphics().p("AllFAIAAlSILLAAIAAFSg");
	var mask_graphics_20 = new cjs.Graphics().p("AmNFAIAAlSIMbAAIAAFSg");
	var mask_graphics_21 = new cjs.Graphics().p("Am2FAIAAlSINtAAIAAFSg");
	var mask_graphics_22 = new cjs.Graphics().p("AnfFAIAAlSIO/AAIAAFSg");
	var mask_graphics_23 = new cjs.Graphics().p("AoIFAIAAlSIQRAAIAAFSg");
	var mask_graphics_24 = new cjs.Graphics().p("AowFAIAAlSIRhAAIAAFSg");
	var mask_graphics_25 = new cjs.Graphics().p("ApYFAIAAlSISxAAIAAFSg");
	var mask_graphics_26 = new cjs.Graphics().p("AqAFAIAAlSIUBAAIAAFSg");
	var mask_graphics_27 = new cjs.Graphics().p("AqmFAIAAlSIVNAAIAAFSg");
	var mask_graphics_28 = new cjs.Graphics().p("ArKFAIAAlSIWVAAIAAFSg");
	var mask_graphics_29 = new cjs.Graphics().p("ArtFAIAAlSIXcAAIAAFSg");
	var mask_graphics_30 = new cjs.Graphics().p("AsPFAIAAlSIYfAAIAAFSg");
	var mask_graphics_31 = new cjs.Graphics().p("AstFAIAAlSIZbAAIAAFSg");
	var mask_graphics_32 = new cjs.Graphics().p("AtJFAIAAlSIaTAAIAAFSg");
	var mask_graphics_33 = new cjs.Graphics().p("AtjFAIAAlSIbHAAIAAFSg");
	var mask_graphics_34 = new cjs.Graphics().p("At5FAIAAlSIbzAAIAAFSg");
	var mask_graphics_35 = new cjs.Graphics().p("AuMFAIAAlSIcZAAIAAFSg");
	var mask_graphics_36 = new cjs.Graphics().p("AubFAIAAlSIc3AAIAAFSg");
	var mask_graphics_37 = new cjs.Graphics().p("AumFAIAAlSIdNAAIAAFSg");
	var mask_graphics_38 = new cjs.Graphics().p("AutFAIAAlSIdbAAIAAFSg");
	var mask_graphics_39 = new cjs.Graphics().p("AuvFAIAAlSIdfAAIAAFSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-0.5,y:32.1}).wait(1).to({graphics:mask_graphics_6,x:-0.2,y:32.1}).wait(1).to({graphics:mask_graphics_7,x:0.5,y:32.1}).wait(1).to({graphics:mask_graphics_8,x:1.6,y:32.1}).wait(1).to({graphics:mask_graphics_9,x:3.1,y:32.1}).wait(1).to({graphics:mask_graphics_10,x:5,y:32.1}).wait(1).to({graphics:mask_graphics_11,x:7.2,y:32.1}).wait(1).to({graphics:mask_graphics_12,x:9.7,y:32.1}).wait(1).to({graphics:mask_graphics_13,x:12.5,y:32.1}).wait(1).to({graphics:mask_graphics_14,x:15.6,y:32.1}).wait(1).to({graphics:mask_graphics_15,x:18.9,y:32.1}).wait(1).to({graphics:mask_graphics_16,x:22.4,y:32.1}).wait(1).to({graphics:mask_graphics_17,x:26,y:32.1}).wait(1).to({graphics:mask_graphics_18,x:29.8,y:32.1}).wait(1).to({graphics:mask_graphics_19,x:33.7,y:32.1}).wait(1).to({graphics:mask_graphics_20,x:37.7,y:32.1}).wait(1).to({graphics:mask_graphics_21,x:41.8,y:32.1}).wait(1).to({graphics:mask_graphics_22,x:45.9,y:32.1}).wait(1).to({graphics:mask_graphics_23,x:50,y:32.1}).wait(1).to({graphics:mask_graphics_24,x:54,y:32.1}).wait(1).to({graphics:mask_graphics_25,x:58,y:32.1}).wait(1).to({graphics:mask_graphics_26,x:61.9,y:32.1}).wait(1).to({graphics:mask_graphics_27,x:65.7,y:32.1}).wait(1).to({graphics:mask_graphics_28,x:69.4,y:32.1}).wait(1).to({graphics:mask_graphics_29,x:72.9,y:32.1}).wait(1).to({graphics:mask_graphics_30,x:76.2,y:32.1}).wait(1).to({graphics:mask_graphics_31,x:79.3,y:32.1}).wait(1).to({graphics:mask_graphics_32,x:82.1,y:32.1}).wait(1).to({graphics:mask_graphics_33,x:84.6,y:32.1}).wait(1).to({graphics:mask_graphics_34,x:86.8,y:32.1}).wait(1).to({graphics:mask_graphics_35,x:88.7,y:32.1}).wait(1).to({graphics:mask_graphics_36,x:90.2,y:32.1}).wait(1).to({graphics:mask_graphics_37,x:91.3,y:32.1}).wait(1).to({graphics:mask_graphics_38,x:92,y:32.1}).wait(1).to({graphics:mask_graphics_39,x:92.5,y:32.1}).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAJQgGANgGAIIgLgJIAQgSIgYgDIAEgPQAQAGAHAEIgCgYIAMAAIgCAYQAKgFANgFIAFAPQgNACgMABIARASIgMAJIgMgVg");
	this.shape.setTransform(181.4,33.7);

	this.instance = new lib.ruble();
	this.instance.setTransform(169.3,48.5,1,1,0,0,0,6.3,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzB5QgVgKgNgRQgMgSgHgYQgFgXgBgcQABgaAGgYQAIgYAOgTQANgRAWgLQAWgKAbAAQAcgBATALQAVAKANARQANASAHAYQAGAYAAAbQABAbgIAYQgGAZgPASQgOARgVAKQgUAKgbAAQgdAAgWgKgAgYhRQgKAHgHALQgIAMgCAQQgEARAAATQAAAoAOAYQAOAXAbAAQAdAAANgWQANgWAAgsQAAgsgNgVQgNgVgdAAQgNAAgLAFg");
	this.shape_1.setTransform(141.6,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzB5QgUgKgNgRQgNgSgHgYQgFgXAAgcQgBgaAIgYQAGgYAPgTQAOgRAVgLQAWgKAcAAQAagBAVALQATAKAOARQAOASAGAYQAHAYgBAbQAAAbgGAYQgIAZgOASQgOARgVAKQgUAKgbAAQgeAAgVgKgAgYhRQgKAHgHALQgIAMgDAQQgDARAAATQAAAoAOAYQAOAXAbAAQAdAAANgWQANgWAAgsQAAgsgNgVQgNgVgdAAQgNAAgLAFg");
	this.shape_2.setTransform(116.2,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyB5QgWgKgMgRQgOgSgFgYQgHgXAAgcQAAgaAIgYQAGgYAOgTQAOgRAWgLQAWgKAcAAQAbgBATALQAVAKANARQANASAHAYQAGAYABAbQAAAbgHAYQgIAZgNASQgPARgUAKQgWAKgaAAQgeAAgUgKgAgYhRQgKAHgHALQgHAMgDAQQgEARAAATQAAAoAOAYQANAXAcAAQAdAAANgWQAOgWAAgsQAAgsgOgVQgNgVgdAAQgOAAgKAFg");
	this.shape_3.setTransform(90.9,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9B8QgWgGgMgGIAOgsQAVAIASAFQARAEASAAQAVAAANgLQANgLAAgUQAAgTgMgKQgNgJgRAAQgKAAgKACQgLADgOAFIgagPIAFiBICXAAIAAAuIhpAAIgCA0QAHgCAKgCIASgBQAQAAAQAEQAPAFAMAJQAMAKAHANQAHAPAAAWQAAASgGAQQgGAQgNAMQgNAMgUAHQgUAHgZAAQggAAgWgGg");
	this.shape_4.setTransform(59.3,50.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKCBIAAgsIA7AAIAAiTQAAgGgDAAIgGACIgmAcIgdgkIA7gpQATgNARAAQAOAAAJAHQAJAIAAATIAACzIA4AAIAAAsg");
	this.shape_5.setTransform(36.9,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQCAIAAg7IhMAAQgWAAgNgLQgLgLAAgSQAAgSATgTIBuh3IAuAAIAACYIAmAAIAAAsIgmAAIAAA7gAg1ANQgDADAAADQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQABACAEAAIBBAAIAAhTg");
	this.shape_6.setTransform(14,50.3);

	this.shape.mask = this.instance.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]},5).wait(35));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgOCTIAAkCIAdAAIAAECg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgQCTIAAkCIAhAAIAAECg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgXCTIAAkCIAvAAIAAECg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AghCTIAAkCIBDAAIAAECg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgwCTIAAkCIBhAAIAAECg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhCCTIAAkCICFAAIAAECg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhYCTIAAkCICxAAIAAECg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhwCTIAAkCIDhAAIAAECg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AiLCTIAAkCIEXAAIAAECg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AipCTIAAkCIFTAAIAAECg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjICTIAAkCIGRAAIAAECg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjqCTIAAkCIHVAAIAAECg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkNCTIAAkCIIbAAIAAECg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkyCTIAAkCIJlAAIAAECg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AlYCTIAAkCIKxAAIAAECg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Al+CTIAAkCIL9AAIAAECg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AmlCTIAAkCINLAAIAAECg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AnNCTIAAkCIObAAIAAECg");
	var mask_1_graphics_18 = new cjs.Graphics().p("An0CTIAAkCIPpAAIAAECg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AobCTIAAkCIQ3AAIAAECg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ApCCTIAAkCISFAAIAAECg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ApoCTIAAkCITRAAIAAECg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AqMCTIAAkCIUZAAIAAECg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AqwCTIAAkCIVhAAIAAECg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ArRCTIAAkCIWjAAIAAECg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ArxCTIAAkCIXjAAIAAECg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AsPCTIAAkCIYfAAIAAECg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AsqCTIAAkCIZVAAIAAECg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AtCCTIAAkCIaFAAIAAECg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AtXCTIAAkCIavAAIAAECg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AtpCTIAAkCIbTAAIAAECg");
	var mask_1_graphics_31 = new cjs.Graphics().p("At4CTIAAkCIbxAAIAAECg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AuDCTIAAkCIcHAAIAAECg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AuJCTIAAkCIcTAAIAAECg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AuMCTIAAkCIcZAAIAAECg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.5,y:14.8}).wait(1).to({graphics:mask_1_graphics_1,x:-0.2,y:14.8}).wait(1).to({graphics:mask_1_graphics_2,x:0.4,y:14.8}).wait(1).to({graphics:mask_1_graphics_3,x:1.5,y:14.8}).wait(1).to({graphics:mask_1_graphics_4,x:2.9,y:14.8}).wait(1).to({graphics:mask_1_graphics_5,x:4.8,y:14.8}).wait(1).to({graphics:mask_1_graphics_6,x:6.9,y:14.8}).wait(1).to({graphics:mask_1_graphics_7,x:9.3,y:14.8}).wait(1).to({graphics:mask_1_graphics_8,x:12,y:14.8}).wait(1).to({graphics:mask_1_graphics_9,x:15,y:14.8}).wait(1).to({graphics:mask_1_graphics_10,x:18.1,y:14.8}).wait(1).to({graphics:mask_1_graphics_11,x:21.5,y:14.8}).wait(1).to({graphics:mask_1_graphics_12,x:25,y:14.8}).wait(1).to({graphics:mask_1_graphics_13,x:28.7,y:14.8}).wait(1).to({graphics:mask_1_graphics_14,x:32.4,y:14.8}).wait(1).to({graphics:mask_1_graphics_15,x:36.3,y:14.8}).wait(1).to({graphics:mask_1_graphics_16,x:40.2,y:14.8}).wait(1).to({graphics:mask_1_graphics_17,x:44.1,y:14.8}).wait(1).to({graphics:mask_1_graphics_18,x:48.1,y:14.8}).wait(1).to({graphics:mask_1_graphics_19,x:52,y:14.8}).wait(1).to({graphics:mask_1_graphics_20,x:55.8,y:14.8}).wait(1).to({graphics:mask_1_graphics_21,x:59.6,y:14.8}).wait(1).to({graphics:mask_1_graphics_22,x:63.2,y:14.8}).wait(1).to({graphics:mask_1_graphics_23,x:66.8,y:14.8}).wait(1).to({graphics:mask_1_graphics_24,x:70.1,y:14.8}).wait(1).to({graphics:mask_1_graphics_25,x:73.3,y:14.8}).wait(1).to({graphics:mask_1_graphics_26,x:76.2,y:14.8}).wait(1).to({graphics:mask_1_graphics_27,x:78.9,y:14.8}).wait(1).to({graphics:mask_1_graphics_28,x:81.4,y:14.8}).wait(1).to({graphics:mask_1_graphics_29,x:83.5,y:14.8}).wait(1).to({graphics:mask_1_graphics_30,x:85.3,y:14.8}).wait(1).to({graphics:mask_1_graphics_31,x:86.8,y:14.8}).wait(1).to({graphics:mask_1_graphics_32,x:87.8,y:14.8}).wait(1).to({graphics:mask_1_graphics_33,x:88.5,y:14.8}).wait(1).to({graphics:mask_1_graphics_34,x:88.9,y:14.8}).wait(6));

	// Слой 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBFQgNgHgJgKQgIgKgDgOQgEgOAAgOQAAgNAEgOQAEgNAIgLQAIgKANgGQANgHAQAAQARAAANAHQANAGAIAKQAIALAEANQAEAOAAANQAAAOgEAOQgEAOgIAKQgIAKgNAHQgNAGgRAAQgRAAgMgGgAgTg1QgJAFgGAIQgGAIgCAKQgDALAAALQAAAMADALQACALAGAIQAGAHAJAFQAJAFAKAAQALAAAJgFQAJgFAGgHQAFgIADgLQADgLAAgMQAAgLgDgLQgDgKgFgIQgGgIgJgFQgJgEgLAAQgKAAgJAEg");
	this.shape_7.setTransform(148,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAwBWIAAgdIhfAAIAAAdIgTAAIAAgtIALAAQAFgFAEgGQAEgGADgHIAEgRIAEgWIAHg/IBQAAIAAB+IALAAIAAAtgAgNgPIgDASQgBAJgDAHIgEAMIgHAKIBDAAIAAhuIgqAAg");
	this.shape_8.setTransform(132.7,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBdIAAhiIhHBRIAAARIgUAAIAAiOIAUAAIAABlIBHhQIAAgVIAUAAIAACOgAgVhEQgKgHgDgMIAPgFQACAHAGAFQAFAEAIAAQAJAAAGgEQAFgFADgHIAPAFQgCAGgDAFQgEAFgFADQgEAEgHACQgGABgHAAQgNAAgKgHg");
	this.shape_9.setTransform(114.1,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBFQgNgHgJgKQgIgKgDgOQgEgOAAgOQAAgNAEgOQAEgNAIgLQAIgKANgGQANgHAQAAQARAAANAHQANAGAIAKQAIALAEANQAEAOAAANQAAAOgEAOQgEAOgIAKQgIAKgNAHQgNAGgRAAQgRAAgMgGgAgTg1QgJAFgGAIQgGAIgCAKQgDALAAALQAAAMADALQACALAGAIQAGAHAJAFQAJAFAKAAQALAAAJgFQAJgFAGgHQAFgIADgLQADgLAAgMQAAgLgDgLQgDgKgFgIQgGgIgJgFQgJgEgLAAQgKAAgJAEg");
	this.shape_10.setTransform(99,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvBWIAAgdIhdAAIAAAdIgUAAIAAgtIAMAAQAEgFAEgGQAEgGACgHIAFgRIAEgWIAHg/IBPAAIAAB+IAMAAIAAAtgAgNgPIgDASQgCAJgCAHIgFAMIgGAKIBDAAIAAhuIgqAAg");
	this.shape_11.setTransform(83.7,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBFQgNgHgJgKQgIgKgDgOQgEgOAAgOQAAgNAEgOQAEgNAIgLQAIgKANgGQANgHAQAAQARAAANAHQANAGAIAKQAIALAEANQAEAOAAANQAAAOgEAOQgEAOgIAKQgIAKgNAHQgNAGgRAAQgRAAgMgGgAgTg1QgJAFgGAIQgGAIgCAKQgDALAAALQAAAMADALQACALAGAIQAGAHAJAFQAJAFAKAAQALAAAJgFQAJgFAGgHQAFgIADgLQADgLAAgMQAAgLgDgLQgDgKgFgIQgGgIgJgFQgJgEgLAAQgKAAgJAEg");
	this.shape_12.setTransform(69.4,15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBHIAAiOIBcAAIAAAQIhIAAIAAB+g");
	this.shape_13.setTransform(57.8,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA0BHIAAiOIATAAIAACOgAhHBHIAAiOIAUAAIAAA7IAnAAQAVAAAMAKQAMAIAAAVQAAAWgNALQgOAMgZgBgAgzA3IAfAAIANgBQAHgCADgDQAFgCACgGQACgGABgHQgBgJgCgFQgCgFgFgDQgDgCgFgBIgOgBIggAAg");
	this.shape_14.setTransform(42.6,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA0AAQAJAAAIACQAJACAIAEQAHAFADAHQAFAHAAALQAAAFgCAEQgCAEgCAFIgHAGIgGAGQAEAAAFADQAEABAFAEQAEAFACAGQADAGAAAJQAAAKgEAHQgEAHgGAGQgGAFgJADQgJACgLAAgAgiA4IAmAAQANAAAJgGQAJgGgBgNQAAgGgBgEIgEgHIgGgFIgHgDIgIgCIgIAAIgiAAgAgigKIAhAAQAFABAFgCQAFgCAEgCQAEgDACgEQACgFAAgGQAAgMgJgFQgJgFgOAAIgcAAg");
	this.shape_15.setTransform(27.4,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWBFQgNgGgJgKQgIgKgDgNQgEgOAAgQQAAgPAFgNQAFgOAIgKQAJgKAOgGQANgGAQAAQARAAAKADIAVAHIgGAPIgLgEIgKgDIgKgBIgKAAQgXAAgOAPQgNAPAAAbQAAAdAMAPQANAPAXAAIANgBIALgBIAKgDIAKgFIAGAPQgLAFgMADQgMADgPAAQgSAAgOgGg");
	this.shape_16.setTransform(9,15.7);

	this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.6,1.1,26);


(lib.txt02_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("AgOGHIAAj6IAdAAIAAD6g");
	var mask_graphics_11 = new cjs.Graphics().p("AgPGHIAAj6IAfAAIAAD6g");
	var mask_graphics_12 = new cjs.Graphics().p("AgUGHIAAj6IApAAIAAD6g");
	var mask_graphics_13 = new cjs.Graphics().p("AgbGHIAAj6IA3AAIAAD6g");
	var mask_graphics_14 = new cjs.Graphics().p("AglGHIAAj6IBLAAIAAD6g");
	var mask_graphics_15 = new cjs.Graphics().p("AgxGHIAAj6IBjAAIAAD6g");
	var mask_graphics_16 = new cjs.Graphics().p("AhAGHIAAj6ICBAAIAAD6g");
	var mask_graphics_17 = new cjs.Graphics().p("AhQGHIAAj6IChAAIAAD6g");
	var mask_graphics_18 = new cjs.Graphics().p("AhjGHIAAj6IDHAAIAAD6g");
	var mask_graphics_19 = new cjs.Graphics().p("Ah3GHIAAj6IDvAAIAAD6g");
	var mask_graphics_20 = new cjs.Graphics().p("AiMGHIAAj6IEZAAIAAD6g");
	var mask_graphics_21 = new cjs.Graphics().p("AijGHIAAj6IFHAAIAAD6g");
	var mask_graphics_22 = new cjs.Graphics().p("Ai7GHIAAj6IF3AAIAAD6g");
	var mask_graphics_23 = new cjs.Graphics().p("AjUGHIAAj6IGpAAIAAD6g");
	var mask_graphics_24 = new cjs.Graphics().p("AjtGHIAAj6IHbAAIAAD6g");
	var mask_graphics_25 = new cjs.Graphics().p("AkHGHIAAj6IIPAAIAAD6g");
	var mask_graphics_26 = new cjs.Graphics().p("AkhGHIAAj6IJDAAIAAD6g");
	var mask_graphics_27 = new cjs.Graphics().p("Ak8GHIAAj6IJ5AAIAAD6g");
	var mask_graphics_28 = new cjs.Graphics().p("AlWGHIAAj6IKtAAIAAD6g");
	var mask_graphics_29 = new cjs.Graphics().p("AlxGHIAAj6ILjAAIAAD6g");
	var mask_graphics_30 = new cjs.Graphics().p("AmLGHIAAj6IMXAAIAAD6g");
	var mask_graphics_31 = new cjs.Graphics().p("AmkGHIAAj6INJAAIAAD6g");
	var mask_graphics_32 = new cjs.Graphics().p("Am9GHIAAj6IN7AAIAAD6g");
	var mask_graphics_33 = new cjs.Graphics().p("AnUGHIAAj6IOpAAIAAD6g");
	var mask_graphics_34 = new cjs.Graphics().p("AnrGHIAAj6IPXAAIAAD6g");
	var mask_graphics_35 = new cjs.Graphics().p("AoAGHIAAj6IQBAAIAAD6g");
	var mask_graphics_36 = new cjs.Graphics().p("AoUGHIAAj6IQpAAIAAD6g");
	var mask_graphics_37 = new cjs.Graphics().p("AonGHIAAj6IRPAAIAAD6g");
	var mask_graphics_38 = new cjs.Graphics().p("Ao3GHIAAj6IRvAAIAAD6g");
	var mask_graphics_39 = new cjs.Graphics().p("ApFGHIAAj6ISLAAIAAD6g");
	var mask_graphics_40 = new cjs.Graphics().p("ApSGHIAAj6ISlAAIAAD6g");
	var mask_graphics_41 = new cjs.Graphics().p("ApbGHIAAj6IS3AAIAAD6g");
	var mask_graphics_42 = new cjs.Graphics().p("ApjGHIAAj6ITHAAIAAD6g");
	var mask_graphics_43 = new cjs.Graphics().p("ApnGHIAAj6ITPAAIAAD6g");
	var mask_graphics_44 = new cjs.Graphics().p("AppGHIAAj6ITTAAIAAD6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-0.5,y:39.1}).wait(1).to({graphics:mask_graphics_11,x:-0.3,y:39.1}).wait(1).to({graphics:mask_graphics_12,x:0.1,y:39.1}).wait(1).to({graphics:mask_graphics_13,x:0.9,y:39.1}).wait(1).to({graphics:mask_graphics_14,x:1.9,y:39.1}).wait(1).to({graphics:mask_graphics_15,x:3.1,y:39.1}).wait(1).to({graphics:mask_graphics_16,x:4.5,y:39.1}).wait(1).to({graphics:mask_graphics_17,x:6.2,y:39.1}).wait(1).to({graphics:mask_graphics_18,x:8,y:39.1}).wait(1).to({graphics:mask_graphics_19,x:10,y:39.1}).wait(1).to({graphics:mask_graphics_20,x:12.2,y:39.1}).wait(1).to({graphics:mask_graphics_21,x:14.5,y:39.1}).wait(1).to({graphics:mask_graphics_22,x:16.8,y:39.1}).wait(1).to({graphics:mask_graphics_23,x:19.3,y:39.1}).wait(1).to({graphics:mask_graphics_24,x:21.9,y:39.1}).wait(1).to({graphics:mask_graphics_25,x:24.5,y:39.1}).wait(1).to({graphics:mask_graphics_26,x:27.1,y:39.1}).wait(1).to({graphics:mask_graphics_27,x:29.8,y:39.1}).wait(1).to({graphics:mask_graphics_28,x:32.4,y:39.1}).wait(1).to({graphics:mask_graphics_29,x:35,y:39.1}).wait(1).to({graphics:mask_graphics_30,x:37.6,y:39.1}).wait(1).to({graphics:mask_graphics_31,x:40.2,y:39.1}).wait(1).to({graphics:mask_graphics_32,x:42.6,y:39.1}).wait(1).to({graphics:mask_graphics_33,x:45,y:39.1}).wait(1).to({graphics:mask_graphics_34,x:47.3,y:39.1}).wait(1).to({graphics:mask_graphics_35,x:49.4,y:39.1}).wait(1).to({graphics:mask_graphics_36,x:51.4,y:39.1}).wait(1).to({graphics:mask_graphics_37,x:53.2,y:39.1}).wait(1).to({graphics:mask_graphics_38,x:54.9,y:39.1}).wait(1).to({graphics:mask_graphics_39,x:56.3,y:39.1}).wait(1).to({graphics:mask_graphics_40,x:57.5,y:39.1}).wait(1).to({graphics:mask_graphics_41,x:58.5,y:39.1}).wait(1).to({graphics:mask_graphics_42,x:59.2,y:39.1}).wait(1).to({graphics:mask_graphics_43,x:59.7,y:39.1}).wait(1).to({graphics:mask_graphics_44,x:59.8,y:39.1}).wait(1));

	// line03
	this.instance = new lib.txt02();
	this.instance.setTransform(106.5,38,1,1,0,0,0,106.5,38);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(35));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("AgOEHIAAjmIAdAAIAADmg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AgQEHIAAjmIAhAAIAADmg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AgYEHIAAjmIAxAAIAADmg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AgkEHIAAjmIBJAAIAADmg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ag1EHIAAjmIBrAAIAADmg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AhKEHIAAjmICVAAIAADmg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AhjEHIAAjmIDGAAIAADmg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ah/EHIAAjmID/AAIAADmg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AifEHIAAjmIE/AAIAADmg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjBEHIAAjmIGDAAIAADmg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjnEHIAAjmIHPAAIAADmg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkOEHIAAjmIIdAAIAADmg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ak4EHIAAjmIJxAAIAADmg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AlkEHIAAjmILJAAIAADmg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AmREHIAAjmIMjAAIAADmg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Am/EHIAAjmIN/AAIAADmg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AnuEHIAAjmIPdAAIAADmg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AodEHIAAjmIQ7AAIAADmg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ApNEHIAAjmISbAAIAADmg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ap8EHIAAjmIT5AAIAADmg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AqrEHIAAjmIVXAAIAADmg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ArYEHIAAjmIWxAAIAADmg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AsFEHIAAjmIYLAAIAADmg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AsvEHIAAjmIZfAAIAADmg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AtYEHIAAjmIaxAAIAADmg");
	var mask_1_graphics_30 = new cjs.Graphics().p("At/EHIAAjmIb/AAIAADmg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AuiEHIAAjmIdFAAIAADmg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AvDEHIAAjmIeHAAIAADmg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AvhEHIAAjmIfDAAIAADmg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Av6EHIAAjmIf1AAIAADmg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AwQEHIAAjmMAghAAAIAADmg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AwiEHIAAjmMAhFAAAIAADmg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AwvEHIAAjmMAhfAAAIAADmg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Aw3EHIAAjmMAhvAAAIAADmg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Aw5EHIAAjmMAhzAAAIAADmg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:-0.5,y:26.3}).wait(1).to({graphics:mask_1_graphics_6,x:-0.2,y:26.3}).wait(1).to({graphics:mask_1_graphics_7,x:0.5,y:26.3}).wait(1).to({graphics:mask_1_graphics_8,x:1.8,y:26.3}).wait(1).to({graphics:mask_1_graphics_9,x:3.4,y:26.3}).wait(1).to({graphics:mask_1_graphics_10,x:5.5,y:26.3}).wait(1).to({graphics:mask_1_graphics_11,x:8,y:26.3}).wait(1).to({graphics:mask_1_graphics_12,x:10.8,y:26.3}).wait(1).to({graphics:mask_1_graphics_13,x:14,y:26.3}).wait(1).to({graphics:mask_1_graphics_14,x:17.5,y:26.3}).wait(1).to({graphics:mask_1_graphics_15,x:21.2,y:26.3}).wait(1).to({graphics:mask_1_graphics_16,x:25.2,y:26.3}).wait(1).to({graphics:mask_1_graphics_17,x:29.4,y:26.3}).wait(1).to({graphics:mask_1_graphics_18,x:33.8,y:26.3}).wait(1).to({graphics:mask_1_graphics_19,x:38.3,y:26.3}).wait(1).to({graphics:mask_1_graphics_20,x:42.9,y:26.3}).wait(1).to({graphics:mask_1_graphics_21,x:47.6,y:26.3}).wait(1).to({graphics:mask_1_graphics_22,x:52.3,y:26.3}).wait(1).to({graphics:mask_1_graphics_23,x:57.1,y:26.3}).wait(1).to({graphics:mask_1_graphics_24,x:61.8,y:26.3}).wait(1).to({graphics:mask_1_graphics_25,x:66.4,y:26.3}).wait(1).to({graphics:mask_1_graphics_26,x:71,y:26.3}).wait(1).to({graphics:mask_1_graphics_27,x:75.4,y:26.3}).wait(1).to({graphics:mask_1_graphics_28,x:79.7,y:26.3}).wait(1).to({graphics:mask_1_graphics_29,x:83.8,y:26.3}).wait(1).to({graphics:mask_1_graphics_30,x:87.6,y:26.3}).wait(1).to({graphics:mask_1_graphics_31,x:91.2,y:26.3}).wait(1).to({graphics:mask_1_graphics_32,x:94.5,y:26.3}).wait(1).to({graphics:mask_1_graphics_33,x:97.5,y:26.3}).wait(1).to({graphics:mask_1_graphics_34,x:100,y:26.3}).wait(1).to({graphics:mask_1_graphics_35,x:102.2,y:26.3}).wait(1).to({graphics:mask_1_graphics_36,x:104,y:26.3}).wait(1).to({graphics:mask_1_graphics_37,x:105.3,y:26.3}).wait(1).to({graphics:mask_1_graphics_38,x:106.1,y:26.3}).wait(1).to({graphics:mask_1_graphics_39,x:106.3,y:26.3}).wait(6));

	// line02
	this.instance_1 = new lib.txt02();
	this.instance_1.setTransform(106.5,38,1,1,0,0,0,106.5,38);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(40));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AgOCSIAAjaIAdAAIAADag");
	var mask_2_graphics_1 = new cjs.Graphics().p("AgQCSIAAjaIAhAAIAADag");
	var mask_2_graphics_2 = new cjs.Graphics().p("AgXCSIAAjaIAvAAIAADag");
	var mask_2_graphics_3 = new cjs.Graphics().p("AghCSIAAjaIBDAAIAADag");
	var mask_2_graphics_4 = new cjs.Graphics().p("AgwCSIAAjaIBhAAIAADag");
	var mask_2_graphics_5 = new cjs.Graphics().p("AhCCSIAAjaICFAAIAADag");
	var mask_2_graphics_6 = new cjs.Graphics().p("AhYCSIAAjaICxAAIAADag");
	var mask_2_graphics_7 = new cjs.Graphics().p("AhwCSIAAjaIDhAAIAADag");
	var mask_2_graphics_8 = new cjs.Graphics().p("AiLCSIAAjaIEXAAIAADag");
	var mask_2_graphics_9 = new cjs.Graphics().p("AipCSIAAjaIFTAAIAADag");
	var mask_2_graphics_10 = new cjs.Graphics().p("AjICSIAAjaIGRAAIAADag");
	var mask_2_graphics_11 = new cjs.Graphics().p("AjqCSIAAjaIHVAAIAADag");
	var mask_2_graphics_12 = new cjs.Graphics().p("AkNCSIAAjaIIbAAIAADag");
	var mask_2_graphics_13 = new cjs.Graphics().p("AkyCSIAAjaIJlAAIAADag");
	var mask_2_graphics_14 = new cjs.Graphics().p("AlYCSIAAjaIKxAAIAADag");
	var mask_2_graphics_15 = new cjs.Graphics().p("Al+CSIAAjaIL9AAIAADag");
	var mask_2_graphics_16 = new cjs.Graphics().p("AmlCSIAAjaINLAAIAADag");
	var mask_2_graphics_17 = new cjs.Graphics().p("AnNCSIAAjaIObAAIAADag");
	var mask_2_graphics_18 = new cjs.Graphics().p("An0CSIAAjaIPpAAIAADag");
	var mask_2_graphics_19 = new cjs.Graphics().p("AobCSIAAjaIQ3AAIAADag");
	var mask_2_graphics_20 = new cjs.Graphics().p("ApCCSIAAjaISFAAIAADag");
	var mask_2_graphics_21 = new cjs.Graphics().p("ApoCSIAAjaITRAAIAADag");
	var mask_2_graphics_22 = new cjs.Graphics().p("AqMCSIAAjaIUZAAIAADag");
	var mask_2_graphics_23 = new cjs.Graphics().p("AqwCSIAAjaIVhAAIAADag");
	var mask_2_graphics_24 = new cjs.Graphics().p("ArRCSIAAjaIWjAAIAADag");
	var mask_2_graphics_25 = new cjs.Graphics().p("ArxCSIAAjaIXjAAIAADag");
	var mask_2_graphics_26 = new cjs.Graphics().p("AsPCSIAAjaIYfAAIAADag");
	var mask_2_graphics_27 = new cjs.Graphics().p("AsqCSIAAjaIZVAAIAADag");
	var mask_2_graphics_28 = new cjs.Graphics().p("AtCCSIAAjaIaFAAIAADag");
	var mask_2_graphics_29 = new cjs.Graphics().p("AtXCSIAAjaIavAAIAADag");
	var mask_2_graphics_30 = new cjs.Graphics().p("AtpCSIAAjaIbTAAIAADag");
	var mask_2_graphics_31 = new cjs.Graphics().p("At4CSIAAjaIbxAAIAADag");
	var mask_2_graphics_32 = new cjs.Graphics().p("AuDCSIAAjaIcHAAIAADag");
	var mask_2_graphics_33 = new cjs.Graphics().p("AuJCSIAAjaIcTAAIAADag");
	var mask_2_graphics_34 = new cjs.Graphics().p("AuMCSIAAjaIcZAAIAADag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-0.5,y:14.7}).wait(1).to({graphics:mask_2_graphics_1,x:-0.2,y:14.7}).wait(1).to({graphics:mask_2_graphics_2,x:0.4,y:14.7}).wait(1).to({graphics:mask_2_graphics_3,x:1.5,y:14.7}).wait(1).to({graphics:mask_2_graphics_4,x:2.9,y:14.7}).wait(1).to({graphics:mask_2_graphics_5,x:4.8,y:14.7}).wait(1).to({graphics:mask_2_graphics_6,x:6.9,y:14.7}).wait(1).to({graphics:mask_2_graphics_7,x:9.3,y:14.7}).wait(1).to({graphics:mask_2_graphics_8,x:12,y:14.7}).wait(1).to({graphics:mask_2_graphics_9,x:15,y:14.7}).wait(1).to({graphics:mask_2_graphics_10,x:18.1,y:14.7}).wait(1).to({graphics:mask_2_graphics_11,x:21.5,y:14.7}).wait(1).to({graphics:mask_2_graphics_12,x:25,y:14.7}).wait(1).to({graphics:mask_2_graphics_13,x:28.7,y:14.7}).wait(1).to({graphics:mask_2_graphics_14,x:32.4,y:14.7}).wait(1).to({graphics:mask_2_graphics_15,x:36.3,y:14.7}).wait(1).to({graphics:mask_2_graphics_16,x:40.2,y:14.7}).wait(1).to({graphics:mask_2_graphics_17,x:44.1,y:14.7}).wait(1).to({graphics:mask_2_graphics_18,x:48.1,y:14.7}).wait(1).to({graphics:mask_2_graphics_19,x:52,y:14.7}).wait(1).to({graphics:mask_2_graphics_20,x:55.8,y:14.7}).wait(1).to({graphics:mask_2_graphics_21,x:59.6,y:14.7}).wait(1).to({graphics:mask_2_graphics_22,x:63.2,y:14.7}).wait(1).to({graphics:mask_2_graphics_23,x:66.8,y:14.7}).wait(1).to({graphics:mask_2_graphics_24,x:70.1,y:14.7}).wait(1).to({graphics:mask_2_graphics_25,x:73.3,y:14.7}).wait(1).to({graphics:mask_2_graphics_26,x:76.2,y:14.7}).wait(1).to({graphics:mask_2_graphics_27,x:78.9,y:14.7}).wait(1).to({graphics:mask_2_graphics_28,x:81.4,y:14.7}).wait(1).to({graphics:mask_2_graphics_29,x:83.5,y:14.7}).wait(1).to({graphics:mask_2_graphics_30,x:85.3,y:14.7}).wait(1).to({graphics:mask_2_graphics_31,x:86.8,y:14.7}).wait(1).to({graphics:mask_2_graphics_32,x:87.8,y:14.7}).wait(1).to({graphics:mask_2_graphics_33,x:88.5,y:14.7}).wait(1).to({graphics:mask_2_graphics_34,x:88.9,y:14.7}).wait(11));

	// line01
	this.instance_2 = new lib.txt02();
	this.instance_2.setTransform(106.5,38,1,1,0,0,0,106.5,38);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.4,1.1,22);


(lib.txt01_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AgOEmIAAj1IAdAAIAAD1g");
	var mask_graphics_6 = new cjs.Graphics().p("AgPEmIAAj1IAfAAIAAD1g");
	var mask_graphics_7 = new cjs.Graphics().p("AgREmIAAj1IAjAAIAAD1g");
	var mask_graphics_8 = new cjs.Graphics().p("AgWEmIAAj1IAtAAIAAD1g");
	var mask_graphics_9 = new cjs.Graphics().p("AgcEmIAAj1IA5AAIAAD1g");
	var mask_graphics_10 = new cjs.Graphics().p("AgjEmIAAj1IBHAAIAAD1g");
	var mask_graphics_11 = new cjs.Graphics().p("AgsEmIAAj1IBZAAIAAD1g");
	var mask_graphics_12 = new cjs.Graphics().p("Ag2EmIAAj1IBtAAIAAD1g");
	var mask_graphics_13 = new cjs.Graphics().p("AhBEmIAAj1ICDAAIAAD1g");
	var mask_graphics_14 = new cjs.Graphics().p("AhNEmIAAj1ICbAAIAAD1g");
	var mask_graphics_15 = new cjs.Graphics().p("AhaEmIAAj1IC1AAIAAD1g");
	var mask_graphics_16 = new cjs.Graphics().p("AhoEmIAAj1IDRAAIAAD1g");
	var mask_graphics_17 = new cjs.Graphics().p("Ah3EmIAAj1IDvAAIAAD1g");
	var mask_graphics_18 = new cjs.Graphics().p("AiGEmIAAj1IENAAIAAD1g");
	var mask_graphics_19 = new cjs.Graphics().p("AiWEmIAAj1IEtAAIAAD1g");
	var mask_graphics_20 = new cjs.Graphics().p("AimEmIAAj1IFNAAIAAD1g");
	var mask_graphics_21 = new cjs.Graphics().p("Ai3EmIAAj1IFvAAIAAD1g");
	var mask_graphics_22 = new cjs.Graphics().p("AjHEmIAAj1IGPAAIAAD1g");
	var mask_graphics_23 = new cjs.Graphics().p("AjYEmIAAj1IGxAAIAAD1g");
	var mask_graphics_24 = new cjs.Graphics().p("AjpEmIAAj1IHTAAIAAD1g");
	var mask_graphics_25 = new cjs.Graphics().p("Aj5EmIAAj1IHzAAIAAD1g");
	var mask_graphics_26 = new cjs.Graphics().p("AkJEmIAAj1IITAAIAAD1g");
	var mask_graphics_27 = new cjs.Graphics().p("AkZEmIAAj1IIzAAIAAD1g");
	var mask_graphics_28 = new cjs.Graphics().p("AkoEmIAAj1IJRAAIAAD1g");
	var mask_graphics_29 = new cjs.Graphics().p("Ak2EmIAAj1IJtAAIAAD1g");
	var mask_graphics_30 = new cjs.Graphics().p("AlEEmIAAj1IKJAAIAAD1g");
	var mask_graphics_31 = new cjs.Graphics().p("AlQEmIAAj1IKhAAIAAD1g");
	var mask_graphics_32 = new cjs.Graphics().p("AlcEmIAAj1IK5AAIAAD1g");
	var mask_graphics_33 = new cjs.Graphics().p("AlmEmIAAj1ILNAAIAAD1g");
	var mask_graphics_34 = new cjs.Graphics().p("AlvEmIAAj1ILfAAIAAD1g");
	var mask_graphics_35 = new cjs.Graphics().p("Al3EmIAAj1ILvAAIAAD1g");
	var mask_graphics_36 = new cjs.Graphics().p("Al9EmIAAj1IL7AAIAAD1g");
	var mask_graphics_37 = new cjs.Graphics().p("AmBEmIAAj1IMDAAIAAD1g");
	var mask_graphics_38 = new cjs.Graphics().p("AmEEmIAAj1IMJAAIAAD1g");
	var mask_graphics_39 = new cjs.Graphics().p("AmFEmIAAj1IMLAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-0.5,y:29.4}).wait(1).to({graphics:mask_graphics_6,x:-0.4,y:29.4}).wait(1).to({graphics:mask_graphics_7,x:-0.1,y:29.4}).wait(1).to({graphics:mask_graphics_8,x:0.3,y:29.4}).wait(1).to({graphics:mask_graphics_9,x:0.9,y:29.4}).wait(1).to({graphics:mask_graphics_10,x:1.6,y:29.4}).wait(1).to({graphics:mask_graphics_11,x:2.5,y:29.4}).wait(1).to({graphics:mask_graphics_12,x:3.5,y:29.4}).wait(1).to({graphics:mask_graphics_13,x:4.6,y:29.4}).wait(1).to({graphics:mask_graphics_14,x:5.8,y:29.4}).wait(1).to({graphics:mask_graphics_15,x:7.2,y:29.4}).wait(1).to({graphics:mask_graphics_16,x:8.6,y:29.4}).wait(1).to({graphics:mask_graphics_17,x:10,y:29.4}).wait(1).to({graphics:mask_graphics_18,x:11.6,y:29.4}).wait(1).to({graphics:mask_graphics_19,x:13.2,y:29.4}).wait(1).to({graphics:mask_graphics_20,x:14.8,y:29.4}).wait(1).to({graphics:mask_graphics_21,x:16.4,y:29.4}).wait(1).to({graphics:mask_graphics_22,x:18.1,y:29.4}).wait(1).to({graphics:mask_graphics_23,x:19.8,y:29.4}).wait(1).to({graphics:mask_graphics_24,x:21.4,y:29.4}).wait(1).to({graphics:mask_graphics_25,x:23.1,y:29.4}).wait(1).to({graphics:mask_graphics_26,x:24.7,y:29.4}).wait(1).to({graphics:mask_graphics_27,x:26.2,y:29.4}).wait(1).to({graphics:mask_graphics_28,x:27.7,y:29.4}).wait(1).to({graphics:mask_graphics_29,x:29.2,y:29.4}).wait(1).to({graphics:mask_graphics_30,x:30.5,y:29.4}).wait(1).to({graphics:mask_graphics_31,x:31.8,y:29.4}).wait(1).to({graphics:mask_graphics_32,x:32.9,y:29.4}).wait(1).to({graphics:mask_graphics_33,x:34,y:29.4}).wait(1).to({graphics:mask_graphics_34,x:34.9,y:29.4}).wait(1).to({graphics:mask_graphics_35,x:35.6,y:29.4}).wait(1).to({graphics:mask_graphics_36,x:36.3,y:29.4}).wait(1).to({graphics:mask_graphics_37,x:36.7,y:29.4}).wait(1).to({graphics:mask_graphics_38,x:37,y:29.4}).wait(1).to({graphics:mask_graphics_39,x:37.1,y:29.4}).wait(1));

	// line02
	this.instance = new lib.txt01();
	this.instance.setTransform(71.3,39.9,1,1,0,0,0,71.3,39.9);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(35));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgOCoIAAj4IAdAAIAAD4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgPCoIAAj4IAfAAIAAD4g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgSCoIAAj4IAlAAIAAD4g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgWCoIAAj4IAtAAIAAD4g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgdCoIAAj4IA7AAIAAD4g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AglCoIAAj4IBLAAIAAD4g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AguCoIAAj4IBdAAIAAD4g");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ag4CoIAAj4IBxAAIAAD4g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhECoIAAj4ICJAAIAAD4g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AhRCoIAAj4ICjAAIAAD4g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AhfCoIAAj4IC/AAIAAD4g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AhtCoIAAj4IDbAAIAAD4g");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ah9CoIAAj4ID7AAIAAD4g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AiNCoIAAj4IEbAAIAAD4g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AidCoIAAj4IE7AAIAAD4g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AiuCoIAAj4IFdAAIAAD4g");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ai/CoIAAj4IF/AAIAAD4g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjQCoIAAj4IGhAAIAAD4g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjhCoIAAj4IHDAAIAAD4g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjyCoIAAj4IHlAAIAAD4g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AkDCoIAAj4IIHAAIAAD4g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AkTCoIAAj4IInAAIAAD4g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AkjCoIAAj4IJHAAIAAD4g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkyCoIAAj4IJlAAIAAD4g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AlBCoIAAj4IKDAAIAAD4g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AlPCoIAAj4IKfAAIAAD4g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AlcCoIAAj4IK5AAIAAD4g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AlnCoIAAj4ILPAAIAAD4g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AlyCoIAAj4ILlAAIAAD4g");
	var mask_1_graphics_29 = new cjs.Graphics().p("Al7CoIAAj4IL3AAIAAD4g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AmDCoIAAj4IMHAAIAAD4g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmJCoIAAj4IMTAAIAAD4g");
	var mask_1_graphics_32 = new cjs.Graphics().p("AmOCoIAAj4IMdAAIAAD4g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AmRCoIAAj4IMjAAIAAD4g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AmSCoIAAj4IMlAAIAAD4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.5,y:16.9}).wait(1).to({graphics:mask_1_graphics_1,x:-0.4,y:16.9}).wait(1).to({graphics:mask_1_graphics_2,x:-0.1,y:16.9}).wait(1).to({graphics:mask_1_graphics_3,x:0.4,y:16.9}).wait(1).to({graphics:mask_1_graphics_4,x:1,y:16.9}).wait(1).to({graphics:mask_1_graphics_5,x:1.8,y:16.9}).wait(1).to({graphics:mask_1_graphics_6,x:2.7,y:16.9}).wait(1).to({graphics:mask_1_graphics_7,x:3.8,y:16.9}).wait(1).to({graphics:mask_1_graphics_8,x:5,y:16.9}).wait(1).to({graphics:mask_1_graphics_9,x:6.3,y:16.9}).wait(1).to({graphics:mask_1_graphics_10,x:7.6,y:16.9}).wait(1).to({graphics:mask_1_graphics_11,x:9.1,y:16.9}).wait(1).to({graphics:mask_1_graphics_12,x:10.6,y:16.9}).wait(1).to({graphics:mask_1_graphics_13,x:12.2,y:16.9}).wait(1).to({graphics:mask_1_graphics_14,x:13.9,y:16.9}).wait(1).to({graphics:mask_1_graphics_15,x:15.5,y:16.9}).wait(1).to({graphics:mask_1_graphics_16,x:17.2,y:16.9}).wait(1).to({graphics:mask_1_graphics_17,x:19,y:16.9}).wait(1).to({graphics:mask_1_graphics_18,x:20.7,y:16.9}).wait(1).to({graphics:mask_1_graphics_19,x:22.4,y:16.9}).wait(1).to({graphics:mask_1_graphics_20,x:24,y:16.9}).wait(1).to({graphics:mask_1_graphics_21,x:25.7,y:16.9}).wait(1).to({graphics:mask_1_graphics_22,x:27.3,y:16.9}).wait(1).to({graphics:mask_1_graphics_23,x:28.8,y:16.9}).wait(1).to({graphics:mask_1_graphics_24,x:30.3,y:16.9}).wait(1).to({graphics:mask_1_graphics_25,x:31.6,y:16.9}).wait(1).to({graphics:mask_1_graphics_26,x:32.9,y:16.9}).wait(1).to({graphics:mask_1_graphics_27,x:34.1,y:16.9}).wait(1).to({graphics:mask_1_graphics_28,x:35.2,y:16.9}).wait(1).to({graphics:mask_1_graphics_29,x:36.1,y:16.9}).wait(1).to({graphics:mask_1_graphics_30,x:36.9,y:16.9}).wait(1).to({graphics:mask_1_graphics_31,x:37.5,y:16.9}).wait(1).to({graphics:mask_1_graphics_32,x:38,y:16.9}).wait(1).to({graphics:mask_1_graphics_33,x:38.3,y:16.9}).wait(1).to({graphics:mask_1_graphics_34,x:38.4,y:16.9}).wait(6));

	// line01
	this.instance_1 = new lib.txt01();
	this.instance_1.setTransform(71.3,39.9,1,1,0,0,0,71.3,39.9);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8.8,1.1,25);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AgOGJIAAmgIAdAAIAAGgg");
	var mask_graphics_6 = new cjs.Graphics().p("AgRGJIAAmgIAjAAIAAGgg");
	var mask_graphics_7 = new cjs.Graphics().p("AgZGIIAAmfIAzAAIAAGfg");
	var mask_graphics_8 = new cjs.Graphics().p("AgmGIIAAmfIBNAAIAAGfg");
	var mask_graphics_9 = new cjs.Graphics().p("Ag4GIIAAmfIBxAAIAAGfg");
	var mask_graphics_10 = new cjs.Graphics().p("AhOGIIAAmfICdAAIAAGfg");
	var mask_graphics_11 = new cjs.Graphics().p("AhpGIIAAmfIDTAAIAAGfg");
	var mask_graphics_12 = new cjs.Graphics().p("AiHGIIAAmeIEPAAIAAGeg");
	var mask_graphics_13 = new cjs.Graphics().p("AioGIIAAmeIFRAAIAAGeg");
	var mask_graphics_14 = new cjs.Graphics().p("AjMGIIAAmeIGZAAIAAGeg");
	var mask_graphics_15 = new cjs.Graphics().p("AjzGHIAAmdIHnAAIAAGdg");
	var mask_graphics_16 = new cjs.Graphics().p("AkdGHIAAmdII7AAIAAGdg");
	var mask_graphics_17 = new cjs.Graphics().p("AlIGHIAAmdIKRAAIAAGdg");
	var mask_graphics_18 = new cjs.Graphics().p("Al2GHIAAmdILtAAIAAGdg");
	var mask_graphics_19 = new cjs.Graphics().p("AmkGGIAAmbINJAAIAAGbg");
	var mask_graphics_20 = new cjs.Graphics().p("AnTGGIAAmbIOnAAIAAGbg");
	var mask_graphics_21 = new cjs.Graphics().p("AoEGGIAAmbIQJAAIAAGbg");
	var mask_graphics_22 = new cjs.Graphics().p("Ao0GGIAAmbIRpAAIAAGbg");
	var mask_graphics_23 = new cjs.Graphics().p("AplGFIAAmaITLAAIAAGag");
	var mask_graphics_24 = new cjs.Graphics().p("AqVGFIAAmZIUrAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("ArEGFIAAmZIWJAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("ArzGFIAAmZIXnAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("AsgGEIAAmYIZBAAIAAGYg");
	var mask_graphics_28 = new cjs.Graphics().p("AtLGEIAAmYIaXAAIAAGYg");
	var mask_graphics_29 = new cjs.Graphics().p("At1GEIAAmYIbrAAIAAGYg");
	var mask_graphics_30 = new cjs.Graphics().p("AucGEIAAmXIc5AAIAAGXg");
	var mask_graphics_31 = new cjs.Graphics().p("AvAGDIAAmWIeBAAIAAGWg");
	var mask_graphics_32 = new cjs.Graphics().p("AviGDIAAmWIfFAAIAAGWg");
	var mask_graphics_33 = new cjs.Graphics().p("AwAGDIAAmWMAgBAAAIAAGWg");
	var mask_graphics_34 = new cjs.Graphics().p("AwaGDIAAmWMAg1AAAIAAGWg");
	var mask_graphics_35 = new cjs.Graphics().p("AwwGDIAAmWMAhhAAAIAAGWg");
	var mask_graphics_36 = new cjs.Graphics().p("AxCGDIAAmWMAiFAAAIAAGWg");
	var mask_graphics_37 = new cjs.Graphics().p("AxPGDIAAmWMAifAAAIAAGWg");
	var mask_graphics_38 = new cjs.Graphics().p("AxYGDIAAmWMAixAAAIAAGWg");
	var mask_graphics_39 = new cjs.Graphics().p("AxaGDIAAmVMAi1AAAIAAGVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-0.5,y:39.3}).wait(1).to({graphics:mask_graphics_6,x:-0.2,y:39.3}).wait(1).to({graphics:mask_graphics_7,x:0.6,y:39.3}).wait(1).to({graphics:mask_graphics_8,x:1.9,y:39.3}).wait(1).to({graphics:mask_graphics_9,x:3.7,y:39.3}).wait(1).to({graphics:mask_graphics_10,x:6,y:39.3}).wait(1).to({graphics:mask_graphics_11,x:8.6,y:39.3}).wait(1).to({graphics:mask_graphics_12,x:11.6,y:39.2}).wait(1).to({graphics:mask_graphics_13,x:14.9,y:39.2}).wait(1).to({graphics:mask_graphics_14,x:18.5,y:39.2}).wait(1).to({graphics:mask_graphics_15,x:22.4,y:39.2}).wait(1).to({graphics:mask_graphics_16,x:26.6,y:39.2}).wait(1).to({graphics:mask_graphics_17,x:30.9,y:39.1}).wait(1).to({graphics:mask_graphics_18,x:35.4,y:39.1}).wait(1).to({graphics:mask_graphics_19,x:40,y:39.1}).wait(1).to({graphics:mask_graphics_20,x:44.8,y:39.1}).wait(1).to({graphics:mask_graphics_21,x:49.6,y:39}).wait(1).to({graphics:mask_graphics_22,x:54.4,y:39}).wait(1).to({graphics:mask_graphics_23,x:59.3,y:39}).wait(1).to({graphics:mask_graphics_24,x:64.1,y:39}).wait(1).to({graphics:mask_graphics_25,x:68.8,y:38.9}).wait(1).to({graphics:mask_graphics_26,x:73.4,y:38.9}).wait(1).to({graphics:mask_graphics_27,x:77.9,y:38.9}).wait(1).to({graphics:mask_graphics_28,x:82.3,y:38.9}).wait(1).to({graphics:mask_graphics_29,x:86.4,y:38.8}).wait(1).to({graphics:mask_graphics_30,x:90.3,y:38.8}).wait(1).to({graphics:mask_graphics_31,x:93.9,y:38.8}).wait(1).to({graphics:mask_graphics_32,x:97.3,y:38.8}).wait(1).to({graphics:mask_graphics_33,x:100.2,y:38.8}).wait(1).to({graphics:mask_graphics_34,x:102.9,y:38.7}).wait(1).to({graphics:mask_graphics_35,x:105.1,y:38.7}).wait(1).to({graphics:mask_graphics_36,x:106.9,y:38.7}).wait(1).to({graphics:mask_graphics_37,x:108.2,y:38.7}).wait(1).to({graphics:mask_graphics_38,x:109,y:38.7}).wait(1).to({graphics:mask_graphics_39,x:109.6,y:38.8}).wait(1));

	// Symbol 4
	this.instance = new lib.Symbol4();
	this.instance.setTransform(106.6,44.7,1,1,0,0,0,106.6,22.2);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(35));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgQCjIAAkCIAdAAIAAECg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgQCjIAAkCIAhAAIAAECg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgXCkIAAkCIAvAAIAAECg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AghCkIAAkCIBDAAIAAECg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgwCkIAAkCIBhAAIAAECg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhCCkIAAkCICFAAIAAECg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhYCkIAAkCICxAAIAAECg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhwCkIAAkCIDhAAIAAECg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AiLClIAAkCIEXAAIAAECg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AipClIAAkCIFTAAIAAECg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjIClIAAkCIGRAAIAAECg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjqCmIAAkCIHVAAIAAECg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkNCmIAAkCIIbAAIAAECg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkyCmIAAkCIJlAAIAAECg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AlYCnIAAkCIKxAAIAAECg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Al+CnIAAkCIL9AAIAAECg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AmlCnIAAkCINLAAIAAECg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AnNCoIAAkCIObAAIAAECg");
	var mask_1_graphics_18 = new cjs.Graphics().p("An0CoIAAkCIPpAAIAAECg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AobCpIAAkCIQ3AAIAAECg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ApCCpIAAkCISFAAIAAECg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ApoCpIAAkCITRAAIAAECg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AqMCqIAAkCIUZAAIAAECg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AqwCqIAAkCIVhAAIAAECg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ArRCqIAAkCIWjAAIAAECg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ArxCrIAAkCIXjAAIAAECg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AsPCrIAAkCIYfAAIAAECg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AsqCrIAAkCIZVAAIAAECg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AtCCrIAAkCIaFAAIAAECg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AtXCsIAAkCIavAAIAAECg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AtpCsIAAkCIbUAAIAAECg");
	var mask_1_graphics_31 = new cjs.Graphics().p("At4CsIAAkCIbxAAIAAECg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AuDCsIAAkCIcHAAIAAECg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AuJCsIAAkCIcTAAIAAECg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AuMCsIAAkCIcZAAIAAECg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-1.7,y:16.4}).wait(1).to({graphics:mask_1_graphics_1,x:-1.7,y:16.4}).wait(1).to({graphics:mask_1_graphics_2,x:-1.1,y:16.4}).wait(1).to({graphics:mask_1_graphics_3,x:0,y:16.4}).wait(1).to({graphics:mask_1_graphics_4,x:1.5,y:16.4}).wait(1).to({graphics:mask_1_graphics_5,x:3.3,y:16.4}).wait(1).to({graphics:mask_1_graphics_6,x:5.5,y:16.5}).wait(1).to({graphics:mask_1_graphics_7,x:8,y:16.5}).wait(1).to({graphics:mask_1_graphics_8,x:10.7,y:16.5}).wait(1).to({graphics:mask_1_graphics_9,x:13.7,y:16.5}).wait(1).to({graphics:mask_1_graphics_10,x:17,y:16.6}).wait(1).to({graphics:mask_1_graphics_11,x:20.4,y:16.6}).wait(1).to({graphics:mask_1_graphics_12,x:23.9,y:16.6}).wait(1).to({graphics:mask_1_graphics_13,x:27.7,y:16.7}).wait(1).to({graphics:mask_1_graphics_14,x:31.5,y:16.7}).wait(1).to({graphics:mask_1_graphics_15,x:35.4,y:16.8}).wait(1).to({graphics:mask_1_graphics_16,x:39.4,y:16.8}).wait(1).to({graphics:mask_1_graphics_17,x:43.4,y:16.8}).wait(1).to({graphics:mask_1_graphics_18,x:47.4,y:16.9}).wait(1).to({graphics:mask_1_graphics_19,x:51.3,y:16.9}).wait(1).to({graphics:mask_1_graphics_20,x:55.3,y:16.9}).wait(1).to({graphics:mask_1_graphics_21,x:59.1,y:17}).wait(1).to({graphics:mask_1_graphics_22,x:62.8,y:17}).wait(1).to({graphics:mask_1_graphics_23,x:66.4,y:17.1}).wait(1).to({graphics:mask_1_graphics_24,x:69.8,y:17.1}).wait(1).to({graphics:mask_1_graphics_25,x:73,y:17.1}).wait(1).to({graphics:mask_1_graphics_26,x:76,y:17.1}).wait(1).to({graphics:mask_1_graphics_27,x:78.8,y:17.2}).wait(1).to({graphics:mask_1_graphics_28,x:81.2,y:17.2}).wait(1).to({graphics:mask_1_graphics_29,x:83.4,y:17.2}).wait(1).to({graphics:mask_1_graphics_30,x:85.2,y:17.2}).wait(1).to({graphics:mask_1_graphics_31,x:86.7,y:17.3}).wait(1).to({graphics:mask_1_graphics_32,x:87.8,y:17.3}).wait(1).to({graphics:mask_1_graphics_33,x:88.5,y:17.3}).wait(1).to({graphics:mask_1_graphics_34,x:88.9,y:17.3}).wait(6));

	// Symbol 5
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(93,13.7,1,1,0,0,0,93,13.7);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,6.8,2.6,26);


(lib.s_6123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 2
	this.instance = new lib.s_1777copy123();
	this.instance.setTransform(106.8,288.1,1.163,1.163,0,0,0,91.8,32.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:-0.1,regY:2.6,x:-0.1,y:246.3,alpha:0.174},0).wait(1).to({y:239.9,alpha:0.331},0).wait(1).to({y:234.3,alpha:0.471},0).wait(1).to({y:229.3,alpha:0.595},0).wait(1).to({y:225,alpha:0.702},0).wait(1).to({y:221.3,alpha:0.793},0).wait(1).to({y:218.3,alpha:0.868},0).wait(1).to({y:216,alpha:0.926},0).wait(1).to({y:214.3,alpha:0.967},0).wait(1).to({y:213.3,alpha:0.992},0).wait(1).to({regX:91.8,regY:32.4,x:106.8,y:247.8,alpha:1},0).to({y:252.2},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.s_1777123();
	this.instance_1.setTransform(106.8,166,1.163,1.163,0,0,0,91.8,32.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regX:0.2,regY:0.9,x:0.3,y:119.8,alpha:0.17},0).wait(1).to({y:111.2,alpha:0.324},0).wait(1).to({y:103.5,alpha:0.462},0).wait(1).to({y:96.8,alpha:0.583},0).wait(1).to({y:90.9,alpha:0.689},0).wait(1).to({y:86,alpha:0.778},0).wait(1).to({y:81.9,alpha:0.851},0).wait(1).to({y:78.7,alpha:0.908},0).wait(1).to({y:76.5,alpha:0.948},0).wait(1).to({y:75.1,alpha:0.972},0).wait(1).to({regX:91.8,regY:32.4,x:106.8,y:111.5,alpha:0.98},0).wait(1).to({regX:0.2,regY:0.9,x:0.3,y:76.7,alpha:0.989},0).wait(1).to({y:78.1,alpha:0.995},0).wait(1).to({y:78.9,alpha:0.999},0).wait(1).to({regX:91.8,regY:32.4,x:106.8,y:115.9,alpha:1},0).wait(3));

	// Layer 4
	this.instance_2 = new lib.s_377123();
	this.instance_2.setTransform(133,76.2,1.163,1.163,0,0,0,114.4,31.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.1,regY:-0.1,x:-0.1,y:29.7,alpha:0.16},0).wait(1).to({y:21.1,alpha:0.305},0).wait(1).to({y:13.5,alpha:0.434},0).wait(1).to({y:6.8,alpha:0.549},0).wait(1).to({y:0.9,alpha:0.648},0).wait(1).to({y:-4,alpha:0.731},0).wait(1).to({y:-8,alpha:0.8},0).wait(1).to({y:-11.2,alpha:0.853},0).wait(1).to({y:-13.4,alpha:0.891},0).wait(1).to({y:-14.8,alpha:0.914},0).wait(1).to({regX:114.4,regY:31.7,x:133,y:21.8,alpha:0.922},0).to({regY:31.9,y:26.4,alpha:1},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.6,4.1,250.4,68);


(lib.red_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.light_stripe();
	this.instance.setTransform(150,213.4,1,1,0,0,0,150,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B71226","#A11022","#7C0C1B","#580913"],[0,0.396,0.678,0.961],1,64.9,0,1,64.9,242.7).s().p("AyvxBMAlfAAAMAAAAgFIgBAAMgleAB+g");
	this.shape.setTransform(120,109.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#880D1D","#6D0A17"],[0,1],0.7,15.4,-0.6,-9.3).s().p("AyvghIAAg2MAlegB/IABAqIr6EiIgBAAI0YBhg");
	this.shape_1.setTransform(120,224.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A01022","#8A0E1D","#620A15","#5B0913","#7B0C1A"],[0.039,0.286,0.588,0.722,0.976],-15,-37.2,-10.9,43.5).s().p("ArwHVICytGIAEgEIUrhfIAAAAIrNOpg");
	this.shape_2.setTransform(91.4,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,256,327);


(lib.red_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AyvZjMAAAgzEMAlfAAAMAAAAzEg");
	var mask_graphics_1 = new cjs.Graphics().p("Ayv5gMAlfgADMAAAAzEMglfAADg");
	var mask_graphics_2 = new cjs.Graphics().p("Ayv5aMAlfgAPMAAAAzEMglfAAPg");
	var mask_graphics_3 = new cjs.Graphics().p("Ayv5TMAlfgAdMAAAAzEMglfAAdg");
	var mask_graphics_4 = new cjs.Graphics().p("Ayv5KMAlfgAvMAAAAzEMglfAAvg");
	var mask_graphics_5 = new cjs.Graphics().p("Ayv5BMAlfgBBMAAAAzEMglfABBg");
	var mask_graphics_6 = new cjs.Graphics().p("Ayv44MAlfgBTMAAAAzEMglfABTg");
	var mask_graphics_7 = new cjs.Graphics().p("Ayv4wMAlfgBjMAAAAzEMglfABjg");
	var mask_graphics_8 = new cjs.Graphics().p("Ayv4rMAlfgBtMAAAAzEMglfABtg");
	var mask_graphics_9 = new cjs.Graphics().p("Ayv4pMAlfgBxMAAAAzEMglfABxg");
	var mask_graphics_10 = new cjs.Graphics().p("Ayu4oMAldgBzMAAAAzEMgldABzg");
	var mask_graphics_11 = new cjs.Graphics().p("Ayv4mMAlfgB3MAAAAzEMglfAB3g");
	var mask_graphics_12 = new cjs.Graphics().p("Ayv4hMAlfgCBMAAAAzEMglfACBg");
	var mask_graphics_13 = new cjs.Graphics().p("Ayv4aMAlfgCPMAAAAzEMglfACPg");
	var mask_graphics_14 = new cjs.Graphics().p("Ayv4cMAlfgCLMAAAAzEMglfACLg");
	var mask_graphics_15 = new cjs.Graphics().p("Ayv4iMAlfgB/MAAAAzEMglfAB/g");
	var mask_graphics_16 = new cjs.Graphics().p("Ayv4sMAlfgBrMAAAAzEMglfABrg");
	var mask_graphics_17 = new cjs.Graphics().p("Ayv46MAlfgBPMAAAAzEMglfABPg");
	var mask_graphics_18 = new cjs.Graphics().p("Ayv5MMAlfgArMAAAAzEMglfAArg");
	var mask_graphics_19 = new cjs.Graphics().p("AyvZiMAAAgzEMAlfAAAMAAAAzEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120,y:-163.5}).wait(1).to({graphics:mask_graphics_1,x:120,y:-156.2}).wait(1).to({graphics:mask_graphics_2,x:120,y:-136.8}).wait(1).to({graphics:mask_graphics_3,x:120,y:-108.6}).wait(1).to({graphics:mask_graphics_4,x:120,y:-75.2}).wait(1).to({graphics:mask_graphics_5,x:120,y:-40.1}).wait(1).to({graphics:mask_graphics_6,x:120,y:-6.7}).wait(1).to({graphics:mask_graphics_7,x:120,y:21.5}).wait(1).to({graphics:mask_graphics_8,x:120,y:41}).wait(1).to({graphics:mask_graphics_9,x:120,y:47.9}).wait(1).to({graphics:mask_graphics_10,x:120,y:49.6}).wait(1).to({graphics:mask_graphics_11,x:120,y:54.9}).wait(1).to({graphics:mask_graphics_12,x:120,y:63.8}).wait(1).to({graphics:mask_graphics_13,x:120,y:76.4}).wait(1).to({graphics:mask_graphics_14,x:120,y:78.8}).wait(1).to({graphics:mask_graphics_15,x:120,y:86.1}).wait(1).to({graphics:mask_graphics_16,x:120,y:98.1}).wait(1).to({graphics:mask_graphics_17,x:120,y:115.1}).wait(1).to({graphics:mask_graphics_18,x:120,y:136.8}).wait(1).to({graphics:mask_graphics_19,x:120,y:163.5}).wait(21));

	// red_top
	this.instance = new lib.red_big();
	this.instance.setTransform(120,163.5,1,1,0,0,0,120,163.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_20 = new cjs.Graphics().p("AsXY9IKui7IOKA2IqtC7g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AuzZmIPckOIOLA2IvcEPg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AwqaHITKlQIOLA3IzKFPg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ax+aeIVyl+IOLA2I1yF+g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AyxasIXYmaIOLA2I3YGag");
	var mask_1_graphics_25 = new cjs.Graphics().p("AzBaxIX5mjIOKA2I35Gjg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A3ebSIdjn4IRaBDI9jH4g");
	var mask_1_graphics_27 = new cjs.Graphics().p("A5TavIdvnhIU4CAI9vHgg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A69aFId6nMIYBDEI96HMg");
	var mask_1_graphics_29 = new cjs.Graphics().p("A8cZWIeDm5Ia2EPI+DG5g");
	var mask_1_graphics_30 = new cjs.Graphics().p("A9xYlIeMmoIdXFcI+MGng");
	var mask_1_graphics_31 = new cjs.Graphics().p("A+8XzIeWmYIfjGoI+WGXg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A/8XCIebmKMAheAHxI+bGKg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EggzAWVIehl+MAjGAI0I+hF+g");
	var mask_1_graphics_34 = new cjs.Graphics().p("EghhAVtIeml0MAkdAJwI+mF0g");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgiGAVKIeplrMAlkAKjI+pFrg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgijAUuIetlkMAmaALMI+tFlg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Egi3AUZIevlfMAnAALrI+vFfg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgjDAUNIewldMAnXAL9I+wFdg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgjHAUJIewlcMAnfAMDI+wFcg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_20,x:80.2,y:165.2}).wait(1).to({graphics:mask_1_graphics_21,x:65.4,y:169.3}).wait(1).to({graphics:mask_1_graphics_22,x:53.6,y:172.6}).wait(1).to({graphics:mask_1_graphics_23,x:45.1,y:174.9}).wait(1).to({graphics:mask_1_graphics_24,x:40,y:176.2}).wait(1).to({graphics:mask_1_graphics_25,x:38.2,y:176.8}).wait(1).to({graphics:mask_1_graphics_26,x:21.1,y:181.3}).wait(1).to({graphics:mask_1_graphics_27,x:42.6,y:183.9}).wait(1).to({graphics:mask_1_graphics_28,x:62.4,y:186.6}).wait(1).to({graphics:mask_1_graphics_29,x:80.4,y:189.4}).wait(1).to({graphics:mask_1_graphics_30,x:96.7,y:192.1}).wait(1).to({graphics:mask_1_graphics_31,x:111.3,y:194.7}).wait(1).to({graphics:mask_1_graphics_32,x:124.2,y:197.1}).wait(1).to({graphics:mask_1_graphics_33,x:135.4,y:199.4}).wait(1).to({graphics:mask_1_graphics_34,x:144.8,y:201.3}).wait(1).to({graphics:mask_1_graphics_35,x:152.6,y:203}).wait(1).to({graphics:mask_1_graphics_36,x:158.6,y:204.3}).wait(1).to({graphics:mask_1_graphics_37,x:162.9,y:205.3}).wait(1).to({graphics:mask_1_graphics_38,x:165.5,y:205.9}).wait(1).to({graphics:mask_1_graphics_39,x:166.3,y:206.1}).wait(1));

	// red_bottom
	this.instance_1 = new lib.red_bottom();
	this.instance_1.setTransform(120,352.4,1,1,0,0,0,120,25.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,0);


(lib.logo_toyota = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.t();
	this.instance.setTransform(42.2,42,1.034,1.033,0,0,0,3.1,3.6);

	this.instance_1 = new lib.logo_o();
	this.instance_1.setTransform(34.5,42,1,1,0,0,0,4,4);

	this.instance_2 = new lib.logo_o();
	this.instance_2.setTransform(18.7,42,1,1,0,0,0,4,4);

	this.instance_3 = new lib.t();
	this.instance_3.setTransform(11.2,42,1.034,1.033,0,0,0,3.1,3.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB0720").s().p("AgGAkIAAgcIgdgrIATAAIAQAfIASgfIASAAIgcArIAAAcg");
	this.shape.setTransform(26.5,42,1.034,1.033);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB0720").s().p("AAVAkIgHgQIgbAAIgGAQIgUAAIAfhHIASAAIAeBHgAgIAHIASAAIgKgYg");
	this.shape_1.setTransform(48.8,42,1.034,1.033);

	this.instance_4 = new lib.toyota();
	this.instance_4.setTransform(11,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454444").s().p("AgJAZIgEgBIACgIIACABIADAAIAEgBIACgEQgEAAgDgCQgCgBgBgDIgKgaIAKgEIAJAZIABADIABABIAKgdIAKAEIgNAiIgCAFIgEAEIgCACIgFAAIgEAAg");
	this.shape_2.setTransform(46.6,96.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454444").s().p("AANAYIAAgcIgFAHQgCAEgCABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgEgFIgFgHIAAAcIgKAAIAAgvIAJAAIANAWIAAABIAAAAIABAAIABgBIAMgWIAJAAIAAAvg");
	this.shape_3.setTransform(41.5,96.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454444").s().p("AgRAYIAAgvIAiAAIAAAJIgYAAIAAAKIASAAIAAAHIgSAAIAAAMIAYAAIAAAJg");
	this.shape_4.setTransform(36.6,96.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454444").s().p("AgaAYIAAgvIALAAIAAAmIALAAIAAgmIAJAAIAAAmIALAAIAAgmIALAAIAAAvg");
	this.shape_5.setTransform(31.1,96.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454444").s().p("AAIAYIAAgSIgFABIgEAAQgHAAgEgCQgEgDgBgCIgBgDIAAgEIAAgQIALAAIAAANIAAAFIAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIAEABIAEAAIAEgBIAAgWIALAAIAAAvg");
	this.shape_6.setTransform(25.5,96.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454444").s().p("AgKAZIgDgBIACgIIACABIAEAAIADgBIACgEQgEAAgDgCQgCgBgBgDIgKgaIAJgEIAKAZIABADIABABIAKgdIAKAEIgNAiIgCAFIgEAEIgCACIgFAAIgFAAg");
	this.shape_7.setTransform(21,96.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454444").s().p("AgUARIADgCIABgBIACgBIABgBIABgCIABgFIADgdIAdAAIAAAvIgLAAIAAgmIgKAAIgBAVIgBAGQgBADgCACIgDAEIgHAEg");
	this.shape_8.setTransform(16.1,96.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454444").s().p("AgEADIgEAAIAAAVIgLAAIAAgvIALAAIAAAUIACAAIACgBIABgBIAHgOIADgDQACgCAEAAIACAAIADABIgBAIIgBAAIgBAAIgCABIgBABIgIALIAAABIgBABIARATIgIAGg");
	this.shape_9.setTransform(10.5,96.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454444").s().p("AgRARIAEgCIACgDIACgCIABgEIABgCIgEgCIgDgCIgCgDIgBgFQAAgEACgDIAEgFQACgCADgBIAGgBIASAAIAAAvIgKAAIAAgSIgIAAIAAAEIAAAFIgCAEIgEADIgGAEgAgBgPIgDABIgBACIgBAEQAAAEACABQADACABAAIAIAAIAAgOIgIAAIgBAAg");
	this.shape_10.setTransform(51.5,88.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454444").s().p("AADAZQgFAAgFgCQgEgBgDgEQgDgEgBgFQgCgEAAgFQAAgEACgEQACgFADgEQADgDAFgCQAEgCAFAAIAJABIAHADIgDAIIgEgCIgEgBIgDAAIgCAAQgFAAgEAEQgEAEAAAHQAAAIAEAEQAEAEAFABIADgBIADAAIAEgBIAEgCIADAIIgEACIgFABIgEABIgFAAg");
	this.shape_11.setTransform(47.2,88.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454444").s().p("AgRAYIAAgvIAKAAIAAASIAIAAQAJAAAEAEQAEACAAAHQABAIgGAEQgEAEgJAAgAgHAQIAHAAIACgBIADgBIACgCIABgEIgBgDIgCgCIgDgBIgCAAIgHAAg");
	this.shape_12.setTransform(42.7,88.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454444").s().p("AgEAYIAAgnIgOAAIAAgIIAlAAIAAAIIgOAAIAAAng");
	this.shape_13.setTransform(38.2,88.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454444").s().p("AAJAYIAAgaIgRATIAAAHIgKAAIAAgvIAKAAIAAAbIARgUIAAgHIAKAAIAAAvg");
	this.shape_14.setTransform(33.7,88.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454444").s().p("AAOAYIAAgcIgGAHQgCAEgCABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgFIgFgHIAAAcIgLAAIAAgvIAKAAIANAXIAAAAIAAAAIAAAAIABAAIANgXIAKAAIAAAvg");
	this.shape_15.setTransform(28.4,88.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454444").s().p("AgQAYIAAgvIAhAAIAAAIIgXAAIAAALIARAAIAAAHIgRAAIAAANIAYAAIAAAIg");
	this.shape_16.setTransform(23.5,88.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454444").s().p("AgRAYIAAgvIARAAIAHABIAFADIAEAEQACADAAAFQAAAEgCADIgDADIgGADIgHABIgGAAIAAARgAgGAAIAGAAIACAAIADgBIACgDIAAgDIAAgEIgCgDIgDgBIgCAAIgGAAg");
	this.shape_17.setTransform(19.2,88.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454444").s().p("AgEAYIAAgnIgOAAIAAgIIAlAAIAAAIIgOAAIAAAng");
	this.shape_18.setTransform(14.8,88.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454444").s().p("AADAZQgFAAgFgCQgEgBgDgEQgDgEgBgFQgCgEAAgFQAAgEACgEQACgFADgEQADgDAFgCQAEgCAFAAIAJABIAHADIgDAIIgEgCIgEgBIgDAAIgCAAQgFAAgEAEQgEAEAAAHQAAAIAEAEQAEAEAFABIADgBIADAAIAEgBIAEgCIADAIIgEACIgFABIgEABIgFAAg");
	this.shape_19.setTransform(10.4,88.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_4},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_5 = new lib.white_plate();
	this.instance_5.setTransform(30,52.4,1.034,1.033,0,0,0,29,50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,107.5);


(lib.holes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.black_circle();
	this.instance.setTransform(17,17,0.738,0.738,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A8A8A").s().p("AgVCOIAAhIIgqA6QgUgKgRgRIAqg6IhEAWQgLgUgDgXIBEgWIhFgUQADgXALgUIBEAWIgrg6IACgCQAQgQATgJIAsA8IAAhLQALgBAKAAQALAAALACIAABIIArg7QATAKARAQIABABIgsA7IBGgWQAKATAEAYIhGAVIBGAVQgFAYgKATIhGgWIArA7QgSAQgTAKIgpg4IAABGQgLABgLAAQgKAAgLgBg");
	this.shape.setTransform(17,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_1 = new lib.black_circle();
	this.instance_1.setTransform(17,17,0.906,0.906,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,1.6,30.8,30.8);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.black_plate();
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.holes_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjGAsIAAg+IGNgZIAABXg");
	mask.setTransform(17.6,29.4);

	// Слой 1
	this.instance = new lib.holes();
	this.instance.setTransform(17,17,1,1,0,0,0,17,17);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:18.2},0).wait(1).to({rotation:36,y:17.1},0).wait(1).to({rotation:53.3,y:17},0).wait(1).to({rotation:70.1,y:17.1},0).wait(1).to({rotation:86.4,y:17},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:117.6},0).wait(1).to({rotation:132.5},0).wait(1).to({rotation:147},0).wait(1).to({rotation:160.9},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:187.5},0).wait(1).to({rotation:200},0).wait(1).to({rotation:212.1},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:234.8},0).wait(1).to({rotation:245.4},0).wait(1).to({rotation:255.6},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:274.6,x:17.1},0).wait(1).to({rotation:283.3,x:17},0).wait(1).to({rotation:291.6},0).wait(1).to({rotation:299.4},0).wait(1).to({rotation:306.7},0).wait(1).to({rotation:313.6,x:17.1},0).wait(1).to({rotation:320,x:17},0).wait(1).to({rotation:325.9,x:17.1},0).wait(1).to({rotation:331.4,x:17},0).wait(1).to({rotation:336.3},0).wait(1).to({rotation:340.8,x:17.1},0).wait(1).to({rotation:344.9,x:17},0).wait(1).to({rotation:348.4},0).wait(1).to({rotation:351.5},0).wait(1).to({rotation:354.1},0).wait(1).to({rotation:356.2},0).wait(1).to({rotation:357.9,x:17.1},0).wait(1).to({rotation:359.1},0).wait(1).to({rotation:359.8,x:17},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,25,30.8,7.5);


(lib.car_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AihDsIAAnXIDLAAQArBzgKCbQgEAZAWAKIBFAXIAACPg");
	mask.setTransform(68,88.9);

	// wheel
	this.instance = new lib.wheel_anim();
	this.instance.setTransform(68,86,0.65,1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheels
	this.instance_1 = new lib.wheel_anim();
	this.instance_1.setTransform(10,76,0.2,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// wheels_reflection
	this.instance_2 = new lib.wheel_anim("synched",0,false);
	this.instance_2.setTransform(10,126,0.2,0.82,0,180,0);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.wheel_anim("synched",0,false);
	this.instance_3.setTransform(68,136,0.65,1,0,180,0);
	this.instance_3.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// holes
	this.instance_4 = new lib.holes_anim();
	this.instance_4.setTransform(185.2,87.7,0.899,0.919,0,0,0,16.9,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// car
	this.instance_5 = new lib.car_1();
	this.instance_5.setTransform(111.5,54,1,1,0,0,0,111.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// shadow
	this.instance_6 = new lib.shadow();
	this.instance_6.setTransform(102.5,99.2,1,1,0,0,0,102.5,7.2);
	this.instance_6.filters = [new cjs.BlurFilter(5, 3, 1)];
	this.instance_6.cache(-2,-2,226,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// reflection
	this.instance_7 = new lib.reflection();
	this.instance_7.setTransform(108.5,131.6,1,1,0,0,0,110.5,35.1);
	this.instance_7.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,231,166);


// stage content:
(lib._240x400_toyota_camry_june_Village_300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});


	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(733));

	// Layer 17
	this.btnMain = new lib.btn();
	this.btnMain.setTransform(120,200,1,1,0,0,0,120,200);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(733));

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(733));

	// black_plate
	this.instance = new lib.black_plate();
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({_off:true},1).wait(698).to({_off:false},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.918},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:1},0).wait(1));

	// logo
	this.instance_1 = new lib.logo_toyota();
	this.instance_1.setTransform(163,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(733));

	// Layer 3
	this.instance_2 = new lib.s_6123();
	this.instance_2.setTransform(119.5,211,0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(652).to({_off:false},0).wait(81));

	// legal
	this.instance_3 = new lib.black_plate();
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(638).to({_off:false},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:1},0).wait(82));

	// Layer 4
	this.instance_4 = new lib.legal1();
	this.instance_4.setTransform(13,117);

	this.instance_5 = new lib.legal2();
	this.instance_5.setTransform(13,117);

	this.instance_6 = new lib.legal3();
	this.instance_6.setTransform(13,117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},353).to({state:[{t:this.instance_5}]},96).to({state:[{t:this.instance_6}]},100).to({state:[]},103).wait(81));

	// legal
	this.instance_7 = new lib.black_plate();
	this.instance_7.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(340).to({_off:false},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:1},0).to({_off:true},379).wait(1));

	// txt04
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(152.2,147.9,1,1,0,0,0,139.2,29.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(243).to({_off:false},0).to({_off:true},111).wait(379));

	// txt03
	this.instance_9 = new lib.txt03_anim("synched",0,false);
	this.instance_9.setTransform(105,158.9,1,1,0,0,0,93,33.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(130).to({_off:false},0).wait(102).to({startPosition:39},0).wait(1).to({regX:93.8,regY:33.8,x:105.8,y:158.8,alpha:0.992},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.331},0).wait(1).to({alpha:0.174},0).wait(1).to({regX:93,regY:33.9,x:105,y:158.9,alpha:0},0).to({_off:true},1).wait(489));

	// txt02
	this.instance_10 = new lib.txt02_anim();
	this.instance_10.setTransform(119.5,159,1,1,0,0,0,106.5,38);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).wait(100).to({mode:"synched",startPosition:44,loop:false},0).wait(1).to({regX:105.2,regY:41.5,x:118.2,y:162.5,alpha:0.869},0).wait(1).to({alpha:0.748},0).wait(1).to({alpha:0.637},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.443},0).wait(1).to({alpha:0.361},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.056},0).wait(1).to({regX:106.5,regY:38,x:119.5,y:159,alpha:0.051},0).to({_off:true},1).wait(588));

	// txt01
	this.instance_11 = new lib.txt01_anim();
	this.instance_11.setTransform(85.3,48.9,1,1,0,0,0,71.3,39.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({_off:true},339).wait(379));

	// spark
	this.instance_12 = new lib.spark_1();
	this.instance_12.setTransform(238.5,205.9,2,2,0,0,0,53.5,42.8);
	this.instance_12.alpha = 0.051;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,y:205.8,alpha:1},34,cjs.Ease.get(1)).to({_off:true},313).wait(379));

	// car
	this.instance_13 = new lib.car_anim();
	this.instance_13.setTransform(-78,310.1,0.78,0.78,0,0,0,111.5,82.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({_off:false},0).wait(1).to({regX:110.8,regY:83,scaleX:0.79,scaleY:0.79,x:-68.3,y:312.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-58.4,y:313.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-48.7,y:314.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-39.3,y:316},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-30.2,y:317.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-21.3,y:318.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-12.7,y:319.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-4.3,y:320.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:3.8,y:321.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:11.6,y:322.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:19.2,y:323.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:26.4,y:324.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:33.5,y:325.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:40.3,y:326.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:46.8,y:327.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:53,y:328.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:59,y:329.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:64.7,y:329.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:70.2,y:330.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:75.3,y:331.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:80.3,y:332},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:84.9,y:332.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:89.4,y:333.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:93.5,y:333.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:97.3,y:334.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:101,y:334.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:104.3,y:335.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:107.4,y:335.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:110.2,y:336},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:112.7,y:336.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:115,y:336.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:117.1,y:337},0).wait(1).to({scaleX:1,scaleY:1,x:118.8,y:337.2},0).wait(1).to({scaleX:1,scaleY:1,x:120.3,y:337.4},0).wait(1).to({scaleX:1,scaleY:1,x:121.5,y:337.6},0).wait(1).to({scaleX:1,scaleY:1,x:122.5,y:337.7},0).wait(1).to({x:123.2,y:337.8},0).wait(1).to({scaleX:1,scaleY:1,x:123.7,y:337.9},0).wait(1).to({regX:111.5,regY:82.1,x:124.5,y:337.1},0).to({_off:true},285).wait(379));

	// red
	this.instance_14 = new lib.red_anim("synched",0,false);
	this.instance_14.setTransform(120,163.5,1,1,0,0,0,120,163.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({_off:true},347).wait(379));

	// bg
	this.instance_15 = new lib.bg();
	this.instance_15.setTransform(120,200.5,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},354).wait(379));

	// black_plate
	this.instance_16 = new lib.black_plate();
	this.instance_16.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(733));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109,131,256,477);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;