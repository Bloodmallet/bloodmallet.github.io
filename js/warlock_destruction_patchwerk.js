Highcharts.chart('warlock_destruction', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Destruction - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 06:45:33.927170'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Whispers in the Dark","Stormsinger Fulmination Charge","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Tome of Unraveling Sanity","Erratic Metronome","Charm of the Rising Tide","PVP Badge of Dominance","Padawsen's Unlucky Charm","Stat Stick (Crit)","Stat Stick (Haste)","Stat Stick (Versatility)","Infernal Writ","Chrono Shard","Terror From Below","Horn of Valor","PVP Insignia of Dominance","Obelisk of the Void","Star Gate","Moonlit Prism","Deteriorated Construct Core","Portable Manacracker","Naraxas' Spiked Tongue","Bough of Corruption","Darkmoon Deck: Hellfire","Twisting Wind","Fury of the Burning Sky","Spectral Thurible","Infernal Alchemist Stone","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Icon of Rot","Swarming Plaguehive","Aran's Relaxing Ruby","Mrrgria's Favor","Pharameres Forbidden Grimoire","Wriggling Sinew","Corrupted Starlight","Caged Horror","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [130080,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,4797,8621,7211,5606,5974,7596,8223,8231,6896,7565,6339,6044,5643,5669,4390,7257,6308,5676,5153,4445,5968,5487,5653,7200,3829,6327,0,7167,6362,4747,0,3763,4654,3842,2379,4830,4348,2444,2792,2059,2285,2472,3666,1602,1806]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,3640,6059,5861,7033,6141,5438,5748,5881,6347,5348,6100,6543,5608,6586,8217,4565,5833,4987,5620,4401,6660,4111,6730,5254,4768,6066,0,5096,2928,4718,0,3695,3451,4168,3660,2240,1978,3357,4411,4082,2675,3844,1352,1300,1513]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,4336,6624,4539,5237,5252,5434,6098,5101,4955,4745,4597,5071,6025,5253,4360,5162,5284,5121,3779,4230,4702,3327,5780,3675,2886,4252,0,5883,4004,3957,0,3962,2442,2669,3429,3861,3008,4669,2642,865,2316,669,1981,978,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3479,7301,5384,4664,5700,5421,6265,4363,5683,5456,6331,5861,4702,4928,5047,6023,3082,4164,4816,5346,6269,4840,4032,6342,4609,5396,0,4033,4104,2956,0,3348,4682,3375,4093,1472,2974,3138,2244,2450,1174,1816,2055,842,1549]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,3147,4011,4773,5108,3927,5644,66028,5824,4823,4689,4344,4309,5400,4088,4471,4179,5847,2773,3200,4249,4413,3331,4810,4141,2707,4933,4458,3039,1378,3425,5464,2603,2852,1938,1660,3220,1957,546,3036,2763,2700,2336,971,1156,467]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,2314,74389,4812,4767,4450,5272,0,4209,63385,4527,4561,4994,4270,5744,4325,3505,61026,3892,4476,3241,3285,3147,2832,2810,3654,2478,4981,5449,4475,47616,4490,2644,2119,3359,3280,1916,1698,3008,775,1625,2595,2069,2434,2039,1282]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,87028,0,63526,61569,62230,58799,0,58522,0,59070,58491,57757,57399,56517,57179,56950,0,53832,52505,50568,44012,48560,42515,41562,48091,41060,61058,39787,46441,0,56449,44404,42720,41732,41522,41948,40436,37616,38845,37152,36647,35511,32597,32285,25059]
    }]
});
