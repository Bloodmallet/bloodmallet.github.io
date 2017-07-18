    Highcharts.chart('mage_fire', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fire T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Horn of Valor","Erratic Metronome","Stat Stick (Versatility)","Stormsinger Fulmination Charge","Tome of Unraveling Sanity","Padawsen's Unlucky Charm","Charm of the Rising Tide","Stat Stick (Crit)","Chrono Shard","Stat Stick (Haste)","Obelisk of the Void","PVP Badge of Dominance","Infernal Writ","Star Gate","Naraxas' Spiked Tongue","Portable Manacracker","Fury of the Burning Sky","Deteriorated Construct Core","Bough of Corruption","PVP Insignia of Dominance","Spectral Thurible","Twisting Wind","Moonlit Prism","Oakheart's Gnarled Root","Devilsaur Shock-Baton","Swarming Plaguehive","Aran's Relaxing Ruby","Icon of Rot","Mrrgria's Favor","Wriggling Sinew","Caged Horror","Corrupted Starlight","Pharameres Forbidden Grimoire","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [9866,123010,7511,2564,6409,6572,7787,5481,6933,5226,6110,7995,5270,6675,5271,6289,5782,6849,7487,3823,6273,5648,6141,4383,5700,6421,4801,3188,5883,4689,6226,4827,4808,3261,3325,2469,3551,3943,2325,4140,2601,1817,2064,1086]
        }, {
            name: '930',
            color: '#db843d',
            data: [10557,0,6329,3356,6401,6119,7135,6129,5269,6655,4442,5274,5952,4952,6676,5658,5251,5239,3845,6305,6121,4120,6207,3906,6472,5896,5204,4768,5776,3605,3200,3645,3954,3294,3372,3899,2759,1534,2809,200,3274,1741,1206,225]
        }, {
            name: '920',
            color: '#4198af',
            data: [9329,0,5443,4034,3028,3740,3134,4819,6782,5019,6113,5556,6367,4516,4280,5820,5965,5084,5568,5724,7014,4629,6288,4041,4449,5382,3327,4070,5496,5101,4206,3726,3552,3873,3658,3332,3806,2688,2573,3546,2388,2606,1087,785]
        }, {
            name: '910',
            color: '#71588f',
            data: [7718,0,5990,3117,5977,5902,5774,6351,5273,4738,5138,6252,3692,3331,4757,4713,3662,5084,5175,3146,5003,4854,3833,5428,4956,5355,3936,4564,4269,4102,3522,3911,3148,2821,3951,2733,2492,3067,3200,3323,2143,2234,1526,2338]
        }, {
            name: '900',
            color: '#89a54e',
            data: [6169,0,4996,2382,4390,4057,4257,3437,3361,4685,4365,59132,4957,7403,4762,4112,5437,4157,3511,6058,4258,2798,3856,3010,4921,3929,4416,3239,5014,3736,4268,3908,2749,2540,2076,2899,2040,1357,1249,2380,2405,2016,128,939]
        }, {
            name: '890',
            color: '#aa4643',
            data: [94116,0,63951,3466,3679,4382,4802,5145,3684,3101,3563,0,3824,56316,4780,3864,3064,3418,4141,2591,4338,4231,4808,2465,3514,3772,2260,52197,3917,2536,1915,3333,2512,2500,3824,2377,2055,2742,1827,1974,2855,1099,2239,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,72530,60289,58404,55080,54718,54704,55301,54786,0,53649,0,52547,52292,52512,51109,50819,52294,46544,50089,43572,50461,43331,41887,48327,0,41328,44711,44883,43914,41085,42971,40810,36288,36459,36119,36548,34820,33084,30686,29498,20550]
        }]
    });