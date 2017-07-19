Highcharts.chart('warrior_arms', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Warrior - Arms - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 18:29:46.484776'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Cradle of Anguish","Chaos Talisman","Engine of Eradication","PVP Badge of Victory","Stat Stick (Mastery)","Gift of Radiance","Stat Stick (Haste)","Eye of Command","The Devilsaur's Bite","Entwined Elemental Foci","Vial of Ceaseless Toxins","Chrono Shard","Memento of Angerboda","Ettin Fingernail","Stat Stick (Versatility)","Nightmare Egg Shell","Fel-Oiled Infernal Machine","Claw of the Crystalline Scorpid","Stat Stick (Crit)","Hunger of the Pack","Horn of Valor","Spontaneous Appendages","Bloodstained Handkerchief","Toe Knee's Promise","Ursoc's Rending Paw","PVP Insignia of Victory","Tiny Oozeling in a Jar","Infernal Cinders","Terrorbound Nexus","Might of Krosus","Umbral Moonglaives","Faulty Countermeasure","Spiked Counterweight","Nature's Call","Infernal Alchemist Stone","Darkmoon Deck: Dominion","Convergence of Fates","Ravaged Seed Pod","Windscar Whetstone","Mark of Dargrul","Giant Ornamental Pearl","Draught of Souls"]
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
            data: [152221,5297,6258,9177,6158,6954,7832,6708,7361,4813,6225,7469,8134,7510,5842,6965,4817,8145,7094,8509,7852,6650,6829,5601,6151,6477,8939,4891,4893,4842,4668,7228,4166,7302,4209,1915,0,0,6340,3831,2032,3044,1666,2466]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,3885,7433,6885,8951,6663,6403,6533,5628,8546,6444,6754,8455,6727,7481,6914,6990,5982,7244,7911,5601,5338,5066,5613,8934,4872,5433,4635,4973,4778,4472,6167,3689,3082,3263,5767,0,0,2468,2909,3564,3093,2245,2442]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,4177,5433,5381,5128,6170,5670,7362,6623,5148,5990,4731,8503,4821,5445,4196,6047,4721,6365,6123,6195,6625,6348,4318,5622,5021,6339,5623,3111,5618,4639,6306,5406,5959,4900,914,0,0,5502,3231,5634,2788,3047,376]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,4959,6425,6442,7052,5133,6254,5295,4887,6702,5812,6535,5917,4953,5243,6852,5192,5396,3218,6263,4643,4631,4092,3977,4307,3761,5007,4150,5570,4707,4493,5524,3726,3501,1838,1897,0,0,4683,2594,2271,1459,1814,1798]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,3975,5335,3874,4267,6449,4431,4390,5888,3788,4049,4494,6158,6003,5872,4115,4021,5040,5190,5751,4555,5272,3980,5669,7198,4432,5346,3572,3185,4200,2956,4296,4234,3759,3164,4083,6862,2941,4310,2993,3941,3772,2307,2351]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,3455,75503,5285,73741,4373,6129,6314,4291,5297,5183,4379,61398,4895,3078,5808,3804,4262,4444,4863,3766,3354,4093,2393,4185,2303,5122,4133,4108,56164,4194,4811,57052,4261,3813,1900,2625,3399,2879,2746,1820,2234,209,2719]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,98831,0,69308,0,68733,66543,64596,66385,66568,65777,64590,0,62911,64831,61753,65044,61068,59476,51847,57740,57662,58128,59271,49953,59327,48438,55128,55098,0,53954,44945,0,48487,53351,54246,60125,60376,39171,46846,45279,37232,35715,23007]
        }]
});
