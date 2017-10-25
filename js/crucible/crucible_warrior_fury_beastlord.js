Highcharts.chart('crucible_warrior_fury_beastlord', 
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
                36590,
                32709,
                25595,
                23920,
                23214,
                22229,
                21362,
                20909,
                19625,
                18816,
                0,
                17351,
                0,
                14452,
                13083,
                0,
                0,
                6541,
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
                39108,
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
                18411,
                0,
                14923,
                0,
                0,
                10509,
                8050,
                0,
                6354,
                3671,
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
        text: "Warrior - Fury - Beastlord"
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
            "Unrivaled Strength",
            "Dark Sorrows",
            "+5 itemlevel",
            "Infusion of Light",
            "Murderous Intent",
            "Chaotic Darkness",
            "Light Speed",
            "Shadowbind",
            "Master of Shadows",
            "+3 itemlevel",
            "Secure in the Light",
            "Raging Berserker",
            "Torment the Weak",
            "Wrath and Fury",
            "Shocklight",
            "+2 itemlevel",
            "Unstoppable",
            "Pulse of Battle",
            "+1 itemlevel",
            "Deathdealer",
            "Uncontrolled Rage",
            "Wild Slashes"
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