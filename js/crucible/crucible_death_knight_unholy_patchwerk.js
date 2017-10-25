Highcharts.chart('crucible_death_knight_unholy_patchwerk', 
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
                24321,
                22788,
                20325,
                16309,
                15505,
                15470,
                15224,
                14777,
                14512,
                0,
                0,
                10106,
                9664,
                0,
                5798,
                0,
                0,
                0,
                0,
                3865,
                1932,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C41F3B",
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
                11684,
                11030,
                0,
                0,
                9496,
                0,
                5319,
                4306,
                4094,
                3893,
                0,
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
        text: "Death_Knight - Unholy - Patchwerk"
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
            "Chaotic Darkness",
            "Master of Shadows",
            "Light Speed",
            "Murderous Intent",
            "Infusion of Light",
            "Shocklight",
            "Secure in the Light",
            "The Darkest Crusade",
            "Plaguebearer",
            "Dark Sorrows",
            "+5 itemlevel",
            "Deadliest Coil",
            "+3 itemlevel",
            "Runic Tattoos",
            "Lash of Shadows",
            "Scourge the Unbeliever",
            "Rotten Touch",
            "+2 itemlevel",
            "+1 itemlevel",
            "Eternal Agony"
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