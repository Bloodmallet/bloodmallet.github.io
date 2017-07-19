Highcharts.chart('mage_fire', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Mage Fire'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 11:51:29.787249'
        },
        xAxis: {
      categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Horn of Valor","Padawsen's Unlucky Charm","Stat Stick (Versatility)","Erratic Metronome","Stormsinger Fulmination Charge","Tome of Unraveling Sanity","Stat Stick (Crit)","Charm of the Rising Tide","Chrono Shard","Stat Stick (Haste)","Infernal Writ","Obelisk of the Void","PVP Badge of Dominance","Star Gate","Portable Manacracker","Fury of the Burning Sky","Naraxas' Spiked Tongue","Deteriorated Construct Core","Spectral Thurible","Twisting Wind","PVP Insignia of Dominance","Bough of Corruption","Moonlit Prism","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Darkmoon Deck: Hellfire","Swarming Plaguehive","Icon of Rot","Aran's Relaxing Ruby","Infernal Alchemist Stone","Mrrgria's Favor","Wriggling Sinew","Pharameres Forbidden Grimoire","Corrupted Starlight","Caged Horror","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [10500,123934,6555,3390,6198,5650,7246,5414,8180,6585,5443,6575,7604,6234,7040,6557,6627,6869,6065,5942,6967,6907,4711,3202,5936,4631,6926,5171,5270,4797,5870,4967,0,3657,3872,2234,0,4822,3369,3554,2546,2033,3520,2325,1415,2192]
        }, {
            name: '930',
            color: '#db843d',
            data: [9909,0,6972,3260,5942,4630,4669,6028,5507,5215,5939,4689,6441,5214,4039,6296,5428,5019,6201,5626,6334,6470,4106,6193,6145,4531,5634,4262,7660,5367,3914,3458,0,4461,3940,3529,0,2607,2566,2482,2616,1492,1991,2220,1867,585]
        }, {
            name: '920',
            color: '#4198af',
            data: [9132,0,5893,3388,4242,7556,6465,7128,4137,4650,4972,6090,5196,4798,5668,4542,5370,6188,5237,4741,6324,4775,5481,3116,5294,4759,5000,5296,4992,3466,3860,3697,0,3435,3096,2784,0,2891,3846,4083,3660,2380,3758,3435,919,1767]
        }, {
            name: '910',
            color: '#71588f',
            data: [9164,0,5644,3077,4815,3477,3845,3068,5209,5359,5567,3957,5703,6013,4020,4997,3824,3521,3539,4616,4712,5960,3749,4123,5678,4414,4392,3967,4260,4045,2442,4391,0,3569,3074,3527,0,1170,1483,2546,2292,3637,2146,1328,761,644]
        }, {
            name: '900',
            color: '#89a54e',
            data: [6839,0,4847,3127,4614,4879,4053,5329,4702,4680,4979,5230,58831,3745,5438,4415,4426,4613,4841,3201,4842,3301,3745,3785,3180,3255,5360,2398,3877,2990,5656,2971,3646,3590,3522,3239,4360,4443,3122,1607,1874,1680,1400,1535,1610,133]
        }, {
            name: '890',
            color: '#aa4643',
            data: [92081,0,63569,3683,3238,4026,4372,2881,2746,3008,3805,2687,0,4126,57001,3499,4110,4724,4556,4849,4711,5183,2666,3912,4895,50897,3632,3413,4180,3688,1596,3552,4730,1639,2532,2854,4668,1656,1740,1693,1407,3051,1541,2191,894,1028]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,72020,60502,57490,55409,55581,54320,55000,53589,54789,0,53193,0,51999,52015,50811,50136,50673,45177,42743,49902,49500,42504,0,41292,47313,41413,44078,43658,43810,55220,40604,40891,41832,50731,36295,36321,35487,36080,35221,33809,29592,29268,20538]
        }]
});
