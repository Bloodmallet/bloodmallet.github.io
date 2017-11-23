Highcharts.chart('pruned_titanforged_priest_shadow_beastlord', 
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
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + this.stackY,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#ffeb3b",
            data: [
                0,
                369095,
                363903,
                343535,
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
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#e600e3",
            data: [
                0,
                0,
                0,
                0,
                16598,
                0,
                0,
                24468,
                0,
                0,
                15585,
                0,
                0,
                0,
                0,
                15870,
                0,
                0,
                0,
                0
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                0,
                0,
                0,
                0,
                26479,
                0,
                0,
                12293,
                0,
                0,
                11400,
                0,
                0,
                0,
                0,
                6736,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                0,
                0,
                0,
                286378,
                0,
                0,
                227432,
                0,
                0,
                214572,
                0,
                23619,
                0,
                0,
                181416,
                0,
                0,
                0,
                0
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                35466,
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
                20181,
                13881,
                0,
                0,
                0,
                0,
                25706,
                0,
                0
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                46560,
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
                545,
                189798,
                0,
                0,
                0,
                0,
                5143,
                0,
                0
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                432158,
                0,
                0,
                0,
                0,
                13739,
                11627,
                0,
                13471,
                22295,
                0,
                209483,
                0,
                10203,
                15277,
                0,
                20449,
                170958,
                14319,
                172162
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                0,
                0,
                26757,
                13473,
                0,
                12260,
                8078,
                0,
                0,
                0,
                13239,
                10152,
                0,
                14129,
                0,
                5860,
                0
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                0,
                0,
                247266,
                244607,
                0,
                229940,
                217014,
                0,
                0,
                0,
                186303,
                179916,
                0,
                167605,
                0,
                173959,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Priest - Shadow - Beastlord"
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
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision",
            "Norgannon's Prowess",
            "Acrid Catalyst Injector",
            "Icon of Rot",
            "Unstable Arcanocrystal",
            "Sheath of Asara",
            "Aran's Relaxing Ruby",
            "Fury of the Burning Sky",
            "Prototype Personnel Decimator",
            "Tarnished Sentinel Medallion",
            "Tome of Unraveling Sanity",
            "Stat Stick (Mastery)",
            "Caged Horror",
            "Vitality Resonator",
            "Star Gate",
            "Terror From Below",
            "Corrupted Starlight",
            "Astral Alchemist Stone"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: "mean: 266667",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 266667.9,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});