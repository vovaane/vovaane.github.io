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
                            id: 'cup2',
                            type: 'image',
                            rect: ['241px', '0px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cup2.jpg",'0px','0px']
                        },
                        {
                            id: 'fon',
                            type: 'image',
                            rect: ['0px', '0px', '240px', '400px', 'auto', 'auto'],
                            opacity: '1',
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
                            id: 'A',
                            display: 'none',
                            type: 'image',
                            rect: ['-128px', '0px', '700px', '1167px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"A.png",'0px','0px']
                        },
                        {
                            id: 'snow',
                            type: 'image',
                            rect: ['-38px', '0px', '398px', '400px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"snow.gif",'0px','0px']
                        },
                        {
                            id: 'vaz3',
                            type: 'image',
                            rect: ['243px', '0px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vaz3.jpg",'0px','0px']
                        },
                        {
                            id: 'tar2',
                            type: 'image',
                            rect: ['-250px', '0px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tar2.jpg",'0px','0px']
                        },
                        {
                            id: 'df_logo_color2',
                            type: 'image',
                            rect: ['2px', '293px', '59px', '67px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"df_logo_color2.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '238px', '398px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(97,107,176,1.00)","solid"]
                        },
                        {
                            id: 'sale2',
                            display: 'none',
                            type: 'image',
                            rect: ['1px', '1px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sale.png",'0px','0px']
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
                    duration: 9994,
                    autoPlay: true,
                    data: [
                        [
                            "eid62",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${S}",
                            '1',
                            '0'
                        ],
                        [
                            "eid200",
                            "opacity",
                            9250,
                            250,
                            "linear",
                            "${S}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "top",
                            1857,
                            396,
                            "linear",
                            "${df_logo_color2}",
                            '293px',
                            '293px'
                        ],
                        [
                            "eid135",
                            "top",
                            2253,
                            396,
                            "linear",
                            "${df_logo_color2}",
                            '293px',
                            '2px'
                        ],
                        [
                            "eid169",
                            "top",
                            8393,
                            857,
                            "linear",
                            "${df_logo_color2}",
                            '2px',
                            '293px'
                        ],
                        [
                            "eid159",
                            "height",
                            2253,
                            397,
                            "linear",
                            "${df_logo_color2}",
                            '67px',
                            '57px'
                        ],
                        [
                            "eid170",
                            "height",
                            8393,
                            857,
                            "linear",
                            "${df_logo_color2}",
                            '57px',
                            '65px'
                        ],
                        [
                            "eid160",
                            "width",
                            2253,
                            397,
                            "linear",
                            "${df_logo_color2}",
                            '59px',
                            '50px'
                        ],
                        [
                            "eid171",
                            "width",
                            8393,
                            857,
                            "linear",
                            "${df_logo_color2}",
                            '50px',
                            '57px'
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
                            "eid198",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${S}",
                            'block',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${S}",
                            'block',
                            'block'
                        ],
                        [
                            "eid206",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${sale2}",
                            'none',
                            'block'
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
                            "eid100",
                            "left",
                            4500,
                            412,
                            "linear",
                            "${vaz3}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid110",
                            "left",
                            6107,
                            393,
                            "linear",
                            "${vaz3}",
                            '0px',
                            '-250px'
                        ],
                        [
                            "eid191",
                            "top",
                            381,
                            0,
                            "linear",
                            "${A}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid192",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${A}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fon}",
                            '1',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${fon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            8500,
                            750,
                            "linear",
                            "${fon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${sale2}",
                            '1px',
                            '1px'
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
                            "eid137",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${df_logo_color2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            1857,
                            396,
                            "linear",
                            "${df_logo_color2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            2650,
                            350,
                            "linear",
                            "${df_logo_color2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            8000,
                            393,
                            "linear",
                            "${df_logo_color2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid179",
                            "opacity",
                            9622,
                            372,
                            "linear",
                            "${df_logo_color2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "left",
                            6500,
                            412,
                            "linear",
                            "${tar2}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid139",
                            "left",
                            8000,
                            393,
                            "linear",
                            "${tar2}",
                            '0px',
                            '-250px'
                        ],
                        [
                            "eid133",
                            "left",
                            1857,
                            0,
                            "linear",
                            "${df_logo_color2}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid134",
                            "left",
                            2253,
                            396,
                            "linear",
                            "${df_logo_color2}",
                            '91px',
                            '2px'
                        ],
                        [
                            "eid168",
                            "left",
                            8393,
                            857,
                            "linear",
                            "${df_logo_color2}",
                            '2px',
                            '96px'
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
                            "eid205",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${E}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid98",
                            "left",
                            2500,
                            391,
                            "linear",
                            "${cup2}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "left",
                            4250,
                            409,
                            "linear",
                            "${cup2}",
                            '0px',
                            '-245px'
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
                            "eid202",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${E}",
                            'block',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${E}",
                            'block',
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
                            "eid201",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${S}",
                            '0px',
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
                            "eid187",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${A}",
                            'block',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${A}",
                            'block',
                            'block'
                        ],
                        [
                            "eid59",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${A}",
                            '1',
                            '0'
                        ],
                        [
                            "eid189",
                            "opacity",
                            2500,
                            0,
                            "linear",
                            "${A}",
                            '0',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            9250,
                            250,
                            "linear",
                            "${A}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${E}",
                            '1',
                            '0'
                        ],
                        [
                            "eid204",
                            "opacity",
                            9250,
                            250,
                            "linear",
                            "${E}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${L}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            9250,
                            250,
                            "linear",
                            "${L}",
                            '0',
                            '1'
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
                            "eid197",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${L}",
                            '0px',
                            '0px'
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
                            "eid194",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${L}",
                            'block',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${L}",
                            'block',
                            'block'
                        ],
                        [
                            "eid209",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${snow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${snow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid208",
                            "opacity",
                            8750,
                            250,
                            "linear",
                            "${snow}",
                            '0.000000',
                            '1'
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
