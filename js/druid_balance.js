    Highcharts.chart('druid_balance', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Balance T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Stormsinger Fulmination Charge","Dreadstone of Endless Shadows","Tome of Unraveling Sanity","Padawsen's Unlucky Charm","Erratic Metronome","Stat Stick (Versatility)","Stat Stick (Crit)","Stat Stick (Haste)","Charm of the Rising Tide","PVP Badge of Dominance","Chrono Shard","Infernal Writ","Naraxas' Spiked Tongue","Star Gate","Moonlit Prism","PVP Insignia of Dominance","Horn of Valor","Deteriorated Construct Core","Fury of the Burning Sky","Obelisk of the Void","Devilsaur Shock-Baton","Bough of Corruption","Spectral Thurible","Twisting Wind","Portable Manacracker","Swarming Plaguehive","Oakheart's Gnarled Root","Aran's Relaxing Ruby","Icon of Rot","Caged Horror","Corrupted Starlight","Mrrgria's Favor","Pharameres Forbidden Grimoire","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [133124,9487,3419,5952,6438,6803,7537,6607,7529,6306,6580,6918,7203,6301,5066,5415,5805,6635,4836,6550,5554,4342,5164,6600,5136,4663,4642,6403,5304,4593,5183,4085,4118,3355,4331,3547,2628,2902,3724,3334,2634,2885,2332,1942]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8721,5197,5739,6399,6732,6223,6660,6354,6859,5496,6369,5868,6342,5909,5780,5394,4175,5223,6844,4508,5392,6141,6144,3368,4036,4333,4502,4120,7068,7142,3943,5674,3173,2902,1007,2335,3798,1193,2422,1874,1918,1400,1050]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,6923,3514,6884,6041,6071,5016,4609,6978,4944,5988,4833,5358,4652,5320,5931,5019,5692,5061,5434,4566,3795,3214,5445,4224,4832,4454,6153,4182,4444,5509,4381,1684,3134,3745,3739,3187,2605,4037,3223,1890,1584,2015,995]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,6449,3342,3689,5023,5458,5266,6305,5707,5770,4435,5266,4712,4787,4943,4214,5093,5902,3850,6158,4640,3519,3560,4228,3998,3697,2862,5019,3033,6401,4539,2821,2856,3063,3167,2417,2523,2363,1939,2669,3004,2135,1243,718]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6955,4270,4455,4405,5681,4780,3998,66582,4434,4900,5526,5480,5151,5122,5510,4142,4825,3898,3784,2445,4726,3578,5639,3563,3885,3656,3594,2739,3840,3263,3930,4858,2806,1960,1574,1342,2948,2646,1119,1399,2033,546,1045]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,82794,2764,5123,4704,67347,5718,4643,0,3586,3887,3844,2661,4024,61475,2318,5092,3168,3735,4214,4582,3810,3367,3692,2961,3117,3698,4475,50569,3918,5153,1505,1706,1961,3611,2657,2578,2454,1787,2925,2807,2001,2621,921]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,92071,67944,66037,0,61011,62019,0,61172,59780,58031,58968,58594,0,56978,55456,54475,56219,44690,49621,50140,50303,42485,50458,48628,47539,39901,0,39576,39016,45685,44196,45734,41126,41455,41580,37683,36624,34232,33982,32204,32445,24144]
        }]
    });