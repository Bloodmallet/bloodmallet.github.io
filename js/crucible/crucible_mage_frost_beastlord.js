Highcharts.chart('crucible_mage_frost_beastlord', 
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
                43086,
                40654,
                30096,
                27248,
                26780,
                0,
                25966,
                25535,
                0,
                24392,
                23933,
                23750,
                21111,
                0,
                16261,
                0,
                0,
                0,
                11543,
                0,
                0,
                8130
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#69CCF0",
            data: [
                0,
                0,
                0,
                0,
                0,
                26193,
                0,
                0,
                24461,
                0,
                0,
                0,
                0,
                19968,
                0,
                16201,
                13819,
                12473,
                0,
                11176,
                10861,
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
        text: "Mage - Frost - Beastlord"
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
            "+5 itemlevel",
            "Secure in the Light",
            "Infusion of Light",
            "Murderous Intent",
            "Let It Go",
            "Shadowbind",
            "Shocklight",
            "Orbital Strike",
            "+3 itemlevel",
            "Chaotic Darkness",
            "Light Speed",
            "Torment the Weak",
            "Obsidian Lance",
            "+2 itemlevel",
            "The Storm Rages",
            "Ice Age",
            "Frozen Veins",
            "Master of Shadows",
            "Clarity of Thought",
            "Icy Caress",
            "+1 itemlevel"
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