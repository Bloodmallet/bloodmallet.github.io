Highcharts.chart('rogue_subtlety_patchwerk_pruned',
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
            color: "#fdbf6f",
            data: [
                236080
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                0
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-06 01:48 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/954bf604f2c56271a369035c7f801169bb84f117\" target=\"blank\">954bf60</a>",
        useHTML: true
    },
    title: {
        text: "Rogue - Subtlety DfA - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\"><a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a></a>"
        ],
        labels: {
            useHTML: true
        }
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
                    text: "mean: 236080",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 236080.0,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});
