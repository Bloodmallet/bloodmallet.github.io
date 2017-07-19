Highcharts.chart('rogue_assassination', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Rogue Assassination'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 15:27:56.331231'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Engine of Eradication","Nightblooming Frond","Eye of Command","Stat Stick (Mastery)","Vial of Ceaseless Toxins","PVP Badge of Conquest","Entwined Elemental Foci","Memento of Angerboda","Hunger of the Pack","Stat Stick (Crit)","Gift of Radiance","Six-Feather Fan","Chaos Talisman","Thrice-Accursed Compass","Stat Stick (Versatility)","Cradle of Anguish","Bloodthirsty Instinct","Tirathon's Betrayal","Horn of Valor","Arcanogolem Digit","Bloodstained Handkerchief","Unstable Arcano Crystal","Stat Stick (Haste)","Nightmare Egg Shell","Tempered Egg of Serpentrix","Chrono Shard","PVP Insignia of Conquest","Splinters of Agronax","Draught of Souls","Infernal Cinders","Darkmoon Deck: Dominion","Umbral Moonglaives","The Devilsaur's Bite","Infernal Alchemist Stone","Spontaneous Appendages","Terrorbound Nexus","Faulty Countermeasure","Nature's Call","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Spiked Counterweight","Giant Ornamental Pearl","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark"]
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
                borderColor: '#151515'

            },
            bar: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
                series: [{
            name: '940',
            color: '#00E676',
            data: [143366,5944,7613,9156,6500,8437,9332,7241,8616,7696,7143,7374,8748,9296,9686,5968,6054,9441,8653,8536,7652,8203,7674,3353,7175,7167,7421,6691,6812,6462,7489,6584,0,4590,3444,0,3409,2588,3014,2629,3331,1504,2712,3407,2527,4757,1981,173]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,9869,8421,9536,9167,8505,7909,6408,7320,7167,7183,6219,5665,7786,8469,8160,7817,7329,5787,5432,6064,6193,8143,3054,7140,7630,6865,6591,5392,6843,7266,5279,0,6702,4493,0,3224,3588,2599,2806,2161,3291,2748,2544,1421,1278,1753,41]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,3961,6278,8848,5227,5405,7458,7157,6954,5597,6440,7312,6546,7112,7437,6105,6240,7177,6636,8497,6549,7548,6880,3649,6819,4631,6472,6257,5613,6623,6831,3692,0,3305,5675,0,3751,3142,3184,1622,2111,1738,2217,3246,1737,3749,2068,1012]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,4464,6247,7567,7073,7091,8412,7264,5262,6830,5864,6346,5882,7514,4771,5779,5620,5882,5928,5885,4537,6259,5249,2753,4696,6872,6340,4638,4345,4269,6751,4850,0,3584,1148,0,3301,3240,3449,2536,2712,2960,980,1205,1757,1221,2683,404]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5551,7378,6898,6284,5510,6578,4444,5513,5925,5628,3911,4215,5070,6304,6275,5728,5230,5188,6416,5411,5512,5882,3125,4827,3302,6029,5276,4339,5086,4573,4146,6323,3871,3987,4575,2821,1493,1942,1239,3167,2011,2044,1684,1592,1648,531,962]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,3310,78603,6531,5954,5845,64376,5012,5707,3721,4937,5561,5301,6206,4429,4092,5121,63489,3437,5428,4521,5198,4536,2933,4673,5352,3145,3160,5631,4654,4708,55594,4340,52352,3474,4018,3065,3428,2839,782,452,1577,1581,2182,2159,500,390,652]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,82973,0,65781,73717,70782,0,66146,63495,64694,64158,64219,64289,57611,58952,63454,63151,0,58993,53604,57919,52155,51005,70345,53823,52048,50369,53964,53036,50914,44879,0,66586,0,47215,60668,42485,40374,37294,41118,37961,35986,30644,25127,26531,22834,20126,18191]
        }]
});
