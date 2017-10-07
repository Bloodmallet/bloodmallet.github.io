Highcharts.chart('crucible_paladin_retribution_beastlord', 
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
                42496,
                0,
                41716,
                0,
                26291,
                25699,
                25478,
                25029,
                24853,
                24586,
                23500,
                22577,
                20085,
                0,
                0,
                18043,
                16686,
                0,
                0,
                8343,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#F58CBA",
            data: [
                0,
                42005,
                0,
                27849,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                19335,
                18901,
                0,
                0,
                13078,
                11845,
                0,
                5098,
                2197
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-10-07 10:13 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Paladin - Retribution - Beastlord"
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
            "Righteous Blade",
            "+5 itemlevel",
            "Wrath of the Ashbringer",
            "Light Speed",
            "Chaotic Darkness",
            "Infusion of Light",
            "+3 itemlevel",
            "Shocklight",
            "Murderous Intent",
            "Secure in the Light",
            "Shadowbind",
            "Torment the Weak",
            "Deliver the Justice",
            "Righteous Verdict",
            "Master of Shadows",
            "+2 itemlevel",
            "Sharpened Edge",
            "Highlord's Judgment",
            "+1 itemlevel",
            "Might of the Templar",
            "Protector of the Ashen Blade"
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