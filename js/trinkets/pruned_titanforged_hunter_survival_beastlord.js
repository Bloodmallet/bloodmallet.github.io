Highcharts.chart('pruned_titanforged_hunter_survival_beastlord', 
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
                367413,
                0,
                290917,
                0,
                282026,
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
                25578,
                0,
                17500,
                0,
                0,
                0,
                24961,
                0,
                0,
                0,
                0,
                10623,
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
                26181,
                0,
                20791,
                0,
                0,
                0,
                11586,
                0,
                0,
                0,
                0,
                9971,
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
                285687,
                0,
                244846,
                0,
                0,
                0,
                179978,
                19634,
                0,
                0,
                0,
                164251,
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
                24902,
                0,
                0,
                12324,
                0,
                0,
                0,
                0,
                0,
                11296,
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
                8891,
                0,
                0,
                168158,
                0,
                0,
                0,
                0,
                0,
                8307,
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
                0,
                0,
                192961,
                9041,
                0,
                0,
                7943,
                11947,
                8111,
                0,
                12579,
                159933,
                18469,
                12346,
                11254,
                12065,
                161165
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
                0,
                10258,
                0,
                0,
                10333,
                11101,
                11497,
                0,
                8272,
                0,
                10704,
                15640,
                9346,
                7929,
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
                0,
                198596,
                0,
                0,
                175627,
                164061,
                166462,
                0,
                159863,
                0,
                147400,
                147760,
                151929,
                152080,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Hunter - Survival - Beastlord"
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
            "Gorshalach's Legacy",
            "Golganneth's Vitality",
            "Forgefiend's Fabricator",
            "Aman'Thul's Vision",
            "Cradle of Anguish",
            "Unstable Arcanocrystal",
            "Shadow-Singed Fang",
            "Specter of Betrayal",
            "Bloodthirsty Instinct",
            "Chaos Talisman",
            "Eye of Command",
            "Seeping Scourgewing",
            "Stat Stick (Haste)",
            "Engine of Eradication",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Arcanogolem Digit",
            "Nightmare Egg Shell",
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
                    text: "mean: 219624",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 219624.65,
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