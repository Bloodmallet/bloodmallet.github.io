Highcharts.chart('rogue_outlaw_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Outlaw - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 10:56:00.099255'
    },
    xAxis: {
        categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Specter of Betrayal","Nightblooming Frond","Bloodthirsty Instinct","Chaos Talisman","Cradle of Anguish","Vial of Ceaseless Toxins","Six-Feather Fan","Stat Stick (Haste)","Eye of Command","Chrono Shard","Engine of Eradication","Memento of Angerboda","Entwined Elemental Foci","Thrice-Accursed Compass","Nightmare Egg Shell","Stat Stick (Mastery)","PVP Badge of Conquest","Tirathon's Betrayal","Arcanogolem Digit","Stat Stick (Crit)","Bloodstained Handkerchief","Unstable Arcano Crystal","Tempered Egg of Serpentrix","Gift of Radiance","Infernal Cinders","Horn of Valor","Splinters of Agronax","PVP Insignia of Conquest","Umbral Moonglaives","Darkmoon Deck: Dominion","The Devilsaur's Bite","Infernal Alchemist Stone","Draught of Souls","Faulty Countermeasure","Toe Knee's Promise","Spontaneous Appendages","Spiked Counterweight","Terrorbound Nexus","Nature's Call","Ravaged Seed Pod","Tiny Oozeling in a Jar","Mark of Dargrul","Giant Ornamental Pearl","Windscar Whetstone","Ley Spark"]
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
        borderColor: '#bbb',
        style: {
            color: 'black'
        }
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
        data : [0,148147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [7739,0,11213,12408,10410,8799,8461,9213,10497,8151,5764,8720,7264,8691,7387,7517,7147,8770,9952,9016,7796,6725,7625,4637,7530,8005,6423,6359,7548,5940,5242,0,3981,0,7644,4584,2429,2730,4184,3323,2422,2808,2754,3226,1845,1804,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [5429,0,10354,9956,6397,7678,7341,9119,7650,7685,9145,6959,7353,8022,7730,7308,7101,6495,7089,7064,9179,7628,7561,2468,9190,6783,6042,6521,7701,6598,5135,0,5922,0,7390,3922,4875,3165,2300,3577,1751,2106,1817,2761,460,1276,2254]
    }, {
        name: '920',
        color: '#4198af',
        data: [5187,0,9348,9516,7495,8829,9323,9018,8978,7383,5663,6435,6921,4239,6406,5734,7066,7483,4936,8274,6325,6156,6411,3585,6110,5578,7805,6482,4826,5077,5956,0,3298,0,7971,2735,2915,3883,2523,2986,2530,2089,2993,1861,2970,3347,1175]
    }, {
        name: '910',
        color: '#71588f',
        data: [5179,0,8855,8270,6840,5103,5371,7079,7787,5905,6395,5424,8132,6986,4949,6792,5839,6813,5094,6537,7571,6202,7106,3334,7603,5543,4922,4729,5354,4690,2688,0,3377,0,5651,2131,2641,2816,3419,2402,2624,3172,2417,2746,2021,516,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [4965,0,89786,7610,6649,7343,7675,7583,6785,5411,5993,5986,3695,5215,5859,4140,5732,3954,6960,7165,6385,5247,6044,4462,4007,6003,4660,3392,4874,5119,3978,6507,3476,5309,6117,4421,2747,2870,1285,2439,1532,2356,1102,2141,887,1516,506]
    }, {
        name: '890',
        color: '#aa4643',
        data: [5855,0,0,6947,6426,5916,80520,72734,5484,6421,5309,4782,71851,5199,6067,5853,5484,5272,3838,4077,4556,4680,6182,602,6593,4130,63031,5725,4428,3385,58175,4587,4735,5029,5997,2487,1349,2511,4139,2855,1304,1595,2263,2516,1758,1547,1134]
    }, {
        name: '880',
        color: '#4572a7',
        data: [129257,0,0,73811,77494,75888,0,0,63969,69689,70309,67254,0,65504,65159,66165,64766,63978,64376,58635,57255,61902,54272,75756,53806,58198,0,56003,54258,55780,0,63403,46099,60303,27816,40591,42621,41548,39904,37618,42884,35525,32064,29470,29087,28832,29817]
    }]
});
