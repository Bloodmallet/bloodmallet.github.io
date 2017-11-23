Highcharts.chart('pruned_titanforged_shaman_elemental_beastlord', 
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
            color: "#ffeb3b",
            data: [
                477611,
                457691,
                0,
                356711,
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
            color: "#e600e3",
            data: [
                0,
                0,
                28366,
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
                14555,
                0,
                0,
                0,
                0,
                0
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                0,
                0,
                31717,
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
                16924,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                0,
                370972,
                0,
                0,
                9815,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                218384,
                0,
                0,
                0,
                0,
                0
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                0,
                0,
                0,
                0,
                32767,
                14295,
                15509,
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
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                0,
                0,
                0,
                0,
                0,
                308586,
                15388,
                33258,
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
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                0,
                0,
                17713,
                0,
                288618,
                245943,
                10165,
                29613,
                9048,
                24171,
                5497,
                26541,
                0,
                15216,
                11993,
                9350,
                16584,
                224668
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                0,
                15002,
                0,
                0,
                0,
                20210,
                18364,
                14827,
                9560,
                12555,
                10186,
                0,
                16379,
                24162,
                28970,
                14109,
                0
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                0,
                320435,
                0,
                0,
                0,
                240880,
                212739,
                234960,
                221636,
                235113,
                214794,
                0,
                217158,
                208380,
                201691,
                196963,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Shaman - Elemental - Beastlord"
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
            "Aman'Thul's Vision",
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Unstable Arcanocrystal",
            "Tome of Unraveling Sanity",
            "Charm of the Rising Tide",
            "Spectral Thurible",
            "Stat Stick (Crit)",
            "Stat Stick (Haste)",
            "Infernal Writ",
            "Erratic Metronome",
            "Eyasu's Mulligan",
            "Chrono Shard",
            "Sheath of Asara",
            "Whispers in the Dark",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Icon of Rot",
            "Astral Alchemist Stone"
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
                    text: "mean: 301337",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 301337.1,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});