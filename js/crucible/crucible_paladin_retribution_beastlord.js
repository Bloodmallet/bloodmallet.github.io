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
                0,
                36439,
                33110,
                21694,
                19866,
                19829,
                0,
                18232,
                17915,
                17662,
                17338,
                16333,
                15836,
                15043,
                0,
                13244,
                0,
                0,
                6622,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#F58CBA",
            data: [
                37327,
                0,
                0,
                0,
                0,
                0,
                18436,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                14167,
                0,
                12336,
                9631,
                0,
                2922,
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
            "Righteous Blade",
            "Dark Sorrows",
            "+5 itemlevel",
            "Secure in the Light",
            "+3 itemlevel",
            "Murderous Intent",
            "Wrath of the Ashbringer",
            "Torment the Weak",
            "Shadowbind",
            "Infusion of Light",
            "Shocklight",
            "Light Speed",
            "Chaotic Darkness",
            "Master of Shadows",
            "Deliver the Justice",
            "+2 itemlevel",
            "Righteous Verdict",
            "Highlord's Judgment",
            "+1 itemlevel",
            "Sharpened Edge",
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