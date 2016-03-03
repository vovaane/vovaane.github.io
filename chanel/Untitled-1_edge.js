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
                            id: '_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1',
                            type: 'video',
                            tag: 'video',
                            rect: ['-151px', '100px', '969px', '632px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [vid+"151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1.mp4"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '375px', '627px'],
                            sizeRange: ['100px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(200,178,158,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 15210.667,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "left",
                            0,
                            425,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '-298px',
                            '-480px'
                        ],
                        [
                            "eid9",
                            "left",
                            425,
                            4934,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '-480px',
                            '-152px'
                        ],
                        [
                            "eid13",
                            "left",
                            5359,
                            8596,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '-152px',
                            '-151px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            425,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '-5px',
                            '-44px'
                        ],
                        [
                            "eid10",
                            "top",
                            425,
                            4934,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '-44px',
                            '-48px'
                        ],
                        [
                            "eid12",
                            "top",
                            5359,
                            8596,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '-48px',
                            '100px'
                        ],
                        [
                            "eid5",
                            "height",
                            0,
                            425,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '632px',
                            '710px'
                        ],
                        [
                            "eid11",
                            "height",
                            425,
                            13530,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '710px',
                            '412px'
                        ],
                        [
                            "eid8",
                            "width",
                            0,
                            425,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '969px',
                            '1119px'
                        ],
                        [
                            "eid14",
                            "width",
                            425,
                            13530,
                            "linear",
                            "${_151119_CHANEL_COCOMAD16_EdPChambre_15s_H264_1}",
                            '1119px',
                            '678px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-306692154");
