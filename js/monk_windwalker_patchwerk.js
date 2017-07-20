Highcharts.chart('monk_windwalker', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Monk - Windwalker - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:58:27.728855'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Vial of Ceaseless Toxins","Eye of Command","Cradle of Anguish","Engine of Eradication","Bloodthirsty Instinct","Chaos Talisman","Stat Stick (Mastery)","Six-Feather Fan","Thrice-Accursed Compass","Stat Stick (Versatility)","Memento of Angerboda","Convergence of Fates","Stat Stick (Crit)","Entwined Elemental Foci","PVP Badge of Conquest","Stat Stick (Haste)","Tirathon's Betrayal","Gift of Radiance","Arcanogolem Digit","Chrono Shard","Bloodstained Handkerchief","Nightmare Egg Shell","Unstable Arcano Crystal","Horn of Valor","Nightblooming Frond","Tempered Egg of Serpentrix","PVP Insignia of Conquest","Splinters of Agronax","Infernal Cinders","Darkmoon Deck: Dominion","Umbral Moonglaives","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Faulty Countermeasure","Nature's Call","Terrorbound Nexus","Draught of Souls","Spiked Counterweight","Toe Knee's Promise","Tiny Oozeling in a Jar","Mark of Dargrul","Giant Ornamental Pearl","Windscar Whetstone","Ravaged Seed Pod","Ley Spark"]
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
                    s += '<br/>'+ this.points[i].series.name +': ' + cumulative_amount; 
                }
            }
            return s;
        },
        shared: true
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
        data : [144454,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,10135,9619,6317,8740,8253,8179,6408,7559,10382,7386,6138,7177,4862,6884,8082,6392,7546,9107,8164,9213,6174,7970,5759,4052,6661,7840,8582,6115,8426,6405,0,4903,0,5065,3263,3710,1947,2005,7916,1525,2962,1807,3253,1352,1559,1715,76]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9886,8039,8352,7355,7788,6748,9380,7780,8639,6910,7115,6928,6125,7379,5428,8208,7490,7408,6460,7504,6316,7231,7512,2636,5197,7322,5786,5976,5607,3924,0,5875,0,3748,3860,4512,1641,3648,6594,3648,1833,1163,2534,2804,1465,232,1555]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10651,8301,5238,6990,7000,4621,6784,5955,6537,6281,7261,7139,5957,6829,7252,6941,5354,6415,6219,5366,5719,7344,6310,2723,6557,6321,7074,6247,6114,5194,0,3488,0,4039,3003,1962,2232,2734,5519,2170,1923,3739,1052,1022,2341,2478,498]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7665,7936,7647,6350,5139,6866,4866,5640,7081,5291,5520,5006,5249,5633,6245,5244,5792,6756,5133,6826,5331,6375,5111,2587,4035,5956,6242,4642,4169,5458,0,3366,0,1983,3467,2528,1202,2672,6624,2006,1609,674,1846,2199,1866,327,803]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,86041,5917,5714,4711,5295,4534,6433,6689,6702,7156,6056,5477,3787,5689,5133,4205,5135,5615,5552,5191,4298,5831,4247,2673,6287,4853,4646,4408,4036,3820,4976,4383,4672,3658,1162,2052,2395,1258,4229,2612,2207,2474,2431,2033,1793,3432,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,68099,3440,72545,73011,4685,5174,5013,4947,3485,4265,4268,5545,4625,5213,6430,4591,5454,4430,4899,4434,5257,4556,279,3247,4223,4870,4206,4968,54130,6294,52358,4235,2954,2665,2777,1666,1926,5472,878,2238,1747,1707,637,817,0,1029]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,71105,0,0,69195,64908,64120,58230,63734,63874,63819,67644,61756,61299,60644,61955,53594,57839,52945,58950,50133,56177,74246,56332,51673,49332,54206,51251,0,63286,0,59825,42041,38476,35987,40475,36232,10244,33292,30080,30175,28446,29417,28506,27786,28074]
    }]
});
