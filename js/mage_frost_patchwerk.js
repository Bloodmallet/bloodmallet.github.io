Highcharts.chart('mage_frost', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Mage - Frost - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 14:03:48.299491'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Terror From Below","Tarnished Sentinel Medallion","Stat Stick (Crit)","Unstable Arcano Crystal","Tome of Unraveling Sanity","Whispers in the Dark","Stat Stick (Versatility)","Erratic Metronome","Padawsen's Unlucky Charm","Stat Stick (Haste)","Chrono Shard","PVP Badge of Dominance","Charm of the Rising Tide","Dreadstone of Endless Shadows","Star Gate","Stat Stick (Mastery)","Infernal Writ","Horn of Valor","PVP Insignia of Dominance","Devilsaur Shock-Baton","Deteriorated Construct Core","Stormsinger Fulmination Charge","Darkmoon Deck: Hellfire","Bough of Corruption","Spectral Thurible","Twisting Wind","Icon of Rot","Portable Manacracker","Obelisk of the Void","Moonlit Prism","Oakheart's Gnarled Root","Infernal Alchemist Stone","Naraxas' Spiked Tongue","Swarming Plaguehive","Mrrgria's Favor","Wriggling Sinew","Eye of Skovald","Fury of the Burning Sky","Elementium Bomb Squirrel Generator","Pharameres Forbidden Grimoire","Unstable Horrorslime","Aran's Relaxing Ruby","Caged Horror","Figurehead of the Naglfar","Corrupted Starlight"]
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
            data: [141133,7903,8712,8671,3290,7830,5475,8299,6383,7024,6002,6058,5913,5395,5449,7868,6247,7982,6666,6666,5420,7836,6290,0,5443,3824,5811,5435,6763,4511,5427,4401,0,6452,4481,3069,4873,3822,4172,1566,3502,1504,3325,3810,2351,1100]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,6812,7363,6407,4461,7093,5979,5768,7541,6188,7698,8070,7031,7918,6024,7929,7389,4512,5772,5726,4909,7854,4976,0,8900,5570,6206,4122,6417,5931,5061,4610,0,4431,3953,2742,2372,2717,3344,2836,2700,3310,4538,1525,932,2267]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7223,7845,3878,1990,6071,3995,7009,5214,5981,5800,4123,6851,4009,6256,5324,5491,5422,4417,4071,4877,4772,5697,0,6335,6328,7017,5239,5220,5089,3968,6606,0,4026,3597,5441,1913,3483,3403,3891,3732,1524,3236,1832,2620,3591]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,6282,8127,7457,5149,7737,5389,4523,6046,5714,5810,6426,4810,7552,5185,4020,3476,4342,4947,3940,3412,5125,4660,0,5785,4221,3066,3780,4751,3103,4229,3399,0,3533,2673,1245,5338,2763,4740,1545,2986,2042,430,2792,1109,1148]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6420,5571,5494,3319,75095,5179,5598,5050,3864,4168,6527,5016,4542,4260,6937,5192,4551,5217,3833,5886,4216,6340,5566,4771,2564,6316,3224,4416,3164,2334,2722,5035,4214,3531,3449,1432,2448,2318,5392,905,297,4449,2502,0,1875]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,81438,72905,5934,4018,0,6911,5922,4309,5241,5699,2853,4159,64277,5084,5749,4076,4360,2266,5331,2212,6428,4024,5447,4499,58884,5602,3824,5296,3356,6697,1365,4742,2551,3303,1562,3259,2803,3068,282,2707,1824,2257,2576,3545,1895]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,70677,83699,0,67878,63593,64341,64091,62266,62152,61689,0,60963,50222,54932,55535,56855,55706,58372,48322,52544,73367,46809,0,46780,54311,46475,51353,48326,52507,61359,45123,46513,47264,45180,45637,41900,43125,39366,42592,34152,28574,30947,29322]
        }]
});
