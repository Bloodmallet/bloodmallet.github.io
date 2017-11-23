Highcharts.chart('pruned_titanforged_druid_balance_beastlord', 
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
                287986,
                0,
                252109,
                0,
                205668,
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
                17645,
                0,
                0,
                11174,
                0,
                16078,
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
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                0,
                0,
                0,
                12818,
                0,
                0,
                2255,
                0,
                11392,
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
            color: "#db843d",
            data: [
                0,
                0,
                0,
                177226,
                0,
                0,
                166428,
                0,
                133166,
                0,
                9955,
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
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                22358,
                0,
                0,
                0,
                0,
                0,
                9115,
                0,
                0,
                13363,
                0,
                0,
                0,
                10636,
                0,
                8361,
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
                15413,
                0,
                0,
                0,
                0,
                0,
                12816,
                0,
                0,
                128490,
                0,
                0,
                0,
                9089,
                0,
                8056,
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
                214357,
                0,
                0,
                0,
                7676,
                0,
                145582,
                0,
                9494,
                0,
                8732,
                10863,
                9535,
                123287,
                11830,
                117083,
                4831,
                4920,
                5836
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
                4876,
                0,
                0,
                0,
                9889,
                0,
                11800,
                2640,
                10064,
                0,
                11446,
                0,
                7557,
                8804,
                4625
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
                177897,
                0,
                0,
                0,
                135247,
                0,
                131006,
                135926,
                126129,
                0,
                116535,
                0,
                119929,
                118510,
                117265
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Druid - Balance - Beastlord"
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
            "Spectral Thurible",
            "Aman'Thul's Vision",
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Unstable Arcanocrystal",
            "Prototype Personnel Decimator",
            "Tarnished Sentinel Medallion",
            "Sheath of Asara",
            "Fury of the Burning Sky",
            "Tome of Unraveling Sanity",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Star Gate",
            "Charm of the Rising Tide",
            "Deteriorated Construct Core",
            "Terror From Below",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Eyasu's Mulligan"
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
                    text: "mean: 173288",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 173288.4,
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