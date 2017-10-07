Highcharts.chart('crucible_rogue_outlaw_beastlord', 
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
                31528,
                21657,
                19395,
                19365,
                19011,
                18212,
                16669,
                16366,
                0,
                0,
                0,
                0,
                11426,
                0,
                10864,
                9304,
                0,
                6518,
                0,
                0,
                4345,
                2172
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                35970,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                15466,
                14858,
                14709,
                14133,
                0,
                11283,
                0,
                0,
                8246,
                0,
                6337,
                5755,
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
        text: "Rogue - Outlaw - Beastlord"
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
            "Blade Dancer",
            "Dark Sorrows",
            "Secure in the Light",
            "Infusion of Light",
            "Torment the Weak",
            "Shadowbind",
            "Light Speed",
            "Chaotic Darkness",
            "Murderous Intent",
            "Fate's Thirst",
            "Fatebringer",
            "Fortune's Boon",
            "Fortune Strikes",
            "Shocklight",
            "Sabermetrics",
            "+5 itemlevel",
            "Master of Shadows",
            "Fortune's Strike",
            "+3 itemlevel",
            "Black Powder",
            "Gunslinger",
            "+2 itemlevel",
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