Highcharts.chart('mage_arcane', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Arcane - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:33:10.199712'
    },
    xAxis: {
        categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Charm of the Rising Tide","Tome of Unraveling Sanity","Unstable Arcano Crystal","PVP Badge of Dominance","Whispers in the Dark","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Stat Stick (Versatility)","Moonlit Prism","Stat Stick (Crit)","Padawsen's Unlucky Charm","Erratic Metronome","Stat Stick (Haste)","Star Gate","Infernal Writ","Stormsinger Fulmination Charge","Chrono Shard","Spectral Thurible","Deteriorated Construct Core","Naraxas' Spiked Tongue","Horn of Valor","Bough of Corruption","PVP Insignia of Dominance","Twisting Wind","Fury of the Burning Sky","Obelisk of the Void","Oakheart's Gnarled Root","Portable Manacracker","Devilsaur Shock-Baton","Wriggling Sinew","Icon of Rot","Darkmoon Deck: Hellfire","Swarming Plaguehive","Infernal Alchemist Stone","Aran's Relaxing Ruby","Mrrgria's Favor","Caged Horror","Corrupted Starlight","Eye of Skovald","Pharameres Forbidden Grimoire","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [0,126799,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [13773,0,6153,6627,8217,5999,5518,7695,7338,6319,3793,7367,6507,5392,6579,7040,7742,6905,8774,6171,6296,7478,5927,3935,7322,4999,6692,5550,4165,5277,8244,6602,4890,5133,0,3234,0,4819,2515,2826,3963,3736,2879,2734,641,462]
    }, {
        name: '930',
        color: '#db843d',
        data: [11357,0,8519,6463,8237,2552,5573,5249,4727,5810,7342,5119,5758,5490,5720,6469,6210,6384,4238,5711,5877,4848,5192,5742,6870,5989,5660,4762,5283,3970,5459,3041,4610,3396,0,5270,0,3494,5242,3455,3196,3693,2774,2288,1726,790]
    }, {
        name: '920',
        color: '#4198af',
        data: [9856,0,6235,6017,7221,2396,6695,5884,4250,6518,4709,5385,6004,6196,5692,3988,5953,4244,4192,4778,3044,7685,3804,4640,4196,3083,5930,3590,5371,4653,4780,4159,3571,3550,0,2118,0,3327,3217,1820,1474,1665,3182,2434,627,804]
    }, {
        name: '910',
        color: '#71588f',
        data: [9909,0,7643,6694,5880,2315,4404,2705,6863,4630,6720,6031,3820,4478,4382,5344,6001,5064,6843,5230,5155,3892,5121,3462,6698,4594,4708,3095,3724,3995,4324,4194,1866,3552,0,4300,0,2163,1377,2461,3497,1553,3239,1722,1286,1369]
    }, {
        name: '900',
        color: '#89a54e',
        data: [8095,0,5039,3473,68914,3926,5957,4911,3112,5070,3694,2861,4951,5721,4553,4953,5346,4255,3661,3500,3963,5197,3230,5252,2921,4043,4869,4177,3956,3548,5445,3707,5510,3711,4758,2992,4901,2077,2887,2240,887,2579,1736,1869,1315,1940]
    }, {
        name: '890',
        color: '#aa4643',
        data: [101704,0,70647,72127,0,1924,4935,5583,5288,2207,3708,5354,3287,4188,3750,3820,3314,3662,2985,4144,54628,4221,2945,3002,3818,3558,3394,3204,3209,4063,2926,3043,1265,3530,3457,4443,4086,3129,2514,2366,1507,1913,1309,1760,2233,1208]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,0,0,75267,59730,59987,56763,57459,56971,54384,55786,54624,53701,52404,48687,51403,50779,50982,0,44198,51243,49226,43194,48448,42990,48191,46523,46687,40977,46842,44762,43580,57981,40161,52850,42111,38500,35644,36121,34705,34504,29742,30950,20384]
    }]
});
