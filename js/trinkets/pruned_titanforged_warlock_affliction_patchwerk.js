Highcharts.chart('pruned_titanforged_warlock_affliction_patchwerk', 
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
                257329,
                226164,
                0,
                217189,
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
                16542,
                0,
                0,
                15189,
                0,
                10504,
                9640,
                6777,
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
                10662,
                0,
                0,
                12129,
                0,
                9059,
                9260,
                10870,
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
                194794,
                0,
                0,
                137987,
                0,
                136267,
                123847,
                124918,
                12676,
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
                10820,
                0,
                0,
                0,
                8948,
                9823,
                7097,
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
                11662,
                0,
                0,
                0,
                120524,
                9694,
                10634,
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
                0,
                6249,
                0,
                140972,
                0,
                0,
                0,
                0,
                121857,
                118177,
                7570,
                7252,
                7983,
                8635,
                6452,
                6942,
                107511
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
                7300,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7880,
                9572,
                6898,
                8019,
                8599,
                7223,
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
                181375,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                115521,
                112077,
                112157,
                107770,
                109193,
                107253,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warlock - Affliction - Patchwerk"
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
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Unstable Arcanocrystal",
            "Sheath of Asara",
            "Tarnished Sentinel Medallion",
            "Prototype Personnel Decimator",
            "Vitality Resonator",
            "Terminus Signaling Beacon",
            "Tome of Unraveling Sanity",
            "Charm of the Rising Tide",
            "Terror From Below",
            "Stat Stick (Mastery)",
            "Whispers in the Dark",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Stat Stick (Haste)",
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
                    text: "mean: 158572",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 158572.1,
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