Highcharts.chart('mage_arcane_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Arcane - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 15:39:15.670081'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Spectral Thurible","Aran's Relaxing Ruby","Tarnished Sentinel Medallion","Deteriorated Construct Core","Star Gate","Charm of the Rising Tide","Unstable Arcano Crystal","PVP Badge of Dominance","Stat Stick (Mastery)","Tome of Unraveling Sanity","Moonlit Prism","Stat Stick (Crit)","Stormsinger Fulmination Charge","Fury of the Burning Sky","Infernal Writ","Padawsen's Unlucky Charm","Dreadstone of Endless Shadows","Bough of Corruption","Icon of Rot","Stat Stick (Haste)","Horn of Valor","Erratic Metronome","Twisting Wind","PVP Insignia of Dominance","Chrono Shard","Whispers in the Dark","Darkmoon Deck: Hellfire","Corrupted Starlight","Portable Manacracker","Eye of Skovald","Infernal Alchemist Stone","Terror From Below","Caged Horror","Unstable Horrorslime","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Wriggling Sinew","Obelisk of the Void","Elementium Bomb Squirrel Generator","Mrrgria's Favor","Naraxas' Spiked Tongue","Swarming Plaguehive","Figurehead of the Naglfar","Pharameres Forbidden Grimoire"]
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
        data : [279987,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,26845,12047,16615,16647,29945,18054,5748,7130,7829,15961,13355,8151,11554,10938,4666,8595,14687,18394,10661,12168,13672,8716,6971,5003,8488,7249,0,8097,14335,4503,0,3893,7155,1325,8248,6221,2649,0,9896,8049,0,1322,2341,1760]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,17904,12274,12565,20116,14972,9927,8470,19128,12111,5447,13079,7670,11469,11737,15545,9982,9996,8436,2758,8194,15714,5965,5469,10904,10618,15702,0,8786,8167,10999,0,7351,0,6282,2727,10627,6352,9120,0,0,7614,1952,0,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,2276,12095,10859,14386,4035,13321,12108,3346,12858,17095,4773,13379,11026,11039,12240,11804,8245,17415,14146,14616,2491,17959,18733,9176,9371,4228,0,9742,14146,10799,0,13370,7921,2787,9818,1564,4788,6568,8416,12924,687,7862,8944,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,20679,11128,13005,11443,14718,13658,4476,11565,10151,12155,13870,6745,6983,117,5966,9515,13430,6870,8427,7273,6939,8643,10897,10655,12068,7698,0,6141,3643,2645,0,5925,9322,9516,10573,806,6206,6724,6388,3735,2722,2216,0,5990]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,10045,13534,8759,11542,15194,5089,2231,9572,15325,121846,13834,16564,11063,19106,12340,8626,5849,8644,10331,15245,11292,8020,13067,6236,1554,3818,17896,4496,8495,4920,8615,6014,14316,3289,0,3361,4218,8837,585,0,4612,0,3600,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,143569,15142,136749,12940,7318,133864,6781,7158,2928,0,9715,3496,3130,858,2972,11640,14331,10775,6621,58,4177,3966,2059,8693,12312,10419,453,1527,7865,3511,10457,85134,0,0,10159,6924,4470,0,2879,9457,4432,6110,5657,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,123272,0,111252,108591,0,143229,123427,116166,0,101970,112459,110229,110221,110059,103032,96543,84878,100161,91984,94140,93722,89383,94698,90739,91024,116291,91665,70440,87516,103452,0,83831,92703,67535,66150,66911,62976,67452,55479,49607,46248,39648,28140]
    }]
});
