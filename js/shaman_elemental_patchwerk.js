Highcharts.chart('shaman_elemental_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Shaman - Elemental - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 11:24:02.679604'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Dreadstone of Endless Shadows","Stat Stick (Crit)","Tome of Unraveling Sanity","Charm of the Rising Tide","Padawsen's Unlucky Charm","PVP Badge of Dominance","Infernal Writ","Stormsinger Fulmination Charge","Stat Stick (Haste)","Erratic Metronome","Chrono Shard","Naraxas' Spiked Tongue","Horn of Valor","PVP Insignia of Dominance","Star Gate","Obelisk of the Void","Deteriorated Construct Core","Darkmoon Deck: Hellfire","Bough of Corruption","Fury of the Burning Sky","Twisting Wind","Portable Manacracker","Devilsaur Shock-Baton","Spectral Thurible","Moonlit Prism","Icon of Rot","Oakheart's Gnarled Root","Infernal Alchemist Stone","Aran's Relaxing Ruby","Swarming Plaguehive","Mrrgria's Favor","Caged Horror","Corrupted Starlight","Wriggling Sinew","Eye of Skovald","Pharameres Forbidden Grimoire","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [133407,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,3724,8964,6652,7542,7750,6617,6552,5861,7765,6963,7159,6744,6207,6893,7405,5308,5697,6445,5023,7221,4459,6471,0,6962,4598,6370,7313,4992,3775,4512,3868,2895,0,3513,5047,4576,4301,2318,2206,2737,2193,1982,911,823]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,4246,5919,7023,5741,4875,6569,5742,7488,6854,7228,6587,5872,5468,5387,5267,6082,4806,4552,5504,5844,5922,6783,0,5503,4329,5619,5082,4316,4152,4167,3059,4858,0,3084,1612,2064,3464,3749,3122,2887,3279,2500,3064,2090]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,4375,7599,5238,6903,6645,4878,5039,5958,5828,4337,3966,5053,4914,6807,6134,5739,5318,3098,4247,6651,3809,5648,0,4935,4270,5731,6098,4128,3564,4771,4294,3158,0,5179,7062,3540,208,3863,3007,2232,3252,1970,380,606]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3935,5316,4233,4990,5761,6430,5476,5986,3551,5368,5230,4784,3899,3895,4396,5324,2804,4457,4731,4259,4225,3778,0,5643,4361,5073,4176,3415,4703,3868,4155,3959,0,2720,2253,1825,3443,878,1212,2229,3611,2358,2105,1340]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,3963,5650,6587,5531,3618,3550,4474,69297,5686,5337,6173,4543,4538,5081,4450,4035,3140,4247,2573,5138,4791,5432,4735,4665,1627,3721,3356,3741,3103,4278,2582,2975,4959,1895,2689,3452,3869,2941,2268,1464,2107,2891,459,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,3177,74097,4491,2901,70190,5524,5790,0,63693,4159,2959,5395,4670,3921,4952,4031,4454,4277,4184,4161,3571,4328,4546,3496,4236,3764,5484,3325,52017,3827,3381,4157,3174,1755,3393,2754,515,1612,3580,3561,2140,1054,1920,1979]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,88850,0,70365,65735,0,62147,61685,0,0,59074,59913,58105,59146,56827,56116,55900,53358,52279,52401,44927,49198,43177,64655,42416,50132,43047,41539,48899,0,45107,45776,44592,56276,45445,40889,40595,40672,40807,37930,37643,35173,36871,36079,27794]
    }]
});
