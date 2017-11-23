Highcharts.chart('pruned_titanforged_hunter_marksmanship_patchwerk', 
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
                286511,
                246176,
                222620,
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
                9264,
                0,
                11033,
                11230,
                0,
                9735,
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
                0,
                0,
                13743,
                0,
                9001,
                9404,
                0,
                8818,
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
                0,
                0,
                158434,
                0,
                141922,
                136188,
                0,
                136291,
                0,
                0,
                12407,
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
                12018,
                0,
                12821,
                0,
                0,
                9153,
                0,
                10204,
                0,
                11199,
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
                13412,
                0,
                8794,
                0,
                0,
                10619,
                0,
                10370,
                0,
                126551,
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
                7618,
                162970,
                0,
                150829,
                0,
                0,
                136509,
                0,
                131212,
                7569,
                0,
                6374,
                12099,
                7960,
                7950,
                9677,
                8917
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                4873,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                10527,
                0,
                7671,
                7773,
                7607,
                7341,
                7048,
                6991
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                197241,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                133246,
                0,
                131872,
                123556,
                118579,
                118833,
                116444,
                112356
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Hunter - Marksmanship - Patchwerk"
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
            "Golganneth's Vitality",
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "Prototype Personnel Decimator",
            "Cradle of Anguish",
            "Terminus Signaling Beacon",
            "Forgefiend's Fabricator",
            "Engine of Eradication",
            "Shadow-Singed Fang",
            "Terror From Below",
            "Bloodthirsty Instinct",
            "Tome of Unraveling Sanity",
            "Convergence of Fates",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Thrice-Accursed Compass",
            "Entwined Elemental Foci",
            "Stat Stick (Crit)"
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
                    text: "mean: 170478",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 170478.0,
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