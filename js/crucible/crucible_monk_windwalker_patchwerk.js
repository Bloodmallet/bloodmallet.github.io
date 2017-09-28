Highcharts.chart('crucible_monk_windwalker_patchwerk', 
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
                18696,
                17713,
                17443,
                17214,
                15824,
                15446,
                14923,
                12820,
                12729,
                0,
                7090,
                6247,
                3748,
                0,
                0,
                2498,
                1249,
                0,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#00FF96",
            data: [
                21033,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                11331,
                0,
                0,
                0,
                2825,
                2596,
                0,
                0,
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
        text: "Monk - Windwalker - Patchwerk"
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
            "Rising Winds",
            "Torment the Weak",
            "Shadowbind",
            "Secure in the Light",
            "Infusion of Light",
            "Chaotic Darkness",
            "Murderous Intent",
            "Shocklight",
            "Light Speed",
            "Master of Shadows",
            "Fists of the Wind",
            "Dark Sorrows",
            "+5 itemlevel",
            "+3 itemlevel",
            "Inner Peace",
            "Tiger Claws",
            "+2 itemlevel",
            "+1 itemlevel",
            "Strength of Xuen",
            "Power of a Thousand Cranes",
            "Death Art",
            "Split Personality"
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