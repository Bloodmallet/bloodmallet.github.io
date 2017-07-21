Highcharts.chart('hunter_marksmanship_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Marksmanship - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 08:27:36.123114'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Convergence of Fates","Terror From Below","Engine of Eradication","Bloodthirsty Instinct","Stat Stick (Mastery)","Thrice-Accursed Compass","Cradle of Anguish","Stormsinger Fulmination Charge","Stat Stick (Crit)","Stat Stick (Haste)","Chrono Shard","Six-Feather Fan","PVP Badge of Conquest","Naraxas' Spiked Tongue","Tirathon's Betrayal","Fury of the Burning Sky","Nightblooming Frond","Moonlit Prism","Obelisk of the Void","PVP Insignia of Conquest","Horn of Valor","Deteriorated Construct Core","Spectral Thurible","Icon of Rot","Tempered Egg of Serpentrix","Aran's Relaxing Ruby","Twisting Wind","Oakheart's Gnarled Root","Splinters of Agronax","Mrrgria's Favor","Caged Horror","Infernal Alchemist Stone","Eye of Skovald","Arcanogolem Digit","Corrupted Starlight","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar","Ley Spark"]
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
        data : [162723,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9923,3671,7116,9434,6946,7224,6350,7831,11625,7258,7930,7920,7153,7745,8774,5338,9355,5153,8805,7521,6646,6550,5791,9176,3867,6052,6968,4992,5598,5943,5486,5590,4812,0,3368,6959,3501,3088,1467,1994,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9994,3379,4071,7177,9161,7872,7377,6379,6262,6766,6003,7336,6342,9212,6356,4699,7336,5249,6817,6557,6526,5830,6953,5564,5654,3389,6965,4863,6940,3311,6435,4200,2085,0,4148,3043,3727,3355,2764,438,622]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,9480,6074,5359,6855,6378,7149,7749,8055,8475,6930,6514,7156,6178,7427,4484,6761,7496,5411,7414,7250,5965,2996,2815,7279,4042,5861,6218,2621,6787,5472,4559,3505,4685,0,3615,5997,342,1075,2149,2510,86]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8351,4867,3573,6539,5944,4680,6240,4775,6757,6411,6683,4520,4454,6308,7272,4739,5789,4284,5638,2930,4972,4784,4607,4415,6382,2961,5353,4555,5053,4176,5456,3673,1956,0,3018,4288,5638,3519,1682,166,1971]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,7550,2720,5054,6700,4739,6125,5886,5902,4082,4880,4911,5952,5306,7406,4016,3401,5393,3408,4741,4108,3551,5303,4699,5450,4114,4200,3785,3515,5042,3207,3292,4096,3586,4977,2184,4742,0,1339,1616,2665,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,105136,2812,3740,82468,83998,5083,4785,6104,74428,4915,5233,2152,5594,4849,4656,4784,5806,3990,6812,1526,1771,4073,4222,3615,58320,3240,5923,2470,5266,3962,5314,3341,3636,3688,2028,3206,4217,3163,1144,1689,1796]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,117505,93128,0,0,78195,76240,75145,0,71502,71151,67287,65665,56669,62024,65322,51074,63098,49546,58289,57524,55760,55838,47342,0,56020,46079,57165,44392,51522,46438,51443,50208,61087,47024,35202,45926,42514,43665,33323,35125]
    }]
});
