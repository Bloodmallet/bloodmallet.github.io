Highcharts.chart('crucible_hunter_survival_patchwerk', 
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
                25233,
                23642,
                23143,
                21888,
                21706,
                20678,
                19680,
                19674,
                18298,
                0,
                16302,
                15139,
                0,
                10112,
                10093,
                0,
                0,
                0,
                5046,
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
                17160,
                0,
                0,
                14302,
                0,
                0,
                9436,
                8542,
                6910,
                0,
                3399,
                2699,
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
        text: "Hunter - Survival - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/spell=253070\">Secure in the Light</a>",
            "<a href=\"http://www.wowhead.com/spell=252191\">Murderous Intent</a>",
            "<a href=\"http://www.wowhead.com/spell=253093\">Infusion of Light</a>",
            "<a href=\"http://www.wowhead.com/spell=252888\">Chaotic Darkness</a>",
            "<a href=\"http://www.wowhead.com/spell=252088\">Light Speed</a>",
            "<a href=\"http://www.wowhead.com/spell=252799\">Shocklight</a>",
            "<a href=\"http://www.wowhead.com/spell=238053\">Jaws of the Mongoose</a>",
            "<a href=\"http://www.wowhead.com/spell=252091\">Master of Shadows</a>",
            "+3 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=203566\">Sharpened Fang</a>",
            "<a href=\"http://www.wowhead.com/spell=252922\">Dark Sorrows</a>",
            "+2 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=203638\">Raptor's Cry</a>",
            "<a href=\"http://www.wowhead.com/spell=203669\">Fluffy, Go</a>",
            "<a href=\"http://www.wowhead.com/spell=203577\">My Beloved Monster</a>",
            "+1 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=203670\">Explosive Force</a>",
            "<a href=\"http://www.wowhead.com/spell=203578\">Lacerating Talons</a>",
            "<a href=\"http://www.wowhead.com/spell=203673\">Hellcarver</a>"
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