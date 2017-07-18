    Highcharts.chart('warlock_affliction', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Affliction T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Tarnished Sentinel Medallion","Erratic Metronome","Dreadstone of Endless Shadows","Stat Stick (Mastery)","Charm of the Rising Tide","Stat Stick (Haste)","Padawsen's Unlucky Charm","Stat Stick (Crit)","Chrono Shard","Terror From Below","Stormsinger Fulmination Charge","Tome of Unraveling Sanity","Stat Stick (Versatility)","Infernal Writ","PVP Badge of Dominance","Moonlit Prism","PVP Insignia of Dominance","Naraxas' Spiked Tongue","Obelisk of the Void","Horn of Valor","Star Gate","Spectral Thurible","Fury of the Burning Sky","Deteriorated Construct Core","Portable Manacracker","Twisting Wind","Bough of Corruption","Devilsaur Shock-Baton","Swarming Plaguehive","Oakheart's Gnarled Root","Icon of Rot","Aran's Relaxing Ruby","Pharameres Forbidden Grimoire","Mrrgria's Favor","Corrupted Starlight","Caged Horror","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [131852,3548,7631,6888,6034,6966,6525,7333,5850,6075,7856,7714,5310,5568,7544,6623,6047,5872,4197,5087,5457,5808,6256,6190,4089,5331,5918,6093,6633,4823,3773,4032,4360,3498,3798,4965,3788,2316,2702,3257,1796,3058,2431,463]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,5889,7799,5529,6810,6019,5598,6067,6470,6180,4262,5052,6236,6508,5062,5744,5417,6200,4584,3130,4107,1658,3673,5329,5141,2672,6433,7517,5501,7152,4527,3988,4611,4407,4571,2120,2435,4128,4177,2730,2608,1448,1478,1334]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,3391,4625,6524,5049,5848,6436,5397,6298,4048,8099,6290,5598,4173,6675,5513,5352,4419,4512,4531,3080,5754,5065,6633,4325,4490,4227,4038,3627,4167,4585,2892,3726,2890,1971,4525,3405,1552,2126,2673,2251,2274,890,93]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,2592,6185,5703,4311,3982,4790,4631,4301,6675,3242,4612,5456,5837,6194,5151,4486,4134,4793,5406,4223,3907,4064,4518,3177,2795,6366,4298,4805,5530,2613,3340,2648,3420,1940,2922,1525,3230,1146,2354,2467,1652,2449,2064]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5557,4752,4410,5320,5560,4582,4695,4983,4358,4113,4113,3898,4578,63772,4320,4222,5599,3301,2573,2598,3809,2469,4266,3994,2591,3005,3889,4828,3595,2862,1965,3273,3412,2763,869,3535,1926,1474,1816,1847,2541,162,1624]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,3267,4294,70606,5066,4392,4066,65790,3611,4319,3625,4483,63435,4191,0,4087,4585,4740,3969,4705,3212,3111,3903,3994,49506,4170,2652,3487,4020,4206,3986,4100,2694,2677,1561,3769,2392,3175,4655,2765,2236,1003,2166,334]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,96748,77962,0,63642,62977,63394,0,61650,60789,60977,59149,0,58963,0,56436,56489,50957,52863,48237,50967,48897,47145,40519,0,48079,40546,39051,38562,38381,45069,45448,44203,44893,44291,41377,38433,38946,38736,38005,36742,34768,34100,26868]
        }]
    });