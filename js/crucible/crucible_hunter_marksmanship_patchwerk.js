Highcharts.chart('crucible_hunter_marksmanship_patchwerk', 
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
                37989,
                26557,
                25714,
                25630,
                25014,
                23503,
                23319,
                23009,
                22793,
                0,
                0,
                0,
                20007,
                19599,
                15195,
                10227,
                7597,
                0,
                0,
                0,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#ABD473",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                21525,
                20321,
                20297,
                0,
                0,
                0,
                0,
                0,
                5390,
                5048,
                3711,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2017-12-15 01:10 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Hunter - Marksmanship - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/spell=253093\">Infusion of Light</a>",
            "<a href=\"http://www.wowhead.com/spell=253070\">Secure in the Light</a>",
            "<a href=\"http://www.wowhead.com/spell=252091\">Master of Shadows</a>",
            "<a href=\"http://www.wowhead.com/spell=252799\">Shocklight</a>",
            "<a href=\"http://www.wowhead.com/spell=252888\">Chaotic Darkness</a>",
            "+3 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=190529\">Marked for Death</a>",
            "<a href=\"http://www.wowhead.com/spell=190449\">Deadly Aim</a>",
            "<a href=\"http://www.wowhead.com/spell=238052\">Unerring Arrows</a>",
            "<a href=\"http://www.wowhead.com/spell=252191\">Murderous Intent</a>",
            "<a href=\"http://www.wowhead.com/spell=252088\">Light Speed</a>",
            "+2 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=252922\">Dark Sorrows</a>",
            "+1 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=190457\">Windrunner's Guidance</a>",
            "<a href=\"http://www.wowhead.com/spell=190520\">Precision</a>",
            "<a href=\"http://www.wowhead.com/spell=190462\">Quick Shot</a>",
            "<a href=\"http://www.wowhead.com/spell=190467\">Called Shot</a>",
            "<a href=\"http://www.wowhead.com/spell=190567\">Gust of Wind</a>"
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