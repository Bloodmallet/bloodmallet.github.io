Highcharts.chart('warlock_destruction_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Destruction - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 18:12:01.958146'
    },
    xAxis: {
        categories: ["Spectral Thurible","Kil'jaeden's Burning Wish","Fury of the Burning Sky","Aran's Relaxing Ruby","Star Gate","Icon of Rot","Unstable Arcano Crystal","Whispers in the Dark","Charm of the Rising Tide","Deteriorated Construct Core","Erratic Metronome","Stat Stick (Haste)","Dreadstone of Endless Shadows","Stat Stick (Mastery)","Chrono Shard","Tome of Unraveling Sanity","Tarnished Sentinel Medallion","Stormsinger Fulmination Charge","Stat Stick (Crit)","Padawsen's Unlucky Charm","Infernal Writ","Bough of Corruption","Moonlit Prism","Twisting Wind","Horn of Valor","PVP Badge of Dominance","Terror From Below","Eye of Skovald","PVP Insignia of Dominance","Obelisk of the Void","Darkmoon Deck: Hellfire","Caged Horror","Corrupted Starlight","Unstable Horrorslime","Portable Manacracker","Infernal Alchemist Stone","Swarming Plaguehive","Elementium Bomb Squirrel Generator","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Mrrgria's Favor","Wriggling Sinew","Naraxas' Spiked Tongue","Pharameres Forbidden Grimoire","Figurehead of the Naglfar"]
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
        data : [0,200529,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [17085,0,11336,10869,12967,13075,1541,9099,9775,11446,8778,8896,10007,6890,5361,10650,6648,10892,4924,4722,11237,10238,6714,8234,9558,9589,5774,8801,5020,6314,0,4908,2204,857,5974,0,4228,41,5861,4855,5326,3787,6081,5384,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [10983,0,10514,11782,13421,9591,8337,8720,7002,9771,10424,8022,5640,11206,11370,6907,7427,6466,9221,9552,6367,7608,7016,10215,4534,9413,8049,5645,6575,7586,0,9371,7254,6433,6459,0,1402,9906,3564,1702,4966,309,2418,0,1735]
    }, {
        name: '920',
        color: '#4198af',
        data: [18791,0,7718,4777,9369,6941,5623,6710,4929,12843,6707,9995,5584,3950,4754,9905,7531,8497,6101,5976,5610,12814,4928,6151,9595,631,6252,4818,4826,4437,0,0,7226,2102,5702,0,7299,2040,5848,7297,721,4211,0,3087,374]
    }, {
        name: '910',
        color: '#71588f',
        data: [7046,0,11161,7794,7625,12858,5233,8140,7059,8421,5908,4061,8378,6570,7587,2448,6928,4448,6039,8934,5499,2805,5856,3479,2859,8050,924,6442,7126,2153,0,5782,2235,0,5846,0,3210,4032,0,0,2750,5411,2407,1969,2943]
    }, {
        name: '900',
        color: '#89a54e',
        data: [17764,0,7309,10047,12627,3913,4849,8237,9731,6772,4976,5844,8038,9023,5105,84111,3696,4722,9784,879,6527,5982,4006,9940,6248,7933,7477,3558,0,8084,7771,7661,4198,3320,4421,8235,2494,1594,3837,2171,2785,0,2266,1089,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [131254,0,5551,9843,5188,9986,3754,4090,96069,8918,8157,6934,3942,5138,4761,0,81349,4829,1776,8469,5742,6214,6835,7846,5085,4205,66217,6565,6335,5693,6081,1987,2672,2153,4317,2264,0,3766,401,1301,2660,5256,988,45,5533]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,96025,91228,83328,87974,112581,95700,0,75782,79081,76568,76036,74519,77668,0,0,70976,71696,70762,65527,54798,64821,53911,60052,57898,0,57280,59798,53264,72270,57442,56715,64145,44384,63354,53125,49346,50933,47741,43384,40884,38563,37042,28085]
    }]
});
