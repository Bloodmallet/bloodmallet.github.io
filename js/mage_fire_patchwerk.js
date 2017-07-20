Highcharts.chart('mage_fire', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Fire - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:41:10.719110'
    },
    xAxis: {
        categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Stat Stick (Versatility)","Horn of Valor","Charm of the Rising Tide","Stormsinger Fulmination Charge","Stat Stick (Crit)","Padawsen's Unlucky Charm","Erratic Metronome","Tome of Unraveling Sanity","Chrono Shard","Stat Stick (Haste)","Infernal Writ","Obelisk of the Void","PVP Badge of Dominance","Star Gate","Portable Manacracker","Naraxas' Spiked Tongue","Fury of the Burning Sky","Deteriorated Construct Core","PVP Insignia of Dominance","Spectral Thurible","Bough of Corruption","Twisting Wind","Moonlit Prism","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Darkmoon Deck: Hellfire","Icon of Rot","Aran's Relaxing Ruby","Swarming Plaguehive","Infernal Alchemist Stone","Mrrgria's Favor","Wriggling Sinew","Pharameres Forbidden Grimoire","Caged Horror","Corrupted Starlight","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        borderColor: '#bbb'
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
        data : [0,123233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [9773,0,7143,3119,5900,7355,5504,6827,4874,7109,6128,6523,5548,5516,7314,5712,5509,5426,6936,4678,5985,7694,5524,5714,5821,5706,4563,6855,5989,5550,7084,4543,0,5363,5260,4736,0,3686,3329,3687,3229,2732,1023,1884,1502,1420]
    }, {
        name: '930',
        color: '#db843d',
        data: [11044,0,6929,3996,6923,5357,6139,4319,5476,5263,6104,4626,6153,5485,4997,5746,6623,7321,4560,6772,6465,6058,4955,4053,5783,4093,5497,4945,4982,3846,1562,3914,0,3481,2100,3607,0,3768,2956,2027,1866,3282,3755,3645,1097,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [9535,0,5657,2996,3319,5210,5005,6449,6075,6147,4799,5635,4432,5056,6359,5497,4009,3220,5394,4422,5895,5203,4496,4705,6597,5501,3073,5283,5620,3896,5084,5238,0,4020,3724,3033,0,2390,2544,3985,3081,1153,2328,2001,1463,1782]
    }, {
        name: '910',
        color: '#71588f',
        data: [6845,0,6006,3901,5201,4635,4848,4028,5129,4371,5196,4743,5739,4909,5158,4282,6321,3863,4805,4558,5246,5629,3118,4447,3889,2972,4724,5247,4953,5990,3630,2087,0,3215,3387,4469,0,2912,2917,3026,1811,2579,3230,1207,1441,1218]
    }, {
        name: '900',
        color: '#89a54e',
        data: [8527,0,3928,2958,5556,4768,5018,4686,3491,4863,4149,4140,3845,4032,59461,4644,3229,5952,4286,3778,5603,3954,3983,1984,4561,4179,3343,4348,4578,1844,2143,3953,3547,2366,3058,2334,4146,2320,3254,1429,1385,2186,2080,2645,0,333]
    }, {
        name: '890',
        color: '#aa4643',
        data: [91678,0,64259,3942,2196,4721,3833,4225,3500,56442,3675,4492,3779,4014,0,3528,3342,4208,3736,3826,3884,4694,4450,4761,4208,2845,51137,4369,4176,3126,4733,2515,4653,2688,2245,3345,3800,3231,1645,3465,3256,2173,1397,1827,1888,1077]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,71021,60427,57123,55405,54559,55939,0,54119,53521,54157,54280,0,52282,52612,51011,50811,51391,45715,42846,49346,49228,42258,47148,0,40647,40681,44565,43603,44936,55437,41253,42386,40044,51398,35620,35782,34223,36171,35943,34152,29148,29452,20096]
    }]
});
