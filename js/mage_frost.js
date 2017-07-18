    Highcharts.chart('mage_frost', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Frost T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Terror From Below","Tarnished Sentinel Medallion","Stat Stick (Crit)","Unstable Arcano Crystal","Tome of Unraveling Sanity","Whispers in the Dark","Stat Stick (Versatility)","Erratic Metronome","Padawsen's Unlucky Charm","Stat Stick (Haste)","Chrono Shard","Charm of the Rising Tide","PVP Badge of Dominance","Dreadstone of Endless Shadows","Star Gate","Stat Stick (Mastery)","Deteriorated Construct Core","PVP Insignia of Dominance","Horn of Valor","Devilsaur Shock-Baton","Stormsinger Fulmination Charge","Infernal Writ","Twisting Wind","Spectral Thurible","Bough of Corruption","Portable Manacracker","Icon of Rot","Obelisk of the Void","Oakheart's Gnarled Root","Moonlit Prism","Naraxas' Spiked Tongue","Swarming Plaguehive","Mrrgria's Favor","Fury of the Burning Sky","Eye of Skovald","Wriggling Sinew","Elementium Bomb Squirrel Generator","Pharameres Forbidden Grimoire","Unstable Horrorslime","Aran's Relaxing Ruby","Caged Horror","Corrupted Starlight","Figurehead of the Naglfar"]
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
            data: [140792,8151,9462,6945,4132,8759,5173,5415,5731,7140,7563,7853,7985,6796,6491,10035,7959,8180,7247,6924,5039,7401,4900,8387,6079,6768,8221,4960,4894,4472,3230,5445,3004,1126,3730,4138,3570,1135,4549,1411,2480,1889,1734,1202]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,7473,7495,6333,3474,5555,5450,6527,8404,6446,5599,6724,7538,5364,5705,5735,5058,7161,5145,3174,5760,6470,6372,6441,5842,6867,6775,3072,5712,6590,5798,3876,4967,5936,5354,2867,2718,5004,1922,1103,3933,4172,1663,1909]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,9971,7651,8077,4166,7763,6190,6523,5294,6600,6665,5649,4728,6478,6870,4926,4844,7035,4854,7665,5115,4316,5708,6511,5326,6936,5466,4673,2921,3136,4832,3650,4328,1523,3981,3281,2220,927,3177,2495,2156,995,1730,1102]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,4421,6044,5733,3774,4833,4104,6821,5042,6491,4627,5862,4109,5228,4377,7184,4677,5809,4261,2970,4558,5129,4634,4225,2761,5332,4489,4063,4464,5286,3444,4158,3359,2622,3582,1895,2795,4927,3070,2778,3876,2348,3681,1837]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5851,7877,5456,3586,76247,6247,4283,5022,4079,6115,4285,6546,4581,5268,5379,6134,5224,5170,4186,4091,4570,4927,5663,5852,4315,5678,4274,4706,3428,4229,3244,2055,4080,3516,3873,3714,1162,2341,1238,2754,2910,2141,1946]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,80949,71368,4988,3385,0,4546,6482,5006,3808,4122,4081,63668,5175,4022,5628,3855,4457,2302,4617,2363,4297,3099,5466,56554,5076,4896,2182,3837,3358,2523,3906,4379,1262,2356,2358,558,3558,2738,2703,2211,2482,1249,452]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,69672,82961,0,68565,62073,63281,62781,62148,61363,0,60564,60244,48976,54643,48076,56933,55376,57815,52366,54861,45926,0,46311,44661,55668,49462,49073,50109,43323,45144,46494,40427,44302,46605,41241,37930,40669,33076,27321,28139,31631]
        }]
    });