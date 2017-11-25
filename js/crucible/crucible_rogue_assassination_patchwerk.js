Highcharts.chart('crucible_rogue_assassination_patchwerk', 
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
                20730,
                0,
                18462,
                18074,
                18068,
                16992,
                16818,
                16594,
                0,
                14442,
                10654,
                9419,
                0,
                7495,
                5651,
                0,
                0,
                3767,
                0,
                0,
                1883,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                0,
                20228,
                0,
                0,
                0,
                0,
                0,
                0,
                16068,
                0,
                0,
                0,
                7912,
                0,
                0,
                4162,
                3778,
                0,
                3448,
                3264,
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
        text: "Rogue - Assassination - Patchwerk"
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
            "Master of Shadows",
            "Master Assassin",
            "Shocklight",
            "Torment the Weak",
            "Murderous Intent",
            "Secure in the Light",
            "Shadowbind",
            "Infusion of Light",
            "Master Alchemist",
            "Chaotic Darkness",
            "Light Speed",
            "+5 itemlevel",
            "Toxic Blades",
            "Dark Sorrows",
            "+3 itemlevel",
            "Gushing Wound",
            "Balanced Blades",
            "+2 itemlevel",
            "Serrated Edge",
            "Strangler",
            "+1 itemlevel",
            "Poison Knives"
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