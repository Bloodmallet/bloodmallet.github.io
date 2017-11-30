Highcharts.chart('monk_windwalker_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + this.stackY,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#fdbf6f",
            data: [
                82284,
                82131,
                69567,
                458479,
                75668,
                450258,
                430028,
                0,
                0,
                0,
                0,
                0,
                55763,
                0,
                0,
                0,
                0,
                332973,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                39215,
                28848,
                29861,
                0,
                38145,
                0,
                0,
                39861,
                16451,
                13904,
                29693,
                18118,
                22777,
                30330,
                39081,
                31919,
                25843,
                0,
                25679,
                36191,
                20994,
                23683,
                14366,
                38470,
                18539,
                17324,
                23636,
                24848,
                27466,
                16738,
                29296,
                25274,
                30664,
                31804,
                29409,
                20763,
                22972,
                35364,
                30774,
                19308,
                23183,
                17357,
                19670,
                0,
                17875,
                7788,
                14710,
                6224,
                10796,
                12259,
                12354,
                8221,
                15781,
                11143,
                0,
                4062,
                10733,
                15670,
                16194,
                15090
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                44267,
                42018,
                367391,
                0,
                35069,
                0,
                0,
                24722,
                35666,
                31966,
                32714,
                36486,
                30571,
                24113,
                20309,
                19122,
                26758,
                0,
                19124,
                25563,
                27055,
                29176,
                22812,
                25258,
                20042,
                25148,
                35718,
                19590,
                11123,
                0,
                5606,
                22946,
                25151,
                18704,
                16554,
                9647,
                28716,
                16034,
                14525,
                20463,
                10973,
                18523,
                13028,
                0,
                4788,
                1095,
                10820,
                7098,
                14949,
                10022,
                0,
                11847,
                10159,
                449,
                12902,
                588,
                12734,
                7148,
                11871,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                16881,
                23404,
                0,
                0,
                25808,
                0,
                0,
                39957,
                20992,
                559,
                10888,
                27803,
                29368,
                23848,
                41116,
                11657,
                21169,
                0,
                21609,
                17634,
                25032,
                15970,
                24705,
                16784,
                15951,
                14671,
                7056,
                31624,
                32336,
                17638,
                28910,
                11913,
                27748,
                20928,
                24916,
                20375,
                17673,
                19384,
                14992,
                17860,
                22429,
                18192,
                2213,
                0,
                18123,
                4512,
                4766,
                18293,
                6361,
                3484,
                16534,
                10406,
                14883,
                15990,
                3519,
                20892,
                0,
                12501,
                10625,
                31515
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                34899,
                30630,
                0,
                0,
                23875,
                0,
                0,
                17871,
                21297,
                25108,
                14530,
                30193,
                12724,
                24751,
                19014,
                26851,
                15451,
                0,
                22844,
                26063,
                12230,
                11901,
                11765,
                26723,
                24501,
                22762,
                25714,
                21614,
                13508,
                18488,
                11037,
                21268,
                10779,
                20248,
                18714,
                22003,
                23606,
                13897,
                29447,
                5909,
                22126,
                14215,
                22343,
                0,
                13628,
                9483,
                9755,
                10986,
                9419,
                4503,
                0,
                4534,
                0,
                0,
                16591,
                0,
                14098,
                6061,
                6350,
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                281576,
                272403,
                0,
                0,
                254920,
                0,
                0,
                19745,
                17192,
                27642,
                22762,
                17613,
                199608,
                11239,
                9152,
                23954,
                15396,
                0,
                17991,
                23254,
                9833,
                25258,
                30379,
                17651,
                6214,
                7703,
                5272,
                17530,
                18105,
                8529,
                13068,
                10836,
                16475,
                19428,
                19907,
                13508,
                21103,
                11696,
                13434,
                20419,
                11308,
                16971,
                8869,
                0,
                4856,
                2116,
                14997,
                8452,
                2265,
                7939,
                16935,
                0,
                4460,
                5567,
                0,
                7742,
                13342,
                8277,
                16762,
                1858
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                15899,
                18568,
                15258,
                14358,
                15112,
                0,
                17948,
                22918,
                16552,
                24163,
                0,
                13888,
                11006,
                13435,
                4522,
                19380,
                20489,
                29195,
                30123,
                6170,
                10338,
                11404,
                16009,
                32267,
                6890,
                20426,
                10340,
                9696,
                12108,
                8671,
                16742,
                14112,
                10883,
                18801,
                9454,
                7206,
                16967,
                11288,
                12363,
                0,
                0,
                5376,
                15415,
                18887,
                13181,
                12078,
                2405,
                3270,
                603,
                3373,
                9240,
                0,
                9856
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16094,
                15989,
                11486,
                11147,
                15422,
                0,
                17197,
                9973,
                14571,
                12619,
                0,
                21879,
                23541,
                17123,
                22546,
                4227,
                12950,
                5475,
                7854,
                23020,
                181533,
                183639,
                11744,
                2686,
                19017,
                8961,
                11350,
                13299,
                6378,
                17224,
                8845,
                11386,
                164345,
                9382,
                12885,
                7272,
                13455,
                4291,
                13705,
                123794,
                6468,
                11147,
                5972,
                0,
                3775,
                0,
                12555,
                0,
                2536,
                466,
                0,
                25571,
                0
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                196607,
                218018,
                233152,
                220712,
                195107,
                0,
                195008,
                179454,
                193364,
                194223,
                0,
                187412,
                165981,
                200746,
                191763,
                196970,
                161379,
                197259,
                183908,
                180700,
                0,
                0,
                215235,
                169758,
                171110,
                145086,
                143924,
                141963,
                169419,
                128824,
                140797,
                130871,
                0,
                129665,
                132192,
                129573,
                171599,
                124470,
                132200,
                0,
                113331,
                105437,
                93585,
                104424,
                94804,
                83892,
                88784,
                96240,
                92844,
                73265,
                67872,
                41340,
                78829
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Monk - Windwalker - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Golganneth's Vitality +20",
            "Golganneth's Vitality +15",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision +20",
            "Golganneth's Vitality +10",
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +10",
            "Chaos Talisman",
            "Eye of Command",
            "Bloodthirsty Instinct",
            "Convergence of Fates",
            "Cradle of Anguish",
            "Golganneth's Vitality",
            "Memento of Angerboda",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Engine of Eradication",
            "Aman'Thul's Vision",
            "Stat Stick (Versatility)",
            "Arcanogolem Digit",
            "Entwined Elemental Foci",
            "Chrono Shard",
            "Stat Stick (Crit)",
            "Specter of Betrayal",
            "Thrice-Accursed Compass",
            "PVP Badge of Conquest",
            "Nightmare Egg Shell",
            "Gorshalach's Legacy",
            "Shadow-Singed Fang",
            "Unstable Arcanocrystal",
            "Gift of Radiance",
            "Horn of Valor",
            "Void Stalker's Contract",
            "Vial of Ceaseless Toxins",
            "Six-Feather Fan",
            "PVP Insignia of Conquest",
            "Tirathon's Betrayal",
            "Bloodstained Handkerchief",
            "Nightblooming Frond",
            "Forgefiend's Fabricator",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Terrorbound Nexus",
            "Astral Alchemist Stone",
            "Umbral Moonglaives",
            "Nature's Call",
            "Seeping Scourgewing",
            "Mark of Dargrul",
            "Infernal Cinders",
            "Giant Ornamental Pearl",
            "Tiny Oozeling in a Jar",
            "The Devilsaur's Bite",
            "Toe Knee's Promise",
            "Windscar Whetstone",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "Spiked Counterweight",
            "Ravaged Seed Pod",
            "Draught of Souls",
            "Ley Spark"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: "mean: 281053",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 281053.35,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});