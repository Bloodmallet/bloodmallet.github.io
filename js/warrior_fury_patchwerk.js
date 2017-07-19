Highcharts.chart('warrior_fury', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Warrior - Fury - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 18:44:00.257983'
        },
        xAxis: {
      categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Umbral Moonglaives","Eye of Command","Fel-Oiled Infernal Machine","Chaos Talisman","Cradle of Anguish","Chrono Shard","Ursoc's Rending Paw","The Devilsaur's Bite","Entwined Elemental Foci","Vial of Ceaseless Toxins","Gift of Radiance","Nightmare Egg Shell","Memento of Angerboda","Engine of Eradication","Stat Stick (Haste)","Stat Stick (Versatility)","Ettin Fingernail","Stat Stick (Mastery)","Draught of Souls","Hunger of the Pack","Infernal Cinders","Stat Stick (Crit)","Tiny Oozeling in a Jar","Claw of the Crystalline Scorpid","PVP Badge of Victory","Toe Knee's Promise","Faulty Countermeasure","Might of Krosus","Bloodstained Handkerchief","Spontaneous Appendages","PVP Insignia of Victory","Horn of Valor","Terrorbound Nexus","Darkmoon Deck: Dominion","Nature's Call","Infernal Alchemist Stone","Windscar Whetstone","Spiked Counterweight","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl"]
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
            data: [6354,133971,4258,8289,6063,7116,6380,6621,8849,8748,6296,6579,8743,6641,5689,5164,6262,5782,7573,5469,6336,16016,6795,6914,6635,5439,8855,6960,5319,5443,7944,5935,5009,4562,5702,4637,0,2620,0,3688,1578,2801,4470,2871]
        }, {
            name: '930',
            color: '#db843d',
            data: [4746,0,5109,6933,6947,8301,8556,7937,7240,7810,7844,6387,8249,6618,6107,7341,6780,6862,6048,6303,5472,16431,5336,4939,6148,7007,5882,5563,6246,5155,7070,7611,5629,5372,3069,3670,0,1796,0,2946,5843,4772,3080,1180]
        }, {
            name: '920',
            color: '#4198af',
            data: [3099,0,5635,8180,5769,4182,5587,5844,5525,6893,4874,4445,5139,5852,5327,3838,5731,5071,5643,6035,6609,13840,5499,4761,4579,4535,7555,4472,6433,6875,6906,5361,4668,3930,6034,5742,0,3426,0,3983,3215,2683,2637,3055]
        }, {
            name: '910',
            color: '#71588f',
            data: [6449,0,4825,5346,5057,4535,5919,6396,4026,8202,4348,6174,8452,5445,5309,5500,3840,5034,5257,4843,4279,13150,4559,6203,4371,5741,5428,5050,4097,4081,4089,7856,5339,4191,4493,4078,0,2220,0,2674,2137,2915,2305,2202]
        }, {
            name: '900',
            color: '#89a54e',
            data: [2038,0,3887,7219,5223,3633,4085,4362,6072,5080,6540,5133,3860,6684,5815,5240,4438,4286,5010,5709,3058,11192,4881,4808,4775,4814,5735,5360,4189,4951,6434,3485,4386,3137,1994,4166,4859,3085,5860,2909,2170,3206,4675,1780]
        }, {
            name: '890',
            color: '#aa4643',
            data: [2628,0,4991,75380,5453,11786,5083,70083,2791,5254,4863,5048,61354,2881,3615,4796,66765,5022,3527,2771,6372,11001,4721,62384,4708,4477,5621,3239,4416,3230,4171,4906,4720,4032,3980,3012,3980,3519,3639,3642,3575,1399,1659,2265]
        }, {
            name: '880',
            color: '#4572a7',
            data: [143274,0,88899,0,70691,63261,65823,0,66257,56070,62297,62226,0,60184,62009,61965,0,61593,59703,60807,59318,9633,58491,0,58723,57299,50099,57355,56755,56480,49440,50259,53733,52043,51264,50647,61514,52737,56351,44457,44440,44888,42510,34195]
        }]
});
