Highcharts.chart('crucible_priest_shadow_beastlord', 
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
                70810,
                69583,
                0,
                50001,
                47293,
                45701,
                43541,
                42486,
                40145,
                40107,
                0,
                38456,
                38157,
                28324,
                0,
                0,
                0,
                14162,
                0,
                2216,
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
                51107,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                38891,
                0,
                0,
                0,
                24709,
                21785,
                19456,
                0,
                11625,
                0,
                1808,
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
        text: "Priest - Shadow - Beastlord"
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
            "Dark Sorrows",
            "Touch of Darkness",
            "Shadowbind",
            "Master of Shadows",
            "Shocklight",
            "Chaotic Darkness",
            "+3 itemlevel",
            "Torment the Weak",
            "Murderous Intent",
            "Creeping Shadows",
            "Secure in the Light",
            "Infusion of Light",
            "+2 itemlevel",
            "To the Pain",
            "Unleash the Shadows",
            "Mind Shattering",
            "+1 itemlevel",
            "Fiending Dark",
            "Light Speed",
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