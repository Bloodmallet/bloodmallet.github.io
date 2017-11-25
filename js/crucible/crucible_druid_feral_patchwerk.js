Highcharts.chart('crucible_druid_feral_patchwerk', 
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
                24477,
                21721,
                21660,
                20534,
                19271,
                17747,
                17203,
                0,
                0,
                15067,
                0,
                13662,
                12837,
                0,
                9627,
                9040,
                6026,
                0,
                0,
                3013,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FF7D0A",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16284,
                15108,
                0,
                14891,
                0,
                0,
                12476,
                0,
                0,
                0,
                5968,
                4964,
                0,
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
        text: "Druid - Feral - Patchwerk"
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
            "Torment the Weak",
            "Secure in the Light",
            "Shadowbind",
            "Infusion of Light",
            "Chaotic Darkness",
            "Murderous Intent",
            "Shocklight",
            "Tear the Flesh",
            "Feral Instinct",
            "+5 itemlevel",
            "Razor Fangs",
            "Light Speed",
            "Master of Shadows",
            "Feral Power",
            "Dark Sorrows",
            "+3 itemlevel",
            "+2 itemlevel",
            "Ashamane's Energy",
            "Powerful Bite",
            "+1 itemlevel",
            "Thrashing Claws",
            "Sharpened Claws"
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