Highcharts.chart('warrior_fury_beastlord', 
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
                0,
                0,
                367959,
                363405,
                61066,
                0,
                0,
                0,
                54899,
                348952,
                55208,
                0,
                35330,
                0,
                0,
                298981,
                0,
                45710,
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
                28857,
                35820,
                0,
                0,
                21080,
                25778,
                13228,
                23365,
                25843,
                0,
                17957,
                25966,
                21818,
                28440,
                25082,
                0,
                7465,
                21050,
                17892,
                20084,
                19168,
                16606,
                26512,
                20744,
                20140,
                14214,
                16047,
                13837,
                12122,
                17536,
                6496,
                13394,
                8560,
                11510,
                10281,
                11378,
                18876,
                15718,
                8927,
                15198,
                16564,
                20387,
                15476,
                16201,
                14931,
                22640,
                10124,
                14058,
                5813,
                10536,
                12292,
                17375,
                6091,
                0,
                96,
                18330
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                22230,
                24070,
                0,
                0,
                20999,
                27240,
                10268,
                38190,
                18228,
                0,
                20749,
                28561,
                267948,
                15878,
                23223,
                0,
                8902,
                15117,
                19898,
                23519,
                21307,
                16828,
                10679,
                10506,
                10995,
                13190,
                10409,
                19505,
                20981,
                14647,
                17733,
                7408,
                19922,
                11127,
                11791,
                4530,
                17136,
                9166,
                20127,
                14222,
                10512,
                13189,
                19319,
                16804,
                5235,
                8221,
                11050,
                10618,
                18557,
                14305,
                4700,
                9815,
                2743,
                0,
                13018,
                18244
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                31626,
                19520,
                0,
                0,
                25089,
                20561,
                10034,
                18420,
                18138,
                0,
                20224,
                12605,
                0,
                30555,
                16291,
                0,
                10049,
                14200,
                16666,
                18628,
                9818,
                9815,
                25206,
                13046,
                7177,
                19259,
                12013,
                6761,
                12768,
                8312,
                15763,
                7632,
                0,
                16063,
                17478,
                23353,
                7402,
                5174,
                13783,
                17362,
                16262,
                15637,
                5224,
                6447,
                10388,
                20658,
                11515,
                3955,
                15893,
                8033,
                17092,
                12633,
                11548,
                0,
                2209,
                13504
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                27146,
                26712,
                0,
                0,
                13454,
                24001,
                13265,
                14992,
                22257,
                0,
                23041,
                21129,
                0,
                14109,
                23320,
                0,
                8792,
                14890,
                2914,
                24811,
                11512,
                6335,
                9766,
                9670,
                15405,
                0,
                13895,
                14598,
                5805,
                12135,
                6365,
                22699,
                10066,
                19012,
                9583,
                4576,
                15069,
                17938,
                7741,
                6446,
                5937,
                9373,
                4036,
                8355,
                6287,
                0,
                12993,
                11736,
                14972,
                11576,
                1282,
                10641,
                7555,
                0,
                1667,
                15208
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                15035,
                28001,
                0,
                0,
                219376,
                16668,
                4619,
                21434,
                210185,
                0,
                197725,
                18826,
                0,
                22834,
                7964,
                0,
                8916,
                148493,
                19789,
                0,
                19805,
                19930,
                18062,
                16981,
                9974,
                15437,
                3502,
                12916,
                13391,
                14265,
                9668,
                6913,
                10195,
                0,
                12647,
                10817,
                0,
                6823,
                9928,
                8768,
                18012,
                16400,
                12588,
                11392,
                11525,
                9152,
                1216,
                5998,
                6623,
                10471,
                11943,
                9432,
                723,
                0,
                8625,
                15479
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                24800,
                17348,
                0,
                0,
                0,
                17408,
                12883,
                17854,
                0,
                0,
                0,
                11503,
                0,
                18473,
                16967,
                0,
                6560,
                0,
                9837,
                23993,
                8923,
                13552,
                17298,
                4002,
                6941,
                11482,
                13601,
                5795,
                8367,
                7150,
                13881,
                13562,
                7760,
                10022,
                8100,
                8585,
                22096,
                13168,
                8473,
                10377,
                2384,
                8933,
                7080,
                9355,
                0,
                10711,
                15383,
                12408,
                6629,
                1807,
                1561,
                5448,
                11003,
                15523,
                5337,
                10617
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                14589,
                228263,
                0,
                0,
                0,
                8808,
                4099,
                16055,
                0,
                0,
                0,
                215094,
                0,
                17156,
                16567,
                0,
                5006,
                0,
                7069,
                4231,
                7977,
                6024,
                5191,
                11584,
                5989,
                6790,
                6289,
                12221,
                18165,
                11348,
                608,
                7151,
                3946,
                3809,
                7912,
                11897,
                3273,
                12691,
                2336,
                4080,
                10643,
                5959,
                121797,
                0,
                16058,
                13372,
                104016,
                2670,
                6049,
                13882,
                9407,
                6248,
                0,
                0,
                7281,
                8194
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                220497,
                0,
                0,
                0,
                0,
                214723,
                284418,
                201752,
                0,
                0,
                0,
                0,
                0,
                156409,
                173929,
                0,
                221768,
                0,
                145597,
                121115,
                135147,
                143489,
                117888,
                141288,
                143186,
                138112,
                142371,
                130287,
                123667,
                125379,
                136913,
                126638,
                147069,
                130532,
                122490,
                123716,
                115559,
                117166,
                125718,
                118566,
                111418,
                96278,
                0,
                107054,
                102687,
                81809,
                0,
                103603,
                86129,
                88141,
                96984,
                80818,
                102008,
                120682,
                80030,
                3483
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-29 21:58 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Warrior - Fury - Beastlord"
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
            "Tiny Oozeling in a Jar",
            "Forgefiend's Fabricator",
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +20",
            "Khaz'goroths Courage +20",
            "Toe Knee's Promise",
            "Convergence of Fates",
            "Umbral Moonglaives",
            "Khaz'goroths Courage +15",
            "Aman'Thul's Vision +10",
            "Khaz'goroths Courage +10",
            "Gorshalach's Legacy",
            "Kil'jaeden's Burning Wish",
            "Void Stalker's Contract",
            "Terrorbound Nexus",
            "Aman'Thul's Vision",
            "Unstable Arcanocrystal",
            "Khaz'goroths Courage",
            "Chaos Talisman",
            "Specter of Betrayal",
            "Mark of Dargrul",
            "Cradle of Anguish",
            "Claw of the Crystalline Scorpid",
            "Eye of Command",
            "Stat Stick (Haste)",
            "Ettin Fingernail",
            "Ravaged Seed Pod",
            "Fel-Oiled Infernal Machine",
            "Windscar Whetstone",
            "Entwined Elemental Foci",
            "Impact Tremor",
            "Chrono Shard",
            "Nature's Call",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Nightmare Egg Shell",
            "Gift of Radiance",
            "Stat Stick (Mastery)",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "PVP Badge of Victory",
            "Ursoc's Rending Paw",
            "Seeping Scourgewing",
            "Horn of Valor",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "Shadow-Singed Fang",
            "Infernal Cinders",
            "Vial of Ceaseless Toxins",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Might of Krosus",
            "Spiked Counterweight",
            "Astral Alchemist Stone",
            "Giant Ornamental Pearl",
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
                    text: "mean: 236973",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 236973.69642857142,
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