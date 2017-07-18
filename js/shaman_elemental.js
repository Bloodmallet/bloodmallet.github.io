    Highcharts.chart('shaman_elemental', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Elemental Shaman'
        },
        subtitle: {
            text: 'Last generated: 2017-07-18 18:58:27.553048'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Dreadstone of Endless Shadows","Tome of Unraveling Sanity","Stat Stick (Crit)","Padawsen's Unlucky Charm","PVP Badge of Dominance","Charm of the Rising Tide","Stat Stick (Versatility)","Stormsinger Fulmination Charge","Infernal Writ","Erratic Metronome","Stat Stick (Haste)","Chrono Shard","Horn of Valor","PVP Insignia of Dominance","Naraxas' Spiked Tongue","Star Gate","Deteriorated Construct Core","Obelisk of the Void","Twisting Wind","Portable Manacracker","Bough of Corruption","Darkmoon Deck: Hellfire","Fury of the Burning Sky","Spectral Thurible","Devilsaur Shock-Baton","Moonlit Prism","Oakheart's Gnarled Root","Icon of Rot","Infernal Alchemist Stone","Aran's Relaxing Ruby","Swarming Plaguehive","Mrrgria's Favor","Corrupted Starlight","Caged Horror","Eye of Skovald","Wriggling Sinew","Pharameres Forbidden Grimoire","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [129820,4455,8380,7028,6452,7331,6701,7320,6650,7509,5860,5770,4608,6586,6020,7472,5792,5314,5028,4984,4846,6528,6115,4301,7319,8140,5812,0,5489,5365,4971,5905,3686,3879,0,2821,3944,3757,3534,3215,4039,3590,3193,1479,2304,1616]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,2252,6536,6718,5625,3299,5824,6120,6898,5645,6187,5525,6586,5506,5614,5020,5883,6601,5749,5174,5056,5024,5021,4215,6738,4719,7251,0,3381,3759,4632,4100,4389,5015,0,3183,3888,3128,2050,2024,2785,2073,2726,2303,2159,985]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,3545,6670,3877,6024,7352,5854,6750,4853,5691,5422,6444,4714,4522,5192,5476,5908,3864,2267,4033,2767,5504,6832,6028,3973,5998,4863,0,3441,4513,3687,3971,2801,2417,0,4271,3373,2050,3140,2754,2491,1116,3102,2270,1713,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,6442,4494,7435,7066,6235,5954,5480,4615,5077,5653,4034,5280,5543,5080,4964,4125,6253,5601,4540,5175,5004,4753,3844,4426,4947,5076,0,4587,3246,3854,4322,4346,2678,0,2290,2938,3243,1593,2561,2459,4269,2132,2041,550,1378]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,2140,6251,3454,2502,4879,3778,66852,5017,4982,2720,4169,4228,4609,4732,6253,4163,4764,3371,4136,3626,6156,4758,3638,4735,3916,3475,5017,2385,3800,2998,4219,3208,3434,3610,2413,2832,3156,2853,3109,1525,1342,2820,3823,1804,1495]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,3447,71608,5219,5885,65670,4430,0,4374,3968,4632,62281,4932,3556,3878,3182,5349,2938,4218,3081,3336,3521,2991,3358,4544,2880,4190,3330,3365,50261,2338,2959,2090,3294,3711,3268,2927,1126,1616,157,1750,2524,2565,938,1132,1107]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,84803,0,67479,61714,0,60498,0,59742,56884,58240,0,57823,56845,56545,54417,54638,53682,51144,50363,51162,44125,43184,47672,40924,41567,41174,63117,48324,0,48424,43135,44680,44120,54933,41994,40250,39975,38959,39757,36934,36865,33406,34606,34481,26278]
        }]
    });