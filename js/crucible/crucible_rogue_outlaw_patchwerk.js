Highcharts.chart('crucible_rogue_outlaw_patchwerk', 
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
                align: "right",
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#343434",
            data: [
                25052,
                23759,
                23755,
                23121,
                20128,
                14947,
                0,
                12263,
                0,
                0,
                11133,
                0,
                10513,
                10216,
                0,
                9295,
                0,
                0,
                0,
                6129,
                4086,
                2043,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                12691,
                0,
                12168,
                11784,
                0,
                11075,
                0,
                0,
                9402,
                0,
                8436,
                8001,
                6153,
                0,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-09-28 00:29 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/68e31d9f343d9da2bb75ce6aad219d205f34e0b3\" target=\"blank\">68e31d9</a>"
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
            "Torment the Weak",
            "Shadowbind",
            "Infusion of Light",
            "Secure in the Light",
            "Chaotic Darkness",
            "Murderous Intent",
            "Fortune's Boon",
            "Light Speed",
            "Fatebringer",
            "Fortune Strikes",
            "Shocklight",
            "Fate's Thirst",
            "Dark Sorrows",
            "+5 itemlevel",
            "Sabermetrics",
            "Master of Shadows",
            "Black Powder",
            "Gunslinger",
            "Fortune's Strike",
            "+3 itemlevel",
            "+2 itemlevel",
            "+1 itemlevel",
            "Blade Dancer"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        stackLabels: {
            enabled: true,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});