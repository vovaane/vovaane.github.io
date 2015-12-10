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
                            id: 'Image',
                            display: 'block',
                            type: 'image',
                            tag: 'img',
                            rect: ['24px', '-11px', '192px', '351px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"http://vovaane.github.io/fond2/images/%D0%A4%D0%9E%D0%9D%D0%94.gif",'0px','0px']
                        },
                        {
                            id: 'gift',
                            display: 'block',
                            type: 'image',
                            rect: ['148px', '242px', '126px', '118px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"http://vovaane.github.io/fond2/images/gift.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['0px', '17px', '240px', '59px', 'auto', 'auto'],
                            opacity: 1,
                            text: "Подарки",
                            align: "center",
                            font: ['FuturaRegular', [55, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            display: 'block',
                            type: 'text',
                            rect: ['5px', '400px', '232px', '59px', 'auto', 'auto'],
                            opacity: 1,
                            text: "с возможностями",
                            align: "center",
                            font: ['FuturaRegular', [28, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7',
                            display: 'none',
                            type: 'text',
                            rect: ['2px', '20px', '240px', '60px', 'auto', 'auto'],
                            text: "Благотворительная <br>акция",
                            align: "center",
                            font: ['FuturaRegular', [25, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text9',
                            display: 'none',
                            type: 'text',
                            rect: ['7px', '21px', '224px', '74px', 'auto', 'auto'],
                            opacity: 1,
                            text: "Дарить,",
                            align: "center",
                            font: ['FuturaRegular', [55, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]

                        },
                        {
                            id: 'Text10',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '285px', '240px', '98px', 'auto', 'auto'],
                            opacity: 1,
                            text: "чтобы помогать!",
                            align: "center",
                            font: ['FuturaRegular', [45, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Image2',
                            display: 'none',
                            type: 'image',
                            rect: ['-6px', '99px', '250px', '177px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"http://vovaane.github.io/fond2/images/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA.png",'0px','0px']
                        },
                        {
                            id: 'Text8',
                            display: 'none',
                            type: 'text',
                            rect: ['2px', '331px', '240px', '81px', 'auto', 'auto'],
                            text: "\"Подарки с возможностями\"",
                            align: "center",
                            font: ['FuturaRegular', [28, "px"], "rgba(255,255,255,1)", "600", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'agyta',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '200px', '240px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"http://vovaane.github.io/fond2/images/agyta.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '240px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["#00B7EB"]
                        }
                    }
                },
                timeline: {
                    duration: 19000,
                    autoPlay: true,
                    labels: {
                        "loop": 870
                    },
                    data: [
                        [
                            "eid58",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Image}",
                            'block',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Image}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            5003,
                            0,
                            "linear",
                            "${Text10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${agyta}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${agyta}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "top",
                            1664,
                            336,
                            "linear",
                            "${Text5}",
                            '400px',
                            '353px'
                        ],
                        [
                            "eid139",
                            "height",
                            5000,
                            384,
                            "linear",
                            "${Image2}",
                            '177px',
                            '168px'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${Text8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Text9}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid131",
                            "top",
                            13000,
                            906,
                            "linear",
                            "${agyta}",
                            '401px',
                            '200px'
                        ],
                        [
                            "eid159",
                            "opacity",
                            10750,
                            987,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "top",
                            2429,
                            471,
                            "linear",
                            "${gift}",
                            '242px',
                            '252px'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "top",
                            5000,
                            384,
                            "linear",
                            "${Image2}",
                            '119px',
                            '100px'
                        ],
                        [
                            "eid190",
                            "top",
                            7250,
                            11750,
                            "linear",
                            "${Image2}",
                            '100px',
                            '99px'
                        ],
                        [
                            "eid59",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "left",
                            12250,
                            0,
                            "linear",
                            "${Text8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid195",
                            "left",
                            12500,
                            0,
                            "linear",
                            "${Text8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid196",
                            "left",
                            13116,
                            0,
                            "linear",
                            "${Text8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid145",
                            "width",
                            5000,
                            384,
                            "linear",
                            "${Image2}",
                            '250px',
                            '238px'
                        ],
                        [
                            "eid45",
                            "width",
                            870,
                            0,
                            "linear",
                            "${Text5}",
                            '232px',
                            '232px'
                        ],
                        [
                            "eid187",
                            "top",
                            5078,
                            0,
                            "linear",
                            "${Text10}",
                            '285px',
                            '285px'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Image2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Image2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            5384,
                            0,
                            "linear",
                            "${Image2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${gift}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "opacity",
                            10750,
                            1634,
                            "linear",
                            "${Image2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Text8}",
                            '331px',
                            '331px'
                        ],
                        [
                            "eid114",
                            "top",
                            12250,
                            866,
                            "linear",
                            "${Text8}",
                            '331px',
                            '103px'
                        ],
                        [
                            "eid10",
                            "left",
                            2429,
                            470,
                            "linear",
                            "${gift}",
                            '240px',
                            '148px'
                        ],
                        [
                            "eid164",
                            "opacity",
                            10750,
                            987,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "left",
                            5000,
                            384,
                            "linear",
                            "${Image2}",
                            '-6px',
                            '1px'
                        ],
                        [
                            "eid25",
                            "top",
                            1000,
                            664,
                            "linear",
                            "${Text3}",
                            '-59px',
                            '17px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("fond26_edgeActions.js");
})("EDGE-231929459");
