Highcharts.chart('monk_windwalker_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Monk - Windwalker - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 09:12:51.924607'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Eye of Command","Engine of Eradication","Vial of Ceaseless Toxins","Cradle of Anguish","Stat Stick (Mastery)","Chaos Talisman","Stat Stick (Crit)","Thrice-Accursed Compass","Six-Feather Fan","Memento of Angerboda","Bloodthirsty Instinct","PVP Badge of Conquest","Entwined Elemental Foci","Stat Stick (Haste)","Tirathon's Betrayal","Gift of Radiance","Arcanogolem Digit","Convergence of Fates","Unstable Arcano Crystal","Chrono Shard","Horn of Valor","Bloodstained Handkerchief","Nightmare Egg Shell","Nightblooming Frond","PVP Insignia of Conquest","Tempered Egg of Serpentrix","Splinters of Agronax","Infernal Cinders","Darkmoon Deck: Dominion","Umbral Moonglaives","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Faulty Countermeasure","Terrorbound Nexus","Nature's Call","Spiked Counterweight","Mark of Dargrul","Tiny Oozeling in a Jar","Toe Knee's Promise","Giant Ornamental Pearl","Windscar Whetstone","Ravaged Seed Pod","Draught of Souls","Ley Spark"]
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
        data : [152364,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,11356,8995,8333,10391,9069,7564,8808,8236,6723,9221,7552,6830,8017,6687,8499,9621,6580,7960,6775,3253,6861,6677,7747,7043,7277,6643,7881,6002,6523,0,6327,0,4083,4340,4575,3283,3103,2930,3463,1357,1248,2722,2832,3235,7349,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,10628,7413,9225,7709,6032,8035,7381,6689,7005,7942,7959,7235,7675,8031,6490,8251,8185,8108,6763,3939,6780,6782,7365,7196,7567,5143,6804,7176,5387,0,5047,0,2874,3518,1867,1744,671,1754,1341,2796,2794,1150,810,1270,5866,1264]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10608,7772,7559,10053,8436,5862,6715,7750,6848,7773,5219,6657,6466,6165,6545,6495,5588,7285,4049,1364,5441,5066,7226,6151,7629,6867,6845,6943,4792,0,5627,0,4052,1844,3119,4073,2657,3047,2944,1942,2917,1507,1920,1708,5301,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7554,6965,6125,6713,7302,6438,6741,5516,5724,7352,6419,4876,5099,5744,5871,6309,5727,6374,7109,2954,6112,5331,6961,4751,5194,4982,5940,5335,4640,0,2799,0,3978,4636,4305,1951,1941,2008,644,1930,1744,2836,1653,942,6735,832]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,88909,5510,4859,6995,6193,5906,4264,6647,6577,6076,6042,5625,7259,4758,5213,6634,4840,5651,5038,3362,5542,4961,4497,6044,5449,3823,5362,4309,4915,6158,4769,5558,1563,1386,2000,3082,1185,1927,2709,1788,2174,2018,2535,2872,3879,767]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,5446,76621,70642,72652,5054,5331,4151,5017,6374,3950,5643,4380,6185,5506,5042,5557,5150,3173,2966,3544,4283,6723,4068,5810,4131,5337,4446,58171,6438,53626,4001,3483,2950,1512,2186,1490,2392,2437,1039,791,1646,1448,1458,5586,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,75632,0,0,0,68702,67170,67198,67336,60041,65616,65664,63232,64307,62892,56059,61110,54555,60955,75452,58600,59752,52190,56246,51975,57957,51262,52963,0,68985,0,63457,44925,40852,39877,37630,41818,32425,31643,32950,30998,30039,30053,26527,222,28234]
    }]
});
