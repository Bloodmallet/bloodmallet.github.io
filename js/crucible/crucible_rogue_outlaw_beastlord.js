Highcharts.chart('crucible_rogue_outlaw_beastlord', 
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
                0,
                31339,
                25991,
                20834,
                0,
                20230,
                19969,
                18884,
                18518,
                0,
                0,
                0,
                15567,
                14923,
                11806,
                0,
                8297,
                7083,
                0,
                0,
                4722,
                0,
                2361
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                36091,
                0,
                0,
                0,
                20750,
                0,
                0,
                0,
                0,
                17783,
                17450,
                16918,
                0,
                0,
                0,
                10568,
                0,
                0,
                6849,
                5578,
                0,
                3167,
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
        text: "Rogue - Outlaw - Beastlord"
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
            "Blade Dancer",
            "Dark Sorrows",
            "Torment the Weak",
            "Infusion of Light",
            "Fortune Strikes",
            "Murderous Intent",
            "Shadowbind",
            "Chaotic Darkness",
            "Secure in the Light",
            "Fate's Thirst",
            "Fatebringer",
            "Fortune's Boon",
            "Light Speed",
            "Shocklight",
            "+5 itemlevel",
            "Sabermetrics",
            "Master of Shadows",
            "+3 itemlevel",
            "Black Powder",
            "Gunslinger",
            "+2 itemlevel",
            "Fortune's Strike",
            "+1 itemlevel"
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