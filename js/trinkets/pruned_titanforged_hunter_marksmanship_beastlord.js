Highcharts.chart('pruned_titanforged_hunter_marksmanship_beastlord', 
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
                392459,
                0,
                365573,
                0,
                0,
                0,
                277011,
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
                25137,
                0,
                0,
                0,
                0,
                0,
                0,
                26789,
                0,
                0,
                0,
                0,
                6660,
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
                26141,
                0,
                0,
                0,
                0,
                0,
                0,
                15104,
                0,
                0,
                0,
                0,
                12746,
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
                299332,
                0,
                0,
                0,
                0,
                0,
                0,
                181769,
                10814,
                0,
                0,
                0,
                181063,
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
                36265,
                0,
                0,
                0,
                26077,
                20217,
                0,
                15017,
                8428,
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
                17389,
                0,
                0,
                0,
                18632,
                9853,
                0,
                183046,
                4980,
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
                13729,
                0,
                0,
                263639,
                7349,
                0,
                16782,
                210875,
                195827,
                0,
                0,
                195457,
                0,
                10710,
                0,
                14921,
                417,
                5170,
                8606
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                15541,
                0,
                0,
                0,
                13355,
                0,
                13918,
                0,
                0,
                0,
                0,
                0,
                18002,
                5828,
                0,
                10976,
                15814,
                10386,
                5152
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                343433,
                0,
                0,
                0,
                281179,
                0,
                230847,
                0,
                0,
                0,
                0,
                0,
                186951,
                187432,
                0,
                170980,
                176880,
                175908,
                177125
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Hunter - Marksmanship - Beastlord"
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
            "Convergence of Fates",
            "Kil'jaeden's Burning Wish",
            "Forgefiend's Fabricator",
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Golganneth's Vitality",
            "Bloodthirsty Instinct",
            "Cradle of Anguish",
            "Engine of Eradication",
            "Shadow-Singed Fang",
            "Tome of Unraveling Sanity",
            "Tarnished Sentinel Medallion",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Prototype Personnel Decimator",
            "Icon of Rot",
            "Chrono Shard",
            "Entwined Elemental Foci",
            "Stat Stick (Haste)"
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
                    text: "mean: 257069",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 257069.15,
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