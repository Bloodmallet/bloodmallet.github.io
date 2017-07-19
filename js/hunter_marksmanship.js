Highcharts.chart('hunter_marksmanship', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hunter Beast Marksmanship'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 11:20:40.019684'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Terror From Below","Engine of Eradication","Bloodthirsty Instinct","Stat Stick (Mastery)","Thrice-Accursed Compass","Cradle of Anguish","Stormsinger Fulmination Charge","Stat Stick (Crit)","Stat Stick (Haste)","Six-Feather Fan","Stat Stick (Versatility)","Chrono Shard","PVP Badge of Conquest","Naraxas' Spiked Tongue","Tirathon's Betrayal","Nightblooming Frond","Fury of the Burning Sky","PVP Insignia of Conquest","Moonlit Prism","Horn of Valor","Obelisk of the Void","Spectral Thurible","Deteriorated Construct Core","Tempered Egg of Serpentrix","Icon of Rot","Twisting Wind","Splinters of Agronax","Oakheart's Gnarled Root","Aran's Relaxing Ruby","Mrrgria's Favor","Infernal Alchemist Stone","Caged Horror","Eye of Skovald","Arcanogolem Digit","Corrupted Starlight","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar","Ley Spark","PVP Insignia of Dominance","PVP Badge of Dominance","Portable Manacracker"]
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
            data: [160106,11928,4501,8315,9140,7335,5906,7024,6955,7898,6747,8774,9865,6936,6015,6784,6488,6468,9073,4896,6538,5688,5869,4959,6324,7478,7341,4196,6402,6552,4883,2847,4355,0,4999,2468,3747,2759,2828,2862,636,0,842,2397,143]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8839,3005,7439,6228,8155,7418,5024,9920,5985,7044,5784,7983,6624,7412,5019,4754,8844,5978,3895,4760,6017,5290,6817,3516,6421,6078,4730,6222,6062,5447,4732,4222,0,3037,4881,4869,2175,1912,1594,1407,388,1949,574,348]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7757,5523,6036,5452,5312,5555,7215,7246,7101,7132,7825,6320,3137,5179,8807,5790,5808,6040,5398,5834,5487,4392,5774,4731,6348,5415,4597,5324,3710,4428,3944,4213,0,1371,1557,5385,2994,2774,1483,760,2684,497,924,475]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,9751,1977,6945,7254,5140,5647,5745,5827,4057,5073,5636,7189,8409,4867,3846,5218,7624,6733,3471,3419,4506,4949,3527,4500,5885,5957,4843,5673,5950,4783,1754,2279,0,3321,3420,4000,2355,3154,2408,1180,0,1665,599,57]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,7795,3797,7047,5902,5756,5219,6361,3471,5597,4850,4086,4790,3908,3890,3348,4573,4853,4818,4385,3590,2806,3775,2296,4280,4542,4545,2537,5448,2671,3391,4387,4749,5569,3007,2121,4101,2566,1990,1260,2394,0,898,1946,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,101944,4591,80091,80505,5900,4753,2932,73829,6032,4136,3447,6542,5877,4868,5472,3991,4799,5612,4148,3819,3220,3308,4242,58472,3904,4558,3686,4166,5798,2821,3413,1886,3236,2318,2275,2389,542,2530,1111,35,321,1180,948,464]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,112511,0,0,76170,75698,75052,0,69519,70885,65387,56776,63675,65248,61978,63545,51518,50261,61402,56318,56068,56135,56050,0,46730,46458,54724,45571,46081,51057,54736,51085,61019,50447,46022,36883,47186,41178,43406,33426,35886,27927,24518,1770]
        }]
});
