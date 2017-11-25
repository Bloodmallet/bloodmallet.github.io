Highcharts.chart('crucible_warrior_fury_patchwerk', 
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
                42434,
                26640,
                25460,
                22656,
                21887,
                21617,
                21252,
                21036,
                20614,
                0,
                16985,
                16973,
                0,
                15590,
                0,
                9192,
                8486,
                0,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C79C6E",
            data: [
                45734,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                19655,
                0,
                0,
                16285,
                0,
                12107,
                0,
                0,
                8031,
                7343,
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
        text: "Warrior - Fury - Patchwerk"
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
            "Unrivaled Strength",
            "+5 itemlevel",
            "Light Speed",
            "+3 itemlevel",
            "Torment the Weak",
            "Secure in the Light",
            "Murderous Intent",
            "Infusion of Light",
            "Master of Shadows",
            "Shadowbind",
            "Raging Berserker",
            "Chaotic Darkness",
            "+2 itemlevel",
            "Unstoppable",
            "Shocklight",
            "Pulse of Battle",
            "Dark Sorrows",
            "+1 itemlevel",
            "Wrath and Fury",
            "Deathdealer",
            "Wild Slashes",
            "Uncontrolled Rage"
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