Highcharts.chart('crucible_paladin_retribution_patchwerk', 
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
                24688,
                22776,
                22728,
                22656,
                0,
                20654,
                19605,
                0,
                0,
                13441,
                13021,
                12593,
                12214,
                11763,
                0,
                9541,
                7842,
                0,
                0,
                3921,
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
                0,
                0,
                0,
                20859,
                0,
                0,
                15672,
                14926,
                0,
                0,
                0,
                0,
                0,
                9878,
                0,
                0,
                6465,
                4757,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 00:34 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Paladin - Retribution - Patchwerk"
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
            "Infusion of Light",
            "Shadowbind",
            "Secure in the Light",
            "Wrath of the Ashbringer",
            "Chaotic Darkness",
            "+5 itemlevel",
            "Righteous Verdict",
            "Deliver the Justice",
            "Shocklight",
            "Light Speed",
            "Murderous Intent",
            "Master of Shadows",
            "+3 itemlevel",
            "Might of the Templar",
            "Dark Sorrows",
            "+2 itemlevel",
            "Sharpened Edge",
            "Highlord's Judgment",
            "+1 itemlevel",
            "Protector of the Ashen Blade",
            "Righteous Blade"
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