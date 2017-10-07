Highcharts.chart('crucible_hunter_survival_beastlord', 
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
                34454,
                27811,
                27697,
                26875,
                24433,
                23576,
                22960,
                22667,
                21890,
                21553,
                0,
                16686,
                15609,
                0,
                11124,
                0,
                0,
                0,
                5562,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#ABD473",
            data: [
                82410,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                19803,
                0,
                0,
                15392,
                0,
                8953,
                8777,
                6623,
                0,
                3564,
                2390
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-10-07 10:13 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Hunter - Survival - Beastlord"
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
            "Hellcarver",
            "Dark Sorrows",
            "+5 itemlevel",
            "Light Speed",
            "Murderous Intent",
            "Shadowbind",
            "Secure in the Light",
            "Torment the Weak",
            "Infusion of Light",
            "Shocklight",
            "Chaotic Darkness",
            "Sharpened Fang",
            "+3 itemlevel",
            "Master of Shadows",
            "Jaws of the Mongoose",
            "+2 itemlevel",
            "Lacerating Talons",
            "Fluffy, Go",
            "My Beloved Monster",
            "+1 itemlevel",
            "Explosive Force",
            "Raptor's Cry"
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