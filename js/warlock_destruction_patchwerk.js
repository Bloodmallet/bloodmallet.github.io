    Highcharts.chart('warlock_destruction', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Destruction T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Whispers in the Dark","Stormsinger Fulmination Charge","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Charm of the Rising Tide","Padawsen's Unlucky Charm","Stat Stick (Crit)","PVP Badge of Dominance","Erratic Metronome","Tome of Unraveling Sanity","Stat Stick (Haste)","Stat Stick (Versatility)","Infernal Writ","Chrono Shard","Terror From Below","Horn of Valor","PVP Insignia of Dominance","Obelisk of the Void","Star Gate","Naraxas' Spiked Tongue","Deteriorated Construct Core","Moonlit Prism","Portable Manacracker","Bough of Corruption","Twisting Wind","Fury of the Burning Sky","Spectral Thurible","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Swarming Plaguehive","Icon of Rot","Aran's Relaxing Ruby","Mrrgria's Favor","Pharameres Forbidden Grimoire","Wriggling Sinew","Caged Horror","Corrupted Starlight","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [131249,5310,7396,6223,6191,5436,6831,7364,6795,7049,7135,7004,7085,6984,7047,5632,6716,6085,5938,3920,6368,7249,7041,6865,4095,7069,6746,5970,4702,4655,4641,2778,1903,2081,3931,4338,2792,2876,3245,2587,1387,805,2793,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,4664,6917,6254,6246,7333,5740,4524,5741,6260,4555,5188,6386,5607,5127,6882,4580,6399,5054,7582,4104,5700,3268,4696,3194,4960,6115,4596,3323,4297,2952,4671,4868,4764,2704,2807,2969,3447,3037,2926,1789,3044,418,1191]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,1777,6107,6179,6176,5108,5094,5781,4991,4934,7134,5873,5448,5175,6026,4123,5433,4159,3247,3041,4392,5555,3691,5665,5792,5628,4600,4817,4240,3909,3912,1615,3002,2558,3680,2919,2600,1816,1771,3008,4138,2522,1077,688]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,2998,5887,4706,4441,3987,5542,6099,4403,5495,4263,3784,6019,5767,4852,5218,4813,4808,4191,4202,4083,4400,4134,4441,4301,4097,4722,5564,2527,1987,3649,4973,4105,4095,915,3389,3720,2369,1315,1646,2093,1105,1036,1368]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,4757,6170,3636,4971,6092,4674,5203,5471,4626,4621,6454,65750,4818,4253,4481,5292,5289,4621,3482,5093,5707,3511,5227,3176,3931,4657,4370,3177,3499,2197,1843,2450,1858,3266,1643,2292,4310,3197,2309,1817,2485,2407,1053]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,2800,72741,4690,3759,3096,3675,63278,4812,4442,4454,3418,0,3448,3925,3754,4109,60293,2819,3476,2362,3816,2883,3860,2852,3640,3633,4169,3099,48736,3924,3370,2106,2590,3050,2482,1538,1612,0,973,2202,2360,1246,1735]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,86761,0,64332,62303,62316,60891,0,59284,58592,59057,59175,0,58493,57730,58227,56558,0,54111,53445,51403,43360,48168,41511,48796,41986,40667,40220,47386,0,43876,42902,42372,42550,41428,39026,38734,38114,39233,38156,34736,32445,31647,24601]
        }]
    });