Highcharts.chart('druid_balance', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Druid - Balance - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 01:34:52.957060'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Dreadstone of Endless Shadows","Stormsinger Fulmination Charge","Tome of Unraveling Sanity","Padawsen's Unlucky Charm","Erratic Metronome","Stat Stick (Versatility)","Stat Stick (Crit)","Stat Stick (Haste)","Charm of the Rising Tide","PVP Badge of Dominance","Chrono Shard","Infernal Writ","Naraxas' Spiked Tongue","Star Gate","PVP Insignia of Dominance","Moonlit Prism","Horn of Valor","Deteriorated Construct Core","Fury of the Burning Sky","Obelisk of the Void","Devilsaur Shock-Baton","Twisting Wind","Spectral Thurible","Bough of Corruption","Darkmoon Deck: Hellfire","Portable Manacracker","Swarming Plaguehive","Oakheart's Gnarled Root","Aran's Relaxing Ruby","Infernal Alchemist Stone","Icon of Rot","Caged Horror","Corrupted Starlight","Mrrgria's Favor","Pharameres Forbidden Grimoire","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            borderColor: '#151515',
            events: {
                legendItemClick: function () {
                    return false; 
                }
            }
        },
        bar: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        },
    },
    series: [{
        name: '970',
        color: '#ffeb3b',
        data : [132502,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8881,4902,5665,5551,7543,6288,6576,7908,6283,7095,6159,6289,5418,6453,7020,6914,6535,6259,7632,3953,4911,4788,6821,4160,5297,4300,6113,4605,5656,0,5266,4121,5172,4733,0,3579,3398,3599,2923,1930,2850,2580,2703,1532,1132]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7176,4145,5367,5682,6010,5657,5942,7151,5329,6017,6440,5955,5763,5802,4628,5646,5754,5093,6099,4922,5175,4984,5723,5286,4785,4614,5772,3650,5437,0,6295,4020,3007,2349,0,3292,2330,1750,3607,3784,2453,2911,3048,2520,1436]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8018,4568,5918,5751,6756,5841,5408,5664,6576,5956,4777,6205,4825,5318,6939,4241,5067,5107,5312,4729,3452,4354,5638,2870,3749,4143,5184,4279,5334,0,5165,4432,3230,4030,0,3307,2579,2521,3112,2988,2242,2977,1605,571,599]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7184,2980,5222,6383,4432,5301,5333,6252,4210,5192,6263,4236,5351,4141,3740,4819,5335,3573,4529,3724,4631,4578,5479,4488,4087,4385,4367,3655,4820,0,4397,3682,4787,2330,0,3811,2132,2625,3290,2343,2731,1985,2076,1585,1925]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5518,4328,3561,4602,6372,5128,4305,65999,5669,3808,4313,5388,5097,4514,4869,4871,4222,4181,5540,4411,4013,3366,3922,2585,3771,2267,5158,3415,4812,4426,4424,3875,2269,2185,4986,2638,2558,2734,1413,2594,1962,1043,2273,584,668]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,83412,2756,5053,4579,66947,3922,4412,0,4326,4722,4077,4137,4617,62347,4037,4436,3988,3190,3811,3486,3269,2584,4814,2978,2488,3719,3222,49916,3499,3859,4062,1576,2421,2599,3659,2633,2081,2559,2990,1422,2126,2767,1647,1839,376]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,91612,68412,65746,0,61943,61992,0,60451,59410,57998,57594,57658,0,55898,56020,54765,56723,45121,50788,50274,50094,42343,50843,48850,47894,40530,0,39831,61059,39504,45201,44079,45594,55172,41550,41430,40666,38011,36532,34978,34072,31695,33417,24463]
    }]
});
