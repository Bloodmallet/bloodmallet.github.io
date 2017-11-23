Highcharts.chart('pruned_titanforged_shaman_enhancement_patchwerk', 
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
                334062,
                263869,
                254273,
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
                0,
                12271,
                10782,
                11339,
                0,
                0,
                0,
                0,
                0,
                0,
                9416,
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
                0,
                0,
                12242,
                10601,
                10252,
                0,
                0,
                0,
                0,
                0,
                0,
                9665,
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
                0,
                0,
                152805,
                152455,
                147496,
                0,
                0,
                0,
                0,
                15314,
                0,
                129418,
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
                14882,
                0,
                0,
                0,
                0,
                13376,
                0,
                0,
                0,
                13849,
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
                10798,
                0,
                0,
                0,
                0,
                7676,
                0,
                0,
                0,
                134296,
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
                167689,
                6153,
                0,
                0,
                0,
                147606,
                16404,
                10761,
                9104,
                0,
                10236,
                0,
                9647,
                9255,
                10721,
                8681,
                132009
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
                6707,
                0,
                0,
                0,
                0,
                19204,
                11781,
                9219,
                0,
                21650,
                0,
                10501,
                9282,
                8694,
                8477,
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
                169284,
                0,
                0,
                0,
                0,
                131821,
                144725,
                147974,
                0,
                124037,
                0,
                126924,
                125587,
                123908,
                124386,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Shaman - Enhancement - Patchwerk"
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
            "Golganneth's Vitality",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision",
            "Cradle of Anguish",
            "Unstable Arcanocrystal",
            "Shadow-Singed Fang",
            "Gorshalach's Legacy",
            "Seeping Scourgewing",
            "Engine of Eradication",
            "Chaos Talisman",
            "Eye of Command",
            "Bloodthirsty Instinct",
            "Specter of Betrayal",
            "Stat Stick (Haste)",
            "Forgefiend's Fabricator",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Stat Stick (Mastery)",
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
                    text: "mean: 179678",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 179678.2,
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