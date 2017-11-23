Highcharts.chart('pruned_titanforged_warrior_fury_beastlord', 
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
                342054,
                0,
                0,
                304859,
                0,
                266477,
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
                32027,
                0,
                22289,
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
                17186,
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
                22363,
                0,
                20784,
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
                7465,
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
                328827,
                0,
                293619,
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
                24764,
                163039,
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
                0,
                0,
                27225,
                0,
                0,
                0,
                0,
                0,
                0,
                11557,
                12713,
                0,
                0,
                12772,
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
                0,
                0,
                16093,
                0,
                0,
                0,
                0,
                0,
                0,
                19260,
                156459,
                0,
                0,
                12592,
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
                5071,
                0,
                237036,
                0,
                12604,
                23463,
                9552,
                17148,
                27196,
                163593,
                0,
                0,
                18697,
                142991,
                10203,
                5321,
                7227
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                16851,
                0,
                0,
                0,
                19890,
                8397,
                248,
                9948,
                4401,
                0,
                0,
                0,
                6119,
                0,
                6667,
                8131,
                7685
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                283961,
                0,
                0,
                0,
                223442,
                218136,
                229471,
                181951,
                167949,
                0,
                0,
                0,
                151510,
                0,
                146570,
                149922,
                146943
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warrior - Fury - Beastlord"
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
            "Forgefiend's Fabricator",
            "Kil'jaeden's Burning Wish",
            "Gorshalach's Legacy",
            "Convergence of Fates",
            "Aman'Thul's Vision",
            "Umbral Moonglaives",
            "Khaz'goroths Courage",
            "Tiny Oozeling in a Jar",
            "Toe Knee's Promise",
            "Unstable Arcanocrystal",
            "Terrorbound Nexus",
            "Void Stalker's Contract",
            "Cradle of Anguish",
            "Specter of Betrayal",
            "Seeping Scourgewing",
            "Chaos Talisman",
            "Engine of Eradication",
            "Ettin Fingernail",
            "Nature's Call",
            "Eye of Command"
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
                    text: "mean: 239135",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 239135.9,
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