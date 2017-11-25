Highcharts.chart('crucible_hunter_marksmanship_beastlord', 
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
                57545,
                50218,
                39566,
                37975,
                34707,
                34527,
                30806,
                0,
                27911,
                26716,
                24701,
                24381,
                23018,
                0,
                0,
                18896,
                0,
                0,
                11509,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#ABD473",
            data: [
                198623,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                30367,
                0,
                0,
                0,
                0,
                0,
                22022,
                21351,
                0,
                17695,
                17104,
                0,
                2281,
                1779
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 17:18 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
    },
    title: {
        text: "Hunter - Marksmanship - Beastlord"
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
            "Quick Shot",
            "+5 itemlevel",
            "Light Speed",
            "Dark Sorrows",
            "Master of Shadows",
            "Shocklight",
            "+3 itemlevel",
            "Murderous Intent",
            "Windrunner's Guidance",
            "Secure in the Light",
            "Torment the Weak",
            "Infusion of Light",
            "Shadowbind",
            "+2 itemlevel",
            "Unerring Arrows",
            "Precision",
            "Chaotic Darkness",
            "Deadly Aim",
            "Marked for Death",
            "+1 itemlevel",
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