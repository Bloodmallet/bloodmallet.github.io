Highcharts.chart('priest_shadow', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Priest Shadow'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 14:49:19.039451'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Terror From Below","Unstable Arcano Crystal","Tome of Unraveling Sanity","Spectral Thurible","Stat Stick (Crit)","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Oakheart's Gnarled Root","Stormsinger Fulmination Charge","Icon of Rot","Stat Stick (Versatility)","Infernal Writ","Erratic Metronome","Naraxas' Spiked Tongue","Stat Stick (Haste)","Whispers in the Dark","Devilsaur Shock-Baton","Bough of Corruption","PVP Badge of Dominance","Twisting Wind","Star Gate","Charm of the Rising Tide","Chrono Shard","Fury of the Burning Sky","Deteriorated Construct Core","PVP Insignia of Dominance","Darkmoon Deck: Hellfire","Portable Manacracker","Aran's Relaxing Ruby","Caged Horror","Horn of Valor","Swarming Plaguehive","Moonlit Prism","Corrupted Starlight","Obelisk of the Void","Infernal Alchemist Stone","Wriggling Sinew","Eye of Skovald","Pharameres Forbidden Grimoire","Mrrgria's Favor","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [134641,9565,10284,5030,9208,7577,7998,7484,6862,5163,6881,6857,6764,4509,6250,5558,5739,4806,6831,5985,7805,5600,7722,9113,6285,6313,5616,6180,5443,0,6572,4996,3897,4878,3397,4972,3048,4115,0,4835,2900,3438,4084,3768,838,1933]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,9877,8380,3232,9658,7497,6592,5268,6951,6824,6138,5425,4921,7622,6641,5637,6069,7297,5176,5853,7765,6619,6998,6705,4176,7168,5448,7572,4839,0,5883,3350,4675,3552,4585,4077,5113,5057,0,2699,4413,3239,2657,1910,612,729]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,9904,8234,4495,8885,5474,2895,5454,5605,5506,5900,6163,6502,6609,4994,6489,5135,5797,4401,3952,5479,5700,7231,4760,6946,4512,4237,5361,3798,0,5211,4474,4203,4360,4319,5402,4120,3857,0,2149,2616,3953,3264,2236,2920,346]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,6428,5488,4104,6484,6519,7876,5724,6161,6316,4463,5376,5882,3611,6122,5531,5677,3213,4686,5075,7392,4918,5809,5209,3486,3729,4529,5931,6259,0,5888,4799,3706,3073,2262,0,3017,2731,0,4635,3432,1026,2588,2881,1332,1720]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,7084,8182,5352,81307,6751,4880,4974,3786,4928,5696,5758,4523,5677,3866,3063,2885,5396,5356,4783,5327,5260,5178,5646,5658,4710,4720,5709,1913,5302,4476,2159,3154,4219,5014,6260,1912,3962,4710,1227,3506,3809,2421,2965,2909,1618]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,91753,83121,3562,0,74065,5267,3962,5730,4238,4292,3989,3902,4458,4267,4626,4687,4482,5110,4420,2439,3527,3989,5518,59666,5505,3632,2966,4936,5559,4585,2623,2064,2623,3273,3341,4262,4013,4608,4258,1914,4513,441,2356,745,1808]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,90349,0,0,63052,65562,62574,63228,62397,61212,61745,61298,61322,60765,61262,59825,57193,57143,50805,55358,49347,49312,0,54273,57270,48334,53172,66377,43181,49872,49434,47701,47499,46836,48345,45502,57071,43382,43599,41125,42882,41258,40320,27641]
        }]
});
