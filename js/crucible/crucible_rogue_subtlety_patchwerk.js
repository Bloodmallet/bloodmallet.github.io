Highcharts.chart('crucible_rogue_subtlety_patchwerk', 
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
                20685,
                19297,
                0,
                18538,
                17823,
                17260,
                0,
                14752,
                0,
                12868,
                12452,
                11415,
                0,
                0,
                8127,
                7753,
                6849,
                0,
                0,
                4566,
                0,
                2283
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                0,
                0,
                18551,
                0,
                0,
                0,
                15389,
                0,
                13334,
                0,
                0,
                0,
                10318,
                9813,
                0,
                0,
                0,
                6771,
                5768,
                0,
                3982,
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
        text: "Rogue - Subtlety DfA - Patchwerk"
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
            "Energetic Stabbing",
            "Infusion of Light",
            "Secure in the Light",
            "Chaotic Darkness",
            "Weak Point",
            "Murderous Intent",
            "Gutripper",
            "Master of Shadows",
            "Shocklight",
            "+5 itemlevel",
            "Soul Shadows",
            "Precision Strike",
            "Dark Sorrows",
            "Light Speed",
            "+3 itemlevel",
            "The Quiet Knife",
            "Demon's Kiss",
            "+2 itemlevel",
            "Fortune's Bite",
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