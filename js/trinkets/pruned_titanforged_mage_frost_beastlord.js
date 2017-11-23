Highcharts.chart('pruned_titanforged_mage_frost_beastlord', 
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
                397722,
                348059,
                0,
                0,
                0,
                0,
                258733,
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
                39088,
                0,
                0,
                0,
                0,
                0,
                26592,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3348,
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
                17032,
                0,
                0,
                0,
                0,
                0,
                15843,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                21782,
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
                271446,
                0,
                0,
                0,
                0,
                0,
                193708,
                19735,
                0,
                0,
                0,
                0,
                0,
                0,
                157758,
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
                19831,
                0,
                0,
                0,
                0,
                0,
                3210,
                16467,
                1498,
                0,
                0,
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
                20219,
                0,
                0,
                0,
                0,
                0,
                210127,
                11378,
                17888,
                0,
                0,
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
                276909,
                20831,
                27842,
                0,
                10166,
                0,
                0,
                187577,
                182248,
                19763,
                16389,
                19555,
                17647,
                0,
                69,
                168869
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
                11084,
                13173,
                0,
                20461,
                0,
                0,
                0,
                0,
                4581,
                8590,
                3917,
                12227,
                0,
                8645,
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
                241270,
                221596,
                0,
                208225,
                0,
                0,
                0,
                0,
                173432,
                167790,
                163636,
                155207,
                0,
                168411,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Mage - Frost - Beastlord"
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
            "Unstable Arcanocrystal",
            "Icon of Rot",
            "Norgannon's Prowess",
            "Stat Stick (Crit)",
            "Sheath of Asara",
            "Tome of Unraveling Sanity",
            "Terror From Below",
            "Charm of the Rising Tide",
            "Eye of Skovald",
            "Infernal Writ",
            "Star Gate",
            "Padawsen's Unlucky Charm",
            "Vitality Resonator",
            "Unstable Horrorslime",
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
                    text: "mean: 242188",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 242188.1052631579,
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