Highcharts.chart('pruned_titanforged_shaman_elemental_patchwerk', 
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
                243292,
                226593,
                0,
                207278,
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
                16184,
                0,
                0,
                13237,
                9843,
                0,
                0,
                9663,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                4056,
                0
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                0,
                0,
                9009,
                0,
                0,
                11325,
                9214,
                0,
                0,
                9410,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7323,
                0
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                0,
                190627,
                0,
                0,
                129942,
                132915,
                0,
                9638,
                120374,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                106929,
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
                0,
                0,
                10294,
                10967,
                0,
                12190,
                8297,
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
                0,
                0,
                8770,
                119734,
                0,
                4993,
                8268,
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
                5528,
                0,
                0,
                129386,
                0,
                0,
                113692,
                110875,
                7564,
                8596,
                7436,
                7543,
                6753,
                6464,
                0,
                111932
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
                7342,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                8637,
                8904,
                8777,
                8548,
                8941,
                5006,
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
                172783,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                110039,
                108496,
                109531,
                108716,
                108662,
                110332,
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
        text: "Shaman - Elemental - Patchwerk"
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
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Unstable Arcanocrystal",
            "Sheath of Asara",
            "Vitality Resonator",
            "Charm of the Rising Tide",
            "Tome of Unraveling Sanity",
            "Prototype Personnel Decimator",
            "Tarnished Sentinel Medallion",
            "Terror From Below",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Stat Stick (Crit)",
            "Whispers in the Dark",
            "Stat Stick (Haste)",
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
                    text: "mean: 152542",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 152542.4,
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