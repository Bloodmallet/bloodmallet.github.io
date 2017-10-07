Highcharts.chart('crucible_priest_shadow_beastlord', 
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
                60475,
                40802,
                40385,
                36089,
                34470,
                27755,
                27640,
                25445,
                24231,
                23217,
                23034,
                0,
                0,
                0,
                18045,
                16154,
                0,
                0,
                8077,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFFFFF",
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
                20774,
                19006,
                18200,
                0,
                0,
                15457,
                9074,
                0,
                4270,
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
        text: "Priest - Shadow - Beastlord"
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
            "Dark Sorrows",
            "Shadowbind",
            "+5 itemlevel",
            "Chaotic Darkness",
            "Secure in the Light",
            "Torment the Weak",
            "Infusion of Light",
            "Shocklight",
            "+3 itemlevel",
            "Master of Shadows",
            "Murderous Intent",
            "Touch of Darkness",
            "To the Pain",
            "Creeping Shadows",
            "Light Speed",
            "+2 itemlevel",
            "Unleash the Shadows",
            "Void Corruption",
            "+1 itemlevel",
            "Mind Shattering",
            "Fiending Dark",
            "Death's Embrace"
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