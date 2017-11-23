Highcharts.chart('crucible_death_knight_unholy_beastlord', 
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
                47980,
                0,
                32348,
                31039,
                28007,
                27675,
                27548,
                26250,
                23829,
                21577,
                0,
                18626,
                14297,
                0,
                0,
                9531,
                0,
                0,
                0,
                4765,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C41F3B",
            data: [
                0,
                42272,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                19169,
                0,
                0,
                13694,
                10692,
                0,
                8519,
                7536,
                6044,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 00:34 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Death_Knight - Unholy - Beastlord"
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
            "Plaguebearer",
            "Master of Shadows",
            "Shocklight",
            "Torment the Weak",
            "Murderous Intent",
            "Shadowbind",
            "Chaotic Darkness",
            "+5 itemlevel",
            "Secure in the Light",
            "The Darkest Crusade",
            "Infusion of Light",
            "+3 itemlevel",
            "Deadliest Coil",
            "Runic Tattoos",
            "+2 itemlevel",
            "Lash of Shadows",
            "Rotten Touch",
            "Scourge the Unbeliever",
            "+1 itemlevel",
            "Eternal Agony",
            "Light Speed"
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