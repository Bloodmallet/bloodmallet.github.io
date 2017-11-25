Highcharts.chart('crucible_monk_windwalker_beastlord', 
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
                33081,
                32751,
                30931,
                29255,
                28118,
                0,
                24017,
                23077,
                0,
                0,
                16685,
                0,
                15259,
                15236,
                15153,
                13846,
                0,
                9230,
                0,
                4615,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#00FF96",
            data: [
                42968,
                0,
                0,
                0,
                0,
                0,
                24112,
                0,
                0,
                21624,
                19498,
                0,
                16188,
                0,
                0,
                0,
                0,
                11712,
                0,
                7820,
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
        text: "Monk - Windwalker - Beastlord"
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
            "Fists of the Wind",
            "Shocklight",
            "Dark Sorrows",
            "Murderous Intent",
            "Master of Shadows",
            "Light Speed",
            "Strength of Xuen",
            "Chaotic Darkness",
            "+5 itemlevel",
            "Rising Winds",
            "Power of a Thousand Cranes",
            "Shadowbind",
            "Split Personality",
            "Torment the Weak",
            "Infusion of Light",
            "Secure in the Light",
            "+3 itemlevel",
            "Tiger Claws",
            "+2 itemlevel",
            "Inner Peace",
            "+1 itemlevel",
            "Death Art"
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