/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='http://vovaane.github.io/mobile/images/',
        aud='http://vovaane.github.io/mobile/media/',
        vid='http://vovaane.github.io/mobile/media/',
        js='http://vovaane.github.io/mobile/js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"platform.js",
            js+"standard-controller.js",
            js+"youtube-comp.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'zoom_flower',
                            symbolName: 'zoom_flower',
                            display: 'block',
                            type: 'rect',
                            rect: ['150px', '300px', '541', '671', 'auto', 'auto']
                        },
                        {
                            id: 'logo_complete',
                            symbolName: 'logo_complete',
                            display: 'none',
                            type: 'rect',
                            rect: ['-64px', '-2px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.63636','0.63636']]
                        },
                        {
                            id: 'bouton_Discover',
                            symbolName: 'bouton_Discover',
                            display: 'none',
                            type: 'rect',
                            rect: ['155px', '545', '148', '39', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'bottle2',
                            display: 'none',
                            type: 'image',
                            rect: ['32px', '154px', '237px', '391px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bottle.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['-200px', '-50px', '700px', '700px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'patterns',
                            type: 'group',
                            rect: ['-148', '48', '567', '633', 'auto', 'auto'],
                            c: [
                            {
                                id: 'new_pattern_A',
                                type: 'image',
                                rect: ['533px', '335px', '181px', '402px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"new_pattern_A.svg",'0px','0px'],
                                transform: [[],['-28'],[],['-1']]
                            },
                            {
                                id: 'new_pattern_B',
                                type: 'image',
                                rect: ['-122px', '308px', '180px', '429px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"new_pattern_B.svg",'0px','0px'],
                                transform: [[],['26'],[],['-1']]
                            },
                            {
                                id: 'new_pattern_D',
                                type: 'image',
                                rect: ['279px', '556px', '135px', '189px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"new_pattern_D.svg",'0px','0px'],
                                transform: [[],['-25'],[],['-1']]
                            }]
                        },
                        {
                            id: 'logo_miumiu3',
                            type: 'image',
                            rect: ['23px', '194px', '254px', '40px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_miumiu.png",'0px','0px']
                        },
                        {
                            id: 'logo_the_first_fragrance3',
                            type: 'image',
                            rect: ['161px', '240px', '115px', '6px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_the_first_fragrance.png",'0px','0px']
                        },
                        {
                            id: 'zone_click',
                            type: 'rect',
                            rect: ['0px', '0px', '301px', '600px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'border_l',
                            type: 'rect',
                            rect: ['0px', '0px', '1px', '100%', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'border_r',
                            type: 'rect',
                            rect: ['auto', '0px', '1px', '100%', '0px', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'border_t',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '1px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'border_b',
                            type: 'rect',
                            rect: ['0px', 'auto', '100%', '1px', 'auto', '0px'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '320px', '579px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(190,219,237,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: false,
                    labels: {
                        "loop_start": 0,
                        "endshot": 8000,
                        "loop_check": 10000,
                        "loop_restart": 11000,
                        "frozen": 15000
                    },
                    data: [
                        [
                            "eid637",
                            "top",
                            3599,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_A}",
                            '335px',
                            '41px'
                        ],
                        [
                            "eid478",
                            "opacity",
                            1967,
                            36,
                            "easeInOutQuart",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid645",
                            "opacity",
                            2133,
                            900,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid634",
                            "top",
                            3265,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_B}",
                            '308px',
                            '13px'
                        ],
                        [
                            "eid636",
                            "left",
                            3599,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_A}",
                            '533px',
                            '365px'
                        ],
                        [
                            "eid630",
                            "left",
                            2732,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_D}",
                            '279px',
                            '108px'
                        ],
                        [
                            "eid631",
                            "top",
                            2732,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_D}",
                            '556px',
                            '411px'
                        ],
                        [
                            "eid633",
                            "left",
                            3265,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_B}",
                            '-122px',
                            '39px'
                        ],
                        [
                            "eid599",
                            "opacity",
                            0,
                            534,
                            "easeInOutQuart",
                            "${logo_the_first_fragrance3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid257",
                            "display",
                            2133,
                            0,
                            "easeInOutQuart",
                            "${zoom_flower}",
                            'block',
                            'none'
                        ],
                        [
                            "eid659",
                            "display",
                            2133,
                            0,
                            "linear",
                            "${bottle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "rotateZ",
                            3599,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_A}",
                            '-28deg',
                            '-6deg'
                        ],
                        [
                            "eid635",
                            "rotateZ",
                            3265,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_B}",
                            '26deg',
                            '11deg'
                        ],
                        [
                            "eid479",
                            "opacity",
                            1767,
                            233,
                            "easeInOutQuart",
                            "${logo_complete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid440",
                            "display",
                            0,
                            0,
                            "easeInQuart",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid426",
                            "display",
                            2133,
                            0,
                            "easeInQuart",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid452",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${logo_complete}",
                            'none',
                            'none'
                        ],
                        [
                            "eid453",
                            "display",
                            2133,
                            0,
                            "easeInOutQuart",
                            "${logo_complete}",
                            'none',
                            'block'
                        ],
                        [
                            "eid600",
                            "opacity",
                            0,
                            534,
                            "easeInOutQuart",
                            "${logo_miumiu3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid632",
                            "rotateZ",
                            2732,
                            2334,
                            "easeOutCubic",
                            "${new_pattern_D}",
                            '-25deg',
                            '-46deg'
                        ],
                        [
                            "eid658",
                            "display",
                            2133,
                            0,
                            "easeOutQuad",
                            "${bouton_Discover}",
                            'none',
                            'block'
                        ],
                            [ "eid573", "trigger", 8000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${logo_complete}', ['endshot'] ] ],
                            [ "eid610", "trigger", 15000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${logo_complete}', ['endshot'] ] ]
                    ]
                }
            },
            "logo_complete": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['auto', '79px', '195px', '11px', '0px', 'auto'],
                            id: 'logo_the_first_fragrance2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo_the_first_fragrance.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '430px', '68px', 'auto', 'auto'],
                            id: 'logo_miumiu6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo_miumiu.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '429px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 3220,
                    autoPlay: true,
                    labels: {
                        "endshot": 3000
                    },
                    data: [
                        [
                            "eid224",
                            "opacity",
                            573,
                            451,
                            "easeInQuad",
                            "${logo_miumiu6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            851,
                            451,
                            "easeInQuad",
                            "${logo_the_first_fragrance2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "zoom_flower": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'mask',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-5px', '-5px', '10px', '10px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'rect',
                                transform: [[], [], [], ['0.63636', '0.63636']],
                                id: 'logo_complete3',
                                display: 'block',
                                symbolName: 'logo_complete',
                                opacity: '1',
                                rect: ['137px', '-39px', '429', '87', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 3220,
                    autoPlay: true,
                    data: [
                        [
                            "eid652",
                            "opacity",
                            1700,
                            433,
                            "easeInOutQuart",
                            "${logo_complete3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid649",
                            "display",
                            2133,
                            0,
                            "easeInOutQuart",
                            "${logo_complete3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid213",
                            "left",
                            310,
                            1567,
                            "easeInOutQuart",
                            "${mask}",
                            '-5px',
                            '-351px'
                        ],
                        [
                            "eid212",
                            "top",
                            310,
                            1567,
                            "easeInOutQuart",
                            "${mask}",
                            '-5px',
                            '-351px'
                        ],
                        [
                            "eid218",
                            "left",
                            310,
                            1567,
                            "easeInOutQuart",
                            "${logo_complete3}",
                            '-209px',
                            '137px'
                        ],
                        [
                            "eid210",
                            "height",
                            310,
                            1567,
                            "easeInOutQuart",
                            "${mask}",
                            '10px',
                            '701px'
                        ],
                        [
                            "eid219",
                            "top",
                            310,
                            1567,
                            "easeInOutQuart",
                            "${logo_complete3}",
                            '-39px',
                            '307px'
                        ],
                        [
                            "eid211",
                            "width",
                            310,
                            1567,
                            "easeInOutQuart",
                            "${mask}",
                            '10px',
                            '701px'
                        ]
                    ]
                }
            },
            "bouton_Discover": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0px', '0px', '148px', '37px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['3px', '3px', '140px', '29px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['47px', '13px', '67px', '13px', 'auto', 'auto'],
                            id: 'txt_discover',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt_discover.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("http://vovaane.github.io/mobile/300x600_std_edgeActions.js");
})("EDGE-89045760");
