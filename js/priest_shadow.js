    Highcharts.chart('priest_shadow', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shadow T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Terror From Below","Unstable Arcano Crystal","Tome of Unraveling Sanity","Spectral Thurible","Stat Stick (Mastery)","Padawsen's Unlucky Charm","Stat Stick (Crit)","Dreadstone of Endless Shadows","Oakheart's Gnarled Root","Stormsinger Fulmination Charge","Icon of Rot","Infernal Writ","Stat Stick (Versatility)","Erratic Metronome","Naraxas' Spiked Tongue","Stat Stick (Haste)","Whispers in the Dark","Devilsaur Shock-Baton","Bough of Corruption","Twisting Wind","Charm of the Rising Tide","PVP Badge of Dominance","Star Gate","Fury of the Burning Sky","Chrono Shard","Deteriorated Construct Core","PVP Insignia of Dominance","Portable Manacracker","Aran's Relaxing Ruby","Swarming Plaguehive","Caged Horror","Horn of Valor","Moonlit Prism","Corrupted Starlight","Obelisk of the Void","Wriggling Sinew","Eye of Skovald","Pharameres Forbidden Grimoire","Elementium Bomb Squirrel Generator","Mrrgria's Favor","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [137136,9412,8163,6199,8705,7656,6999,6378,5254,6908,5716,6857,5929,6302,7819,6173,7093,6514,6065,6454,7294,7978,7525,5155,7037,4846,4542,6005,5065,5819,5494,4101,3698,3003,3980,2847,4475,2699,3868,3197,2921,1830,807,1597]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,9764,8164,1552,9001,7777,6035,6087,7499,4872,7861,7544,6304,6829,5006,6063,4292,6002,5542,4000,8884,7659,4644,6193,6745,6799,5103,6359,5061,6228,3462,5333,4352,5213,4223,3919,3894,2013,1509,3219,2636,3022,1365,812]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7918,7599,5131,7862,6887,6607,6687,6142,7923,6422,4281,6139,5948,5647,7211,5882,6076,5374,5573,3686,5998,5757,5483,6461,3571,6476,7004,3109,6310,4846,3823,3613,2979,4040,4796,5181,4486,4998,4044,3312,2755,2884,1814]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,8460,7448,4786,5917,6106,4963,4111,3916,4030,4910,6147,4908,4943,4936,3079,5133,2640,5945,4281,7444,5869,3710,3600,6478,5187,5750,3983,5337,4487,1884,2441,3789,4583,2440,3915,1419,1964,1981,1260,2704,2025,1135,543]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6611,7511,2923,82516,4783,4231,6835,5474,4611,5000,4335,4867,3755,5819,4775,4727,6499,3339,4548,5014,4499,4020,5949,4274,3653,3008,5109,3241,4381,4093,5495,3727,3971,3962,2189,4349,4155,4082,4380,1196,3472,2538,1776]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,91646,82826,3369,0,74939,4181,4384,4682,4941,5487,4704,5297,5916,4135,4469,3774,3763,4438,4097,4186,4918,60531,4242,5662,3268,4038,5484,4264,3769,3043,2717,3903,2633,4096,2951,3099,1630,859,3322,2459,2476,120,1133]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,91774,0,0,65333,62973,64144,63585,61189,61190,61190,60192,60137,60357,61179,60040,57668,57540,49781,49274,0,54932,48579,57879,56047,47179,53773,43597,49125,47842,47816,47376,46328,48274,46350,44908,44195,41306,41928,40997,40963,28230]
        }]
    });