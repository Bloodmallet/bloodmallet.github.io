Highcharts.chart('priest_shadow_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Priest - Shadow - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 09:24:23.061924'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Terror From Below","Unstable Arcano Crystal","Tome of Unraveling Sanity","Spectral Thurible","Stat Stick (Mastery)","Padawsen's Unlucky Charm","Dreadstone of Endless Shadows","Stat Stick (Crit)","Oakheart's Gnarled Root","Stormsinger Fulmination Charge","Infernal Writ","Icon of Rot","Stat Stick (Haste)","Naraxas' Spiked Tongue","Erratic Metronome","Whispers in the Dark","Fury of the Burning Sky","Devilsaur Shock-Baton","Chrono Shard","Star Gate","PVP Badge of Dominance","Bough of Corruption","Twisting Wind","Deteriorated Construct Core","PVP Insignia of Dominance","Darkmoon Deck: Hellfire","Portable Manacracker","Aran's Relaxing Ruby","Caged Horror","Swarming Plaguehive","Corrupted Starlight","Horn of Valor","Moonlit Prism","Obelisk of the Void","Infernal Alchemist Stone","Wriggling Sinew","Eye of Skovald","Pharameres Forbidden Grimoire","Mrrgria's Favor","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [140140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,11052,9629,5116,8375,7936,6934,7639,7269,6594,6966,6104,7201,4014,7340,4775,6218,5880,7438,5655,6967,8014,5733,6809,7844,7692,5824,0,6770,3527,6758,3907,3356,3980,3989,3775,0,4347,2896,2636,5000,3973,3119,264]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9514,7360,2237,8788,6955,6362,5835,5539,5209,5691,5716,5906,7261,6964,8192,5131,5350,4181,5024,5941,7349,5786,8417,6482,6961,5628,0,5470,4446,1817,4728,3762,4277,4093,4093,0,4215,2556,4332,2226,3306,599,1655]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8190,8675,6048,8067,6962,4370,5440,6745,5931,6527,7436,6837,5846,3861,4890,5218,6190,6042,5300,5522,5886,5391,4950,5614,5376,4514,0,7603,4850,3008,5449,4441,3435,4622,5387,0,1266,4279,2323,2208,2873,2722,2245]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8463,7488,3902,7992,5753,6835,5760,5941,7356,4754,5074,5222,5112,4032,3551,6923,3010,5120,5493,4393,4719,5156,7163,7711,5051,4727,0,4075,3606,4831,525,4869,4261,2940,1580,0,4817,3100,2639,1744,994,925,973]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,6726,5305,4843,83262,7303,4942,5434,3634,4095,5063,5241,4410,5852,7546,6679,4516,5952,5441,4342,4569,7339,4687,5602,4068,6999,3590,4777,5327,2768,3434,7950,2620,4798,3214,4752,3174,1517,2701,3805,3854,2583,2124,1089]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,94186,86917,3912,0,75045,6047,4857,5456,4367,4910,3152,3697,4196,3727,2017,3099,4344,2310,4693,4113,4775,4738,5015,5497,4254,2662,4934,3490,3962,2188,2707,2219,2243,3263,3793,4914,3501,2339,3586,1065,3967,1210,5]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,94127,0,0,65629,65319,65600,66011,63135,63872,63321,63337,60576,63858,62280,59552,58941,58447,56574,49518,56031,49252,49481,47331,55274,68387,44432,50619,51175,47653,50262,47876,48630,46709,58178,45406,45017,42537,43607,41853,41483,30716]
    }]
});
