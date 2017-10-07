Highcharts.chart('crucible_hunter_beast_mastery_beastlord', 
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
                30015,
                29973,
                28249,
                28206,
                0,
                25444,
                20425,
                20123,
                19114,
                18968,
                0,
                13841,
                0,
                0,
                0,
                6965,
                4179,
                2786,
                0,
                1393,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#ABD473",
            data: [
                53812,
                0,
                0,
                0,
                0,
                28008,
                0,
                0,
                0,
                0,
                0,
                15006,
                0,
                10919,
                10435,
                8883,
                0,
                0,
                0,
                1938,
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
        text: "Hunter - Beast_Mastery - Beastlord"
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
            "Furious Swipes",
            "Light Speed",
            "Shocklight",
            "Dark Sorrows",
            "Master of Shadows",
            "Slithering Serpents",
            "Murderous Intent",
            "Shadowbind",
            "Chaotic Darkness",
            "Secure in the Light",
            "Infusion of Light",
            "Unleash the Beast",
            "Torment the Weak",
            "Pack Leader",
            "Jaws of Thunder",
            "Wilderness Expert",
            "+5 itemlevel",
            "+3 itemlevel",
            "+2 itemlevel",
            "Spitting Cobras",
            "+1 itemlevel",
            "Focus of the Titans"
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