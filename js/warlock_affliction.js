Highcharts.chart('warlock_affliction', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Warlock - Affliction - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 19:02:10.256712'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Tarnished Sentinel Medallion","Erratic Metronome","Dreadstone of Endless Shadows","Stat Stick (Mastery)","Charm of the Rising Tide","Stat Stick (Haste)","Padawsen's Unlucky Charm","Chrono Shard","Stormsinger Fulmination Charge","Stat Stick (Crit)","Tome of Unraveling Sanity","Terror From Below","Stat Stick (Versatility)","Infernal Writ","PVP Badge of Dominance","Moonlit Prism","PVP Insignia of Dominance","Obelisk of the Void","Naraxas' Spiked Tongue","Star Gate","Horn of Valor","Darkmoon Deck: Hellfire","Spectral Thurible","Twisting Wind","Fury of the Burning Sky","Bough of Corruption","Deteriorated Construct Core","Portable Manacracker","Devilsaur Shock-Baton","Icon of Rot","Swarming Plaguehive","Oakheart's Gnarled Root","Infernal Alchemist Stone","Aran's Relaxing Ruby","Pharameres Forbidden Grimoire","Corrupted Starlight","Mrrgria's Favor","Caged Horror","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [132391,4202,6998,6894,7697,6154,5033,7327,6055,5616,7099,6151,4703,7229,4932,6088,5990,7071,5355,5719,3813,3758,6687,5731,0,5513,7010,3219,6005,5255,5942,5240,5592,3984,3886,0,2841,4547,3386,3027,2755,3276,3784,1713,1844,1888]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,6283,6169,5385,4516,6037,7000,6707,6341,6282,6119,5502,7121,7558,6509,6657,4202,4467,5020,3595,5489,5481,6067,3038,0,5009,4274,5711,5287,6287,5752,2711,2408,2330,4368,0,4146,2549,2983,3457,3242,2130,3771,1649,810,1617]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,2674,6325,5744,5819,5903,5924,5247,4831,4601,5382,5354,4921,4610,4737,5979,5651,6069,4533,5545,3619,4280,4617,4857,0,3540,6166,3530,5391,6035,5117,3930,4684,5473,4391,0,2836,3531,1810,2994,1925,1490,941,2280,890,504]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,3978,5856,6826,4714,5574,5642,4875,5376,6757,5136,4787,5217,4886,5964,3419,4961,4506,5057,4993,4083,1587,4757,4499,0,3110,5017,2616,5167,2819,4000,4472,2932,1847,2408,0,1859,3849,2819,1177,1485,3302,2115,1918,2369,823]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,2622,5336,4759,4576,4116,4047,4762,4865,4629,3663,5215,4525,65029,4246,5510,4853,5079,2498,1908,3695,5068,4459,3524,5290,3947,4515,2880,3579,4756,4429,2805,3186,3352,3243,4581,2876,1073,2894,4035,2971,2637,3026,2191,1358,2625]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,5123,4722,70328,5391,5189,4287,65417,4269,3946,4372,3269,3800,0,62157,4451,3199,3391,3809,2310,2294,2281,4206,2945,2892,49345,4357,3311,4426,4190,3897,2917,2802,4380,2456,2954,2404,1805,2157,2295,2823,1716,1753,2364,0,529]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,95965,77555,0,64143,62531,62740,0,61293,61066,59176,60016,59882,0,0,55914,56855,52067,53033,50674,50055,50486,41050,47121,63302,0,38018,48067,38718,39229,38717,45393,44204,43880,43758,52998,43237,42404,39569,37765,39423,37851,36069,33716,35057,26000]
        }]
});
