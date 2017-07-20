Highcharts.chart('rogue_outlaw', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Outlaw - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 04:36:21.209981'
    },
    xAxis: {
        categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Specter of Betrayal","Nightblooming Frond","Bloodthirsty Instinct","Chaos Talisman","Cradle of Anguish","Vial of Ceaseless Toxins","Six-Feather Fan","Eye of Command","Stat Stick (Haste)","Engine of Eradication","Chrono Shard","Thrice-Accursed Compass","Memento of Angerboda","Entwined Elemental Foci","Stat Stick (Versatility)","Nightmare Egg Shell","Stat Stick (Mastery)","Tirathon's Betrayal","PVP Badge of Conquest","Arcanogolem Digit","Stat Stick (Crit)","Bloodstained Handkerchief","Tempered Egg of Serpentrix","Gift of Radiance","Infernal Cinders","Unstable Arcano Crystal","Splinters of Agronax","Horn of Valor","PVP Insignia of Conquest","Umbral Moonglaives","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Draught of Souls","Faulty Countermeasure","Spontaneous Appendages","Toe Knee's Promise","Spiked Counterweight","Terrorbound Nexus","Nature's Call","Ravaged Seed Pod","Tiny Oozeling in a Jar","Mark of Dargrul","Windscar Whetstone","Giant Ornamental Pearl","Ley Spark"]
    },
    yAxis: {
        min: 0,
        title: {
            text: '\u0394 Damage per second'
        },
        labels: {
            enabled: true
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
            }
        }
    },
    legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,
        reversed: true
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b>',
        formatter: function() {
            var s = '<b>'+ this.x +'</b>',
            cumulative_amount = 0;
            for (var i = this.points.length - 1 ; i >= 0 ; i--) {
                cumulative_amount += this.points[i].y;
                if (this.points[i].y !== 0){
                    s += '<br/><span style="color: ' + this.points[i].series.color + '; font-weight: bold;">' + this.points[i].series.name +'</span>: ' + cumulative_amount; 
                }
            }
            return s;
        },
        shared: true,
        backgroundColor: '#eee',
        borderColor: '#bbb'
    },
    plotOptions: {
        series: {
            borderColor: '#151515',
            events: {
                legendItemClick: function () {
                    return false; 
                }
            }
        },
        bar: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        },
    },
    series: [{
        name: '970',
        color: '#ffeb3b',
        data : [0,142293,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [7381,0,12989,11882,9739,8701,9882,10683,8965,8088,8350,9532,8939,7629,7849,7493,7296,7232,8707,9062,7587,8272,7456,7354,6950,6933,5509,2781,7111,7482,7220,6855,0,0,4273,8160,5203,3257,3519,3188,3984,2018,1980,2668,2178,2314,2421,1558]
    }, {
        name: '930',
        color: '#db843d',
        data: [7583,0,9163,10050,6943,8028,8479,8647,9399,7336,6017,5878,5084,8165,6644,7044,7727,7126,7116,9558,6138,7828,6747,7898,6723,6075,6051,3432,6850,5178,4943,4640,0,0,4143,7640,3738,4123,2965,2123,3711,3426,1794,2274,3231,1811,853,1972]
    }, {
        name: '920',
        color: '#4198af',
        data: [5119,0,9791,8403,6824,6901,6708,7858,7825,6576,8483,5551,6274,5883,7067,6293,6291,6159,6171,6251,8211,7429,6422,6714,7630,5975,5810,2802,6110,5250,5369,4599,0,0,5176,5459,2982,2294,3122,2270,2036,822,2883,2930,1724,2071,2660,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [4917,0,8135,8925,6021,7413,7439,8297,7887,4853,4152,7392,7226,6745,5863,6133,5021,6427,5391,5783,3840,6248,4635,6919,5296,5309,6714,2650,5489,5068,4595,5103,0,0,2777,6009,3468,3990,2139,2291,2253,2666,1892,2017,1828,2208,854,1156]
    }, {
        name: '900',
        color: '#89a54e',
        data: [4155,0,86786,6900,6085,6076,4401,7132,6280,6993,6779,4994,4989,4802,5458,5416,6969,3793,5442,6482,5576,5524,6562,6307,7549,4639,4653,2587,4207,4294,5430,4178,5409,5063,3599,5536,3226,2937,3730,3782,3976,398,836,2611,1938,1286,2127,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [4780,0,0,7923,4828,6739,78197,70685,5606,3738,4827,68047,5038,4930,4390,4340,4293,6847,4458,5290,6144,6691,5226,4464,4858,4073,59436,3335,4557,4369,2029,54032,6030,5312,3098,5260,3382,2040,3155,2489,1916,2345,2543,0,1925,1491,206,1042]
    }, {
        name: '880',
        color: '#4572a7',
        data: [123033,0,0,70793,75309,71712,0,0,61505,68041,66609,0,63560,62250,62802,63343,62412,61619,61452,56003,60383,53896,57843,53005,51768,56057,0,69510,52072,54418,53543,0,59767,57374,44260,27583,37000,38337,37964,37354,34704,38892,33338,30987,28397,25440,27377,27693]
    }]
});
