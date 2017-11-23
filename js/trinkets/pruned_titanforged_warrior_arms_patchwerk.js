Highcharts.chart('pruned_titanforged_warrior_arms_patchwerk', 
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
                255737,
                245176,
                0,
                0,
                182352,
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
                11170,
                0,
                11047,
                0,
                0,
                11433,
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
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                0,
                0,
                0,
                13542,
                0,
                8013,
                0,
                0,
                8561,
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
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                0,
                0,
                161868,
                0,
                132308,
                0,
                0,
                127621,
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
                0,
                7712,
                7238,
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
                5626,
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
                0,
                12321,
                9892,
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
                8083,
                0
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                5625,
                0,
                0,
                0,
                130619,
                131624,
                0,
                10153,
                8190,
                6438,
                9779,
                11846,
                6704,
                7797,
                8448,
                10197,
                108031,
                109119
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                8701,
                0,
                0,
                0,
                0,
                0,
                0,
                4882,
                7267,
                10298,
                6565,
                4637,
                11744,
                8025,
                6398,
                6601,
                0,
                0
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                177996,
                0,
                0,
                0,
                0,
                0,
                0,
                124202,
                113466,
                111304,
                109505,
                108590,
                106519,
                107662,
                108154,
                104974,
                0,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warrior - Arms - Patchwerk"
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
            "Aman'Thul's Vision",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Seeping Scourgewing",
            "Khaz'goroths Courage",
            "Forgefiend's Fabricator",
            "Cradle of Anguish",
            "Engine of Eradication",
            "Gorshalach's Legacy",
            "Eye of Command",
            "Chaos Talisman",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Gift of Radiance",
            "Ettin Fingernail",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Infernal Cinders",
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
                    text: "mean: 151588",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 151588.0,
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