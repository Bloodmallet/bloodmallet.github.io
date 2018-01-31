Highcharts.chart('crucible_priest_shadow_patchwerk', 
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
                align: "right",
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#343434",
            data: [
                40026,
                38947,
                38882,
                33885,
                0,
                29427,
                28633,
                25286,
                24015,
                22924,
                21435,
                18067,
                16752,
                0,
                16010,
                0,
                0,
                0,
                8005,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFFFFF",
            data: [
                0,
                0,
                0,
                0,
                32127,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16327,
                0,
                15724,
                9318,
                9244,
                0,
                7686,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2018-01-31 11:53 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/0c4b430f56bfb215b32c304915fc49e966d0b553\" target=\"blank\">0c4b430</a>",
        useHTML: true
    },
    title: {
        text: "Priest - Shadow - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/spell=250879\">+5 itemlevel</a>",
            "<a href=\"http://www.wowhead.com/spell=252875\">Shadowbind</a>",
            "<a href=\"http://www.wowhead.com/spell=252906\">Torment the Weak</a>",
            "<a href=\"http://www.wowhead.com/spell=252888\">Chaotic Darkness</a>",
            "<a href=\"http://www.wowhead.com/spell=238065\">Fiending Dark</a>",
            "<a href=\"http://www.wowhead.com/spell=253070\">Secure in the Light</a>",
            "<a href=\"http://www.wowhead.com/spell=253093\">Infusion of Light</a>",
            "<a href=\"http://www.wowhead.com/spell=252088\">Light Speed</a>",
            "+3 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=252799\">Shocklight</a>",
            "<a href=\"http://www.wowhead.com/spell=252191\">Murderous Intent</a>",
            "<a href=\"http://www.wowhead.com/spell=252091\">Master of Shadows</a>",
            "<a href=\"http://www.wowhead.com/spell=252922\">Dark Sorrows</a>",
            "<a href=\"http://www.wowhead.com/spell=193643\">Mind Shattering</a>",
            "+2 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=194002\">Creeping Shadows</a>",
            "<a href=\"http://www.wowhead.com/spell=194007\">Touch of Darkness</a>",
            "<a href=\"http://www.wowhead.com/spell=193644\">To the Pain</a>",
            "+1 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=194093\">Unleash the Shadows</a>",
            "<a href=\"http://www.wowhead.com/spell=194016\">Void Corruption</a>",
            "<a href=\"http://www.wowhead.com/spell=193645\">Death's Embrace</a>"
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
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});