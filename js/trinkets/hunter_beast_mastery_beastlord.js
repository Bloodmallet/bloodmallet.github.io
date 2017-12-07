Highcharts.chart('hunter_beast_mastery_beastlord', 
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
                494837,
                487615,
                79799,
                467135,
                86114,
                62832,
                74621,
                379345,
                0,
                0,
                0,
                0,
                0,
                0,
                59930,
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
                28947,
                0,
                0,
                40344,
                0,
                40915,
                28559,
                32885,
                0,
                35912,
                23043,
                24935,
                16212,
                25767,
                24918,
                21972,
                25083,
                23954,
                23547,
                26445,
                21556,
                16215,
                35688,
                11694,
                21886,
                24317,
                9980,
                16218,
                18019,
                23025,
                15209,
                18335,
                28258,
                18305,
                13773,
                22088,
                21325,
                20874,
                10370,
                15041,
                13270,
                13786,
                9461,
                18399,
                17298,
                5006,
                11760,
                0,
                10735,
                701,
                1819,
                11202,
                0,
                6278,
                15412,
                8481,
                8493,
                10607,
                7150,
                0
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                20139,
                0,
                0,
                24378,
                0,
                23362,
                352085,
                24286,
                0,
                18766,
                23868,
                27170,
                17739,
                24265,
                19486,
                29217,
                20602,
                25034,
                17809,
                22776,
                25990,
                27497,
                22874,
                26826,
                23808,
                11252,
                24168,
                14967,
                19101,
                13092,
                18435,
                22784,
                13107,
                20175,
                16523,
                17568,
                19729,
                16898,
                22558,
                6978,
                28619,
                14576,
                16569,
                21024,
                7139,
                13135,
                11452,
                0,
                15862,
                10849,
                3292,
                5236,
                17760,
                11731,
                0,
                0,
                4463,
                4822,
                7511,
                13123
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                18356,
                0,
                0,
                34095,
                0,
                28261,
                0,
                29240,
                0,
                15661,
                18910,
                13414,
                3996,
                19959,
                12595,
                18307,
                16662,
                15895,
                25212,
                11901,
                12942,
                21784,
                15930,
                16454,
                16757,
                22154,
                18698,
                23612,
                15762,
                19905,
                15888,
                19960,
                24967,
                10459,
                14810,
                15617,
                18346,
                21889,
                5457,
                17079,
                13236,
                18866,
                13470,
                10476,
                16693,
                11392,
                9332,
                0,
                6927,
                8464,
                21514,
                11016,
                3356,
                4799,
                4749,
                15002,
                5756,
                9643,
                0,
                0
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                25322,
                0,
                0,
                30225,
                0,
                32938,
                0,
                14902,
                0,
                23592,
                29987,
                26585,
                20205,
                16673,
                24592,
                17972,
                20559,
                20497,
                9993,
                19708,
                22827,
                15601,
                22657,
                19555,
                26296,
                19940,
                18117,
                14628,
                12527,
                15838,
                12578,
                13904,
                13740,
                14890,
                15422,
                20413,
                17736,
                14606,
                9042,
                5951,
                15552,
                15156,
                5596,
                19829,
                2944,
                15271,
                7915,
                0,
                3047,
                2102,
                0,
                0,
                3304,
                0,
                7053,
                4142,
                6520,
                277,
                5043,
                7754
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                17450,
                0,
                0,
                266219,
                0,
                250374,
                0,
                248180,
                0,
                16872,
                22066,
                6017,
                0,
                23689,
                13588,
                175544,
                19982,
                10391,
                21052,
                20175,
                18714,
                13449,
                20287,
                19448,
                8461,
                11945,
                11998,
                16086,
                16862,
                9893,
                13213,
                23797,
                12898,
                8565,
                7931,
                14533,
                14743,
                10539,
                16657,
                13602,
                18973,
                8940,
                16297,
                9519,
                11262,
                0,
                7484,
                0,
                10391,
                12735,
                12071,
                5875,
                2462,
                7192,
                0,
                1119,
                1468,
                10573,
                998,
                1160
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                4961,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                9751,
                8343,
                28448,
                17009,
                11325,
                19895,
                0,
                18540,
                15122,
                22775,
                2556,
                10767,
                20153,
                14361,
                12971,
                21977,
                12307,
                19473,
                12975,
                10971,
                10541,
                15028,
                17730,
                16430,
                22517,
                11843,
                15388,
                12039,
                11074,
                12394,
                13039,
                3409,
                16495,
                4461,
                3835,
                7554,
                22240,
                8338,
                10127,
                2692,
                13887,
                7282,
                12079,
                7766,
                11470,
                13540,
                9529,
                3519,
                5985,
                14,
                10177
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                14011,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                23280,
                16410,
                15491,
                12267,
                217799,
                9385,
                0,
                201191,
                18733,
                11533,
                21394,
                15384,
                11126,
                14264,
                9954,
                9721,
                20332,
                7486,
                12286,
                14471,
                19299,
                13579,
                13517,
                19281,
                344,
                7148,
                9407,
                14520,
                18143,
                5045,
                11051,
                18554,
                6063,
                9375,
                15094,
                10007,
                0,
                10489,
                20540,
                8482,
                1160,
                14240,
                108243,
                4445,
                100905,
                1361,
                8632,
                11950,
                10638,
                956,
                0
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                367160,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                228323,
                207726,
                207844,
                265100,
                0,
                200999,
                0,
                0,
                190539,
                187402,
                193936,
                187863,
                182237,
                158542,
                181946,
                166774,
                171585,
                170297,
                164811,
                165139,
                158750,
                160739,
                130940,
                116502,
                147402,
                153927,
                125344,
                120741,
                118032,
                149031,
                145902,
                110292,
                114243,
                132135,
                102642,
                116060,
                124066,
                117515,
                152974,
                112795,
                116516,
                99861,
                0,
                114636,
                0,
                110327,
                91125,
                95228,
                82573,
                77143,
                78912
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-07 01:03 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/244a4bbf9d075993ae4f96b36189b7f58f55ebe0\" target=\"blank\">244a4bb</a>",
        useHTML: true
    },
    title: {
        text: "Hunter - Beast_Mastery - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>"
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
                    text: "mean: 273718",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 273718.7833333333,
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