Highcharts.chart('mage_frost_beastlord', 
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
                446875,
                446232,
                426402,
                0,
                59875,
                362024,
                0,
                0,
                61286,
                37791,
                0,
                0,
                50145,
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
                53110,
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
                0,
                0,
                0,
                35303,
                36736,
                0,
                22544,
                30948,
                25516,
                29157,
                16827,
                14147,
                13372,
                32660,
                31885,
                27401,
                28993,
                20762,
                25691,
                21750,
                21276,
                13985,
                0,
                15552,
                21420,
                29515,
                15644,
                10848,
                19373,
                20163,
                36149,
                13876,
                15159,
                21209,
                17986,
                23798,
                11886,
                19005,
                19872,
                3905,
                11338,
                14997,
                12751,
                518,
                14006,
                10119,
                12930,
                18016,
                17703,
                10921,
                0,
                17254,
                4391,
                8912,
                11140,
                10644,
                10096,
                238,
                0,
                798,
                4423
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                41469,
                317919,
                0,
                17304,
                5588,
                10807,
                22974,
                7951,
                23709,
                23326,
                12364,
                18951,
                10731,
                11569,
                22912,
                11312,
                7806,
                21549,
                13864,
                26661,
                19105,
                31669,
                13829,
                18065,
                16965,
                18586,
                14922,
                13995,
                19723,
                17557,
                15635,
                7925,
                14819,
                6335,
                17924,
                13217,
                14215,
                39169,
                15548,
                4992,
                18959,
                6897,
                16823,
                13881,
                11179,
                15620,
                14326,
                0,
                14795,
                15685,
                2858,
                13845,
                7827,
                5083,
                11323,
                2018,
                11230,
                6059
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                18387,
                0,
                0,
                25812,
                25799,
                19122,
                21357,
                17689,
                23327,
                26283,
                33448,
                27836,
                7441,
                20026,
                10867,
                18145,
                16734,
                13737,
                16829,
                24327,
                5319,
                19235,
                17507,
                16593,
                19855,
                9636,
                22930,
                16711,
                23916,
                18973,
                11822,
                8107,
                14722,
                23941,
                10304,
                22358,
                9102,
                1237,
                18486,
                19063,
                8815,
                12988,
                0,
                14721,
                16739,
                3922,
                15777,
                0,
                4687,
                2007,
                0,
                0,
                5161,
                8102,
                0,
                11129,
                0,
                0
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                23357,
                0,
                0,
                15617,
                16713,
                30658,
                15879,
                8953,
                19102,
                19447,
                19212,
                21023,
                34355,
                9943,
                13149,
                6412,
                10483,
                19782,
                19277,
                6721,
                16263,
                11999,
                17305,
                12518,
                16655,
                26895,
                13753,
                20166,
                11385,
                17761,
                17510,
                0,
                20049,
                14,
                12276,
                11541,
                3251,
                13911,
                9040,
                12359,
                7591,
                8725,
                4157,
                563,
                11378,
                13429,
                1069,
                0,
                11977,
                5656,
                5724,
                12804,
                12688,
                14466,
                14554,
                0,
                7622,
                2713
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                32549,
                0,
                0,
                21521,
                18514,
                197337,
                212255,
                6638,
                15116,
                190069,
                20526,
                12526,
                8531,
                12727,
                17205,
                16938,
                16590,
                17260,
                2785,
                22574,
                160264,
                18044,
                7911,
                10978,
                7357,
                4026,
                11945,
                11561,
                13862,
                7961,
                14984,
                16034,
                8568,
                9941,
                11467,
                21000,
                15767,
                3581,
                15203,
                12174,
                15467,
                9372,
                18500,
                16450,
                18741,
                6178,
                4100,
                0,
                8858,
                7686,
                6510,
                4673,
                97,
                3602,
                0,
                1057,
                8052,
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
                11164,
                0,
                0,
                13309,
                27253,
                0,
                0,
                12320,
                14397,
                0,
                15003,
                14681,
                7581,
                20354,
                2397,
                6707,
                5567,
                19183,
                30322,
                9753,
                0,
                11371,
                10398,
                21106,
                15386,
                24181,
                11353,
                11099,
                13121,
                15760,
                7001,
                3378,
                14791,
                7524,
                11830,
                5632,
                0,
                20727,
                4880,
                8048,
                2685,
                0,
                0,
                8468,
                8896,
                3793,
                8169,
                9988,
                9158,
                12698,
                8123,
                8145,
                4605,
                2453,
                16200,
                8478,
                1786,
                0
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                29074,
                0,
                0,
                6844,
                2788,
                0,
                0,
                5239,
                218304,
                0,
                9437,
                14846,
                11880,
                4548,
                20067,
                8817,
                9531,
                3040,
                3799,
                9071,
                0,
                15010,
                15901,
                10749,
                13637,
                8273,
                10459,
                139887,
                2925,
                9775,
                14567,
                5132,
                13548,
                6934,
                9878,
                10294,
                10236,
                9324,
                19383,
                3078,
                23341,
                13502,
                13471,
                130935,
                6402,
                12108,
                132556,
                13788,
                5599,
                0,
                3179,
                7985,
                8536,
                10280,
                11563,
                983,
                58568,
                6336
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                235077,
                0,
                0,
                239022,
                218223,
                0,
                0,
                257379,
                0,
                0,
                166776,
                162252,
                180318,
                172469,
                172033,
                184830,
                185529,
                155069,
                169815,
                171720,
                0,
                140079,
                155759,
                158772,
                159586,
                146896,
                144773,
                0,
                149839,
                142705,
                139223,
                180062,
                123650,
                167281,
                141088,
                127633,
                163544,
                117977,
                119453,
                140715,
                126593,
                140079,
                144692,
                0,
                105321,
                123035,
                0,
                159490,
                95466,
                117652,
                126791,
                100726,
                101509,
                81009,
                74242,
                77950,
                0,
                33635
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Mage - Frost - Beastlord"
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
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +10",
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision",
            "Icon of Rot",
            "Stat Stick (Crit)",
            "Norgannon's Prowess +15",
            "Norgannon's Prowess +20",
            "Unstable Arcanocrystal",
            "Acrid Catalyst Injector",
            "Norgannon's Prowess +10",
            "Star Gate",
            "Deteriorated Construct Core",
            "Tome of Unraveling Sanity",
            "Padawsen's Unlucky Charm",
            "Infernal Writ",
            "Terror From Below",
            "Eye of Skovald",
            "Chrono Shard",
            "Stat Stick (Haste)",
            "Charm of the Rising Tide",
            "Norgannon's Prowess",
            "Reality Breacher",
            "Dreadstone of Endless Shadows",
            "Eyasu's Mulligan",
            "Stat Stick (Versatility)",
            "Whispers in the Dark",
            "Erratic Metronome",
            "Sheath of Asara",
            "PVP Badge of Dominance",
            "Aran's Relaxing Ruby",
            "Fury of the Burning Sky",
            "Unstable Horrorslime",
            "Bough of Corruption",
            "Elementium Bomb Squirrel Generator",
            "PVP Insignia of Dominance",
            "Twisting Wind",
            "Devilsaur Shock-Baton",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Mastery)",
            "Horn of Valor",
            "Moonlit Prism",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Vitality Resonator",
            "Portable Manacracker",
            "Obelisk of the Void",
            "Prototype Personnel Decimator",
            "Astral Alchemist Stone",
            "Tarnished Sentinel Medallion",
            "Toe Knee's Promise",
            "Figurehead of the Naglfar",
            "Swarming Plaguehive",
            "Oakheart's Gnarled Root",
            "Corrupted Starlight",
            "Caged Horror",
            "Pharameres Forbidden Grimoire",
            "Terminus Signaling Beacon",
            "Naraxas' Spiked Tongue"
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
                    text: "mean: 253233",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 253233.32786885247,
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