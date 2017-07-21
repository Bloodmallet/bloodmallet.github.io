Highcharts.chart('mage_fire_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Fire - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 08:55:53.707605'
    },
    xAxis: {
        categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Horn of Valor","Stormsinger Fulmination Charge","Erratic Metronome","Charm of the Rising Tide","Stat Stick (Crit)","Padawsen's Unlucky Charm","Chrono Shard","Tome of Unraveling Sanity","Infernal Writ","Stat Stick (Haste)","PVP Badge of Dominance","Obelisk of the Void","Star Gate","Portable Manacracker","Naraxas' Spiked Tongue","Fury of the Burning Sky","Spectral Thurible","Deteriorated Construct Core","PVP Insignia of Dominance","Twisting Wind","Bough of Corruption","Moonlit Prism","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Darkmoon Deck: Hellfire","Aran's Relaxing Ruby","Swarming Plaguehive","Icon of Rot","Infernal Alchemist Stone","Mrrgria's Favor","Corrupted Starlight","Wriggling Sinew","Pharameres Forbidden Grimoire","Caged Horror","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
                    s += '<br/><span style="color: ' + this.points[i].series.color + '; font-weight: bold;">' + this.points[i].series.name +'</span>: ' + cumulative_amount; 
                }
            }
            return s;
        },
        shared: true,
        backgroundColor: '#eee',
        borderColor: '#bbb',
        style: {
            color: 'black'
        }
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
        data : [0,125575,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [11741,0,7808,3329,6645,8067,6798,7004,6748,6660,6947,7162,5977,6887,6620,6737,5620,5451,5956,6131,7257,5419,5088,5828,6014,4711,6688,7200,5889,5375,4585,0,4751,4368,4211,0,4707,4944,3214,2149,2245,2086,2302,0,321]
    }, {
        name: '930',
        color: '#db843d',
        data: [9967,0,6507,3893,5103,4191,5484,3652,5700,5009,4564,4480,5566,6283,8135,6018,5896,6810,4859,6748,6055,3226,4305,4748,7463,6050,5180,5291,5609,4636,3553,0,2986,4041,3697,0,2423,2453,2711,3866,4001,4141,2132,3703,875]
    }, {
        name: '920',
        color: '#4198af',
        data: [8816,0,5908,2885,4635,6598,6413,5602,5506,5365,6182,7816,5969,4465,4264,6251,5115,5237,5146,5392,5596,5273,4573,4720,4109,4028,6014,4954,3193,3907,5247,0,4320,4028,3214,0,3711,2966,3744,3531,1662,1185,3056,0,937]
    }, {
        name: '910',
        color: '#71588f',
        data: [8807,0,5276,3686,4398,5476,4309,7115,4361,6434,5922,3432,4652,5703,6105,3312,5663,4796,4758,6803,5451,3923,2987,2933,5427,4074,4516,5477,3913,3725,4052,0,2917,3818,4213,0,2374,1393,2685,2769,2602,2249,429,1793,1688]
    }, {
        name: '900',
        color: '#89a54e',
        data: [6381,0,5643,4134,5202,3874,3981,3867,5836,3599,4220,3862,3717,3182,59705,4884,5035,3392,3922,5540,4911,3763,4339,4488,4869,3644,4756,5523,3814,3643,3085,6412,3335,2405,1709,2723,3945,2819,2245,2469,2452,3032,3017,1227,889]
    }, {
        name: '890',
        color: '#aa4643',
        data: [96528,0,66083,2272,4205,3939,4320,5269,2843,3901,58323,4256,4161,4779,0,4282,3132,4591,5349,2744,4070,3038,2848,52530,4155,3464,3042,2825,2953,3189,2268,3113,1883,3263,4889,5149,944,733,2176,2778,1417,1127,733,2285,1081]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,75764,61821,59582,57587,54986,56334,55709,0,55067,55721,53982,0,53050,53736,51898,51682,47253,44525,51920,51927,0,43069,47839,43059,41778,45592,45212,46513,56882,44046,41686,41483,52223,37930,38457,36662,35082,37980,35816,32164,30154,20790]
    }]
});
