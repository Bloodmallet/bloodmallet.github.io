Highcharts.chart('paladin_protection_beastlord', 
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
                67167,
                51836,
                384454,
                377774,
                358317,
                0,
                51685,
                51002,
                53006,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                51953,
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
                264728,
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
                29134,
                24181,
                0,
                0,
                0,
                25098,
                24015,
                22438,
                21299,
                28924,
                27966,
                23442,
                24079,
                22953,
                20863,
                21401,
                20566,
                23414,
                25515,
                22105,
                20849,
                22635,
                21943,
                18530,
                25287,
                20970,
                25088,
                0,
                23690,
                21448,
                25414,
                20452,
                8780,
                16924,
                19614,
                21379,
                20835,
                18701,
                18151,
                15938,
                0,
                14434,
                6157,
                7889,
                11390,
                11311,
                9185,
                11023,
                8633,
                7488,
                8457,
                9062,
                5956,
                8197,
                6618,
                5588,
                7361
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                342586,
                361340,
                0,
                0,
                0,
                22954,
                22222,
                22233,
                20581,
                21935,
                22701,
                19908,
                22017,
                21221,
                24322,
                21742,
                18860,
                21886,
                18744,
                20100,
                22147,
                19877,
                23896,
                19130,
                21485,
                18325,
                22491,
                0,
                24274,
                18199,
                19053,
                16948,
                9044,
                17840,
                21981,
                18522,
                22182,
                13353,
                12754,
                12393,
                0,
                9982,
                8632,
                12228,
                8468,
                8833,
                8177,
                9622,
                10106,
                11728,
                6756,
                10407,
                4621,
                1829,
                5607,
                4187,
                7887
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                0,
                0,
                22104,
                19652,
                18752,
                20918,
                18563,
                19767,
                22925,
                20095,
                21269,
                19156,
                19083,
                18516,
                16730,
                19881,
                20909,
                19865,
                18581,
                22351,
                17935,
                22084,
                18066,
                18284,
                0,
                16517,
                16816,
                19346,
                14848,
                10226,
                14810,
                17305,
                16975,
                13823,
                11836,
                14287,
                11068,
                0,
                8901,
                6139,
                6708,
                7682,
                7792,
                8527,
                6302,
                5065,
                9844,
                5898,
                5232,
                8166,
                7265,
                5381,
                3244,
                4282
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                0,
                0,
                17327,
                16362,
                16251,
                17334,
                20674,
                18188,
                15498,
                16753,
                17069,
                17319,
                16478,
                17662,
                18304,
                14232,
                15463,
                15941,
                18003,
                19131,
                15041,
                17787,
                15101,
                18708,
                0,
                17167,
                17064,
                17344,
                14478,
                7728,
                15322,
                17208,
                16792,
                15799,
                15828,
                11506,
                9099,
                0,
                10544,
                7106,
                11068,
                10502,
                7482,
                9553,
                10104,
                8988,
                8968,
                3468,
                4475,
                2172,
                2985,
                2448,
                6006,
                7863
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                0,
                0,
                17381,
                198613,
                198762,
                190028,
                14747,
                17290,
                17620,
                17727,
                17628,
                15480,
                19648,
                163418,
                14052,
                16265,
                13172,
                17231,
                16029,
                16106,
                14261,
                15704,
                16801,
                15602,
                0,
                16596,
                15255,
                13936,
                12380,
                7372,
                13071,
                12716,
                17395,
                15187,
                9336,
                12301,
                11590,
                0,
                4259,
                9193,
                5457,
                6012,
                10106,
                6682,
                1623,
                5533,
                6795,
                7193,
                4958,
                3063,
                6183,
                2533,
                1156,
                5278
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
                15988,
                0,
                0,
                0,
                14841,
                13379,
                14342,
                13777,
                11672,
                14421,
                12010,
                0,
                13515,
                16211,
                16850,
                11488,
                11636,
                14102,
                15230,
                15732,
                12020,
                14767,
                0,
                14094,
                15560,
                15530,
                13750,
                6955,
                13477,
                14492,
                9767,
                14317,
                12517,
                11306,
                5896,
                15597,
                8410,
                3669,
                7449,
                4735,
                3980,
                6910,
                7223,
                7447,
                7410,
                5605,
                5451,
                7274,
                4679,
                4571,
                5121,
                9577
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
                15704,
                0,
                0,
                0,
                14900,
                15311,
                13032,
                12473,
                14921,
                14170,
                12656,
                0,
                12941,
                11353,
                16002,
                15084,
                13704,
                16276,
                12593,
                14130,
                13848,
                14516,
                0,
                12122,
                10883,
                12131,
                9749,
                9496,
                9902,
                11935,
                12468,
                10196,
                9491,
                9225,
                12014,
                10914,
                6339,
                9137,
                104718,
                7246,
                5102,
                6118,
                101463,
                4035,
                90637,
                3174,
                2905,
                1923,
                75921,
                4297,
                2976,
                2301
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
                198661,
                0,
                0,
                0,
                181208,
                180917,
                177858,
                174610,
                172934,
                172256,
                169787,
                0,
                167321,
                162394,
                158154,
                158523,
                159782,
                145280,
                165606,
                140109,
                155897,
                137604,
                0,
                136678,
                142614,
                132472,
                148215,
                187541,
                143333,
                125629,
                122461,
                120327,
                133404,
                131074,
                120323,
                156812,
                104467,
                117238,
                0,
                94719,
                95475,
                94200,
                0,
                96044,
                0,
                84563,
                67648,
                75860,
                0,
                70230,
                68905,
                47304
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-29 21:58 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Paladin - Protection - Beastlord"
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
            "Kil'jaeden's Burning Wish",
            "Archimonde's Hatred Reborn",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +10",
            "Eye of Command",
            "Khaz'goroths Courage +20",
            "Khaz'goroths Courage +15",
            "Khaz'goroths Courage +10",
            "Cradle of Anguish",
            "Chaos Talisman",
            "Stat Stick (Mastery)",
            "Stat Stick (Crit)",
            "Memento of Angerboda",
            "Ettin Fingernail",
            "Stat Stick (Versatility)",
            "Khaz'goroths Courage",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "PVP Badge of Victory",
            "Fel-Oiled Infernal Machine",
            "Nightmare Egg Shell",
            "Specter of Betrayal",
            "Terrorbound Nexus",
            "Claw of the Crystalline Scorpid",
            "Gift of Radiance",
            "Ursoc's Rending Paw",
            "Aman'Thul's Vision",
            "Bloodstained Handkerchief",
            "Entwined Elemental Foci",
            "Void Stalker's Contract",
            "Horn of Valor",
            "Unstable Arcanocrystal",
            "PVP Insignia of Victory",
            "Convergence of Fates",
            "Vial of Ceaseless Toxins",
            "Might of Krosus",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Engine of Eradication",
            "Astral Alchemist Stone",
            "Impact Tremor",
            "Nature's Call",
            "Forgefiend's Fabricator",
            "Toe Knee's Promise",
            "Faulty Countermeasure",
            "Umbral Moonglaives",
            "Gorshalach's Legacy",
            "Spontaneous Appendages",
            "Shadow-Singed Fang",
            "Windscar Whetstone",
            "Giant Ornamental Pearl",
            "Infernal Cinders",
            "Seeping Scourgewing",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Draught of Souls"
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
                    text: "mean: 244856",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 244856.40350877194,
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