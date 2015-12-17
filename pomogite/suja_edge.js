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
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'FOTO_Auktsyon',
                            type: 'image',
                            rect: ['-155px', '-2px', '528px', '402px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"FOTO_Auktsyon.jpg",'0px','0px']
                        },
                        {
                            id: 'Image',
                            type: 'image',
                            rect: ['-15px', '0px', '270px', '180px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%BA%D0%BE%D0%B2%D0%B5%D1%86.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '236px', '396px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [2,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['-2px', '213px', '240px', '43px', 'auto', 'auto'],
                            text: "изменившие жизнь",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [15.5, "px"], "rgba(33,123,120,1.00)", "100", "none solid rgb(7, 94, 91)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['0px', '184px', '240px', '43px', 'auto', 'auto'],
                            text: "Фотографии,",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [25, "px"], "rgba(33,123,120,1.00)", "100", "none solid rgb(56, 54, 51)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['0px', '-58px', '240px', '57px', 'auto', 'auto'],
                            text: "Благотворительный аукцион",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [15, "px"], "rgba(56,54,51,1.00)", "100", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['-230px', '299px', '230px', '75px', 'auto', 'auto'],
                            opacity: 0.99,
                            text: "Молодковец",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "100", "none solid rgb(220, 220, 220)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['240px', '263px', '230px', '43px', 'auto', 'auto'],
                            opacity: 1,
                            text: "Юрий",
                            align: "center",
                            font: ['Arial Black, Gadget, sans-serif', [28, "px"], "rgba(255,255,255,1.00)", "100", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['0px', '364px', '234px', '49px', 'auto', 'auto'],
                            text: "17.12.15 - 12.01.16",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [16, "px"], "rgba(36,38,38,1.00)", "300", "none solid rgb(33, 123, 120)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '240px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3686,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            673,
                            "linear",
                            "${Text5}",
                            '-230px',
                            '4px'
                        ],
                        [
                            "eid50",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${Text11}",
                            '400px',
                            '364px'
                        ],
                        [
                            "eid57",
                            "height",
                            3686,
                            0,
                            "linear",
                            "${Text11}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid58",
                            "font-size",
                            3686,
                            0,
                            "linear",
                            "${Text11}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid47",
                            "top",
                            1702,
                            0,
                            "linear",
                            "${Text5}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid45",
                            "top",
                            1018,
                            982,
                            "linear",
                            "${Text6}",
                            '-58px',
                            '-60px'
                        ],
                        [
                            "eid27",
                            "top",
                            2000,
                            300,
                            "linear",
                            "${Text6}",
                            '-60px',
                            '5px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1809,
                            191,
                            "linear",
                            "${FOTO_Auktsyon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "color",
                            2000,
                            0,
                            "linear",
                            "${Text6}",
                            'rgba(56,54,51,1.00)',
                            'rgba(56,54,51,1.00)'
                        ],
                        [
                            "eid66",
                            "left",
                            3686,
                            0,
                            "linear",
                            "${Text11}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            673,
                            "linear",
                            "${Text2}",
                            '240px',
                            '4px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Image}",
                            '1',
                            '0'
                        ],
                        [
                            "eid67",
                            "color",
                            3686,
                            0,
                            "linear",
                            "${Text11}",
                            'rgba(36,38,38,1.00)',
                            'rgba(36,38,38,1.00)'
                        ],
                        [
                            "eid46",
                            "top",
                            1702,
                            0,
                            "linear",
                            "${Text2}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            3686,
                            "linear",
                            "${Image}",
                            '-15px',
                            '-8px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1018,
                            482,
                            "linear",
                            "${Text5}",
                            '0.99',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("suja_edgeActions.js");
})("EDGE-32949875");
