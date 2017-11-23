Highcharts.chart('pruned_titanforged_warlock_demonology_beastlord', 
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
                306881,
                264042,
                0,
                231177,
                0,
                0,
                0,
                0,
                0,
                0,
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
                0,
                0,
                0,
                14855,
                9889,
                0,
                0,
                0,
                9827,
                11667,
                0,
                0,
                0,
                0,
                0,
                10311,
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
                0,
                0,
                0,
                8279,
                22837,
                0,
                0,
                0,
                21084,
                3196,
                0,
                0,
                0,
                0,
                0,
                3827,
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
                0,
                0,
                0,
                190824,
                169996,
                0,
                0,
                0,
                133990,
                148062,
                0,
                0,
                0,
                0,
                0,
                131421,
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
                22969,
                0,
                0,
                0,
                0,
                6391,
                0,
                0,
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
                12830,
                0,
                0,
                0,
                0,
                11216,
                0,
                0,
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
                226695,
                0,
                7105,
                0,
                0,
                178554,
                13834,
                15691,
                0,
                0,
                9672,
                3018,
                7386,
                9400,
                7750,
                0,
                13214,
                9959
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
                12661,
                0,
                0,
                0,
                4909,
                7580,
                0,
                0,
                8526,
                16157,
                12184,
                6709,
                11511,
                0,
                5801,
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
                204505,
                0,
                0,
                0,
                156865,
                146850,
                0,
                0,
                138889,
                137604,
                130026,
                130878,
                127549,
                0,
                126158,
                123708
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warlock - Demonology - Beastlord"
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
            "Kil'jaeden's Burning Wish",
            "Spectral Thurible",
            "Norgannon's Prowess",
            "Unstable Arcanocrystal",
            "Prototype Personnel Decimator",
            "Acrid Catalyst Injector",
            "Charm of the Rising Tide",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Sheath of Asara",
            "Vitality Resonator",
            "Whispers in the Dark",
            "Chrono Shard",
            "Dreadstone of Endless Shadows",
            "Toe Knee's Promise",
            "Obelisk of the Void",
            "Terminus Signaling Beacon",
            "Aran's Relaxing Ruby",
            "Moonlit Prism"
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
                    text: "mean: 187630",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 187630.7,
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