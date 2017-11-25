Highcharts.chart('crucible_monk_windwalker_patchwerk', 
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
                22568,
                0,
                21111,
                21031,
                21018,
                20085,
                19672,
                19618,
                17014,
                0,
                13481,
                11423,
                10393,
                0,
                0,
                8088,
                5392,
                0,
                2696,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#00FF96",
            data: [
                0,
                21257,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16812,
                0,
                0,
                0,
                9947,
                8918,
                0,
                0,
                3514,
                0,
                2494,
                2332,
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
        text: "Monk - Windwalker - Patchwerk"
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
            "Murderous Intent",
            "Rising Winds",
            "Shocklight",
            "Torment the Weak",
            "Master of Shadows",
            "Secure in the Light",
            "Infusion of Light",
            "Shadowbind",
            "Chaotic Darkness",
            "Fists of the Wind",
            "+5 itemlevel",
            "Light Speed",
            "Dark Sorrows",
            "Strength of Xuen",
            "Tiger Claws",
            "+3 itemlevel",
            "+2 itemlevel",
            "Inner Peace",
            "+1 itemlevel",
            "Power of a Thousand Cranes",
            "Death Art",
            "Split Personality"
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