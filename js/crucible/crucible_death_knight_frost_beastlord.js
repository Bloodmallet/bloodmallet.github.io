Highcharts.chart('crucible_death_knight_frost_beastlord', 
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
                33667,
                0,
                28481,
                0,
                26993,
                24809,
                23023,
                0,
                20664,
                20514,
                19337,
                0,
                18442,
                17283,
                16177,
                0,
                13813,
                0,
                9209,
                0,
                4604,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C41F3B",
            data: [
                0,
                32776,
                0,
                27151,
                0,
                0,
                0,
                22216,
                0,
                0,
                0,
                19035,
                0,
                0,
                0,
                15025,
                0,
                11472,
                0,
                6198,
                0,
                1157
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 18:24 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
    },
    title: {
        text: "Death_Knight - Frost - Beastlord"
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
            "Ambidexterity",
            "Master of Shadows",
            "Dead of Winter",
            "Murderous Intent",
            "Shocklight",
            "+5 itemlevel",
            "Cold as Ice",
            "Torment the Weak",
            "Light Speed",
            "Chaotic Darkness",
            "Nothing but the Boots",
            "Infusion of Light",
            "Secure in the Light",
            "Shadowbind",
            "Runefrost",
            "+3 itemlevel",
            "Blast Radius",
            "+2 itemlevel",
            "Over-Powered",
            "+1 itemlevel",
            "Bad to the Bone"
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