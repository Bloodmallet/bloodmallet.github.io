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
                23607,
                23464,
                23442,
                22598,
                22380,
                21013,
                0,
                14078,
                13101,
                12515,
                10555,
                0,
                0,
                10074,
                9385,
                8735,
                0,
                0,
                0,
                4692,
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
                15229,
                0,
                0,
                0,
                0,
                10293,
                10249,
                0,
                0,
                0,
                8601,
                7654,
                7074,
                0,
                2080,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-09-28 00:29 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/68e31d9f343d9da2bb75ce6aad219d205f34e0b3\" target=\"blank\">68e31d9</a>"
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
            "Infusion of Light",
            "+5 itemlevel",
            "Torment the Weak",
            "Secure in the Light",
            "Shadowbind",
            "Chaotic Darkness",
            "Aegwynn's Imperative",
            "+3 itemlevel",
            "Shocklight",
            "Murderous Intent",
            "Light Speed",
            "Aegwynn's Fury",
            "Aegwynn's Intensity",
            "Master of Shadows",
            "+2 itemlevel",
            "Dark Sorrows",
            "Aegwynn's Wrath",
            "Ethereal Sensitivity",
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