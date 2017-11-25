Highcharts.chart('crucible_paladin_retribution_beastlord', 
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
                0,
                53340,
                40281,
                37549,
                36841,
                32966,
                32736,
                32004,
                31722,
                28229,
                0,
                26854,
                26646,
                23512,
                0,
                21336,
                0,
                0,
                0,
                10668,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#F58CBA",
            data: [
                69760,
                58102,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                27773,
                0,
                0,
                0,
                22241,
                0,
                18847,
                11361,
                10858,
                0,
                7861
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 17:18 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
    },
    title: {
        text: "Paladin - Retribution - Beastlord"
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
            "Righteous Blade",
            "Highlord's Judgment",
            "+5 itemlevel",
            "Master of Shadows",
            "Shocklight",
            "Dark Sorrows",
            "Light Speed",
            "Shadowbind",
            "+3 itemlevel",
            "Murderous Intent",
            "Infusion of Light",
            "Wrath of the Ashbringer",
            "Chaotic Darkness",
            "Secure in the Light",
            "Torment the Weak",
            "Righteous Verdict",
            "+2 itemlevel",
            "Deliver the Justice",
            "Sharpened Edge",
            "Protector of the Ashen Blade",
            "+1 itemlevel",
            "Might of the Templar"
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