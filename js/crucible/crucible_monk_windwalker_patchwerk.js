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
                19799,
                18205,
                17934,
                17776,
                17563,
                17323,
                15842,
                15074,
                14173,
                0,
                9257,
                7604,
                4562,
                0,
                0,
                0,
                3041,
                0,
                0,
                1520,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#00FF96",
            data: [
                22812,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                12646,
                0,
                0,
                0,
                3704,
                3532,
                3271,
                0,
                2040,
                1974,
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
            "Infusion of Light",
            "Secure in the Light",
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
            "Strength of Xuen",
            "+2 itemlevel",
            "Death Art",
            "Power of a Thousand Cranes",
            "+1 itemlevel",
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