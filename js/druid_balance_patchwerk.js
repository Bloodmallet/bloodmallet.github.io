Highcharts.chart('druid_balance', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Druid - Balance - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 10:21:45.335894'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Dreadstone of Endless Shadows","Stormsinger Fulmination Charge","Padawsen's Unlucky Charm","Erratic Metronome","Tome of Unraveling Sanity","Stat Stick (Versatility)","Stat Stick (Crit)","Stat Stick (Haste)","Charm of the Rising Tide","PVP Badge of Dominance","Chrono Shard","Infernal Writ","Naraxas' Spiked Tongue","Star Gate","PVP Insignia of Dominance","Moonlit Prism","Horn of Valor","Deteriorated Construct Core","Fury of the Burning Sky","Obelisk of the Void","Devilsaur Shock-Baton","Bough of Corruption","Twisting Wind","Darkmoon Deck: Hellfire","Portable Manacracker","Spectral Thurible","Swarming Plaguehive","Oakheart's Gnarled Root","Aran's Relaxing Ruby","Infernal Alchemist Stone","Icon of Rot","Caged Horror","Corrupted Starlight","Mrrgria's Favor","Pharameres Forbidden Grimoire","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [132744,8905,3309,6937,6927,7417,7305,8041,6266,7956,6393,4812,5803,6021,7261,5544,6711,6127,4209,7228,6485,5037,5740,7162,5037,4551,4005,7240,5862,0,6134,2465,5327,4466,3905,0,4040,3545,3226,2876,3491,3886,3067,1628,1102,834]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8394,4182,5214,5103,5652,6260,5461,5217,5097,7439,6582,6283,5941,5088,6231,5205,5613,5003,6637,3272,4939,4615,7082,3857,5018,5312,5885,6140,0,4639,5602,2721,3452,3179,0,4141,2814,3004,4279,2568,1858,2542,2181,1971,1386]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,6929,5224,5552,5885,6061,4822,5195,5475,4745,5593,6173,4085,4979,5298,5421,5190,5642,4796,5498,5220,5429,4237,4170,3613,4051,3314,4952,4656,0,5480,2986,4627,4130,2679,0,2799,1708,2495,2381,2558,3484,2489,2785,1798,1851]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,7120,3494,4446,6692,5281,5742,4523,5589,5149,5731,4986,6081,5519,4552,5304,4454,3619,3647,5052,4509,2640,3839,5499,3687,4496,3987,4746,4841,0,5078,4026,1749,3513,3450,0,3278,2485,1784,2975,3218,1063,1407,1957,1244,509]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6279,3540,3759,4340,5797,5213,6048,4380,4827,66734,4728,4683,3756,4901,4700,4652,4899,4643,4847,3552,4836,4614,3947,3600,3005,3952,4062,4570,4211,4420,3327,4573,3069,2164,3947,3288,2336,2127,2215,1682,2286,1580,621,1637,1025]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,83115,3171,5237,5364,67738,4039,3447,4718,4339,0,3238,4716,4732,61567,2895,3694,4525,3940,4993,2576,3551,1748,5288,3324,3362,2796,4043,4447,4651,3105,50184,2942,2684,2784,4018,2491,2490,2757,2049,1833,2229,3963,3554,690,1553]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,91337,68692,64818,0,61845,62497,60845,59893,0,58880,57691,58370,0,56640,56370,54717,56053,43826,51394,49799,50564,42083,50397,48567,47916,40152,39520,60365,40181,0,44939,44041,45425,54981,41174,41481,41235,38327,36767,35122,33270,31528,33614,23600]
        }]
});
