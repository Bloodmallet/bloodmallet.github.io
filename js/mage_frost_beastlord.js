Highcharts.chart('mage_frost_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Frost - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 15:56:08.033985'
    },
    xAxis: {
        categories: ["Spectral Thurible","Kil'jaeden's Burning Wish","Icon of Rot","Star Gate","Deteriorated Construct Core","Stat Stick (Crit)","Aran's Relaxing Ruby","Fury of the Burning Sky","Tome of Unraveling Sanity","Terror From Below","Unstable Arcano Crystal","Eye of Skovald","Charm of the Rising Tide","Twisting Wind","Stat Stick (Haste)","Bough of Corruption","Infernal Writ","Padawsen's Unlucky Charm","Dreadstone of Endless Shadows","Darkmoon Deck: Hellfire","Chrono Shard","Erratic Metronome","Whispers in the Dark","PVP Badge of Dominance","Unstable Horrorslime","Horn of Valor","Devilsaur Shock-Baton","Elementium Bomb Squirrel Generator","PVP Insignia of Dominance","Stat Stick (Mastery)","Moonlit Prism","Stormsinger Fulmination Charge","Tarnished Sentinel Medallion","Portable Manacracker","Infernal Alchemist Stone","Wriggling Sinew","Mrrgria's Favor","Obelisk of the Void","Oakheart's Gnarled Root","Swarming Plaguehive","Corrupted Starlight","Figurehead of the Naglfar","Caged Horror","Pharameres Forbidden Grimoire","Naraxas' Spiked Tongue"]
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
        data : [0,251371,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [22685,0,17136,8333,21981,12002,10813,7121,10782,14737,5513,7897,12260,17640,7814,14485,4357,8246,14897,0,6193,18395,5255,6320,568,10501,14139,1872,8435,6669,5124,10474,17338,4930,0,3653,5991,6039,5418,0,1978,8527,2010,0,1557]
    }, {
        name: '930',
        color: '#db843d',
        data: [25039,0,9724,16395,12899,8763,15870,16188,3558,6317,3185,10007,9507,9673,6660,13818,11463,4658,7707,0,7176,3626,6586,13715,10518,5106,9401,8148,6828,12243,4017,2246,1731,11900,0,9996,0,2925,8154,11535,11964,3271,3941,4575,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [17779,0,17080,13600,14145,12642,3761,12571,13591,10001,7863,6671,8260,7526,10851,9371,7755,7947,6812,0,12480,4226,4509,7417,0,5465,3622,7657,12102,4829,6568,14583,9496,4147,0,0,9800,9025,1531,2953,0,0,3283,2253,4346]
    }, {
        name: '910',
        color: '#71588f',
        data: [13451,0,13551,18046,9662,10993,13706,631,10419,3254,8857,9574,3231,9691,9859,7082,9475,10000,7953,0,8453,10462,10874,8804,8178,5287,5288,4572,0,7977,6874,532,2266,10880,0,3856,326,613,5720,4808,5652,0,10762,1637,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [17871,0,9468,11119,9168,4890,12895,13556,116281,11701,0,3892,5009,6797,4545,9984,5658,6779,4541,8648,1517,7210,8141,4657,42,10139,4214,6717,12414,8652,3717,9747,6169,5569,6357,1594,6290,6699,0,2769,1508,5654,474,6041,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [181801,0,7632,7352,6842,8147,3617,7030,0,105681,8698,12656,105676,10643,5818,2480,4143,9803,4129,7892,6588,8004,7713,6514,7692,6807,5461,6008,5628,0,3659,9523,70101,3864,1201,8120,5923,4512,6311,4267,6993,1131,587,592,2356]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,138091,111751,109960,110091,97432,99525,0,0,118744,98985,0,79324,95683,83507,96094,88394,87404,116068,90007,79201,87869,83023,102909,81955,80900,86679,78481,69871,77365,60117,0,64209,92971,72361,71082,65277,64402,58245,52128,58174,52549,39971,16688]
    }]
});
