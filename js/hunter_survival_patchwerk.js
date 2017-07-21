Highcharts.chart('hunter_survival_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Survival - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 08:39:56.363233'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Specter of Betrayal","Eye of Command","Cradle of Anguish","Bloodthirsty Instinct","Chaos Talisman","Unstable Arcano Crystal","Stat Stick (Haste)","Vial of Ceaseless Toxins","PVP Badge of Conquest","Engine of Eradication","Memento of Angerboda","Entwined Elemental Foci","Stat Stick (Crit)","Six-Feather Fan","Chrono Shard","Thrice-Accursed Compass","Stat Stick (Mastery)","Nightmare Egg Shell","Horn of Valor","Nightblooming Frond","Gift of Radiance","Arcanogolem Digit","Tirathon's Betrayal","Tempered Egg of Serpentrix","PVP Insignia of Conquest","Bloodstained Handkerchief","Infernal Cinders","Splinters of Agronax","Darkmoon Deck: Dominion","Umbral Moonglaives","Infernal Alchemist Stone","The Devilsaur's Bite","Faulty Countermeasure","Draught of Souls","Spontaneous Appendages","Spiked Counterweight","Nature's Call","Toe Knee's Promise","Terrorbound Nexus","Mark of Dargrul","Ravaged Seed Pod","Giant Ornamental Pearl","Tiny Oozeling in a Jar","Windscar Whetstone","Ley Spark"]
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
        data : [145180,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8703,10468,7671,6769,6061,7025,5114,7825,9568,8594,8165,8406,6955,8729,9462,6569,6755,6457,8313,7779,5266,7324,7250,7733,8377,5379,5887,7440,8510,0,6300,0,3992,4440,9857,4758,4413,3799,3086,1843,3132,928,2670,2284,736,2076]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,4654,8405,7972,8655,8388,7721,4870,7307,9191,6970,8342,7160,7138,6215,8600,9294,6998,6051,5731,5732,9590,6561,8971,9348,7608,5592,8116,5301,6554,0,3087,0,4908,3474,4227,2905,2092,1707,2197,2781,3015,3310,2292,2284,3025,190]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,6226,9775,7435,6596,7137,7160,3970,7227,7253,6493,6147,6374,7099,6003,7188,5872,7290,7773,7842,4579,6968,6963,5843,4661,6573,7169,6997,4001,6710,0,5483,0,4171,4963,5858,3881,2321,586,3363,2028,1895,2759,2012,2726,1351,1144]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,5315,7778,6800,7388,6393,7093,2928,5796,8218,6290,5082,6165,4371,6490,7286,4630,5463,4577,5175,7102,5713,5031,7806,7070,6328,3148,4779,4920,3882,0,4022,0,3754,3165,7261,2902,4168,2107,2831,3621,2740,555,1654,2176,2350,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5473,81044,6063,5099,4989,6371,4399,5900,6677,4762,6139,4386,7514,5736,6722,5938,4287,7021,5823,3772,7598,2988,4760,6683,5730,4729,6731,4470,3601,8564,3388,6013,2902,2164,4115,2395,2585,3427,1542,2292,1462,1661,2429,2470,2167,4334]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,2693,0,4779,80515,6249,5548,4797,4176,65817,5688,69856,5762,2818,5805,5727,4721,4346,5040,4813,4925,4219,5712,5441,4150,4133,4623,4534,60772,5791,3764,54641,4624,3357,1618,3211,3951,2161,2113,2957,2456,3358,2743,1118,1028,972,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,90317,0,74481,0,75439,70487,83664,69468,0,66153,0,64961,66862,63763,57121,64231,65399,62888,61638,59008,53252,57136,51634,52052,52932,57630,51055,0,49272,66932,0,62793,44704,41669,26533,39354,39915,43719,37862,36256,32556,33956,32247,31068,27364,26612]
    }]
});
