    Highcharts.chart('warlock_demonology', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Demonology T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Haste)","Erratic Metronome","Charm of the Rising Tide","Chrono Shard","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Stat Stick (Mastery)","Obelisk of the Void","Stormsinger Fulmination Charge","Stat Stick (Crit)","Stat Stick (Versatility)","Tome of Unraveling Sanity","Tarnished Sentinel Medallion","Infernal Writ","PVP Badge of Dominance","Terror From Below","Swarming Plaguehive","PVP Insignia of Dominance","Horn of Valor","Moonlit Prism","Star Gate","Pharameres Forbidden Grimoire","Deteriorated Construct Core","Naraxas' Spiked Tongue","Twisting Wind","Bough of Corruption","Fury of the Burning Sky","Spectral Thurible","Portable Manacracker","Oakheart's Gnarled Root","Devilsaur Shock-Baton","Icon of Rot","Aran's Relaxing Ruby","Caged Horror","Corrupted Starlight","Mrrgria's Favor","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [144065,5523,8176,5882,7142,6583,7775,6405,7206,5568,6066,6234,7483,5042,5557,7334,7216,5595,5921,3620,6053,6075,3146,7645,3844,6942,4080,6483,6957,3268,4770,6579,5909,3560,4160,3915,3993,2182,2499,3842,1927,3440,614,85]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,4858,5784,6591,6143,6926,5412,7575,7138,5292,4640,5918,5498,7832,7766,4402,5089,5077,5335,3781,4026,4738,5247,4180,3702,5797,5335,6022,6062,5768,3146,5054,1746,4668,4240,1111,1790,3989,3575,2849,2473,2550,2263,2201]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,3497,7211,9202,7393,6378,8102,4706,4312,6977,5634,5894,4791,5219,6418,6663,5859,5433,4466,4676,5436,3883,3351,6096,4210,4171,4038,5053,4281,2730,3474,3539,3446,3022,3137,3177,2339,1693,2556,988,2652,1775,173,675]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5173,6016,4601,4904,6573,5944,5063,5855,5120,4740,5205,5872,5332,5290,4448,5291,6584,4778,4206,4696,4881,1939,4264,1451,5447,2971,5608,4956,3015,4961,6024,4287,3161,3141,3532,2953,2471,1443,2783,2223,2474,1758,718]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,4177,4956,5189,6892,4387,4801,5387,6690,5211,3354,4502,4696,3325,65412,2805,5211,4221,3689,2520,2722,4127,5083,5835,3446,5490,2945,4281,4803,2711,2541,2657,2758,2992,2488,2137,2752,2093,2263,2646,1633,1212,1555,1473]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,5494,5549,5378,4244,82295,6056,5143,5032,5107,3827,4729,4772,5609,0,63574,4194,4621,59888,5181,4119,3204,2160,3576,2122,4158,2768,4024,3754,3200,48233,4072,3037,2200,1706,3805,1303,2748,2604,317,3485,2381,1812,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,106589,92923,78040,76858,0,71270,68764,66780,65063,66695,61937,60715,59288,0,0,55887,54774,0,57145,50553,50208,55530,43455,55474,40581,50178,40431,40930,47823,0,37112,43199,44563,43220,41984,39121,38865,36255,35960,34104,33387,32544,26440]
        }]
    });