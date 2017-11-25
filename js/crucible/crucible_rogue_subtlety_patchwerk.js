Highcharts.chart('crucible_rogue_subtlety_patchwerk',
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
                27616,
                22287,
                21816,
                21713,
                21485,
                0,
                20517,
                19831,
                19497,
                0,
                15953,
                13951,
                0,
                11698,
                10342,
                7798,
                0,
                0,
                0,
                3899
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                30759,
                28074,
                0,
                0,
                0,
                0,
                0,
                21430,
                0,
                0,
                0,
                17099,
                0,
                0,
                12249,
                0,
                0,
                0,
                7022,
                5690,
                5586,
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
        text: "Rogue - Subtlety DfA - Patchwerk"
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
            "Weak Point",
            "Energetic Stabbing",
            "Torment the Weak",
            "Infusion of Light",
            "Secure in the Light",
            "Shadowbind",
            "Shocklight",
            "The Quiet Knife",
            "Chaotic Darkness",
            "Murderous Intent",
            "+5 itemlevel",
            "Gutripper",
            "Master of Shadows",
            "Light Speed",
            "Precision Strike",
            "+3 itemlevel",
            "Dark Sorrows",
            "+2 itemlevel",
            "Demon's Kiss",
            "Fortune's Bite",
            "Soul Shadows",
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
