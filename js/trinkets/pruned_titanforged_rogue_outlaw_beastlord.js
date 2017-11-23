Highcharts.chart('pruned_titanforged_rogue_outlaw_beastlord', 
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
                395888,
                0,
                322107,
                0,
                0,
                252938,
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
                30777,
                0,
                0,
                14310,
                0,
                0,
                0,
                15627,
                0,
                0,
                0,
                21422,
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
                25818,
                0,
                0,
                22304,
                0,
                0,
                0,
                27088,
                0,
                0,
                0,
                6157,
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
                305788,
                0,
                0,
                244673,
                0,
                0,
                26550,
                177579,
                0,
                0,
                0,
                174295,
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
                28700,
                17025,
                0,
                0,
                0,
                21672,
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
                0,
                13456,
                182389,
                0,
                0,
                0,
                5284,
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
                17356,
                0,
                0,
                200667,
                0,
                0,
                20010,
                10285,
                180076,
                0,
                12071,
                11371,
                6933,
                17437,
                13874,
                13779,
                166221
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                10370,
                0,
                0,
                0,
                0,
                0,
                5357,
                18084,
                0,
                0,
                11075,
                7677,
                28542,
                8560,
                14493,
                4907,
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
                261582,
                0,
                0,
                0,
                0,
                0,
                184995,
                181544,
                0,
                0,
                177782,
                179906,
                161427,
                161032,
                157548,
                161094,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Rogue - Outlaw - Beastlord"
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
            "Convergence of Fates",
            "Forgefiend's Fabricator",
            "Aman'Thul's Vision",
            "Cradle of Anguish",
            "Specter of Betrayal",
            "Shadow-Singed Fang",
            "Bloodthirsty Instinct",
            "Chaos Talisman",
            "Engine of Eradication",
            "Seeping Scourgewing",
            "Eye of Command",
            "Unstable Arcanocrystal",
            "Arcanogolem Digit",
            "Chrono Shard",
            "Stat Stick (Haste)",
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
                    text: "mean: 236895",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 236895.1,
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