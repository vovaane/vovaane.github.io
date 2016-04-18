/** @preserve Biborg Adobe Edge Animate Template Version 0.4.357 |sagsr6K6LpvR8y6u661Vs+6QOy4=| */

var config = {
    playTimes: 1,
    autoFreezeTime: 28000,
    cancelFreezeOnYoutubeInteraction: true
};

var StandardControllerClass = function(composition)
{
    try
    {
        var self =  this;

        self.eventBus = new EventBusClass();
        self.FREEZE = 'FREEZE';

        self.mobile = isMobile();

        self.isFrozen = function()
        {
            return frozen;
        }

        composition.controller = this;
        var stage = composition.getStage();
        var frozen = false;
        var freezeTimeoutId = null;
        var playTimesCount = 0;
        var willLoop = false;
    }
    catch (error)
    {
        console.error("%s\n%O", error, error.stack);
    }

    self.start = function()
    {
        try
        {
            if (self.mobile.any())
                platform.automaticCounter('Mobile_Served');
            else
                platform.automaticCounter('Desktop_Served');

            if (!frozen)
            {
                if (config.autoFreezeTime >= 0)
                    startAutoFreezeTimeout();

                stage.play();
            }

            console.log("started with config: %O", config);
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }
    };

    self.update = function()
    {
        try
        {
            if (frozen || !stage.isPlaying())
                return;

            if (!willLoop && stage.getPosition() >= stage.getLabelPosition('loop_check'))
            {
                playTimesCount++;

                console.log('playTimes: ' + playTimesCount + '/' + config.playTimes);

                if (playTimesCount < config.playTimes)
                    willLoop = true;
                else
                    stage.stop('loop_check');
            }

            if (willLoop && stage.getPosition() >= stage.getLabelPosition('loop_restart'))
            {
                willLoop = false;
                restart(stage);
                stage.play('loop_start');
            }

            self.eventBus.dispatch('UPDATE');
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }
    };

    self.freeze = function (automatic)
    {
        try
        {
            automatic = automatic == undefined ? false : true;

            clearAutoFreezeTimeout();

            if (!frozen)
			{
				frozen = true;
				stopAtFrozenLabel(stage);
				console.log("frozen");
			}
			
            self.eventBus.dispatch(self.FREEZE, self, automatic);
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }
    };

    self.playHeadIsBeforeEndshotLabel = function()
    {
        try
        {
            return stage.getPosition() < stage.getLabelPosition('endshot');
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }
    };

    self.rePlay = function()
    {
        try
        {
            self.eventBus.dispatch('REPLAY');

            frozen = false;
            startAutoFreezeTimeout();

            stage.play(0);
            restart(stage);
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }
    }

    /** Components */

    function getYoutubeComp()
    {
        if (youTubeComp == null)
        {
            if (!('YouTubeComp' in window))
                throw "youtube-comp.js is not included.";

            youTubeComp = new YouTubeComp(self.eventBus);
            if (config.cancelFreezeOnYoutubeInteraction)
                youTubeComp.eventBus.addEventListener(youTubeComp.USER_INTERACTION, clearAutoFreezeTimeout);
        }

        return youTubeComp;
    }

    var youTubeComp = null;
    self.createYouTubePlayer = function (elem, videoId, userPlayerVars, ready)
    {
        try
        {
            getYoutubeComp().createYouTubePlayer(elem, videoId, userPlayerVars, ready);
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }
    };


    self.setYouTubePlayer = function (elem, videoId, userPlayerVars)
    {
        var player = new YoutubePlayerLoader(this, stage, getYoutubeComp());
        player.setPlayer(elem, videoId, userPlayerVars);
    };

    self.stopAllYouTubePlayers = function()
    {
        try
        {
            return getYoutubeComp().stopAllYouTubePlayers();
        }
        catch (error)
        {
            console.error("%s\n%O", error, error.stack);
        }

        return null;
    }

    /** End of Components */

    function restart(sym)
    {
        var childSymbols = sym.getChildSymbols();
        for (var i = 0; i < childSymbols.length; i++)
            childSymbols[i].play(0);
    }

    function startAutoFreezeTimeout()
    {
        clearAutoFreezeTimeout();

        if (config.autoFreezeTime >= 0)
            freezeTimeoutId = setTimeout(function() { self.freeze(true); }, config.autoFreezeTime);
    }

    function clearAutoFreezeTimeout()
    {
        if (freezeTimeoutId != null)
        {
            clearTimeout(freezeTimeoutId);
            freezeTimeoutId = null;
        }
    }

    var stopAtFrozenLabel = function(sym)
    {
        sym.stop('frozen');

        var childSymbols = sym.getChildSymbols();
        for (var i = 0; i < childSymbols.length; i++)
            stopAtFrozenLabel(childSymbols[i]);
    };

    function isMobile()
    {
        var m = {
            Android: function()
            {
                return navigator.userAgent.match(/Android/i);
            }
            ,
            BlackBerry: function()
            {
                return navigator.userAgent.match(/BlackBerry/i);
            }
            ,
            iOS: function()
            {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            }
            ,
            Opera: function()
            {
                return navigator.userAgent.match(/Opera Mini/i);
            }
            ,
            Windows: function()
            {
                return navigator.userAgent.match(/IEMobile/i);
            }
            ,
            any: function()
            {
                return (m.Android() || m.BlackBerry() || m.iOS() || m.Opera() || m.Windows());
            }
            ,
            hasTouchScreen: function()
            {
                var n = !1;
                var o = function (n)
                {
                    return -1 !== window.navigator.userAgent.toLowerCase().indexOf(n);
                };
                return ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && (o("NT 5") || o("NT 6.1") || o("NT 6.0") || (n = !0)), n;
            }
            ,
            inPageVideoSupport: function()
            {
                return !navigator.userAgent.match(/iPhone|iPod/i);
            }
        };

        return m;
    }
};


/** EventBus */

/**
The MIT License (MIT)

Copyright (c) 2014 Krasimir Tsonev

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var EventBusClass = {};
EventBusClass = function() {
	this.listeners = {};
};
EventBusClass.prototype = {
	addEventListener:function(type, callback, scope) {
		var args = [];
		var numOfArgs = arguments.length;
		for(var i=0; i<numOfArgs; i++){
			args.push(arguments[i]);
		}
		args = args.length > 3 ? args.splice(3, args.length-1) : [];
		if(typeof this.listeners[type] != "undefined") {
			this.listeners[type].push({scope:scope, callback:callback, args:args});
		} else {
			this.listeners[type] = [{scope:scope, callback:callback, args:args}];
		}
	},
	removeEventListener:function(type, callback, scope) {
		if(typeof this.listeners[type] != "undefined") {
			var numOfCallbacks = this.listeners[type].length;
			var newArray = [];
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				if(listener.scope == scope && listener.callback == callback) {

				} else {
					newArray.push(listener);
				}
			}
			this.listeners[type] = newArray;
		}
	},
	hasEventListener:function(type, callback, scope) {
		if(typeof this.listeners[type] != "undefined") {
			var numOfCallbacks = this.listeners[type].length;
			if(callback === undefined && scope === undefined){
				return numOfCallbacks > 0;
			}
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				if((scope ? listener.scope == scope : true) && listener.callback == callback) {
					return true;
				}
			}
		}
		return false;
	},
	dispatch:function(type, target) {
		var numOfListeners = 0;
		var event = {
			type:type,
			target:target
		};
		var args = [];
		var numOfArgs = arguments.length;
		for(var i=0; i<numOfArgs; i++){
			args.push(arguments[i]);
		};
		args = args.length > 2 ? args.splice(2, args.length-1) : [];
		args = [event].concat(args);
		if(typeof this.listeners[type] != "undefined") {
			var numOfCallbacks = this.listeners[type].length;
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				if(listener && listener.callback) {
					var concatArgs = args.concat(listener.args);
					listener.callback.apply(listener.scope, concatArgs);
					numOfListeners += 1;
				}
			}
		}
	},
	getEvents:function() {
		var str = "";
		for(var type in this.listeners) {
			var numOfCallbacks = this.listeners[type].length;
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				str += listener.scope && listener.scope.className ? listener.scope.className : "anonymous";
				str += " listen for '" + type + "'\n";
			}
		}
		return str;
	}
};
var EventBus = new EventBusClass();

/** End of EventBus */
