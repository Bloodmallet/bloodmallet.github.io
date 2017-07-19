Highcharts.chart('rogue_subtlety', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Rogue Subtlety'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 17:00:48.786360'
        },
        xAxis: {
      categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Nightblooming Frond","Eye of Command","Vial of Ceaseless Toxins","Engine of Eradication","Stat Stick (Mastery)","Stat Stick (Versatility)","Six-Feather Fan","Stat Stick (Crit)","Hunger of the Pack","Chaos Talisman","Memento of Angerboda","Entwined Elemental Foci","Thrice-Accursed Compass","Cradle of Anguish","Gift of Radiance","PVP Badge of Conquest","Arcanogolem Digit","Bloodthirsty Instinct","Bloodstained Handkerchief","Tirathon's Betrayal","Stat Stick (Haste)","Tempered Egg of Serpentrix","Umbral Moonglaives","Nightmare Egg Shell","Chrono Shard","PVP Insignia of Conquest","Splinters of Agronax","Horn of Valor","Unstable Arcano Crystal","Infernal Cinders","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Terrorbound Nexus","Faulty Countermeasure","Nature's Call","Draught of Souls","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Spiked Counterweight","Giant Ornamental Pearl","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark"]
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
            data: [8755,142204,10823,8002,10567,9701,8317,7500,8381,8208,7652,8904,8419,7308,6630,6988,7222,7612,8511,7530,7525,7313,7370,7992,6274,7700,7430,7210,5675,6400,2267,6045,0,0,4530,3770,2794,2558,2779,5655,2940,2431,2871,3406,2671,2677,1442,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [6205,0,10880,6992,8876,7879,6750,7807,10011,8126,7503,7344,6733,6869,8282,9375,7092,7027,8081,7324,8397,8593,7537,7866,6503,6990,6278,5644,8499,5509,4024,4397,0,0,3222,3474,3877,3061,1285,5467,1779,2963,2247,2348,1082,1034,626,1116]
        }, {
            name: '920',
            color: '#4198af',
            data: [6391,0,11629,6874,9011,6069,7799,6963,7745,5625,7855,6430,7006,6896,6731,6219,6297,5740,7556,6432,7416,6625,5923,6465,5430,5890,6556,5229,5065,4685,3263,5543,0,0,3927,2948,2876,3864,2055,6021,1901,2529,2632,2131,1753,2321,2438,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [4772,0,7209,8677,7746,6795,6582,6124,7335,6435,5090,6523,4880,6344,5210,6635,6821,7296,5702,6005,5705,6967,5889,6527,5059,6277,4692,5545,5844,5338,1878,4500,0,0,3096,3545,2063,1514,1602,4239,2597,1493,1069,1828,1354,1710,1122,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [5932,0,8917,4722,7389,5993,4823,6531,6197,6060,5333,6832,6157,5852,6432,4777,4634,5323,6623,4496,6127,7214,6079,5951,4737,4907,5499,4402,4996,4673,3060,4578,5302,5045,3299,3047,1979,3275,1059,4096,1807,1537,3241,1880,1331,2360,1574,2183]
        }, {
            name: '890',
            color: '#aa4643',
            data: [4680,0,6481,5642,72514,76320,5818,4435,5456,5126,5135,4724,5832,4483,4182,67688,5334,4452,5369,5551,4861,4195,4760,4278,63753,5152,4734,4659,5535,2666,2980,57168,4940,4767,3013,2095,3137,2140,2931,4340,2119,2275,2205,2659,1455,0,1488,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [115556,0,75675,76656,0,0,69823,69377,62024,66383,66649,62513,63940,65075,64829,0,62739,61608,55775,59844,54975,53839,56032,52753,0,54311,55734,58229,53469,58521,68026,0,69029,64635,46124,40977,37869,37208,36881,18686,34034,31905,30457,25145,28725,22543,18969,20142]
        }]
});
