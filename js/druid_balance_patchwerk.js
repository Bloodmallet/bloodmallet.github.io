Highcharts.chart('druid_balance_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Druid - Balance - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 07:49:51.806037'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Stat Stick (Mastery)","Whispers in the Dark","Terror From Below","Dreadstone of Endless Shadows","Stormsinger Fulmination Charge","Padawsen's Unlucky Charm","Tome of Unraveling Sanity","Erratic Metronome","Stat Stick (Haste)","Stat Stick (Crit)","Charm of the Rising Tide","Chrono Shard","PVP Badge of Dominance","Infernal Writ","Naraxas' Spiked Tongue","Star Gate","PVP Insignia of Dominance","Moonlit Prism","Horn of Valor","Obelisk of the Void","Fury of the Burning Sky","Deteriorated Construct Core","Devilsaur Shock-Baton","Twisting Wind","Darkmoon Deck: Hellfire","Bough of Corruption","Spectral Thurible","Portable Manacracker","Swarming Plaguehive","Oakheart's Gnarled Root","Aran's Relaxing Ruby","Infernal Alchemist Stone","Icon of Rot","Corrupted Starlight","Caged Horror","Mrrgria's Favor","Pharameres Forbidden Grimoire","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [137041,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8848,4631,6508,5400,8181,6438,6083,7463,9033,6886,7441,6876,7955,6417,7111,5865,4139,7342,6230,4816,5080,5081,4073,5996,4497,6605,0,6656,3348,7005,4240,5842,3314,0,4084,3449,3609,4188,2276,3905,2260,2971,463,903]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7680,4782,7173,6217,6695,6605,6965,5286,5969,5899,5740,5983,4605,5582,5165,6096,4886,5765,5768,5160,5306,5185,5200,5218,4127,5581,0,4903,5001,4902,4214,2973,2550,0,4768,3062,2006,2694,3746,1924,3127,1441,1835,1848]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8049,3890,6319,5350,5644,4647,5173,5097,6885,6171,5455,5424,5396,6722,5316,5683,4525,6205,4489,4158,3898,4230,3525,6806,4380,5743,0,6878,4771,5714,3652,4231,3455,0,2082,2572,2751,3999,2965,2914,2165,2294,2648,1232]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6649,4457,5044,5160,6067,5353,5567,5602,5318,5231,4735,4982,4687,4354,5515,4631,4061,5771,3744,5995,4965,4066,3279,4539,3606,4806,0,3453,2365,4341,4068,2663,3476,0,3911,3245,2688,3181,2821,3894,2595,1137,1719,997]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,6366,4382,5455,4574,4910,5197,5457,4957,68842,5038,5419,4773,5507,4726,3924,4417,4941,4548,3892,3989,3332,4214,3544,5753,4345,4842,5457,3849,3550,4018,2609,3861,3157,4117,2697,1754,2843,2784,1932,818,2053,3596,802,707]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,86645,2850,4105,4268,70627,5044,3265,5331,0,3471,4158,4144,63771,3485,5699,4698,2237,4867,3609,3008,2555,3281,4005,3693,3228,3349,4093,5574,52411,4157,3186,2089,2384,4411,3277,2184,2124,2106,3165,2203,2700,2115,624,1195]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,96352,68768,71740,0,64634,65210,62927,0,62753,60709,60776,0,58833,57076,56855,60482,45817,52170,52144,51890,50505,52675,43655,49670,41850,62909,40805,0,41192,47050,45964,47616,57093,43917,43610,43596,39423,37438,37114,35459,33409,35984,25668]
    }]
});
