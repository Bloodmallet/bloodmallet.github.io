Highcharts.chart('demon_hunter_havoc', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Demon Hunter - Havoc - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 01:27:37.414864'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Eye of Command","Specter of Betrayal","Unstable Arcano Crystal","Horn of Valor","Infernal Cinders","Bloodthirsty Instinct","Stat Stick (Crit)","Chaos Talisman","Cradle of Anguish","Nightblooming Frond","Memento of Angerboda","Vial of Ceaseless Toxins","Thrice-Accursed Compass","Entwined Elemental Foci","Six-Feather Fan","Stat Stick (Versatility)","PVP Badge of Conquest","Stat Stick (Haste)","Engine of Eradication","Stat Stick (Mastery)","Chrono Shard","Nightmare Egg Shell","Tirathon's Betrayal","Umbral Moonglaives","Gift of Radiance","Faulty Countermeasure","Arcanogolem Digit","Darkmoon Deck: Dominion","Bloodstained Handkerchief","PVP Insignia of Conquest","Tempered Egg of Serpentrix","Splinters of Agronax","Draught of Souls","The Devilsaur's Bite","Infernal Alchemist Stone","Nature's Call","Spontaneous Appendages","Mark of Dargrul","Terrorbound Nexus","Spiked Counterweight","Toe Knee's Promise","Convergence of Fates","Tiny Oozeling in a Jar","Ravaged Seed Pod","Windscar Whetstone","Giant Ornamental Pearl","Ley Spark"]
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
        data : [143351,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8300,9963,2770,8250,7536,7900,7482,8886,8420,8285,8572,8091,7241,8192,7480,7711,6602,7361,6386,6763,6482,6629,7724,6794,6342,7388,6208,0,7946,4978,5883,5254,7865,3960,0,1583,3991,3964,3011,1836,2167,6541,4511,1841,2661,482,376]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,6917,9583,4943,6142,6732,7104,6522,6459,5805,9120,6003,7910,6694,6843,8770,5795,6884,6842,6776,6165,7172,6623,7501,5286,6393,3805,7131,0,5982,4643,6719,6674,6631,4114,0,3541,3152,1504,3520,3346,4369,3620,1966,2894,2743,1626,297]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7048,9207,4464,5934,6837,4896,6442,7106,7547,7274,6168,6835,6106,4468,5937,5807,6388,4787,6240,5660,3935,4620,5856,5227,5114,4483,6409,0,5141,6062,6172,4833,5769,4655,0,1251,3010,3052,3433,3799,3091,3637,3133,639,2056,1892,60]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,5735,7802,2937,7607,5586,4891,4041,4330,6385,6291,6362,8216,5847,5646,6789,5731,4112,5291,4112,5838,5313,4855,5241,4532,5568,5990,6153,0,6254,4482,4507,4917,6181,3338,0,3007,3643,2669,1870,2590,2420,5803,1877,2264,954,1599,1853]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5795,79259,4800,5105,6086,6899,6302,6354,5016,6487,4306,5652,4856,5228,7094,5229,5681,5140,4965,5957,5341,3961,5823,3952,3853,1307,4379,5376,5789,3744,5389,3916,3613,3882,2602,2240,2814,3259,3341,1591,3292,3683,2555,1830,2276,1998,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,6024,0,1774,4469,73473,3397,4720,5516,69831,4665,4473,62767,4592,4032,4329,4647,3486,3291,65541,3460,5122,4860,5281,60323,4117,5904,5376,5600,4858,3530,3569,3655,6741,2522,6030,1930,2810,1815,2921,4086,2177,3129,2285,2255,1630,1032,384]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,83360,0,90240,69201,0,69180,68687,64401,0,59825,63914,0,64014,64762,56368,61596,62303,62261,0,58868,58376,56839,49050,0,53553,56042,49237,71880,46317,54634,45845,47434,39056,46895,58890,51714,41751,43398,38337,38988,36802,24373,33169,31924,31000,32330,27763]
    }]
});
