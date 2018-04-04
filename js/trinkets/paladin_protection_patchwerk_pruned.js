Highcharts.chart('paladin_protection_patchwerk_pruned',
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
                        click: function (event) { var chart = this.series.yAxis; chart.removePlotLine('helperLine'); chart.addPlotLine({ value: this.stackY, color: '#000', width: 2, id: 'helperLine', zIndex: 5, label: { text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY), align: 'left', verticalAlign: 'bottom', rotation: 0, y: -5 } }); }
                    }
                },
                stacking: "normal"
            },
            series: {
                borderColor: "#151515",
                events: {
                    legendItemClick: function () { return false; }
                }
            }
        },
        series: [
            {
                color: "#fdbf6f",
                data: [
                    174408,
                    168134,
                    142152,
                    132614,
                    117083,
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
                color: "#cab2d6",
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
                color: "#ff7f00",
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
                color: "#fb9a99",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    95739,
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
                name: "960"
            },
            {
                color: "#e31a1c",
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
                name: "950"
            },
            {
                color: "#b2df8a",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    103038,
                    102630,
                    0,
                    94284,
                    91278,
                    89585,
                    0,
                    87113,
                    86644,
                    85877,
                    85572,
                    0,
                    78925
                ],
                name: "940"
            },
            {
                color: "#33a02c",
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
                    0,
                    0,
                    89321,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "930"
            },
            {
                color: "#a6cee3",
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
                name: "920"
            },
            {
                color: "#1f78b4",
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
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    84100,
                    0
                ],
                name: "910"
            }
        ],
        subtitle: {
            text: "UTC 2018-04-04 09:41 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
            useHTML: true
        },
        title: {
            text: "Paladin - Protection DPS - Patchwerk",
            useHTML: true
        },
        tooltip: {
            backgroundColor: "#eee",
            borderColor: "#bbb",
            formatter: function () { var s = '<div style=\"background-color:#eee; padding:12px;\"><b>' + this.x + '</b>'; var cumulative_amount = 0; for (var i = this.points.length - 1; i >= 0; i--) { cumulative_amount += this.points[i].y; if (this.points[i].y !== 0) { s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name + '</span>: ' + Intl.NumberFormat().format(cumulative_amount); } } s += '</div>'; return s; },
            headerFormat: "<b>{point.x}</b>",
            shared: true,
            style: {
                color: "black"
            },
            useHTML: true
        },
        xAxis: {
            categories: [
                "<a href=\"http://www.wowhead.com/item=144249\">Archimonde's Hatred Reborn</a>",
                "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
                "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction</a>",
                "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
                "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
                "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
                "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
                "<a href=\"http://www.wowhead.com/item=151977\">Diima's Glacial Aegis</a>",
                "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
                "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
                "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
                "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
                "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
                "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
                "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
                "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
                "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
                "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>"
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
                        text: 'mean: ' + Intl.NumberFormat().format(106027),
                        verticalAlign: "bottom",
                        x: 10,
                        y: -23
                    },
                    value: 106027.61111111111,
                    width: 2,
                    zIndex: 2
                }
            ],
            stackLabels: {
                enabled: true,
                formatter: function () { return Intl.NumberFormat().format(this.total); },
                style: {
                    textOutline: false
                }
            },
            title: {
                text: "\u0394 Damage per second"
            }
        }
    });
