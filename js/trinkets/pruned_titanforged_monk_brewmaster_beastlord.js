Highcharts.chart('pruned_titanforged_monk_brewmaster_beastlord', 
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
                344286,
                207117,
                0,
                152243,
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
                21235,
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
                6385,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                23427,
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
                143969,
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
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                0,
                0,
                11076,
                13475,
                0,
                0,
                19156,
                12747,
                124384,
                7809,
                2955,
                3006,
                12376,
                1449,
                26684,
                125023,
                8344,
                8842
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
                1766,
                9922,
                0,
                18206,
                10860,
                6867,
                0,
                17066,
                10420,
                12501,
                5066,
                16638,
                0,
                0,
                4310,
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
                136593,
                123253,
                145731,
                127217,
                114559,
                124058,
                0,
                117250,
                120387,
                118214,
                116095,
                112219,
                112704,
                0,
                111394,
                119064
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-24 02:31 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/bc371138b7e53df495f63d1eb1c2f8e2ced50341\" target=\"blank\">bc37113</a>"
    },
    title: {
        text: "Monk - Brewmaster - Beastlord"
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
            "Stat Stick (Crit)",
            "Unstable Arcanocrystal",
            "Thrice-Accursed Compass",
            "Bloodthirsty Instinct",
            "Memento of Angerboda",
            "Cradle of Anguish",
            "Stat Stick (Mastery)",
            "Terrorbound Nexus",
            "Stat Stick (Versatility)",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Chaos Talisman",
            "Astral Alchemist Stone",
            "Gift of Radiance",
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
                    text: "mean: 152042",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 152042.7,
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