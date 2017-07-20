Highcharts.chart('hunter_marksmanship', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Marksmanship - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 10:45:20.573881'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Convergence of Fates","Terror From Below","Bloodthirsty Instinct","Engine of Eradication","Stat Stick (Mastery)","Thrice-Accursed Compass","Cradle of Anguish","Stormsinger Fulmination Charge","Stat Stick (Crit)","Stat Stick (Haste)","Chrono Shard","Stat Stick (Versatility)","Six-Feather Fan","PVP Badge of Conquest","Naraxas' Spiked Tongue","Tirathon's Betrayal","Fury of the Burning Sky","Nightblooming Frond","Moonlit Prism","Obelisk of the Void","Horn of Valor","PVP Insignia of Conquest","Spectral Thurible","Deteriorated Construct Core","Tempered Egg of Serpentrix","Icon of Rot","Twisting Wind","Aran's Relaxing Ruby","Oakheart's Gnarled Root","Splinters of Agronax","Mrrgria's Favor","Infernal Alchemist Stone","Caged Horror","Arcanogolem Digit","Eye of Skovald","Corrupted Starlight","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar","Ley Spark"]
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
        data : [159474,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,10353,4315,7273,8270,8512,7752,7928,8261,8345,7936,8171,7913,7440,6553,7138,6394,5697,9494,5442,7230,7134,5812,6049,5623,4431,7100,7822,5131,7542,4461,5229,5180,5502,0,1622,4769,2528,3948,4089,1748,1349,1200]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,10289,4063,5159,7450,6936,5646,7874,6672,7926,4990,5886,7832,7039,7005,8158,5891,6415,7404,4388,7280,6133,6502,4727,4827,5735,8459,6790,3968,5246,5285,4154,6607,3357,0,4617,5037,4150,1791,1144,3317,889,2185]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8640,3958,5334,6825,4957,7748,5591,6431,7222,6972,7690,6605,6145,6038,7572,6574,4651,6587,5323,7152,6694,6141,5847,5567,4285,5083,5589,4486,6006,2344,5291,5067,3131,0,2447,4660,1833,3910,3580,497,2246,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7336,4386,3871,6372,5809,5367,5050,5624,5138,6079,3651,5640,5108,6092,6887,4625,4355,4837,4827,5902,3143,4128,4444,3867,4745,4625,5760,3311,4844,3514,3409,3172,4469,0,3022,4628,3133,630,2053,960,1952,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,8324,3531,3043,3274,4798,5446,6057,5769,4513,5152,5708,3041,5346,3828,6366,4842,4719,6531,2403,5452,3021,2100,3607,4329,4436,4769,4116,4834,5553,4418,3529,4574,3852,5973,4021,3868,4253,5090,2529,2215,210,2103]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,101673,3505,3669,82799,5315,81239,5815,4173,73911,3975,4415,4548,3178,4519,5203,4410,2996,5862,3426,4108,2235,3395,4218,2917,58077,5378,5364,2220,5258,1175,2806,4095,1290,2964,576,2975,0,0,2588,1675,1214,1254]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,112321,90837,0,77135,0,73202,73941,0,70158,69720,64733,65021,64787,56043,61532,64137,50602,62024,50225,56375,55821,54914,56177,0,45669,45117,55444,43908,56254,51594,46627,51209,60094,50562,35962,46001,46060,40956,42547,33169,33448]
    }]
});
