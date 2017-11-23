Highcharts.chart('pruned_titanforged_hunter_beast_mastery_patchwerk', 
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
                242702,
                232650,
                231629,
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
                0,
                0,
                0,
                13809,
                0,
                0,
                0,
                6986,
                0,
                0,
                0,
                8167,
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
                0,
                0,
                0,
                9167,
                0,
                0,
                0,
                8938,
                0,
                0,
                0,
                8588,
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
                0,
                0,
                0,
                142129,
                0,
                12428,
                0,
                135161,
                0,
                0,
                0,
                115886,
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
                9454,
                0,
                0,
                12604,
                10537,
                0,
                0,
                0,
                8204,
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
                11434,
                0,
                0,
                9056,
                132715,
                0,
                0,
                0,
                8702,
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
                8459,
                152493,
                8460,
                0,
                136053,
                0,
                10074,
                0,
                9325,
                120554,
                9511,
                0,
                8484,
                9445,
                7987,
                7322,
                118299
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                4162,
                0,
                6084,
                0,
                0,
                0,
                7746,
                0,
                9274,
                0,
                10338,
                0,
                10795,
                7021,
                8067,
                7124,
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
                169518,
                0,
                156900,
                0,
                0,
                0,
                135730,
                0,
                125562,
                0,
                115002,
                0,
                113173,
                114038,
                113385,
                114226,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Hunter - Beast_Mastery - Patchwerk"
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
            "Golganneth's Vitality",
            "Aman'Thul's Vision",
            "Unstable Arcanocrystal",
            "Cradle of Anguish",
            "Convergence of Fates",
            "Shadow-Singed Fang",
            "Engine of Eradication",
            "Tome of Unraveling Sanity",
            "Bloodthirsty Instinct",
            "Prototype Personnel Decimator",
            "Stat Stick (Haste)",
            "Tarnished Sentinel Medallion",
            "Entwined Elemental Foci",
            "Terminus Signaling Beacon",
            "Stat Stick (Mastery)",
            "Thrice-Accursed Compass",
            "Chrono Shard",
            "Obelisk of the Void",
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
                    text: "mean: 160277",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 160277.85,
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