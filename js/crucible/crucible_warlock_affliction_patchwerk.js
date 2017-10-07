Highcharts.chart('crucible_warlock_affliction_patchwerk', 
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
                22373,
                21917,
                21456,
                0,
                0,
                19360,
                19263,
                17906,
                0,
                16593,
                16569,
                15950,
                15013,
                13150,
                0,
                8897,
                8766,
                0,
                0,
                4383,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#9482C9",
            data: [
                23289,
                0,
                0,
                0,
                20127,
                19391,
                0,
                0,
                0,
                17645,
                0,
                0,
                0,
                0,
                0,
                8932,
                0,
                0,
                6823,
                5731,
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
        text: "Warlock - Affliction - Patchwerk"
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
            "Perdition",
            "Torment the Weak",
            "+5 itemlevel",
            "Shadowbind",
            "Inherently Unstable",
            "Shadowy Incantations",
            "Secure in the Light",
            "Infusion of Light",
            "Chaotic Darkness",
            "Winnowing",
            "Shocklight",
            "Light Speed",
            "Master of Shadows",
            "Murderous Intent",
            "+3 itemlevel",
            "Inimitable Agony",
            "Dark Sorrows",
            "+2 itemlevel",
            "Hideous Corruption",
            "Drained to a Husk",
            "+1 itemlevel",
            "Seeds of Doom"
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