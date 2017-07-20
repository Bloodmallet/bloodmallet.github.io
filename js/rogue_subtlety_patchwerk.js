Highcharts.chart('rogue_subtlety', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Subtlety - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 04:49:02.830259'
    },
    xAxis: {
        categories: ["Specter of Betrayal","Convergence of Fates","Kil'jaeden's Burning Wish","Nightblooming Frond","Eye of Command","Vial of Ceaseless Toxins","Engine of Eradication","Stat Stick (Mastery)","Stat Stick (Versatility)","Six-Feather Fan","Stat Stick (Crit)","Entwined Elemental Foci","Chaos Talisman","Memento of Angerboda","Thrice-Accursed Compass","Cradle of Anguish","Gift of Radiance","Bloodthirsty Instinct","PVP Badge of Conquest","Arcanogolem Digit","Tirathon's Betrayal","Umbral Moonglaives","Bloodstained Handkerchief","Stat Stick (Haste)","Chrono Shard","Tempered Egg of Serpentrix","Nightmare Egg Shell","Splinters of Agronax","PVP Insignia of Conquest","Horn of Valor","Unstable Arcano Crystal","Infernal Cinders","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Faulty Countermeasure","Terrorbound Nexus","Draught of Souls","Nature's Call","Tiny Oozeling in a Jar","Mark of Dargrul","Windscar Whetstone","Spiked Counterweight","Giant Ornamental Pearl","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark"]
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
        data : [0,0,141712,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [12735,7991,0,10082,7938,10996,8730,8496,8305,10463,8118,7828,8710,7961,7095,7525,5946,7338,6915,8966,8499,7356,7383,6822,7783,8054,6831,6074,6306,5487,3283,5998,0,0,3418,2967,2695,2642,6132,2822,1955,4002,2152,3023,2421,3152,3189,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [12739,6837,0,10683,7723,8720,7290,6915,8451,8058,7798,7627,8532,6974,6460,9149,9201,7127,6786,7962,8614,6158,7432,7402,6580,7694,7250,7831,5534,6289,2882,6317,0,0,4843,4418,3659,2914,5330,1255,3870,2860,2975,2434,1280,1691,780,367]
    }, {
        name: '920',
        color: '#4198af',
        data: [11783,5486,0,9796,5790,8794,6586,6837,6087,8179,6236,6500,6944,7036,7256,6033,5176,6890,7005,8145,6440,4517,7536,5736,6136,6678,6748,6372,5338,5351,3602,4416,0,0,2929,3313,2469,2971,5713,1814,2390,1828,829,3693,1468,1242,1391,609]
    }, {
        name: '910',
        color: '#71588f',
        data: [9543,6114,0,10031,8257,7705,6646,7232,7323,6732,6792,5759,6568,6515,5962,5662,5491,5549,6336,5451,6629,6808,5847,6117,4625,5833,5158,5855,5778,5511,1795,4636,0,0,3591,3839,2506,2652,4051,2554,866,2575,2864,1345,1816,1908,2204,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [105979,4831,0,7757,6783,7143,6758,6069,5051,6710,5707,5561,4575,5482,6235,6190,5501,5961,5280,6593,4898,4321,5897,4850,6245,5393,5496,5266,4432,3493,2476,3926,5923,6896,3691,1354,2339,2579,4036,1028,1986,347,1196,1030,975,1013,1122,1388]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,3640,0,7223,5713,72921,75749,4873,5869,6537,4599,5783,6121,4327,5349,67054,3725,4787,4813,3351,5508,64775,5933,4851,4763,5222,4020,2582,4088,5005,2734,57477,5439,3808,3067,3116,3393,2102,2825,1222,2077,2655,1279,2946,2048,2262,807,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,116128,0,74575,76629,0,0,69528,68245,60796,66803,64890,62468,64801,63868,0,63570,60179,60491,56921,53934,0,53790,56124,55332,52434,55454,55433,57824,55769,69147,0,68376,63223,44847,40541,36861,37849,22440,38363,34222,31198,32602,24791,28675,21179,18869,20826]
    }]
});
