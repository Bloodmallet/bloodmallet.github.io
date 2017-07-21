Highcharts.chart('warlock_affliction_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Affliction - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 17:45:05.255203'
    },
    xAxis: {
        categories: ["Spectral Thurible","Unstable Arcano Crystal","Icon of Rot","Kil'jaeden's Burning Wish","Fury of the Burning Sky","Whispers in the Dark","Aran's Relaxing Ruby","Erratic Metronome","Stat Stick (Haste)","Star Gate","Charm of the Rising Tide","Deteriorated Construct Core","Chrono Shard","Obelisk of the Void","Moonlit Prism","Tarnished Sentinel Medallion","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Stat Stick (Mastery)","Terror From Below","Tome of Unraveling Sanity","Swarming Plaguehive","Stat Stick (Crit)","Stormsinger Fulmination Charge","Corrupted Starlight","Eye of Skovald","Twisting Wind","PVP Badge of Dominance","Bough of Corruption","Infernal Writ","Caged Horror","Unstable Horrorslime","PVP Insignia of Dominance","Darkmoon Deck: Hellfire","Horn of Valor","Devilsaur Shock-Baton","Elementium Bomb Squirrel Generator","Pharameres Forbidden Grimoire","Portable Manacracker","Infernal Alchemist Stone","Oakheart's Gnarled Root","Mrrgria's Favor","Wriggling Sinew","Naraxas' Spiked Tongue","Figurehead of the Naglfar"]
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
        data : [0,0,0,143105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [16879,5612,14168,0,8042,6886,8622,7297,9095,7547,6504,9876,10197,7100,6779,10505,6437,3670,7716,7539,4968,1754,6336,4503,3199,4731,9127,7728,5996,1384,5897,3565,4816,0,1912,4418,7558,1111,7974,0,3593,5789,1387,2933,3199]
    }, {
        name: '930',
        color: '#db843d',
        data: [12690,4161,9606,0,12021,8480,7654,6452,5615,11581,7520,10390,1767,3886,2795,6550,5127,6427,3259,7606,6700,3747,6099,6919,7817,6755,7487,5708,6642,10117,2478,2063,4202,0,6041,3116,1975,1012,8254,0,1602,0,6333,554,2985]
    }, {
        name: '920',
        color: '#4198af',
        data: [17339,2277,8425,0,11582,1792,9179,7134,4353,10428,4117,5644,7587,5062,5044,2654,6703,3400,7661,59,6020,5588,4360,633,3970,3867,8415,3853,5570,2830,7253,1081,1241,0,3916,5833,882,0,0,0,5864,7436,0,2070,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [13927,2792,11680,0,4981,7286,10524,3204,8104,10537,7695,12580,7011,4346,3407,8186,3271,7698,4513,8247,7051,299,3603,8635,4232,6617,1783,3772,4710,4740,2887,819,6517,0,3239,2962,6860,667,4105,0,2854,0,1089,2820,2529]
    }, {
        name: '900',
        color: '#89a54e',
        data: [8739,2056,2972,0,7692,7492,5027,6488,2446,5237,4794,5668,3709,3860,5696,5102,5428,2937,1866,3120,62101,4092,4692,3626,6423,102,4445,3612,8443,3849,2611,4939,2008,5782,3703,1294,1508,1886,5012,4094,1769,2334,2074,2786,2574]
    }, {
        name: '890',
        color: '#aa4643',
        data: [136289,22901,10293,0,8252,7408,7056,1698,5598,8242,88500,1774,3540,6244,5136,71041,3049,1960,4776,62581,0,1840,3064,3730,2905,6859,6239,3807,1088,6224,5897,512,3989,5028,3891,5173,1952,2942,1495,7706,2313,3815,3219,2282,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,106701,86285,0,88161,100535,86827,92452,85069,66628,0,66821,75708,77467,78830,0,70510,66102,61212,0,0,69054,58108,57523,55519,55091,46272,53158,48009,51203,53125,59658,46312,57759,45379,44311,45741,55097,34507,46814,40089,39238,36655,31812,28879]
    }]
});
