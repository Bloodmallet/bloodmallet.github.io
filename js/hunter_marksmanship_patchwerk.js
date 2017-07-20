Highcharts.chart('hunter_marksmanship', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Marksmanship - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:13:19.255242'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Terror From Below","Engine of Eradication","Bloodthirsty Instinct","Stat Stick (Mastery)","Thrice-Accursed Compass","Cradle of Anguish","Stat Stick (Crit)","Stormsinger Fulmination Charge","Stat Stick (Haste)","Six-Feather Fan","Stat Stick (Versatility)","Chrono Shard","PVP Badge of Conquest","Naraxas' Spiked Tongue","Tirathon's Betrayal","Fury of the Burning Sky","Nightblooming Frond","Obelisk of the Void","Moonlit Prism","Horn of Valor","PVP Insignia of Conquest","Spectral Thurible","Deteriorated Construct Core","Tempered Egg of Serpentrix","Icon of Rot","Aran's Relaxing Ruby","Twisting Wind","Splinters of Agronax","Oakheart's Gnarled Root","Mrrgria's Favor","Infernal Alchemist Stone","Caged Horror","Arcanogolem Digit","Eye of Skovald","Corrupted Starlight","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar","Ley Spark","PVP Insignia of Dominance","PVP Badge of Dominance","Portable Manacracker"]
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
        data : [159117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9727,3709,8531,9389,7746,5702,7555,8250,9055,7634,8055,8276,7305,6855,6401,6638,7215,5280,6764,6851,6290,5290,5190,4573,7097,7438,6236,5250,4908,6561,4898,3522,0,5216,6429,3045,1763,2271,1414,1258,401,1765,699,735]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9430,3846,7299,6010,7585,7820,5951,5853,6535,6382,7335,8567,6202,6501,6310,4946,7717,5070,8034,5342,5332,6351,5994,5531,7103,6598,3300,3613,7550,4455,4119,5731,0,2052,5123,3953,3242,1538,2448,860,2232,750,1446,149]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10310,5549,6055,6342,4275,7040,5688,10024,6291,6518,6115,6831,6408,4665,5841,6118,6808,4306,5835,6530,6041,3547,4100,5055,5116,6224,5492,3963,6716,5652,5820,4435,0,2486,3712,3222,2558,4723,505,2015,0,1461,1886,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8552,3569,7214,6717,7355,6290,7553,5958,4729,5965,5500,6996,6417,6838,5817,3137,6111,3667,6771,2785,4034,5449,3845,3969,5935,4720,3382,4908,3923,4292,2775,2521,0,3358,4456,1719,2124,1314,2094,1045,1815,1218,1041,644]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,6386,2388,4940,5803,4412,4079,5477,4132,5728,4445,4317,4587,4583,3869,5017,6234,5404,6943,4162,3505,2893,3780,5421,4727,5008,4702,3956,2605,4579,4535,4253,2884,5983,3382,5377,2706,3089,1458,2670,691,0,749,325,349]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,101854,4285,80408,79741,5165,3970,4241,72543,3908,5767,3805,7591,3348,5044,4467,3314,4051,1537,4659,2552,2500,4457,3565,56947,4080,6183,3478,1826,4415,4405,3099,3691,3342,1955,1795,2254,2200,2375,1736,2458,445,884,2125,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,110943,0,0,75740,74611,73028,0,69045,67960,64157,54933,63242,63346,60468,62049,50689,60594,49978,55772,56115,53947,54311,0,45822,43673,53243,54721,44267,45344,50266,49850,59723,49012,35360,44657,44280,40935,41304,31454,33951,26873,22813,1252]
    }]
});
