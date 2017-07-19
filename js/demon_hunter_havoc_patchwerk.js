Highcharts.chart('demon_hunter_havoc', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Demon Hunter - Havoc - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 10:14:21.777490'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Eye of Command","Unstable Arcano Crystal","Horn of Valor","Hunger of the Pack","Stat Stick (Crit)","Infernal Cinders","Bloodthirsty Instinct","Nightblooming Frond","Chaos Talisman","Cradle of Anguish","Memento of Angerboda","Entwined Elemental Foci","Thrice-Accursed Compass","Vial of Ceaseless Toxins","PVP Badge of Conquest","Stat Stick (Versatility)","Six-Feather Fan","Engine of Eradication","Stat Stick (Haste)","Chrono Shard","Stat Stick (Mastery)","Nightmare Egg Shell","Tirathon's Betrayal","Umbral Moonglaives","Arcanogolem Digit","Faulty Countermeasure","Gift of Radiance","Bloodstained Handkerchief","PVP Insignia of Conquest","Darkmoon Deck: Dominion","Tempered Egg of Serpentrix","Splinters of Agronax","Draught of Souls","The Devilsaur's Bite","Infernal Alchemist Stone","Nature's Call","Spontaneous Appendages","Mark of Dargrul","Spiked Counterweight","Terrorbound Nexus","Toe Knee's Promise","Convergence of Fates","Tiny Oozeling in a Jar","Ravaged Seed Pod","Giant Ornamental Pearl","Windscar Whetstone","Ley Spark"]
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
            data: [141825,6185,3324,7943,7763,8115,6605,7227,9120,7472,7051,7935,7103,7224,6337,7952,6405,7389,8433,6622,7172,5892,5282,9017,6188,8012,5495,6761,7344,7081,0,8192,7496,7124,3441,0,3200,4687,3156,4825,3204,3106,4517,2601,2033,3235,868,1398]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8281,3980,7458,7235,6094,7332,6414,9611,6625,7756,7465,7572,6516,9249,5162,7652,6993,5401,6357,6536,5976,8080,7063,5887,6884,5684,5481,6793,3969,0,6646,4084,7858,5551,0,1406,1795,2941,2816,3632,3235,5561,2168,2944,1779,3085,0]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7949,5365,5849,5236,6144,6109,5725,6330,6592,6984,4872,6358,5993,7144,6053,4838,7510,5569,5676,5853,4708,4783,6175,4506,5501,4805,5513,5180,4893,0,5138,5735,5911,2967,0,3601,4500,2748,3141,2796,3382,4274,4331,1837,1649,933,86]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5246,2111,8062,6899,5858,4622,6950,7459,6490,4694,5359,3632,4365,6307,5682,4848,6830,5743,5250,4441,4533,6760,6537,5080,5765,3644,4531,4931,5150,0,5094,4959,4895,4298,0,2010,3030,3722,2597,3266,2459,2917,1029,1688,1856,2895,1211]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5931,4466,4324,3846,6058,6250,6559,5989,5977,4812,4373,5502,5785,6505,5576,5991,5300,4906,5378,5602,5948,2154,3129,2818,5193,4209,4968,5726,3284,4794,4166,3997,5992,2782,5325,1390,2536,1949,2649,2587,2728,5409,2233,2383,1192,1752,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,4457,3303,5348,4744,4384,73625,2714,6075,4175,70382,6132,5274,5711,62295,4610,4237,5399,63864,4306,4068,4052,5231,5799,60724,4028,3755,3739,5032,3770,3888,6131,3767,3747,4104,4867,2236,2952,3259,1275,1490,1457,3605,1990,2040,1115,2151,1222]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,83282,88295,67626,69042,68062,0,68317,57861,64977,0,62386,62971,62762,0,60667,61586,55883,0,59937,58011,58702,55832,48570,0,49498,56437,52611,46835,53679,71742,43312,46778,40041,45564,58219,51208,41382,41556,39931,38734,37749,23038,33421,30961,31582,29791,26400]
        }]
});
