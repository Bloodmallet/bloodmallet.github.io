Highcharts.chart('warlock_destruction_patchwerk', 
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
                135166,
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
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                5059,
                6650,
                6943,
                6154,
                4212,
                6667,
                6398,
                6932,
                7571,
                6053,
                6373,
                5362,
                6275,
                6960,
                5741,
                6403,
                5177,
                5642,
                4965,
                5039,
                4124,
                6120,
                4324,
                0,
                5669,
                4772,
                6886,
                5889,
                7772,
                4316,
                3885,
                3327,
                0,
                4834,
                2737,
                5051,
                4102,
                4053,
                4370,
                2087,
                4124,
                2820,
                3514,
                2752,
                2905,
                0,
                598
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                3743,
                7521,
                6747,
                5539,
                6774,
                6504,
                6586,
                7724,
                6162,
                5964,
                5413,
                7155,
                5622,
                6782,
                6134,
                7140,
                7522,
                5335,
                4676,
                5264,
                5283,
                6495,
                4031,
                0,
                5879,
                3738,
                6041,
                5999,
                4753,
                3965,
                4682,
                4864,
                0,
                4849,
                4623,
                2607,
                3663,
                3326,
                3224,
                5247,
                2337,
                3424,
                3154,
                1285,
                2369,
                1567,
                1499
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                4086,
                6916,
                5478,
                6549,
                6677,
                6015,
                5688,
                6698,
                5118,
                5660,
                6334,
                5990,
                7378,
                5027,
                5923,
                5428,
                3985,
                5807,
                5002,
                4815,
                4422,
                5196,
                4779,
                0,
                6010,
                3344,
                5168,
                5472,
                5296,
                3457,
                4696,
                3521,
                0,
                2230,
                3136,
                2864,
                2290,
                2490,
                2223,
                1681,
                2609,
                2121,
                2274,
                3156,
                2309,
                1834,
                1628
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                3230,
                6278,
                5447,
                4875,
                6435,
                6263,
                5408,
                6016,
                5811,
                6330,
                4631,
                4784,
                4513,
                3422,
                5730,
                4225,
                4066,
                5403,
                4423,
                3946,
                5823,
                5281,
                4048,
                0,
                4846,
                5295,
                5237,
                5753,
                3672,
                4350,
                3915,
                3488,
                0,
                3394,
                2751,
                2904,
                3132,
                2034,
                3998,
                2303,
                2842,
                2017,
                1921,
                2645,
                921,
                1351,
                723
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                4413,
                7733,
                3882,
                4240,
                3442,
                4626,
                4084,
                67698,
                4543,
                4718,
                5499,
                4764,
                4854,
                6048,
                5548,
                4817,
                5444,
                5844,
                5045,
                3046,
                3264,
                4008,
                3655,
                4742,
                4045,
                2481,
                4162,
                4024,
                5264,
                2215,
                2679,
                1687,
                2723,
                2619,
                3767,
                4891,
                2184,
                4192,
                1703,
                2782,
                3076,
                1898,
                2062,
                1766,
                2154,
                757,
                1846
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                3079,
                73964,
                4971,
                5709,
                4494,
                65705,
                3978,
                0,
                4447,
                4113,
                4461,
                5341,
                4587,
                4771,
                2842,
                3908,
                64026,
                1955,
                2098,
                5014,
                4390,
                5188,
                4398,
                4385,
                3885,
                3272,
                4617,
                3807,
                4863,
                4014,
                48997,
                4680,
                5491,
                3225,
                945,
                673,
                2912,
                1279,
                1889,
                2736,
                1186,
                1189,
                1564,
                1686,
                2104,
                2239,
                826
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                91602,
                0,
                66689,
                63554,
                63780,
                0,
                63490,
                0,
                61164,
                61426,
                61298,
                59775,
                59597,
                59526,
                60371,
                59112,
                0,
                59491,
                55104,
                53582,
                51806,
                44376,
                50005,
                65051,
                42789,
                49945,
                40639,
                41516,
                40277,
                48270,
                0,
                46225,
                57542,
                43894,
                45603,
                44490,
                43458,
                41867,
                40089,
                40483,
                38986,
                39853,
                38247,
                39039,
                34974,
                34756,
                26384
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-14 23:25:52"
    },
    title: {
        text: "Warlock - Destruction - Patchwerk"
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
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "Whispers in the Dark",
            "Stat Stick (Mastery)",
            "Stormsinger Fulmination Charge",
            "Charm of the Rising Tide",
            "Dreadstone of Endless Shadows",
            "Tome of Unraveling Sanity",
            "Stat Stick (Crit)",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Eyasu's Mulligan",
            "Infernal Writ",
            "PVP Badge of Dominance",
            "Stat Stick (Haste)",
            "Stat Stick (Versatility)",
            "Terror From Below",
            "Chrono Shard",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Obelisk of the Void",
            "Star Gate",
            "Moonlit Prism",
            "Darkmoon Deck: Hellfire",
            "Deteriorated Construct Core",
            "Naraxas' Spiked Tongue",
            "Bough of Corruption",
            "Portable Manacracker",
            "Twisting Wind",
            "Fury of the Burning Sky",
            "Spectral Thurible",
            "Devilsaur Shock-Baton",
            "Infernal Alchemist Stone",
            "Oakheart's Gnarled Root",
            "Icon of Rot",
            "Swarming Plaguehive",
            "Aran's Relaxing Ruby",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Wriggling Sinew",
            "Toe Knee's Promise",
            "Caged Horror",
            "Eye of Skovald",
            "Corrupted Starlight",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
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
                    text: "mean at 77738",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 77738.16666666667,
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