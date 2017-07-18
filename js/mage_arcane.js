    Highcharts.chart('mage_arcane', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Arcane T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Charm of the Rising Tide","Terror From Below","Tome of Unraveling Sanity","Unstable Arcano Crystal","Whispers in the Dark","PVP Badge of Dominance","Moonlit Prism","Stat Stick (Mastery)","Stat Stick (Versatility)","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Erratic Metronome","Stat Stick (Crit)","Stat Stick (Haste)","Infernal Writ","Chrono Shard","Star Gate","Stormsinger Fulmination Charge","Spectral Thurible","Naraxas' Spiked Tongue","Deteriorated Construct Core","PVP Insignia of Dominance","Horn of Valor","Bough of Corruption","Twisting Wind","Oakheart's Gnarled Root","Portable Manacracker","Fury of the Burning Sky","Devilsaur Shock-Baton","Icon of Rot","Wriggling Sinew","Obelisk of the Void","Swarming Plaguehive","Aran's Relaxing Ruby","Mrrgria's Favor","Pharameres Forbidden Grimoire","Caged Horror","Eye of Skovald","Corrupted Starlight","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [12761,127177,7798,6985,8999,4575,5243,4053,5261,6078,7960,6120,5577,5732,3077,5540,6805,6102,7437,6677,5656,6024,6522,6341,5837,6997,6773,5758,6439,4860,3978,2479,4986,2322,3485,5061,2674,3855,2169,4588,3811,2180,791,720]
        }, {
            name: '930',
            color: '#db843d',
            data: [11619,0,5863,7309,6797,3539,6619,8063,6225,6138,3207,5555,5147,5513,6989,4719,5113,5992,4942,4933,4667,4040,6567,3606,4266,6110,5411,4065,5559,4558,5132,4634,4379,4743,4104,5043,4022,1950,3509,1630,1165,3540,2153,418]
        }, {
            name: '920',
            color: '#4198af',
            data: [8802,0,5228,7267,7392,2811,6170,5375,6565,5248,6168,6243,5246,5733,6194,4982,6621,4214,7426,4321,6247,4286,5767,6296,5110,5560,5961,3714,6930,3096,3897,4434,2238,3983,3698,1289,2665,3186,1699,3295,2663,1858,432,765]
        }, {
            name: '910',
            color: '#71588f',
            data: [9267,0,5505,5154,5829,3161,3403,3517,4630,3795,6300,5078,5603,4853,2763,6263,2590,5401,5187,5443,4110,5944,3851,3009,3773,5078,4737,4365,4098,4429,4003,4034,3908,2593,4971,2856,2373,4510,3203,2804,2720,1783,1531,1490]
        }, {
            name: '900',
            color: '#89a54e',
            data: [8713,0,5718,5984,68445,564,4606,5911,5623,5932,4422,5616,5559,4539,5038,4823,5968,5653,4815,4716,2609,3433,4172,3056,2637,3845,4642,4132,3658,2122,3559,4110,2614,3814,2353,2333,2474,2082,1378,1916,2795,2003,2195,1035]
        }, {
            name: '890',
            color: '#aa4643',
            data: [99480,0,72922,69427,0,5668,4996,4480,5305,4529,3590,1977,2088,4238,4653,3496,3318,2839,4652,2855,54670,3175,4820,3713,3507,4166,4019,2248,3189,4367,3584,1774,4144,3287,3528,3224,966,1433,2955,2392,881,902,397,319]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,0,0,74895,62063,60487,57262,57060,56934,57710,57010,54381,55759,53489,52419,52203,47628,52606,0,50699,44585,49451,49608,42946,43062,47912,42295,47571,46696,44257,42952,43260,41718,40989,38042,36021,36473,34224,36469,30697,31590,21854]
        }]
    });