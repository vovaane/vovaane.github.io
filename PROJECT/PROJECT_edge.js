/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
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
                            id: 'fon',
                            type: 'image',
                            rect: ['0px', '0px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fon.jpg",'0px','0px']
                        },
                        {
                            id: 'E',
                            type: 'image',
                            rect: ['1px', '0px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"E.png",'0px','0px']
                        },
                        {
                            id: 'S',
                            type: 'image',
                            rect: ['0px', '-150px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"S.png",'0px','0px']
                        },
                        {
                            id: 'L',
                            type: 'image',
                            rect: ['0px', '-150px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"L.png",'0px','0px']
                        },
                        {
                            id: 'df_logo_color2',
                            type: 'image',
                            rect: ['90px', '304px', '59px', '67px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"df_logo_color2.png",'0px','0px']
                        },
                        {
                            id: 'A',
                            display: 'none',
                            type: 'image',
                            rect: ['-128px', '0px', '700px', '1167px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"A.png",'0px','0px']
                        },
                        {
                            id: 'snow',
                            type: 'image',
                            rect: ['-38px', '0px', '398px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"snow.gif",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '240px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "top",
                            381,
                            0,
                            "linear",
                            "${A}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "width",
                            0,
                            0,
                            "linear",
                            "${S}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid43",
                            "width",
                            302,
                            0,
                            "linear",
                            "${S}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid55",
                            "height",
                            552,
                            0,
                            "linear",
                            "${L}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid56",
                            "height",
                            802,
                            0,
                            "linear",
                            "${L}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid28",
                            "height",
                            302,
                            250,
                            "linear",
                            "${A}",
                            '1167px',
                            '400px'
                        ],
                        [
                            "eid34",
                            "left",
                            750,
                            250,
                            "linear",
                            "${E}",
                            '-128px',
                            '1px'
                        ],
                        [
                            "eid31",
                            "top",
                            829,
                            0,
                            "linear",
                            "${E}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "display",
                            829,
                            0,
                            "linear",
                            "${E}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            302,
                            "linear",
                            "${S}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "left",
                            302,
                            250,
                            "linear",
                            "${A}",
                            '-128px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "width",
                            552,
                            0,
                            "linear",
                            "${L}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid54",
                            "width",
                            802,
                            0,
                            "linear",
                            "${L}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid29",
                            "width",
                            302,
                            250,
                            "linear",
                            "${A}",
                            '700px',
                            '240px'
                        ],
                        [
                            "eid33",
                            "height",
                            750,
                            250,
                            "linear",
                            "${E}",
                            '1167px',
                            '400px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "top",
                            552,
                            250,
                            "linear",
                            "${L}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid44",
                            "height",
                            0,
                            0,
                            "linear",
                            "${S}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid45",
                            "height",
                            302,
                            0,
                            "linear",
                            "${S}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid50",
                            "display",
                            552,
                            0,
                            "linear",
                            "${L}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            802,
                            0,
                            "linear",
                            "${L}",
                            'block',
                            'block'
                        ],
                        [
                            "eid35",
                            "width",
                            750,
                            250,
                            "linear",
                            "${E}",
                            '700px',
                            '240px'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${A}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            381,
                            0,
                            "linear",
                            "${A}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "left",
                            552,
                            0,
                            "linear",
                            "${L}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "left",
                            802,
                            0,
                            "linear",
                            "${L}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("PROJECT_edgeActions.js");
})("EDGE-4902884");
