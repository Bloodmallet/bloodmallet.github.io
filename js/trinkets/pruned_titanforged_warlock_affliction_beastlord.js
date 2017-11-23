Highcharts.chart('pruned_titanforged_warlock_affliction_beastlord', 
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
                333932,
                0,
                0,
                274764,
                263853,
                0,
                0,
                0,
                0,
                0,
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
                17060,
                0,
                0,
                0,
                25892,
                0,
                0,
                0,
                0,
                5206,
                14999,
                0,
                0,
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
                14571,
                0,
                0,
                0,
                15695,
                0,
                0,
                0,
                0,
                7999,
                16693,
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
            color: "#db843d",
            data: [
                0,
                0,
                247943,
                0,
                0,
                0,
                200164,
                0,
                0,
                0,
                0,
                169518,
                150854,
                0,
                0,
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
                23025,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                15542,
                0,
                0,
                0,
                0,
                18377,
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
                10777,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3995,
                0,
                0,
                0,
                0,
                2579,
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
                262775,
                0,
                0,
                0,
                8857,
                0,
                12679,
                10771,
                173137,
                12771,
                0,
                0,
                11876,
                153200,
                9882,
                20632,
                9611,
                11079,
                8333
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
                0,
                8937,
                0,
                13558,
                16545,
                0,
                6486,
                0,
                0,
                9492,
                0,
                16373,
                5150,
                10235,
                10443,
                11246
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
                0,
                234243,
                0,
                179448,
                174558,
                0,
                166774,
                0,
                0,
                153982,
                0,
                145199,
                142494,
                148233,
                145016,
                141732
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warlock - Affliction - Beastlord"
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
            "Aman'Thul's Vision",
            "Spectral Thurible",
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Prototype Personnel Decimator",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Tarnished Sentinel Medallion",
            "Icon of Rot",
            "Terminus Signaling Beacon",
            "Sheath of Asara",
            "Whispers in the Dark",
            "Charm of the Rising Tide",
            "Toe Knee's Promise",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Mastery)",
            "Erratic Metronome",
            "Stat Stick (Haste)"
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
                    text: "mean: 213959",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 213959.25,
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