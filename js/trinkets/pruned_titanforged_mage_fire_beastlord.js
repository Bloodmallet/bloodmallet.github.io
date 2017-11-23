Highcharts.chart('pruned_titanforged_mage_fire_beastlord', 
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
                0,
                318233,
                264516,
                0,
                209667,
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
                13215,
                0,
                0,
                0,
                0,
                17341,
                0,
                0,
                15288,
                17033,
                0,
                16776,
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
                12996,
                0,
                0,
                0,
                0,
                12007,
                0,
                0,
                2361,
                1026,
                0,
                8755,
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
                214274,
                0,
                0,
                0,
                0,
                164975,
                0,
                0,
                162940,
                159449,
                0,
                141016,
                0,
                10534,
                0,
                0,
                0
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                18744,
                0,
                0,
                0,
                0,
                9939,
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
                9523,
                14512,
                0,
                0
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                29986,
                0,
                0,
                0,
                0,
                15197,
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
                136645,
                5440,
                0,
                0
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                270074,
                0,
                0,
                0,
                0,
                181585,
                11748,
                15973,
                0,
                8123,
                20800,
                0,
                0,
                14634,
                0,
                8702,
                0,
                135723,
                5697,
                4401
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
                0,
                0,
                11167,
                0,
                19526,
                7149,
                0,
                0,
                13871,
                0,
                7730,
                0,
                0,
                7431,
                6880
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
                0,
                190252,
                173372,
                0,
                162516,
                159148,
                0,
                0,
                146900,
                0,
                142213,
                0,
                0,
                140723,
                132386
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Mage - Fire - Beastlord"
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
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision",
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Charm of the Rising Tide",
            "Unstable Arcanocrystal",
            "Fury of the Burning Sky",
            "Sheath of Asara",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Prototype Personnel Decimator",
            "Vitality Resonator",
            "Star Gate",
            "Terminus Signaling Beacon",
            "Stat Stick (Haste)",
            "Tome of Unraveling Sanity",
            "Tarnished Sentinel Medallion",
            "Erratic Metronome",
            "Toe Knee's Promise"
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
                    text: "mean: 199992",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 199992.95,
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