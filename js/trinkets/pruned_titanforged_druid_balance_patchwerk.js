Highcharts.chart('pruned_titanforged_druid_balance_patchwerk', 
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
                243870,
                224991,
                210099,
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
            color: "#e600e3",
            data: [
                0,
                0,
                0,
                14585,
                0,
                0,
                15039,
                7801,
                0,
                10039,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                6713,
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
                13364,
                0,
                0,
                10885,
                8069,
                0,
                8521,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3997,
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
                179665,
                0,
                0,
                133415,
                133075,
                0,
                121024,
                11864,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                106799,
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
                12300,
                0,
                0,
                10208,
                0,
                8797,
                9843,
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
                10000,
                0,
                0,
                8807,
                0,
                117059,
                8423,
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
                9659,
                138958,
                0,
                0,
                129035,
                0,
                0,
                118527,
                9244,
                9458,
                7857,
                8038,
                10223,
                10597,
                0,
                110186
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
                5992,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                8309,
                8109,
                6464,
                8414,
                6332,
                5508,
                0,
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
                170017,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                113275,
                108763,
                111813,
                107642,
                107204,
                104146,
                0,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Druid - Balance - Patchwerk"
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
            "Norgannon's Prowess",
            "Acrid Catalyst Injector",
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "Sheath of Asara",
            "Prototype Personnel Decimator",
            "Charm of the Rising Tide",
            "Vitality Resonator",
            "Tome of Unraveling Sanity",
            "Terror From Below",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Mastery)",
            "Padawsen's Unlucky Charm",
            "Whispers in the Dark",
            "Terminus Signaling Beacon",
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
                    text: "mean: 154151",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 154151.1,
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