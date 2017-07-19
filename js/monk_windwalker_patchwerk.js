Highcharts.chart('monk_windwalker', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Monk - Windwalker - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 14:27:35.482411'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Eye of Command","Vial of Ceaseless Toxins","Cradle of Anguish","Engine of Eradication","Bloodthirsty Instinct","Chaos Talisman","Stat Stick (Mastery)","Six-Feather Fan","Thrice-Accursed Compass","Stat Stick (Versatility)","Memento of Angerboda","Hunger of the Pack","Stat Stick (Crit)","Convergence of Fates","Entwined Elemental Foci","Stat Stick (Haste)","PVP Badge of Conquest","Tirathon's Betrayal","Gift of Radiance","Arcanogolem Digit","Chrono Shard","Nightmare Egg Shell","Bloodstained Handkerchief","Unstable Arcano Crystal","Nightblooming Frond","Horn of Valor","Tempered Egg of Serpentrix","PVP Insignia of Conquest","Splinters of Agronax","Infernal Cinders","Darkmoon Deck: Dominion","Umbral Moonglaives","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Faulty Countermeasure","Nature's Call","Terrorbound Nexus","Draught of Souls","Spiked Counterweight","Toe Knee's Promise","Tiny Oozeling in a Jar","Mark of Dargrul","Windscar Whetstone","Ravaged Seed Pod","Giant Ornamental Pearl","Ley Spark"]
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
            data: [144219,6745,9498,9146,7513,8217,8020,8041,8369,6978,7606,7612,7785,7714,7169,8251,8321,6444,8330,8091,7553,6103,6741,9262,4941,8241,7506,7003,7055,6439,7181,0,4459,0,4169,4904,3231,1749,2596,6989,2900,2113,2618,2118,782,3240,1696,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8050,7975,5421,7099,7095,7727,6566,7355,6674,6068,6355,7430,6088,4766,6340,6813,7807,8859,5045,8085,7067,6866,7339,2321,6535,5581,7697,6876,5179,4817,0,4593,0,4460,2706,3532,2908,3097,6487,1826,1959,1975,2217,2496,1413,1649,1938]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,8681,9397,7183,5672,5470,6754,7698,8480,6264,6498,5247,6149,6982,6652,6793,4375,5837,5931,5308,7280,4703,5753,6547,2455,7367,5455,6651,5246,6951,4825,0,5105,0,2294,2202,2793,932,2560,6636,2354,2629,2469,1643,683,1778,1386,574]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,3728,6865,6777,7151,5745,5172,5010,7580,6783,7172,5881,6118,6044,4602,5409,6963,4868,6301,7735,6079,5861,5504,5695,2841,4971,5267,5532,4019,5122,4111,0,4117,0,4737,3314,2726,2853,2565,4798,2828,1473,1608,3462,1787,1434,1473,639]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6145,5613,4772,6398,4166,5627,6045,5934,4154,4179,6134,3827,4583,5406,5244,5146,6216,5879,3986,6579,4308,5281,5966,2678,5793,4165,4931,5469,4438,4931,6323,2923,5622,1802,3462,2405,1231,2587,5605,1577,2036,1771,1041,2802,2494,2559,270]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,5356,68395,72343,71652,5452,5105,4886,5274,6039,5696,3674,7025,4578,2756,4312,4469,4740,5116,4599,2839,5142,3273,3971,549,5353,4107,4981,3794,3815,54269,4606,52063,4203,2914,946,3477,1392,1976,3765,2059,1732,1672,1455,423,0,1271,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,70787,0,0,0,69059,65394,64792,58410,63029,62642,64329,60774,62966,67599,62563,61685,59842,54150,58151,53806,58468,57123,51738,73396,50258,55834,49330,53552,51855,0,63262,0,59124,43006,38980,35440,41079,35730,15780,33029,30826,30303,28781,29127,27748,27900,28267]
        }]
});
