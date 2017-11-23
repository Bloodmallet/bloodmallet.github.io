Highcharts.chart('pruned_titanforged_rogue_outlaw_patchwerk', 
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
                252312,
                226376,
                0,
                0,
                0,
                164705,
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
                18212,
                0,
                0,
                0,
                0,
                9235,
                0,
                0,
                0,
                0,
                0,
                0,
                7746,
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
                13561,
                0,
                0,
                0,
                0,
                11550,
                0,
                0,
                0,
                0,
                0,
                0,
                8403,
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
                177537,
                0,
                16302,
                0,
                0,
                126189,
                0,
                0,
                0,
                0,
                0,
                0,
                112105,
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
                13063,
                0,
                13667,
                0,
                12216,
                0,
                0,
                0,
                10515,
                0,
                0,
                0,
                0,
                0,
                9051,
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
                144273,
                0,
                8928,
                0,
                11109,
                0,
                0,
                0,
                9663,
                0,
                0,
                0,
                0,
                0,
                6045,
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
                8372,
                0,
                0,
                131709,
                0,
                121340,
                14949,
                11857,
                11326,
                116283,
                9671,
                0,
                4484,
                8079,
                9659,
                106357,
                114722
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                8208,
                0,
                0,
                0,
                0,
                0,
                11447,
                9806,
                8328,
                0,
                9007,
                0,
                5076,
                7157,
                6247,
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
                182118,
                0,
                0,
                0,
                0,
                0,
                113371,
                116411,
                116870,
                0,
                117023,
                0,
                117594,
                108661,
                106198,
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
        text: "Rogue - Outlaw - Patchwerk"
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
            "Golganneth's Vitality",
            "Kil'jaeden's Burning Wish",
            "Seeping Scourgewing",
            "Convergence of Fates",
            "Specter of Betrayal",
            "Aman'Thul's Vision",
            "Cradle of Anguish",
            "Shadow-Singed Fang",
            "Vial of Ceaseless Toxins",
            "Nightblooming Frond",
            "Chaos Talisman",
            "Bloodthirsty Instinct",
            "Engine of Eradication",
            "Eye of Command",
            "Gorshalach's Legacy",
            "Unstable Arcanocrystal",
            "Stat Stick (Versatility)",
            "Stat Stick (Haste)",
            "Infernal Cinders",
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
                    text: "mean: 154754",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 154754.65,
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