Highcharts.chart('pruned_titanforged_warrior_arms_beastlord', 
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
                412653,
                335431,
                0,
                0,
                258334,
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
                23892,
                0,
                0,
                0,
                23903,
                0,
                0,
                0,
                0,
                9513,
                0,
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
                13724,
                0,
                0,
                0,
                8794,
                0,
                0,
                0,
                0,
                21174,
                0,
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
                287197,
                0,
                0,
                0,
                201629,
                0,
                0,
                0,
                0,
                170813,
                0,
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
                0,
                0,
                28208,
                0,
                0,
                0,
                0,
                5116,
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
                24340,
                0,
                0,
                0,
                0,
                30543,
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
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                0,
                5007,
                0,
                201880,
                0,
                16861,
                7269,
                14404,
                168489,
                0,
                17706,
                26253,
                13966,
                9852,
                12675,
                12515,
                1044,
                170622
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                13107,
                0,
                0,
                0,
                11480,
                17017,
                7718,
                0,
                0,
                2727,
                5169,
                11783,
                17717,
                7881,
                5945,
                18122,
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
                247709,
                0,
                0,
                0,
                204729,
                197572,
                198412,
                0,
                0,
                177138,
                163617,
                167588,
                163156,
                167148,
                162418,
                158431,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warrior - Arms - Beastlord"
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
            "Gorshalach's Legacy",
            "Unstable Arcanocrystal",
            "Khaz'goroths Courage",
            "Cradle of Anguish",
            "Forgefiend's Fabricator",
            "Eye of Command",
            "Chaos Talisman",
            "Convergence of Fates",
            "Engine of Eradication",
            "Seeping Scourgewing",
            "Stat Stick (Haste)",
            "Entwined Elemental Foci",
            "Toe Knee's Promise",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Memento of Angerboda",
            "Stat Stick (Versatility)",
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
                    text: "mean: 233019",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 233019.55,
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