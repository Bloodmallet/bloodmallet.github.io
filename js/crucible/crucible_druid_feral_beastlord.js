Highcharts.chart('crucible_druid_feral_beastlord', 
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
                31496,
                0,
                19784,
                17857,
                17378,
                16771,
                16130,
                15921,
                12135,
                11391,
                0,
                9055,
                7438,
                0,
                0,
                0,
                0,
                5433,
                3622,
                0,
                1811,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FF7D0A",
            data: [
                0,
                20348,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                10653,
                0,
                0,
                6573,
                6560,
                6356,
                6070,
                0,
                0,
                2973,
                0,
                1422
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 00:34 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Druid - Feral - Beastlord"
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
            "Tear the Flesh",
            "Infusion of Light",
            "Shadowbind",
            "Secure in the Light",
            "Shocklight",
            "Chaotic Darkness",
            "Torment the Weak",
            "Murderous Intent",
            "Master of Shadows",
            "Feral Instinct",
            "+5 itemlevel",
            "Light Speed",
            "Ashamane's Energy",
            "Thrashing Claws",
            "Sharpened Claws",
            "Razor Fangs",
            "+3 itemlevel",
            "+2 itemlevel",
            "Feral Power",
            "+1 itemlevel",
            "Powerful Bite"
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