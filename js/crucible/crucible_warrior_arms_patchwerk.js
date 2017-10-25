Highcharts.chart('crucible_warrior_arms_patchwerk', 
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
                26403,
                22146,
                22044,
                21152,
                20970,
                19601,
                18547,
                0,
                17506,
                15841,
                12678,
                12360,
                10561,
                10375,
                0,
                0,
                0,
                0,
                5280,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C79C6E",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                18437,
                0,
                0,
                0,
                0,
                0,
                0,
                7831,
                6982,
                5968,
                5452,
                0,
                3021,
                1832,
                1640
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-10-25 06:43 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/1f23881867a47a7cd7b3cc352f13734f8465f389\" target=\"blank\">1f23881</a>"
    },
    title: {
        text: "Warrior - Arms - Patchwerk"
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
            "+5 itemlevel",
            "Torment the Weak",
            "Secure in the Light",
            "Infusion of Light",
            "Shadowbind",
            "Master of Shadows",
            "Chaotic Darkness",
            "Precise Strikes",
            "Murderous Intent",
            "+3 itemlevel",
            "Light Speed",
            "Shocklight",
            "+2 itemlevel",
            "Dark Sorrows",
            "Exploit the Weakness",
            "Deathblow",
            "Storm of Swords",
            "Crushing Blows",
            "+1 itemlevel",
            "Unending Rage",
            "Many Will Fall",
            "One Against Many"
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