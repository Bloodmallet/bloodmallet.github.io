    Highcharts.chart('warrior_fury', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fury T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Umbral Moonglaives","Eye of Command","Chaos Talisman","Fel-Oiled Infernal Machine","Cradle of Anguish","Chrono Shard","Ursoc's Rending Paw","The Devilsaur's Bite","Vial of Ceaseless Toxins","Entwined Elemental Foci","Nightmare Egg Shell","Stat Stick (Haste)","Engine of Eradication","Gift of Radiance","Memento of Angerboda","Stat Stick (Mastery)","Draught of Souls","Stat Stick (Versatility)","Infernal Cinders","Ettin Fingernail","Stat Stick (Crit)","Hunger of the Pack","Claw of the Crystalline Scorpid","Might of Krosus","Tiny Oozeling in a Jar","PVP Badge of Victory","Toe Knee's Promise","Bloodstained Handkerchief","Faulty Countermeasure","Spontaneous Appendages","PVP Insignia of Victory","Horn of Valor","Terrorbound Nexus","Nature's Call","Windscar Whetstone","Spiked Counterweight","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl"]
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
            name: '970',
            color: '#ffeb3b',
            data: [0,134283,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },{
            name: '940',
            color: '#00E676',
            data: [5282,0,4131,8741,7482,9603,6827,7001,7807,8902,6652,9082,5741,7446,7837,7531,5942,4666,7428,16337,7104,6633,5254,5755,6401,7699,10304,5335,5809,4536,7470,5333,6299,6012,4469,3321,4221,2174,1906,2946,4112,3221]
        }, {
            name: '930',
            color: '#db843d',
            data: [5593,0,4123,9041,5587,6973,6248,7068,5541,7924,5262,8169,5687,6279,5777,5405,7262,6580,6119,16560,5315,5941,6312,6366,5945,6937,6377,5594,7850,7099,6862,7135,6283,5613,5939,5441,1822,4255,5816,3896,3527,1516]
        }, {
            name: '920',
            color: '#4198af',
            data: [3634,0,7740,5562,6348,5768,5711,7934,7901,7902,6869,5823,5423,4360,4800,5984,4987,6575,5663,13817,4877,6269,4417,5188,4287,7035,5162,5524,4809,5714,7204,4237,3566,4796,4637,5096,3998,3816,2820,1674,3230,2809]
        }, {
            name: '910',
            color: '#71588f',
            data: [3742,0,4623,6170,5860,5948,3652,3718,5139,5859,7161,7194,4721,6543,5695,6425,5890,4423,3771,13328,5978,4296,5495,5160,4675,6930,7450,4826,4684,4381,5624,4202,4614,3794,3280,2749,1145,3645,3169,4445,2857,2995]
        }, {
            name: '900',
            color: '#89a54e',
            data: [2964,0,5196,6200,4929,3780,5199,3862,4590,6479,3285,5092,6077,3263,3183,2835,4125,5728,5584,10728,3771,5237,4598,3760,5347,4677,4465,4123,3501,3906,5307,3961,2997,2875,5286,5406,3505,2666,1833,1904,2467,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [3757,0,3097,77584,5870,4523,10313,72644,3812,5138,4771,61092,6368,5399,4198,67184,5542,3672,4326,11309,4447,63265,3795,4900,4855,5917,4774,5159,5447,3576,3730,4460,4162,4079,3445,3426,3276,2634,2291,2050,2908,1530]
        }, {
            name: '880',
            color: '#4572a7',
            data: [143188,0,90461,0,70191,68119,64941,0,65840,56873,63309,0,62419,62630,64015,0,61038,62761,60455,10709,60661,0,61650,59496,58894,50163,50338,58048,56416,58988,51014,57150,56809,52701,51032,51025,54091,45422,45802,45796,42881,36075]
        }]
    });