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
                43348,
                37320,
                0,
                0,
                0,
                30916,
                30864,
                29624,
                29543,
                0,
                28504,
                24545,
                23969,
                23482,
                21801,
                0,
                17774,
                0,
                0,
                0,
                11849,
                5924
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                52569,
                0,
                0,
                33520,
                32582,
                31218,
                0,
                0,
                0,
                0,
                29224,
                0,
                0,
                0,
                0,
                0,
                18014,
                0,
                17412,
                16096,
                15466,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 17:18 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
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
            "Torment the Weak",
            "Fatebringer",
            "Fortune Strikes",
            "Fate's Thirst",
            "Shadowbind",
            "Light Speed",
            "+5 itemlevel",
            "Secure in the Light",
            "Fortune's Boon",
            "Murderous Intent",
            "Infusion of Light",
            "Shocklight",
            "Chaotic Darkness",
            "Master of Shadows",
            "Sabermetrics",
            "+3 itemlevel",
            "Fortune's Strike",
            "Gunslinger",
            "Black Powder",
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