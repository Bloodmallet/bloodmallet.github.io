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
                25199,
                23534,
                22749,
                22398,
                21942,
                20516,
                19358,
                18683,
                0,
                16099,
                0,
                15119,
                13553,
                0,
                0,
                10079,
                9667,
                5039,
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
                0,
                16433,
                0,
                15686,
                0,
                0,
                12072,
                10658,
                0,
                0,
                0,
                2658,
                1701,
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
            "Infusion of Light",
            "Shadowbind",
            "Chaotic Darkness",
            "Shocklight",
            "Master of Shadows",
            "Marked for Death",
            "Murderous Intent",
            "Unerring Arrows",
            "+3 itemlevel",
            "Light Speed",
            "Quick Shot",
            "Deadly Aim",
            "+2 itemlevel",
            "Dark Sorrows",
            "+1 itemlevel",
            "Precision",
            "Windrunner's Guidance",
            "Called Shot",
            "Gust of Wind"
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