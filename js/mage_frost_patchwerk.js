Highcharts.chart('mage_frost', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Frost - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:52:46.208737'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Terror From Below","Tarnished Sentinel Medallion","Stat Stick (Crit)","Unstable Arcano Crystal","Tome of Unraveling Sanity","Stat Stick (Versatility)","Whispers in the Dark","Padawsen's Unlucky Charm","Erratic Metronome","PVP Badge of Dominance","Stat Stick (Haste)","Dreadstone of Endless Shadows","Chrono Shard","Charm of the Rising Tide","Star Gate","Stat Stick (Mastery)","Infernal Writ","Horn of Valor","Deteriorated Construct Core","Stormsinger Fulmination Charge","Devilsaur Shock-Baton","PVP Insignia of Dominance","Darkmoon Deck: Hellfire","Twisting Wind","Bough of Corruption","Portable Manacracker","Spectral Thurible","Icon of Rot","Obelisk of the Void","Moonlit Prism","Oakheart's Gnarled Root","Infernal Alchemist Stone","Swarming Plaguehive","Naraxas' Spiked Tongue","Mrrgria's Favor","Fury of the Burning Sky","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Pharameres Forbidden Grimoire","Unstable Horrorslime","Aran's Relaxing Ruby","Corrupted Starlight","Caged Horror","Figurehead of the Naglfar"]
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
        data : [140835,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8733,10703,6730,5822,6417,6737,3594,9123,6482,7196,7555,8444,5356,4829,9331,5089,6274,6498,7248,6594,5574,5292,0,7053,7861,7912,4665,2928,4310,4559,3942,0,3911,5016,4127,5757,4149,3806,2623,3779,1437,3021,3891,3274,2264]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9308,6250,7791,3204,9757,6701,5979,6266,8386,8195,6695,5114,7018,7344,6692,6615,5220,6734,7691,6214,5220,4992,0,6981,5491,5398,5189,5631,3721,4949,4699,0,4745,3999,3741,3787,2971,2861,3301,4333,1584,4007,2483,1901,2866]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,6155,6970,6499,4648,6231,6527,6164,6216,5157,3938,4468,5506,5584,5755,5341,5899,5002,4363,4520,6019,3120,5565,0,7151,5168,6614,5044,3405,4985,5667,5499,0,2863,4232,3289,3874,2634,3439,2865,1570,1433,3426,2793,3020,208]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6114,8259,5796,1846,6584,5136,4460,5677,6722,7119,6088,4570,5398,6055,7576,4345,6521,4612,6226,4780,4890,4140,0,5423,6621,6389,3491,5770,5238,4117,2602,0,4535,4042,2253,3499,2240,3778,4723,1202,3782,2717,1490,25,1001]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5773,6303,4724,4044,74685,6648,6841,6358,3406,3646,4266,6475,4590,4110,5231,4744,4269,3997,5518,5656,5476,4910,5507,4730,5341,3828,3849,3008,4176,4494,4403,3510,4234,2586,3434,3919,3040,1650,21,2992,614,2430,769,3385,1399]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,80818,71981,5527,4040,0,4228,3378,4934,4111,4711,6802,4406,5785,64540,3601,4620,3349,3969,4867,2286,1127,3501,4358,4696,4840,4598,57470,2948,2905,2699,3478,5608,1538,4214,2008,2901,2821,2695,3850,4281,1919,2293,1622,2446,1418]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,70413,83812,0,63688,69220,60830,64565,61680,60427,59434,59606,0,51278,54294,54776,55056,48641,52496,58543,55401,73259,46676,46687,45292,0,54665,49816,48664,49663,61210,46272,43281,45595,40398,45515,44221,40744,37411,41365,34012,29619,27961,31470]
    }]
});
