Highcharts.chart('warlock_affliction_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Affliction - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 12:22:27.765756'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Tarnished Sentinel Medallion","Erratic Metronome","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Charm of the Rising Tide","Stat Stick (Haste)","Padawsen's Unlucky Charm","Stat Stick (Crit)","Chrono Shard","Stormsinger Fulmination Charge","Terror From Below","Tome of Unraveling Sanity","Infernal Writ","PVP Badge of Dominance","Moonlit Prism","Obelisk of the Void","PVP Insignia of Dominance","Naraxas' Spiked Tongue","Star Gate","Horn of Valor","Darkmoon Deck: Hellfire","Fury of the Burning Sky","Spectral Thurible","Deteriorated Construct Core","Bough of Corruption","Portable Manacracker","Devilsaur Shock-Baton","Twisting Wind","Swarming Plaguehive","Oakheart's Gnarled Root","Icon of Rot","Infernal Alchemist Stone","Aran's Relaxing Ruby","Pharameres Forbidden Grimoire","Corrupted Starlight","Caged Horror","Mrrgria's Favor","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [137030,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,4731,7909,5859,7130,7256,8005,8001,7160,6545,6737,6875,5992,6638,7386,7755,8097,4755,6215,5853,3541,5598,3934,0,5256,5027,6068,6434,7147,3704,6313,4966,5895,3616,0,2653,2317,4041,3260,1796,2711,2006,1948,2318,1428]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,5119,6255,7465,6464,7442,5546,5146,5874,7775,7053,6765,5848,6924,6838,5110,4659,5062,4964,4763,5556,7683,5504,0,4732,5162,6257,5129,5255,5019,5008,2819,4049,3518,0,3523,3736,2350,3177,4323,3472,3030,3065,2885,1216]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,5876,7200,5751,6014,5418,7213,6507,5558,4077,5111,4987,6211,4145,6923,6211,4642,5960,3846,3989,2218,5036,5479,0,1915,4411,5933,6067,4500,3971,5042,4289,3628,4909,0,3237,3689,2788,2258,1962,2051,1646,2986,461,1251]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,2628,5782,5435,6469,5342,3439,4188,4968,5696,5012,5115,4822,6438,5686,4596,5936,3790,4900,4544,5117,4001,2877,0,2905,3432,5147,4254,5821,2947,5274,2544,2314,1292,0,2514,3792,2379,1821,4375,2215,2597,1766,2251,2211]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,3779,5293,4657,4178,5269,6514,6420,5290,5773,5588,5442,6179,3184,66349,5235,3714,3775,3743,3470,3015,4540,3190,4009,5876,2753,4417,5529,3882,2812,3738,2872,4161,5129,3363,1309,1539,2076,2004,2628,3832,3777,900,1267,1652]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,4041,4991,74406,4373,4657,3839,67638,3981,3467,3560,3862,3185,65997,0,3671,3632,4034,2510,3562,2617,5053,3627,3672,1411,51796,3427,2062,4304,3224,4894,4043,2366,2144,4578,3826,3343,2076,3140,1559,871,1091,3119,1335,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,101944,81054,0,66951,65375,65877,0,64852,64034,62330,61586,62335,0,0,58702,54612,55069,51436,50727,53400,41881,49081,66008,51034,0,40325,41077,39135,48067,39331,47225,45570,46853,54698,45344,43635,42731,42319,40368,40428,38399,35376,35762,28335]
    }]
});
