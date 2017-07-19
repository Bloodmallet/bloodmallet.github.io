Highcharts.chart('hunter_survival', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hunter Beast Survival'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 11:34:05.258662'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Cradle of Anguish","Bloodthirsty Instinct","Eye of Command","Chaos Talisman","Vial of Ceaseless Toxins","Stat Stick (Haste)","Unstable Arcano Crystal","Stat Stick (Versatility)","PVP Badge of Conquest","Entwined Elemental Foci","Memento of Angerboda","Six-Feather Fan","Hunger of the Pack","Engine of Eradication","Stat Stick (Crit)","Thrice-Accursed Compass","Chrono Shard","Stat Stick (Mastery)","Nightmare Egg Shell","Nightblooming Frond","Horn of Valor","Tirathon's Betrayal","Tempered Egg of Serpentrix","Arcanogolem Digit","Bloodstained Handkerchief","Gift of Radiance","PVP Insignia of Conquest","Infernal Cinders","Splinters of Agronax","Umbral Moonglaives","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Draught of Souls","Faulty Countermeasure","Spontaneous Appendages","Spiked Counterweight","Nature's Call","Toe Knee's Promise","Terrorbound Nexus","Mark of Dargrul","Ravaged Seed Pod","Tiny Oozeling in a Jar","Giant Ornamental Pearl","Windscar Whetstone","Ley Spark"]
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
            data: [142464,7198,7973,7577,10438,7039,8969,7301,3868,6479,7286,6981,7657,9847,8282,7005,8024,7746,6311,6004,8203,8210,7490,8995,7903,7861,7905,5994,6185,5922,7014,7147,0,0,4973,9625,3542,3586,3811,2366,3029,4635,3065,2166,2014,2130,2386,1077]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,4622,8162,6325,5952,8607,8683,6590,5111,7775,6315,7049,6945,7806,5621,7209,7693,6244,7183,6471,6530,7362,5573,7456,6795,8719,7486,5296,6610,6077,6232,2758,0,0,3745,4369,3837,2935,2024,2412,2881,806,3084,1718,2942,2044,1363,1265]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,5998,6231,6883,8132,6288,7544,4639,1948,7086,7682,6915,7128,7395,7547,6810,3817,5607,6238,5692,5165,7740,4884,5578,7149,4970,6202,4873,4575,5715,4870,5827,0,0,3356,5932,2640,2694,3464,2735,2591,3899,1315,1233,2184,2897,1628,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,4836,7098,6287,5203,6051,7969,7476,3901,5471,5008,5881,5489,7136,6008,4871,6555,5682,5144,7808,6002,6149,5944,6914,6415,6237,6177,6578,5183,2512,6210,3600,0,0,2659,5450,3738,4478,1442,797,2549,2565,3677,2693,2775,1128,2869,3250]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5136,6082,6479,4875,6421,6274,5395,4064,5764,5465,5611,4972,5807,5219,5638,4688,6564,5370,4714,5248,6195,3402,5725,5387,4678,4360,5006,4271,5870,4112,4311,6145,5259,4586,5850,3725,2828,3787,1571,1724,969,1815,1583,997,1847,0,615]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,2933,78117,5485,4358,4622,65580,6152,2991,5141,5405,4323,4240,5918,4170,69368,6799,3358,4886,3962,4890,3802,5569,4060,5498,5910,5974,4099,4418,60172,3298,53638,4871,4497,2544,3172,602,1319,1810,1621,1499,2441,914,1709,2098,1296,1213,1792]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,88714,0,74096,73977,69708,0,67092,82242,66029,65273,64572,64716,57107,64099,0,62920,63802,63357,63461,61127,53722,58809,52356,51362,51890,51488,56602,56923,0,50773,0,65931,62293,45090,27305,41387,40718,39969,43647,38720,36450,33822,34306,31071,32508,28795,25644]
        }]
});
