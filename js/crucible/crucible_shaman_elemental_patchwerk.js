Highcharts.chart('crucible_shaman_elemental_patchwerk', 
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
                24076,
                19768,
                19634,
                19583,
                19375,
                16693,
                0,
                15516,
                14445,
                14343,
                14202,
                13653,
                0,
                9630,
                0,
                9258,
                0,
                0,
                4815,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#0070DE",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                15892,
                0,
                0,
                0,
                0,
                0,
                12415,
                0,
                9390,
                0,
                8228,
                6560,
                0,
                4312,
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
        text: "Shaman - Elemental - Patchwerk"
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
            "Secure in the Light",
            "Torment the Weak",
            "Infusion of Light",
            "Shadowbind",
            "Chaotic Darkness",
            "Elemental Destabilization",
            "Shocklight",
            "+3 itemlevel",
            "Murderous Intent",
            "Light Speed",
            "Master of Shadows",
            "Lava Imbued",
            "+2 itemlevel",
            "Molten Blast",
            "Dark Sorrows",
            "Firestorm",
            "Earthen Attunement",
            "+1 itemlevel",
            "Call the Thunder",
            "Electric Discharge",
            "The Ground Trembles"
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