Highcharts.chart('crucible_druid_feral_patchwerk', 
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
                19695,
                18413,
                17875,
                17624,
                16388,
                14870,
                0,
                0,
                12775,
                12707,
                0,
                10350,
                0,
                8656,
                7719,
                6210,
                0,
                4140,
                0,
                2070,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FF7D0A",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                14543,
                13442,
                0,
                0,
                11500,
                0,
                8920,
                0,
                0,
                0,
                5383,
                0,
                2951,
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
        text: "Druid - Feral - Patchwerk"
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
            "Secure in the Light",
            "Infusion of Light",
            "Chaotic Darkness",
            "Murderous Intent",
            "Tear the Flesh",
            "Razor Fangs",
            "Master of Shadows",
            "Shocklight",
            "Feral Instinct",
            "+5 itemlevel",
            "Feral Power",
            "Dark Sorrows",
            "Light Speed",
            "+3 itemlevel",
            "Ashamane's Energy",
            "+2 itemlevel",
            "Powerful Bite",
            "+1 itemlevel",
            "Thrashing Claws",
            "Sharpened Claws"
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