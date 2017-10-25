Highcharts.chart('crucible_mage_arcane_patchwerk', 
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
                26984,
                26940,
                25425,
                24981,
                24506,
                21993,
                0,
                16164,
                15070,
                14766,
                12944,
                0,
                0,
                12004,
                11535,
                0,
                10776,
                0,
                0,
                5388,
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
                0,
                17220,
                0,
                0,
                0,
                0,
                12701,
                12166,
                0,
                0,
                10862,
                0,
                10713,
                10127,
                0,
                4109,
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
        text: "Mage - Arcane - Patchwerk"
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
            "+5 itemlevel",
            "Shadowbind",
            "Secure in the Light",
            "Infusion of Light",
            "Chaotic Darkness",
            "Aegwynn's Imperative",
            "+3 itemlevel",
            "Murderous Intent",
            "Shocklight",
            "Light Speed",
            "Aegwynn's Intensity",
            "Aegwynn's Fury",
            "Master of Shadows",
            "Dark Sorrows",
            "Ethereal Sensitivity",
            "+2 itemlevel",
            "Aegwynn's Wrath",
            "Blasting Rod",
            "+1 itemlevel",
            "Torrential Barrage",
            "Arcane Purification"
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