Highcharts.chart('crucible_death_knight_frost_patchwerk', 
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
                17360,
                16899,
                16072,
                15914,
                15048,
                14808,
                14761,
                14093,
                13895,
                12711,
                0,
                0,
                7626,
                6382,
                0,
                5084,
                0,
                0,
                0,
                2542,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C41F3B",
            data: [
                17615,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                10248,
                10200,
                0,
                0,
                5821,
                0,
                4998,
                4844,
                4385,
                0,
                1559
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 00:34 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Death_Knight - Frost - Patchwerk"
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
            "Ambidexterity",
            "Murderous Intent",
            "Torment the Weak",
            "Secure in the Light",
            "Shocklight",
            "Shadowbind",
            "Infusion of Light",
            "Master of Shadows",
            "Light Speed",
            "Chaotic Darkness",
            "+5 itemlevel",
            "Nothing but the Boots",
            "Cold as Ice",
            "+3 itemlevel",
            "Dark Sorrows",
            "Runefrost",
            "+2 itemlevel",
            "Dead of Winter",
            "Blast Radius",
            "Bad to the Bone",
            "+1 itemlevel",
            "Over-Powered"
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