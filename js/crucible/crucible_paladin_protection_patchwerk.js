Highcharts.chart('crucible_paladin_protection_patchwerk', 
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
                31342,
                30911,
                30788,
                28917,
                25799,
                13341,
                8561,
                0,
                6143,
                6113,
                5584,
                0,
                4668,
                0,
                0,
                2800,
                1867,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#F58CBA",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                6517,
                0,
                0,
                0,
                5083,
                0,
                4009,
                3379,
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
        text: "Paladin - Protection - Patchwerk"
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
            "Secure in the Light",
            "Infusion of Light",
            "Shadowbind",
            "Chaotic Darkness",
            "Dark Sorrows",
            "Shocklight",
            "Stern Judgment",
            "Master of Shadows",
            "Murderous Intent",
            "Light Speed",
            "Hammer Time",
            "+5 itemlevel",
            "Consecration in Flame",
            "Righteous Crusader",
            "+3 itemlevel",
            "+2 itemlevel",
            "+1 itemlevel"
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