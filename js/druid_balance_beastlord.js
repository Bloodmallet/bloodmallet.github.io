Highcharts.chart('druid_balance_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Druid - Balance - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 14:51:44.219326'
    },
    xAxis: {
        categories: ["Spectral Thurible","Kil'jaeden's Burning Wish","Fury of the Burning Sky","Star Gate","Aran's Relaxing Ruby","Icon of Rot","Whispers in the Dark","Deteriorated Construct Core","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Charm of the Rising Tide","Erratic Metronome","Dreadstone of Endless Shadows","Chrono Shard","Tome of Unraveling Sanity","Terror From Below","Stat Stick (Mastery)","Stat Stick (Crit)","Stat Stick (Haste)","Stormsinger Fulmination Charge","Bough of Corruption","Twisting Wind","Padawsen's Unlucky Charm","Infernal Writ","Eye of Skovald","PVP Badge of Dominance","Moonlit Prism","PVP Insignia of Dominance","Horn of Valor","Unstable Horrorslime","Corrupted Starlight","Darkmoon Deck: Hellfire","Caged Horror","Obelisk of the Void","Devilsaur Shock-Baton","Elementium Bomb Squirrel Generator","Portable Manacracker","Infernal Alchemist Stone","Swarming Plaguehive","Oakheart's Gnarled Root","Mrrgria's Favor","Wriggling Sinew","Naraxas' Spiked Tongue","Figurehead of the Naglfar","Pharameres Forbidden Grimoire"]
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
        data : [0,183180,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [20347,0,9573,10393,12439,11519,7675,11474,9877,3727,5490,10294,6325,4935,8058,7052,5432,8882,7110,6670,10374,8447,9410,4203,6032,5570,7207,3602,3549,3269,4390,0,4020,3932,7544,2501,6117,0,4691,2499,2715,237,3702,5050,2211]
    }, {
        name: '930',
        color: '#db843d',
        data: [13607,0,13779,11061,7441,5497,9006,11037,9516,4985,11138,6044,11838,6270,8142,6590,8689,5032,5372,4810,7563,8324,5277,7225,7886,7382,3833,7814,6987,803,5481,0,4421,6834,1662,7093,5645,0,4986,1525,4214,6673,1552,0,2310]
    }, {
        name: '920',
        color: '#4198af',
        data: [15291,0,8145,11981,9842,12359,3696,9716,7544,10041,6039,4223,655,7775,7085,6582,6530,5457,6528,9686,4661,3584,5493,6419,3187,3950,5757,6547,5267,6323,4887,0,2696,4320,5946,509,5789,0,2685,3797,3297,0,3849,3825,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [12631,0,8885,13603,9971,5330,10395,7761,6618,583,6020,5495,6950,4721,6168,7431,4904,8807,7623,3907,9231,10618,6095,3546,6050,5181,6968,2076,3035,0,3231,0,5543,3851,1934,7151,4287,0,3986,6677,1116,3830,0,588,488]
    }, {
        name: '900',
        color: '#89a54e',
        data: [11487,0,5356,4690,6484,9177,5124,6524,6278,2051,9766,6037,2499,5091,72078,3635,4681,1655,5281,3545,1921,2545,5942,4539,6772,4416,4663,4142,4831,7002,3006,6820,4645,3265,3291,0,5876,4268,2817,1595,5462,1145,1414,0,1157]
    }, {
        name: '890',
        color: '#aa4643',
        data: [133818,0,7900,6234,4355,6410,5171,8972,80229,4963,71814,6850,6843,6845,0,69658,3441,3378,3435,5509,7770,7022,4855,5900,2555,4493,2392,3383,5899,0,4048,6078,3847,5419,4457,3796,29,1050,1402,1551,951,4244,0,0,2639]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,92205,85418,89783,87451,93207,78372,0,93116,0,63622,67090,66240,0,0,66108,65739,63303,60936,52653,52796,55984,60267,59360,59228,56988,55801,53741,66832,56478,65530,53111,49291,51027,51120,41561,61727,45319,45290,43467,36529,32929,30476,27409]
    }]
});
