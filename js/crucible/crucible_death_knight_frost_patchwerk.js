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
                22357,
                22047,
                20519,
                19713,
                0,
                19559,
                18599,
                18566,
                18106,
                16539,
                16343,
                12311,
                0,
                0,
                0,
                8207,
                7398,
                0,
                0,
                0,
                4103
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#C41F3B",
            data: [
                28418,
                0,
                0,
                0,
                0,
                19588,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                12072,
                9146,
                8511,
                0,
                0,
                5589,
                5184,
                4716,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-11-25 17:04 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/69c1b460a165743cf53ad056e00fed6a17c3769e\" target=\"blank\">69c1b46</a>"
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
            "Light Speed",
            "Torment the Weak",
            "+5 itemlevel",
            "Secure in the Light",
            "Nothing but the Boots",
            "Murderous Intent",
            "Infusion of Light",
            "Master of Shadows",
            "Shadowbind",
            "Shocklight",
            "Chaotic Darkness",
            "+3 itemlevel",
            "Cold as Ice",
            "Blast Radius",
            "Runefrost",
            "+2 itemlevel",
            "Dark Sorrows",
            "Dead of Winter",
            "Bad to the Bone",
            "Over-Powered",
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