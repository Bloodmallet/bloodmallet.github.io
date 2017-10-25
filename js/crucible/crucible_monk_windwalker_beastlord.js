Highcharts.chart('crucible_monk_windwalker_beastlord', 
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
                30268,
                29196,
                27335,
                25993,
                19915,
                17449,
                17328,
                15649,
                0,
                15422,
                0,
                14126,
                10560,
                9389,
                6259,
                0,
                3129,
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
                32167,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                15505,
                0,
                14950,
                0,
                0,
                0,
                0,
                5192,
                0,
                1781,
                1525,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-10-25 06:43 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/1f23881867a47a7cd7b3cc352f13734f8465f389\" target=\"blank\">1f23881</a>"
    },
    title: {
        text: "Monk - Windwalker - Beastlord"
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
            "Fists of the Wind",
            "Dark Sorrows",
            "Murderous Intent",
            "Shocklight",
            "Master of Shadows",
            "Secure in the Light",
            "Shadowbind",
            "Infusion of Light",
            "+5 itemlevel",
            "Rising Winds",
            "Chaotic Darkness",
            "Power of a Thousand Cranes",
            "Torment the Weak",
            "Light Speed",
            "+3 itemlevel",
            "+2 itemlevel",
            "Inner Peace",
            "+1 itemlevel",
            "Strength of Xuen",
            "Death Art",
            "Tiger Claws",
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