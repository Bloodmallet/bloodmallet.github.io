Highcharts.chart('crucible_rogue_subtlety_beastlord',
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
                32649,
                0,
                25750,
                25380,
                23964,
                22257,
                22199,
                22019,
                20476,
                0,
                18240,
                17871,
                0,
                10722,
                0,
                0,
                7148,
                0,
                5102,
                3574,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                0,
                29417,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                18856,
                0,
                0,
                11834,
                0,
                8588,
                7802,
                0,
                6826,
                0,
                0,
                3493,
                3247
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 17:18 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA - Beastlord"
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
            "Dark Sorrows",
            "Gutripper",
            "Murderous Intent",
            "Master of Shadows",
            "Torment the Weak",
            "Shadowbind",
            "Secure in the Light",
            "Shocklight",
            "Chaotic Darkness",
            "Weak Point",
            "Infusion of Light",
            "+5 itemlevel",
            "Energetic Stabbing",
            "+3 itemlevel",
            "Precision Strike",
            "The Quiet Knife",
            "+2 itemlevel",
            "Soul Shadows",
            "Light Speed",
            "+1 itemlevel",
            "Fortune's Bite",
            "Demon's Kiss"
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
