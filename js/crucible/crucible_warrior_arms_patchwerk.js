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
                25269,
                21862,
                20684,
                20242,
                20226,
                19374,
                0,
                17196,
                15859,
                15161,
                12905,
                11334,
                10107,
                9667,
                0,
                0,
                0,
                0,
                5053,
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
                17420,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7860,
                7036,
                6310,
                5101,
                0,
                2121,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-10-07 10:13 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
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
            "Infusion of Light",
            "Shadowbind",
            "Secure in the Light",
            "Master of Shadows",
            "Precise Strikes",
            "Chaotic Darkness",
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