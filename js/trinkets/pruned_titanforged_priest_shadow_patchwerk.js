Highcharts.chart('pruned_titanforged_priest_shadow_patchwerk', 
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
                275914,
                0,
                233800,
                0,
                0,
                0,
                195033,
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
                13432,
                0,
                0,
                19140,
                15850,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7017,
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
                14859,
                0,
                0,
                16649,
                9542,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7775,
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
                210979,
                0,
                0,
                166913,
                170388,
                0,
                0,
                12557,
                0,
                0,
                0,
                0,
                120625,
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
                0,
                0,
                0,
                0,
                0,
                0,
                11597,
                10360,
                11599,
                7108,
                0,
                0,
                0,
                7566,
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
                10269,
                138847,
                9838,
                8230,
                0,
                0,
                0,
                10251,
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
                6240,
                0,
                0,
                0,
                146712,
                0,
                134066,
                124484,
                7916,
                6759,
                0,
                115293,
                8148,
                6649,
                7569,
                9810,
                113162
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                8812,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                9051,
                8030,
                0,
                0,
                7091,
                9327,
                7349,
                8302,
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
                196048,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                121439,
                123560,
                0,
                0,
                116311,
                113876,
                112943,
                106046,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Priest - Shadow - Patchwerk"
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
            "Acrid Catalyst Injector",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Sheath of Asara",
            "Prototype Personnel Decimator",
            "Norgannon's Prowess",
            "Terror From Below",
            "Tome of Unraveling Sanity",
            "Tarnished Sentinel Medallion",
            "Spectral Thurible",
            "Stat Stick (Haste)",
            "Erratic Metronome",
            "Vitality Resonator",
            "Charm of the Rising Tide",
            "Padawsen's Unlucky Charm",
            "Stat Stick (Crit)",
            "Dreadstone of Endless Shadows",
            "Infernal Writ",
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
                    text: "mean: 167556",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 167556.55,
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