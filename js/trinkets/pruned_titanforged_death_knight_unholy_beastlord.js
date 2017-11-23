Highcharts.chart('pruned_titanforged_death_knight_unholy_beastlord', 
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
                329172,
                310339,
                0,
                0,
                0,
                0,
                0,
                0,
                219906,
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
                17444,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                18096,
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
                22553,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                9649,
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
                236305,
                0,
                0,
                24865,
                0,
                0,
                0,
                0,
                0,
                183281,
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
                27873,
                0,
                20896,
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
                15820
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                0,
                0,
                0,
                12257,
                0,
                209746,
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
                13969
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                0,
                232003,
                11420,
                0,
                9662,
                21451,
                0,
                16380,
                4621,
                0,
                9001,
                8434,
                15160,
                207263,
                18783,
                29803,
                17131,
                166631
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
                24309,
                0,
                20457,
                0,
                0,
                22640,
                22217,
                0,
                21114,
                16385,
                4618,
                0,
                10558,
                354,
                8166,
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
                220130,
                0,
                203326,
                205309,
                0,
                179804,
                187031,
                0,
                178993,
                183897,
                188743,
                0,
                173122,
                167658,
                171198,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Death_Knight - Unholy - Beastlord"
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
            "Khaz'goroths Courage",
            "Kil'jaeden's Burning Wish",
            "Forgefiend's Fabricator",
            "Engine of Eradication",
            "Eye of Command",
            "Specter of Betrayal",
            "Convergence of Fates",
            "Stat Stick (Mastery)",
            "Aman'Thul's Vision",
            "Entwined Elemental Foci",
            "Stat Stick (Crit)",
            "Seeping Scourgewing",
            "Horn of Valor",
            "Stat Stick (Versatility)",
            "Memento of Angerboda",
            "Astral Alchemist Stone",
            "PVP Badge of Victory",
            "Chrono Shard",
            "Gift of Radiance",
            "Vial of Ceaseless Toxins"
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
                    text: "mean: 232460",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 232460.2,
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