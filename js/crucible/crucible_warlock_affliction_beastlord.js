Highcharts.chart('crucible_warlock_affliction_beastlord', 
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
                31652,
                28883,
                0,
                0,
                0,
                25154,
                23986,
                21477,
                20490,
                20203,
                20142,
                18742,
                17431,
                0,
                15092,
                13505,
                10061,
                0,
                5030,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#9482C9",
            data: [
                36235,
                0,
                0,
                27244,
                26540,
                25814,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16742,
                0,
                0,
                0,
                9983,
                0,
                3011,
                2031
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-10-25 06:43 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/1f23881867a47a7cd7b3cc352f13734f8465f389\" target=\"blank\">1f23881</a>"
    },
    title: {
        text: "Warlock - Affliction - Beastlord"
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
            "Dark Sorrows",
            "Light Speed",
            "Winnowing",
            "Inherently Unstable",
            "Shadowy Incantations",
            "+5 itemlevel",
            "Master of Shadows",
            "Shadowbind",
            "Secure in the Light",
            "Shocklight",
            "Infusion of Light",
            "Murderous Intent",
            "Chaotic Darkness",
            "Inimitable Agony",
            "+3 itemlevel",
            "Torment the Weak",
            "+2 itemlevel",
            "Hideous Corruption",
            "+1 itemlevel",
            "Drained to a Husk",
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