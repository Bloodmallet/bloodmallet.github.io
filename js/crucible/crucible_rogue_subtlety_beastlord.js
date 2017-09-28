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
                33166,
                0,
                27323,
                26652,
                23834,
                23064,
                21258,
                21138,
                20441,
                19587,
                0,
                16797,
                16494,
                0,
                0,
                0,
                0,
                10078,
                0,
                6718,
                0,
                3359
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                0,
                28309,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                17296,
                0,
                0,
                13295,
                12023,
                11673,
                10592,
                0,
                7954,
                0,
                5155,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-09-28 00:29 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/68e31d9f343d9da2bb75ce6aad219d205f34e0b3\" target=\"blank\">68e31d9</a>"
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
            "Secure in the Light",
            "Master of Shadows",
            "Infusion of Light",
            "Murderous Intent",
            "Shadowbind",
            "Torment the Weak",
            "Light Speed",
            "Chaotic Darkness",
            "Energetic Stabbing",
            "+5 itemlevel",
            "Shocklight",
            "Weak Point",
            "Fortune's Bite",
            "Soul Shadows",
            "Demon's Kiss",
            "+3 itemlevel",
            "Precision Strike",
            "+2 itemlevel",
            "The Quiet Knife",
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