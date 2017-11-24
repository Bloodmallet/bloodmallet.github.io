Highcharts.chart('pruned_titanforged_monk_brewmaster_patchwerk', 
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
                155409,
                127576,
                0,
                93557,
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
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                0,
                9741,
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
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                0,
                8047,
                0,
                0,
                0,
                8912,
                0,
                5583,
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
                92028,
                0,
                0,
                0,
                0,
                0,
                7034,
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
                6176,
                6580,
                77835,
                7400,
                66500,
                4417,
                5171,
                4202,
                4358,
                7918,
                8441,
                5088,
                2594,
                4568,
                72385,
                4962
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
                5115,
                7441,
                0,
                4621,
                0,
                5996,
                4060,
                4265,
                5581,
                6779,
                2065,
                5072,
                4348,
                5684,
                0,
                4236
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
                77779,
                73718,
                0,
                68254,
                0,
                67478,
                68373,
                69126,
                67444,
                61604,
                64711,
                64441,
                67579,
                62568,
                0,
                63152
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-24 02:31 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/bc371138b7e53df495f63d1eb1c2f8e2ced50341\" target=\"blank\">bc37113</a>"
    },
    title: {
        text: "Monk - Brewmaster - Patchwerk"
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
            "Specter of Betrayal",
            "Aman'Thul's Vision",
            "Eye of Command",
            "Six-Feather Fan",
            "Cradle of Anguish",
            "Stat Stick (Crit)",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Mastery)",
            "Bloodthirsty Instinct",
            "Memento of Angerboda",
            "Stat Stick (Versatility)",
            "Tirathon's Betrayal",
            "Thrice-Accursed Compass",
            "PVP Badge of Conquest",
            "Unstable Arcanocrystal",
            "Chrono Shard",
            "Astral Alchemist Stone",
            "Gift of Radiance"
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
                    text: "mean: 86887",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 86887.15,
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