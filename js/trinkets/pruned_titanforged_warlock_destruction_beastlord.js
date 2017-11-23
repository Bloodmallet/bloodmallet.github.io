Highcharts.chart('pruned_titanforged_warlock_destruction_beastlord', 
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
                333682,
                300514,
                0,
                0,
                258081,
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
                20197,
                0,
                0,
                0,
                0,
                14082,
                19710,
                0,
                0,
                0,
                18629,
                0,
                0,
                0,
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
                12221,
                0,
                0,
                0,
                0,
                9469,
                10248,
                0,
                0,
                0,
                10922,
                0,
                0,
                0,
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
                242991,
                0,
                0,
                0,
                0,
                179712,
                159122,
                17067,
                0,
                0,
                141190,
                0,
                0,
                0,
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
                0,
                0,
                0,
                26408,
                0,
                0,
                25185,
                0,
                0,
                5720,
                0,
                0,
                0,
                0,
                12357,
                0,
                0,
                0,
                0,
                0
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                0,
                0,
                0,
                17066,
                0,
                0,
                4777,
                0,
                0,
                156885,
                0,
                0,
                0,
                0,
                3450,
                0,
                0,
                0,
                0,
                0
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                0,
                228344,
                0,
                5290,
                179097,
                0,
                0,
                0,
                16680,
                7476,
                0,
                10518,
                144090,
                15524,
                14723,
                8879,
                4560,
                139258
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
                993,
                0,
                0,
                0,
                0,
                7505,
                13672,
                0,
                7252,
                0,
                6637,
                4511,
                4212,
                937,
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
                217730,
                0,
                0,
                0,
                0,
                148286,
                150210,
                0,
                150293,
                0,
                136938,
                139785,
                142081,
                141521,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warlock - Destruction - Beastlord"
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
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision",
            "Acrid Catalyst Injector",
            "Spectral Thurible",
            "Norgannon's Prowess",
            "Unstable Arcanocrystal",
            "Charm of the Rising Tide",
            "Prototype Personnel Decimator",
            "Sheath of Asara",
            "Tome of Unraveling Sanity",
            "Aran's Relaxing Ruby",
            "Fury of the Burning Sky",
            "Vitality Resonator",
            "Icon of Rot",
            "Tarnished Sentinel Medallion",
            "Erratic Metronome",
            "Whispers in the Dark",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Mastery)",
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
                    text: "mean: 202334",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 202334.35,
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