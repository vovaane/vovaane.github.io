/** @preserve Biborg Adobe Edge Animate Template Version 0.4.357 |e8xK98cEQNpjBCDY7iZ3+va5sfw=| */

var YouTubeComp = function(controllerEventBus)
{
    var self = this;

    self.eventBus = new EventBusClass();
    self.USER_INTERACTION = 'USER_INTERACTION';

    var youTubeApiState = -1; // -1: not init, 0: initialasing, 1: ready
    var youTubePlayers = [];

    controllerEventBus.addEventListener('FREEZE', freezeHandler);

    function freezeHandler(event, automatic)
    {
        if (!automatic)
            self.stopAllYouTubePlayers();
    }

    self.createYouTubePlayer = function (elem, videoId, userPlayerVars, ready)
    {
        whenYouTubeApiIsReady(function ()
        {
            var defaultPlayerVars =
            {
                'iv_load_policy': 3,
                'modestbranding': 1,
                'playsinline': 1,
                'rel': 0,
                'showinfo': 0,
            };
            var playerVars = userPlayerVars || defaultPlayerVars;
            var isFullscreen = false;

            var player = new YT.Player(elem.attr('id'),
                {
                    width: '100%',
                    height: '100%',
                    videoId: videoId,
                    playerVars: playerVars,
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });

            youTubePlayers.push(player);

            function onPlayerReady(event)
            {
                if (ready) ready(player);

                trackVideoPlayer(player);

                document.addEventListener('webkitfullscreenchange', fullscreenEvent, false);
                document.addEventListener('mozfullscreenchange', fullscreenEvent, false);
                document.addEventListener('fullscreenchange', fullscreenEvent, false);
                document.addEventListener('MSFullscreenChange', fullscreenEvent, false);
            }

            function fullscreenEvent(event)
            {
                self.eventBus.dispatch(self.USER_INTERACTION);

                if (isFullscreen)
                {
                    platform.userCounter('YouTube_Fullscreen_Off');
                }
                else
                {
                    platform.userCounter('YouTube_Fullscreen_On');
                }

                isFullscreen = !isFullscreen;
            }

            var soundIntervalId;
            var soundActivate = 0;

            function isPlayerMuted()
            {
                return player.isMuted() || player.getVolume() == 0;
            }

            function onPlayerStateChange(event)
            {
                switch (event.data)
                {
                    case YT.PlayerState.PLAYING :
                        self.eventBus.dispatch(self.USER_INTERACTION);
                        platform.startTimer('YouTube_Timer');
                        platform.userCounter('YouTube_Play');
                        soundIntervalId = setInterval(function ()
                        {
                            var isMuted = isPlayerMuted();
                            if (!isMuted && soundActivate == 0)
                            {
                                platform.userCounter('YouTube_Sound_On');
                                soundActivate = 1;
                            }
                            if (isMuted && soundActivate == 1)
                            {
                                platform.userCounter('YouTube_Sound_Off');
                                soundActivate = 0;
                            }
                        }, 500);
                        break;

                    case YT.PlayerState.PAUSED :
                        self.eventBus.dispatch(self.USER_INTERACTION);
                        platform.userCounter('YouTube_Pause');
                        platform.stopTimer('YouTube_Timer');
                        clearInterval(soundIntervalId);
                        break;

                    case YT.PlayerState.ENDED :
                        platform.stopTimer('YouTube_Timer');
                        clearInterval(soundIntervalId);
                        break;
                }
            }

            function trackVideoPlayer(player, eventPrefix)
            {
                var videoMetricsNextProgress = 0;
                var intervalId = setInterval(checkProgressIfPlaying, 100);

                function checkProgressIfPlaying()
                {
                    if (player.getPlayerState == null)
                        return;

                    if (player.getPlayerState() != YT.PlayerState.PLAYING)
                        return;

                    checkProgress();
                }

                function checkProgress()
                {
                    var progress = Math.min(1.0, player.getCurrentTime() / player.getDuration());
                    if (progress >= videoMetricsNextProgress - 0.005)
                    {
                        if (videoMetricsNextProgress == 0)
                            platform.automaticCounter("YouTube_Video_Progress_0%");
                        else if (videoMetricsNextProgress == 0.25)
                            platform.automaticCounter("YouTube_Video_Progress_25%");
                        else if (videoMetricsNextProgress == 0.50)
                            platform.automaticCounter("YouTube_Video_Progress_50%");
                        else if (videoMetricsNextProgress == 0.75)
                            platform.automaticCounter("YouTube_Video_Progress_75%");
                        else if (videoMetricsNextProgress >= 1)
                            platform.automaticCounter("YouTube_Video_Progress_100%");

                        videoMetricsNextProgress += 0.25;
                    }

                    if (progress >= 1.0)
                        clearInterval(intervalId);
                }
            }
        });
    }

    self.stopAllYouTubePlayers = function ()
    {
        for (var i = 0; i < youTubePlayers.length; ++i)
        {
            try
            {
                youTubePlayers[i].stopVideo();
            }
            catch (error)
            {
                console.error("%s\n%O", error, error.stack);
            }
        }
    }

    var youTubeApiReadyCallbacks = [];

    function whenYouTubeApiIsReady(callback)
    {
        if (youTubeApiState == -1)
        {
            youTubeApiState = 0;

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = function ()
            {
                youTubeApiState = 1;

                for (var i = 0; i < youTubeApiReadyCallbacks.length; ++i)
                {
                    try
                    {
                        youTubeApiReadyCallbacks[i]();
                    }
                    catch (error)
                    {
                        console.error("%s\n%O", error, error.stack);
                    }
                }
                youTubeApiReadyCallbacks = null;
            }

            youTubeApiReadyCallbacks.push(callback);
        }
        else if (youTubeApiState == 0)
        {
            youTubeApiReadyCallbacks.push(callback);
        }
        else
        {
            callback();
        }
    }
}

function YoutubePlayerLoader(controller, stage, youtubeComp)
{
    var self = this;
    var initialized = false;
    var started = false;

    var cancelStart = false;

    controller.eventBus.addEventListener('FREEZE', onFreeze);
    controller.eventBus.addEventListener('UPDATE', onUpdate);
    controller.eventBus.addEventListener('REPLAY', onReplay);

    var elem;
    var videoId;
    var userPlayerVars;

    var player;

    self.setPlayer = function (_elem, _videoId, _userPlayerVars)
    {
        elem = _elem;
        videoId = _videoId;
        userPlayerVars =
            _userPlayerVars ||
            {
                'iv_load_policy': 3,
                'modestbranding': 1,
                'playsinline': 1,
                'rel': 0,
                'showinfo': 0,
            };
    };

    function onReplay()
    {
        if (player)
            player.seekTo(0);

        started = false;
        cancelStart = false;
    }

    function onUpdate()
    {
        checkYoutubePlayerCreation();
    }

    function onFreeze(automatic)
    {
        automatic = automatic == undefined ? false : automatic;

        cancelStart = true;

        checkYoutubePlayerCreation();
    }

    function checkYoutubePlayerCreation()
    {
        var youtubeInitPos = stage.getLabelPosition('youtube') || stage.getLabelPosition('endshot');

        if (stage.getPosition() >= youtubeInitPos)
        {
            if (!initialized)
            {
                initialized = true;
                started = true;
                initYoutube();
            }
            else if (!started && !cancelStart)
            {
                started = true;
                startYoutube();
            }
        }
    }

    function initYoutube()
    {
        if (cancelStart)
        {
            userPlayerVars.autoplay = 0;
        }
        youtubeComp.createYouTubePlayer(elem, videoId, userPlayerVars, function (p)
        {
            player = p;
        });
    }

    function startYoutube()
    {
        if (player)
            player.playVideo();
    }

}