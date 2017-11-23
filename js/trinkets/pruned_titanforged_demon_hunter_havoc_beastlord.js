Highcharts.chart('pruned_titanforged_demon_hunter_havoc_beastlord', 
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
                451794,
                0,
                426508,
                0,
                359400,
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
                17623,
                0,
                29020,
                0,
                0,
                14880,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                25270,
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
                36048,
                0,
                16333,
                0,
                0,
                23002,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                8982,
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
                316839,
                0,
                312674,
                0,
                0,
                251868,
                0,
                0,
                0,
                0,
                0,
                23007,
                0,
                0,
                196415,
                0,
                0
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                34554,
                0,
                0,
                0,
                0,
                0,
                20275,
                0,
                0,
                12764,
                0,
                0,
                0,
                12255,
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
                35795,
                0,
                0,
                0,
                0,
                0,
                24174,
                0,
                0,
                24118,
                0,
                0,
                0,
                199718,
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
                378153,
                0,
                0,
                0,
                0,
                6292,
                261196,
                0,
                25110,
                235327,
                14212,
                49453,
                13391,
                0,
                7711,
                16663,
                0,
                6999,
                205556
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
                9909,
                0,
                0,
                17711,
                0,
                14713,
                4507,
                13649,
                0,
                19468,
                16139,
                0,
                12385,
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
                318541,
                0,
                0,
                230613,
                0,
                230915,
                202993,
                216308,
                0,
                207332,
                200480,
                0,
                199740,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Demon_Hunter - Havoc - Beastlord"
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
            "Umbral Moonglaives",
            "Aman'Thul's Vision",
            "Forgefiend's Fabricator",
            "Golganneth's Vitality",
            "Gorshalach's Legacy",
            "Unstable Arcanocrystal",
            "Cradle of Anguish",
            "Shadow-Singed Fang",
            "Chaos Talisman",
            "Engine of Eradication",
            "Eye of Command",
            "Thrice-Accursed Compass",
            "Stat Stick (Haste)",
            "Specter of Betrayal",
            "Bloodthirsty Instinct",
            "Stat Stick (Mastery)",
            "Seeping Scourgewing",
            "Memento of Angerboda",
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
                    text: "mean: 300439",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 300439.1,
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