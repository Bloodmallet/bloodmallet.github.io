Highcharts.chart('crucible_hunter_marksmanship_patchwerk', 
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
                38556,
                27048,
                25173,
                23950,
                23587,
                23469,
                23133,
                0,
                22012,
                0,
                21280,
                19972,
                0,
                17632,
                15422,
                10729,
                7711,
                0,
                0,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#ABD473",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                22333,
                0,
                21710,
                0,
                0,
                19421,
                0,
                0,
                0,
                0,
                2319,
                1908,
                0,
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
        text: "Hunter - Marksmanship - Patchwerk"
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
            "Torment the Weak",
            "Secure in the Light",
            "Shocklight",
            "Infusion of Light",
            "Shadowbind",
            "+3 itemlevel",
            "Unerring Arrows",
            "Master of Shadows",
            "Marked for Death",
            "Murderous Intent",
            "Chaotic Darkness",
            "Deadly Aim",
            "Light Speed",
            "+2 itemlevel",
            "Dark Sorrows",
            "+1 itemlevel",
            "Precision",
            "Windrunner's Guidance",
            "Gust of Wind",
            "Called Shot",
            "Quick Shot"
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