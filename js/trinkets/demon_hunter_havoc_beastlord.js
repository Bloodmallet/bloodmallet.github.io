Highcharts.chart('demon_hunter_havoc_beastlord', 
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
                125709,
                117536,
                104943,
                0,
                0,
                462457,
                460067,
                438174,
                46605,
                0,
                0,
                51980,
                342862,
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
                49258,
                47097,
                45364,
                49710,
                56648,
                0,
                0,
                0,
                25308,
                39113,
                29104,
                36442,
                0,
                24746,
                21764,
                26132,
                26996,
                10988,
                15570,
                15584,
                25480,
                20358,
                11670,
                22608,
                26375,
                25528,
                19581,
                18413,
                33558,
                19992,
                22127,
                31825,
                26740,
                23089,
                22128,
                13421,
                25487,
                26761,
                27622,
                14903,
                14969,
                16146,
                14285,
                17977,
                7713,
                13824,
                20107,
                18221,
                0,
                5858,
                6184,
                8044,
                19330,
                673,
                6562,
                0,
                12014,
                6735,
                1800,
                0
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                61294,
                46305,
                41089,
                51015,
                18287,
                0,
                0,
                0,
                316518,
                14943,
                29040,
                22981,
                0,
                32367,
                21099,
                18648,
                26473,
                7282,
                16114,
                38776,
                16356,
                24324,
                32072,
                9274,
                19848,
                27822,
                20037,
                28666,
                17281,
                27211,
                17419,
                25353,
                13981,
                14926,
                24027,
                25008,
                24723,
                17512,
                17082,
                21048,
                23350,
                27055,
                22464,
                28196,
                14274,
                21660,
                3942,
                8200,
                0,
                8813,
                17074,
                6655,
                4544,
                9707,
                4173,
                6779,
                3270,
                7763,
                2998,
                4810
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                43837,
                39189,
                48002,
                39313,
                47769,
                0,
                0,
                0,
                0,
                26370,
                24166,
                18344,
                0,
                23940,
                31098,
                23981,
                15772,
                24638,
                26755,
                4790,
                24076,
                22053,
                11803,
                19968,
                22269,
                14241,
                18130,
                11387,
                20539,
                28433,
                19366,
                18867,
                22511,
                18389,
                19178,
                14085,
                8622,
                13093,
                20061,
                12457,
                26256,
                10268,
                25298,
                9831,
                20921,
                4850,
                24801,
                2757,
                0,
                6818,
                10668,
                13749,
                9305,
                6933,
                11824,
                15675,
                12595,
                6208,
                7293,
                0
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                29648,
                42235,
                27559,
                33860,
                19992,
                0,
                0,
                0,
                0,
                12341,
                31108,
                28068,
                0,
                17019,
                15026,
                22032,
                8468,
                6419,
                20748,
                24178,
                25059,
                9346,
                28548,
                27844,
                13479,
                14015,
                18551,
                20212,
                16084,
                4159,
                14523,
                10161,
                15759,
                9236,
                15504,
                10120,
                18454,
                14220,
                10433,
                9126,
                19431,
                21560,
                17886,
                16171,
                1473,
                21712,
                4557,
                18955,
                0,
                14014,
                7378,
                0,
                250,
                4145,
                2090,
                3117,
                16594,
                5599,
                0,
                14977
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                422392,
                389420,
                347602,
                37750,
                29984,
                0,
                0,
                0,
                0,
                22124,
                20263,
                197680,
                0,
                21212,
                21700,
                4367,
                21774,
                5437,
                14895,
                9120,
                9327,
                18319,
                11999,
                10257,
                17430,
                22693,
                11437,
                14139,
                7353,
                27505,
                20109,
                23722,
                11607,
                21319,
                21869,
                11484,
                19199,
                21720,
                20474,
                13268,
                15534,
                19567,
                10028,
                15777,
                20249,
                15730,
                9461,
                11207,
                0,
                11319,
                11645,
                14478,
                4929,
                16486,
                6536,
                11289,
                988,
                4287,
                3091,
                0
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                22623,
                29051,
                0,
                0,
                0,
                0,
                23005,
                19794,
                0,
                0,
                20900,
                20240,
                28273,
                19931,
                19250,
                6319,
                13006,
                15253,
                18295,
                12458,
                14180,
                10949,
                13237,
                10639,
                15250,
                23266,
                18762,
                17059,
                17667,
                13197,
                1465,
                16038,
                15179,
                14674,
                8378,
                22130,
                13503,
                7669,
                7749,
                20622,
                17613,
                6478,
                18198,
                9730,
                10089,
                10897,
                0,
                6473,
                7727,
                9518,
                1702,
                2961,
                1177,
                4377,
                4156,
                0,
                8634
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                25778,
                326233,
                0,
                0,
                0,
                0,
                8937,
                219171,
                0,
                0,
                18165,
                208930,
                14573,
                11376,
                0,
                21153,
                13213,
                5016,
                19547,
                14932,
                27283,
                19093,
                16722,
                15125,
                14518,
                4206,
                8359,
                11822,
                13391,
                14949,
                25033,
                12224,
                12710,
                0,
                16455,
                66,
                160391,
                13923,
                15071,
                14728,
                7246,
                14221,
                7391,
                10939,
                8196,
                13486,
                4788,
                0,
                11210,
                11668,
                6654,
                18377,
                7119,
                7547,
                297,
                5428,
                5156
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                332599,
                0,
                0,
                0,
                0,
                0,
                226724,
                0,
                0,
                0,
                184331,
                0,
                200631,
                197837,
                247581,
                186514,
                189367,
                187157,
                174432,
                181331,
                172956,
                165912,
                159710,
                177250,
                167118,
                163926,
                149796,
                155999,
                136778,
                149470,
                152560,
                130226,
                156326,
                145464,
                136436,
                134060,
                0,
                123440,
                125548,
                114912,
                127298,
                135508,
                115557,
                134733,
                131853,
                172455,
                142971,
                128763,
                103952,
                99748,
                101937,
                94499,
                72500,
                36359,
                54707,
                64691,
                52665
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-07 01:03 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/244a4bbf9d075993ae4f96b36189b7f58f55ebe0\" target=\"blank\">244a4bb</a>",
        useHTML: true
    },
    title: {
        text: "Demon_Hunter - Havoc - Beastlord",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>"
        ],
        labels: {
            useHTML: true
        }
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
                    text: "mean: 294621",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 294621.75,
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