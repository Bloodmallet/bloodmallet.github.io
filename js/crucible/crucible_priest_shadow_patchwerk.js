Highcharts.chart('crucible_priest_shadow_patchwerk', 
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
                43496,
                41377,
                40077,
                35886,
                0,
                30195,
                29661,
                27461,
                26126,
                24826,
                22453,
                21260,
                19393,
                0,
                0,
                16550,
                0,
                0,
                0,
                8275,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFFFFF",
            data: [
                0,
                0,
                0,
                0,
                35862,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                19158,
                17231,
                0,
                13929,
                13315,
                10098,
                0,
                1879,
                1074
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 17:18 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
    },
    title: {
        text: "Priest - Shadow - Patchwerk"
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
            "Chaotic Darkness",
            "Fiending Dark",
            "Infusion of Light",
            "Secure in the Light",
            "Light Speed",
            "Shocklight",
            "+3 itemlevel",
            "Murderous Intent",
            "Master of Shadows",
            "Dark Sorrows",
            "Creeping Shadows",
            "Mind Shattering",
            "+2 itemlevel",
            "Touch of Darkness",
            "To the Pain",
            "Unleash the Shadows",
            "+1 itemlevel",
            "Death's Embrace",
            "Void Corruption"
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