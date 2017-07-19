Highcharts.chart('shaman_enhancement', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shaman - Enhancement - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 18:03:46.839831'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Chaos Talisman","Bloodthirsty Instinct","Cradle of Anguish","Eye of Command","Unstable Arcano Crystal","Six-Feather Fan","Stat Stick (Haste)","Engine of Eradication","Entwined Elemental Foci","Memento of Angerboda","Thrice-Accursed Compass","Nightblooming Frond","Stat Stick (Mastery)","Chrono Shard","PVP Badge of Conquest","Hunger of the Pack","Nightmare Egg Shell","Stat Stick (Crit)","Stat Stick (Versatility)","Vial of Ceaseless Toxins","Tempered Egg of Serpentrix","Gift of Radiance","Horn of Valor","Convergence of Fates","Tirathon's Betrayal","Arcanogolem Digit","Splinters of Agronax","PVP Insignia of Conquest","Infernal Cinders","Bloodstained Handkerchief","Darkmoon Deck: Dominion","Spontaneous Appendages","Faulty Countermeasure","Infernal Alchemist Stone","Umbral Moonglaives","Toe Knee's Promise","The Devilsaur's Bite","Nature's Call","Spiked Counterweight","Draught of Souls","Terrorbound Nexus","Tiny Oozeling in a Jar","Ravaged Seed Pod","Giant Ornamental Pearl","Mark of Dargrul","Windscar Whetstone","Ley Spark"]
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
            data: [148384,8902,8656,7661,7579,4612,10511,7431,6431,8645,7408,8076,9948,8044,7535,7171,7930,6989,8170,7622,7890,8585,6958,6497,4951,7404,8092,6561,6198,6505,7552,0,3479,5181,0,5106,4501,4602,2994,3461,7965,2111,2542,1829,2471,2195,1609,755]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,9573,7327,8447,8375,9272,8974,6748,9464,7151,8796,6120,7820,5416,6552,6941,6402,7107,6025,5636,6506,7503,7214,5971,6011,7443,7100,7458,4980,4987,6781,0,3934,3937,0,3762,3022,3127,3545,3214,5225,4454,2766,2956,2081,1005,1682,0]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,6427,7406,6177,6188,3510,7396,7187,5170,5153,5253,6837,7343,7152,7556,6606,7954,7598,6903,6304,9849,6471,5182,6386,5302,6173,7218,5395,5765,5930,6784,0,2573,4305,0,4213,2655,4475,851,4152,5554,2458,3423,2286,2669,3128,771,721]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,7070,6182,7096,5655,3891,8582,5098,6027,6968,5822,6242,7476,6803,5729,6502,4105,4345,5701,4696,6717,6961,4954,3287,5159,6480,4216,4562,4867,4280,6019,0,2330,4354,0,3143,3985,3082,3406,2278,4845,2173,1826,1212,1542,1222,1503,2346]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5719,6231,6428,5799,4023,6904,6028,6593,5506,5560,5676,5900,4484,5658,4228,5335,6064,5607,7050,4885,5403,5917,6570,4678,5180,6746,5190,3422,4259,4710,4519,2879,3548,5859,3997,1778,2115,2032,2288,4515,1759,2169,2132,2472,2725,2889,387]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,5163,5262,82290,6003,4014,5589,3573,75024,3834,5646,4396,6501,4807,3975,5407,6128,4233,4576,4021,63681,5341,3988,4245,4340,4502,4999,4450,5252,61199,4531,6106,3466,3155,3643,49283,2628,4063,1688,1189,5315,2731,2888,1169,1289,1151,740,456]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,78604,78930,0,75575,85825,65338,73676,0,69272,67656,67504,59727,67894,67335,66926,64638,66090,65241,66115,0,54413,60429,59721,61156,51126,49935,53738,56859,0,49212,66687,56486,48906,62824,0,48601,44659,50868,45058,21514,39053,36444,38347,33202,33162,31638,28439]
        }]
});
