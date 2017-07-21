Highcharts.chart('priest_shadow_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Priest - Shadow - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 16:12:56.335183'
    },
    xAxis: {
        categories: ["Spectral Thurible","Icon of Rot","Kil'jaeden's Burning Wish","Aran's Relaxing Ruby","Fury of the Burning Sky","Star Gate","Deteriorated Construct Core","Unstable Arcano Crystal","Caged Horror","Stat Stick (Mastery)","Tarnished Sentinel Medallion","Corrupted Starlight","Stormsinger Fulmination Charge","Twisting Wind","Bough of Corruption","Padawsen's Unlucky Charm","Dreadstone of Endless Shadows","Tome of Unraveling Sanity","Stat Stick (Crit)","Whispers in the Dark","Terror From Below","Eye of Skovald","Infernal Writ","Erratic Metronome","Stat Stick (Haste)","Charm of the Rising Tide","Unstable Horrorslime","PVP Badge of Dominance","Chrono Shard","Darkmoon Deck: Hellfire","PVP Insignia of Dominance","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Elementium Bomb Squirrel Generator","Horn of Valor","Infernal Alchemist Stone","Portable Manacracker","Moonlit Prism","Obelisk of the Void","Wriggling Sinew","Swarming Plaguehive","Naraxas' Spiked Tongue","Mrrgria's Favor","Figurehead of the Naglfar","Pharameres Forbidden Grimoire"]
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
        data : [0,0,270690,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [38228,20499,0,20033,13344,15303,16291,0,13309,12431,12388,19247,16369,10009,13873,12918,5814,10709,5349,8865,6009,12727,12892,9666,12878,8195,6095,12361,7733,0,6053,5631,11329,5805,12263,0,2246,6922,7611,8676,293,7386,186,4908,5717]
    }, {
        name: '930',
        color: '#db843d',
        data: [39307,23794,0,14571,24039,35039,22394,10415,10691,13091,4072,9437,12989,9904,15887,9540,10481,13166,11935,6798,12093,14487,9495,10610,5906,10152,8723,9197,14446,0,11968,8499,1682,7421,4210,0,12796,0,8986,0,11033,1939,6099,5879,1751]
    }, {
        name: '920',
        color: '#4198af',
        data: [30243,25382,0,18554,6675,5888,12794,4588,13285,12834,18908,10045,3771,22369,15553,9037,7117,10351,12374,11706,10734,6614,12046,6252,13064,9862,2113,6912,5012,0,5614,6356,7320,7841,12493,0,7022,8428,0,4095,0,1698,3135,0,794]
    }, {
        name: '910',
        color: '#71588f',
        data: [32353,7977,0,13521,11591,15644,14834,9733,7085,4890,2537,292,11316,10047,5679,9193,15370,7541,10351,13910,9422,5387,5132,6030,0,2993,2590,11438,9740,0,4004,6503,8045,0,4452,0,9313,4065,2421,7164,6399,2261,3813,3523,4890]
    }, {
        name: '900',
        color: '#89a54e',
        data: [20524,14850,0,13518,16524,12673,12890,2933,9440,3859,10837,12629,4669,12599,14801,12790,5944,118415,8701,283,13060,13157,8637,17874,8324,11284,7213,3232,8220,12537,9695,3885,4049,8303,3422,2727,5381,4652,6322,5048,0,7183,12752,855,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [290408,25149,0,8668,13595,11921,8696,14274,5178,12068,124506,7131,9451,8192,5201,1602,12622,0,7252,15456,106048,3738,9044,711,8947,97331,223,9080,5447,0,7302,6577,6389,2146,5013,8301,8513,4880,6788,3247,12353,3704,0,3849,1189]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,167615,0,161530,152296,127193,119850,159478,121379,115212,0,114197,108923,91524,93444,109305,103989,0,103583,101719,0,100412,97540,92059,94749,0,111246,78906,79541,116374,81665,82506,79511,86822,74717,90359,53859,70487,67239,61175,57568,57989,57597,45296,35600]
    }]
});
