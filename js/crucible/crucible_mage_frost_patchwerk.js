Highcharts.chart('crucible_mage_frost_patchwerk', 
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
                27898,
                27134,
                25085,
                24678,
                23867,
                0,
                21657,
                0,
                17239,
                16738,
                0,
                14517,
                0,
                13073,
                11922,
                11159,
                0,
                7702,
                0,
                5579,
                0,
                0
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
                22642,
                0,
                20676,
                0,
                0,
                14522,
                0,
                14479,
                0,
                0,
                0,
                9862,
                0,
                6920,
                0,
                3914,
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
        text: "Mage - Frost - Patchwerk"
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
            "Shadowbind",
            "Infusion of Light",
            "Secure in the Light",
            "Clarity of Thought",
            "Chaotic Darkness",
            "Let It Go",
            "Murderous Intent",
            "+3 itemlevel",
            "Obsidian Lance",
            "Light Speed",
            "Ice Age",
            "Shocklight",
            "Dark Sorrows",
            "+2 itemlevel",
            "Icy Caress",
            "Master of Shadows",
            "Frozen Veins",
            "+1 itemlevel",
            "Orbital Strike",
            "The Storm Rages"
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