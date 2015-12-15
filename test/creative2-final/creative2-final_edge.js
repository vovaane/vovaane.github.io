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
                            rect: ['-150px', '0px', '525px', '400px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"FOTO_Auktsyon.jpg",'0px','0px']
                        },
                        {
                            id: 'Foto_Auktsyon_2',
                            display: 'none',
                            type: 'image',
                            rect: ['-40px', '0px', '600px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Foto_Auktsyon_2.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '236px', '396px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [2,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['238px', '86px', '240px', '82px', 'auto', 'auto'],
                            text: " \"Фотографии, меняющие жизнь\"",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [20, "px"], "rgba(255,162,108,1.00)", "200", "none solid rgb(215, 215, 215)", "normal", "break-word", "normal"],
                            transform: [[],[],[],['1.00116','1.05239']]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['48px', '372px', '182px', '11px', 'auto', 'auto'],
                            text: "фотограф:<br> Юрий Молодковец",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1.00)", "200", "none solid rgb(255, 162, 108)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['0px', '400px', '139px', '50px', 'auto', 'auto'],
                            text: "17.12.15 - 12.01.16<br>",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [20, "px"], "rgba(215,215,215,1)", "200", "none solid rgb(215, 215, 215)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['0px', '160px', '240px', '69px', 'auto', 'auto'],
                            opacity: 1,
                            text: "меняющие жизнь",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [28, "px"], "rgba(12,112,115,1.00)", "400", "none solid rgb(55, 55, 55)", "normal", "break-word", "normal"],
                            transform: [[],[],['10']]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '0px', '240px', '50px', 'auto', 'auto'],
                            text: "Благотворительный аукцион",
                            align: "center",
                            font: ['\'Arial Black\', Gadget, sans-serif', [15, "px"], "rgba(255,255,255,1.00)", "200", "none solid rgb(14, 183, 188)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['0px', '21px', '240px', '50px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Фотографии,",
                            align: "center",
                            font: ['Arial Black, Gadget, sans-serif', [29, "px"], "rgba(55,55,55,1.00)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '240px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(6,8,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid107",
                            "left",
                            3112,
                            770,
                            "linear",
                            "${Text5}",
                            '238px',
                            '0px'
                        ],
                        [
                            "eid140",
                            "color",
                            4195,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(12,112,115,1.00)',
                            'rgba(12,112,115,1.00)'
                        ],
                        [
                            "eid145",
                            "scaleX",
                            3882,
                            1118,
                            "linear",
                            "${Text5}",
                            '1.00116',
                            '1.08041'
                        ],
                        [
                            "eid14",
                            "border-width",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid146",
                            "scaleY",
                            3882,
                            1118,
                            "linear",
                            "${Text5}",
                            '1.05239',
                            '1.14338'
                        ],
                        [
                            "eid12",
                            "background-color",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,0.00)',
                            'rgba(192,192,192,0.00)'
                        ],
                        [
                            "eid86",
                            "skewX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid93",
                            "skewX",
                            1250,
                            131,
                            "linear",
                            "${Text2}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid94",
                            "skewX",
                            1381,
                            119,
                            "linear",
                            "${Text2}",
                            '10deg',
                            '-10deg'
                        ],
                        [
                            "eid95",
                            "skewX",
                            1500,
                            148,
                            "linear",
                            "${Text2}",
                            '-10deg',
                            '5deg'
                        ],
                        [
                            "eid96",
                            "skewX",
                            1648,
                            102,
                            "linear",
                            "${Text2}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid97",
                            "skewX",
                            1750,
                            157,
                            "linear",
                            "${Text2}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            3112,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "top",
                            3112,
                            770,
                            "linear",
                            "${Text6}",
                            '400px',
                            '324px'
                        ],
                        [
                            "eid26",
                            "width",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '236px',
                            '236px'
                        ],
                        [
                            "eid60",
                            "border-color",
                            7500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2611,
                            502,
                            "linear",
                            "${FOTO_Auktsyon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2611,
                            502,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2611,
                            502,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            1250,
                            "linear",
                            "${FOTO_Auktsyon}",
                            '0px',
                            '-150px'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Foto_Auktsyon_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            2820,
                            0,
                            "linear",
                            "${Foto_Auktsyon_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "top",
                            3460,
                            0,
                            "linear",
                            "${Text5}",
                            '86px',
                            '86px'
                        ],
                        [
                            "eid104",
                            "color",
                            3112,
                            4388,
                            "linear",
                            "${Text4}",
                            'rgba(255,255,255,1)',
                            'rgba(215,215,215,1.00)'
                        ],
                        [
                            "eid51",
                            "left",
                            3112,
                            33,
                            "linear",
                            "${Foto_Auktsyon_2}",
                            '-362px',
                            '-363px'
                        ],
                        [
                            "eid52",
                            "left",
                            3145,
                            4355,
                            "linear",
                            "${Foto_Auktsyon_2}",
                            '-363px',
                            '-40px'
                        ],
                        [
                            "eid33",
                            "top",
                            634,
                            616,
                            "linear",
                            "${Text2}",
                            '400px',
                            '161px'
                        ],
                        [
                            "eid7",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${FOTO_Auktsyon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid24",
                            "height",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '396px',
                            '396px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("creative2-final_edgeActions.js");
})("EDGE-384544339");
