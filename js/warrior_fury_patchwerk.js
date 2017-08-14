Highcharts.chart('warrior_fury_patchwerk', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#ffeb3b",
            data: [
                0,
                136197,
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
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                5305,
                0,
                10481,
                3649,
                7371,
                7333,
                6385,
                6848,
                9636,
                7475,
                8246,
                5968,
                7112,
                7876,
                7480,
                5432,
                8524,
                6834,
                7788,
                4755,
                6830,
                6683,
                5950,
                18290,
                8246,
                6451,
                8056,
                8685,
                6806,
                4201,
                6348,
                6867,
                4817,
                4883,
                5603,
                4739,
                3919,
                0,
                4167,
                0,
                4226,
                3472,
                4918,
                2351
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                4990,
                0,
                11513,
                5053,
                6454,
                8219,
                5919,
                8015,
                6395,
                6548,
                9493,
                7913,
                5624,
                6614,
                5092,
                9510,
                5194,
                5692,
                8189,
                7310,
                4829,
                4521,
                6120,
                15265,
                5523,
                4604,
                9095,
                7179,
                5910,
                6907,
                4711,
                8434,
                4746,
                5684,
                5888,
                5855,
                3539,
                0,
                3795,
                0,
                3561,
                4112,
                3040,
                2335
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                6007,
                0,
                9677,
                6461,
                8830,
                4722,
                6393,
                6036,
                7065,
                6944,
                6537,
                5779,
                6594,
                5154,
                5834,
                3803,
                5881,
                5732,
                7161,
                5881,
                5168,
                7305,
                4861,
                15438,
                6406,
                6022,
                5663,
                7119,
                4318,
                4442,
                5404,
                5013,
                5334,
                3736,
                2435,
                3485,
                1329,
                0,
                3930,
                0,
                3944,
                3733,
                2902,
                539
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                2400,
                0,
                8501,
                5149,
                4180,
                5720,
                4282,
                5731,
                5459,
                5188,
                6962,
                5128,
                4896,
                5541,
                6286,
                5205,
                7109,
                5668,
                6715,
                3998,
                5324,
                3816,
                5719,
                12628,
                3947,
                6085,
                7718,
                5796,
                5390,
                6747,
                5054,
                5816,
                5623,
                3624,
                5121,
                4124,
                3794,
                0,
                3200,
                0,
                2559,
                2647,
                2602,
                3942
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                3221,
                0,
                85058,
                3233,
                6727,
                5403,
                4328,
                6590,
                3627,
                5633,
                6572,
                4972,
                4475,
                5441,
                4519,
                5196,
                4740,
                4678,
                6430,
                6504,
                4900,
                5627,
                3767,
                11734,
                3706,
                4170,
                3442,
                5754,
                4272,
                3285,
                4444,
                6523,
                4897,
                5506,
                3149,
                3155,
                3065,
                5275,
                3714,
                4221,
                3963,
                2563,
                4507,
                921
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                4366,
                0,
                0,
                5464,
                78550,
                4967,
                11526,
                71140,
                5136,
                4233,
                4567,
                3978,
                5660,
                3463,
                6327,
                5114,
                4045,
                67832,
                60010,
                5147,
                3044,
                5117,
                5103,
                10678,
                4027,
                64694,
                6743,
                3967,
                5080,
                2046,
                2828,
                3957,
                2845,
                1448,
                3832,
                3403,
                4339,
                4067,
                3171,
                2861,
                1403,
                3180,
                433,
                1673
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                147384,
                0,
                0,
                92937,
                0,
                73474,
                65705,
                0,
                66866,
                67928,
                57342,
                65581,
                64679,
                64105,
                62138,
                62982,
                61724,
                0,
                0,
                61205,
                63456,
                59255,
                60619,
                8056,
                60192,
                0,
                49788,
                50011,
                56733,
                60585,
                58886,
                50243,
                56202,
                53810,
                52606,
                52523,
                53790,
                62651,
                44894,
                58615,
                45500,
                45281,
                45074,
                35224
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-15 00:06:03"
    },
    title: {
        text: "Warrior - Fury - Patchwerk"
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
            "Convergence of Fates",
            "Kil'jaeden's Burning Wish",
            "Specter of Betrayal",
            "Unstable Arcanocrystal",
            "Umbral Moonglaives",
            "Eye of Command",
            "Fel-Oiled Infernal Machine",
            "Cradle of Anguish",
            "Chrono Shard",
            "Chaos Talisman",
            "Ursoc's Rending Paw",
            "The Devilsaur's Bite",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Nightmare Egg Shell",
            "Stat Stick (Haste)",
            "Gift of Radiance",
            "Engine of Eradication",
            "Vial of Ceaseless Toxins",
            "Ettin Fingernail",
            "Stat Stick (Mastery)",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Draught of Souls",
            "Tiny Oozeling in a Jar",
            "Infernal Cinders",
            "Claw of the Crystalline Scorpid",
            "Bloodstained Handkerchief",
            "PVP Badge of Victory",
            "Toe Knee's Promise",
            "Faulty Countermeasure",
            "Might of Krosus",
            "Spontaneous Appendages",
            "PVP Insignia of Victory",
            "Terrorbound Nexus",
            "Horn of Valor",
            "Nature's Call",
            "Darkmoon Deck: Dominion",
            "Windscar Whetstone",
            "Infernal Alchemist Stone",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Mark of Dargrul",
            "Giant Ornamental Pearl"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 93054",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 93054.97727272728,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});