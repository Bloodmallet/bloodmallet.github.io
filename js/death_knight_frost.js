Highcharts.chart('death_knight_frost', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Death Knight Frost'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 09:34:11.407921'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Eye of Command","Cradle of Anguish","Chaos Talisman","Horn of Valor","Engine of Eradication","PVP Badge of Victory","Stat Stick (Versatility)","Stat Stick (Crit)","Entwined Elemental Foci","Memento of Angerboda","Hunger of the Pack","Ettin Fingernail","Stat Stick (Haste)","Unstable Arcano Crystal","Stat Stick (Mastery)","Vial of Ceaseless Toxins","Chrono Shard","Fel-Oiled Infernal Machine","Nightmare Egg Shell","Gift of Radiance","Ursoc's Rending Paw","PVP Insignia of Victory","Claw of the Crystalline Scorpid","Bloodstained Handkerchief","Might of Krosus","Darkmoon Deck: Dominion","Faulty Countermeasure","Infernal Cinders","Infernal Alchemist Stone","Umbral Moonglaives","The Devilsaur's Bite","Nature's Call","Spiked Counterweight","Spontaneous Appendages","Giant Ornamental Pearl","Terrorbound Nexus","Draught of Souls","Mark of Dargrul","Toe Knee's Promise","Tiny Oozeling in a Jar","Ravaged Seed Pod","Windscar Whetstone"]
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
            data: [136927,6470,6575,8619,6661,6612,8613,8617,8448,8111,7144,6640,5053,5983,7045,4399,6440,9757,4256,7109,6297,6353,8624,4711,7361,8243,7735,0,4971,5143,0,4161,2604,2660,4025,3565,3986,1589,5761,2850,1576,2032,2581,2752]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,3368,6681,7669,10619,6686,5679,7219,6761,6639,7327,6701,8153,7245,6889,3022,6368,6688,6659,5489,5611,4778,5765,5833,6554,5079,5364,0,4658,3555,0,3573,3452,3328,2263,2413,3116,3058,4462,1587,3437,2108,1876,638]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7176,7539,8526,4990,7531,6346,4696,5400,5163,5275,5469,5402,5068,6489,3182,5457,5278,6687,4586,5566,5396,6723,5758,5650,7012,6104,0,3742,3977,0,4832,2629,608,3057,564,1202,2567,5726,3424,1381,1962,2397,1136]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,3527,5261,6205,7296,5218,5958,6092,5556,5429,5398,6311,6557,6174,5842,2206,5850,6689,5224,5565,6267,5905,4766,5383,6006,4344,5252,0,3523,5090,0,898,4926,2381,3149,4550,2709,1443,2639,592,1969,652,2534,3001]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,4722,5903,4675,3962,4779,5153,4372,5372,5736,5142,4796,4250,4634,4440,3704,5524,6048,5681,4972,4914,4460,4337,2964,5203,5422,4861,3830,3953,2787,4021,4374,2265,1779,1651,1216,770,2340,3673,1442,2111,1598,757,445]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,4362,6071,66979,6023,5927,65785,6578,3631,4310,5249,4547,5259,5573,4162,3570,4870,57238,3523,5254,3058,3614,7196,4776,3648,5315,5005,4988,2879,49229,4534,44865,1015,1144,2714,1993,2199,761,2602,2110,2031,1975,2216,710]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,81271,67700,0,62480,62051,0,59782,60715,60112,59679,59954,59401,58459,58253,73007,58210,0,57132,55765,56096,52962,44132,51094,45530,43724,44464,63191,47135,0,56897,0,36490,39851,31560,33354,31443,32015,16266,28621,27852,27271,24677,25609]
        }]
});
