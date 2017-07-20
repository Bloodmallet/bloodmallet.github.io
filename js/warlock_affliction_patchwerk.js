Highcharts.chart('warlock_affliction', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Affliction - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 05:55:36.829943'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Tarnished Sentinel Medallion","Erratic Metronome","Dreadstone of Endless Shadows","Stat Stick (Mastery)","Charm of the Rising Tide","Padawsen's Unlucky Charm","Stat Stick (Haste)","Stat Stick (Crit)","Stormsinger Fulmination Charge","Terror From Below","Tome of Unraveling Sanity","Chrono Shard","Stat Stick (Versatility)","Infernal Writ","PVP Badge of Dominance","Moonlit Prism","PVP Insignia of Dominance","Naraxas' Spiked Tongue","Obelisk of the Void","Horn of Valor","Star Gate","Darkmoon Deck: Hellfire","Deteriorated Construct Core","Spectral Thurible","Twisting Wind","Fury of the Burning Sky","Portable Manacracker","Bough of Corruption","Devilsaur Shock-Baton","Icon of Rot","Oakheart's Gnarled Root","Swarming Plaguehive","Infernal Alchemist Stone","Aran's Relaxing Ruby","Pharameres Forbidden Grimoire","Caged Horror","Mrrgria's Favor","Corrupted Starlight","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [132599,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,3787,8046,7273,7384,7011,5889,5833,6898,6397,5536,6815,8721,7584,5571,5522,5626,5966,4480,5532,5664,3783,4523,6062,0,7406,4333,5998,3514,7425,5506,4308,3425,2808,2475,0,2506,3396,3167,3368,2222,1779,3200,1944,2591,1070]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,4172,5841,6656,5434,6208,5675,7999,5863,7220,6828,6451,3722,6835,4806,6367,6168,5871,4951,5079,2579,5432,3215,6687,0,4814,4073,5352,4318,4539,7165,4780,4596,6563,3725,0,4107,2242,2896,3348,3414,3428,2496,2813,1989,2516]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,3997,7367,5311,5056,6153,6019,4721,5465,5513,4870,4006,6102,6761,6379,5225,4140,6033,4582,4585,4975,2580,5249,4644,0,6382,5929,5405,3541,5419,3904,3970,2531,3182,4606,0,2212,4298,3380,2438,2206,2424,2372,2134,841,1022]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,5412,5566,6325,5327,4808,6348,5308,5444,4218,5789,5762,4945,5049,5114,5113,5715,4777,4494,3360,4132,3723,3979,4955,0,4929,2598,5028,3072,5712,5137,2055,3683,2467,1767,0,3289,1964,947,2867,3163,3003,3269,2204,996,547]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,3403,3881,4886,4904,4827,3455,5289,4929,4604,3744,4625,4963,65200,4495,4556,5139,4530,4176,4465,2168,3840,3653,4365,3708,2472,3681,6122,3664,2793,4783,2845,3749,3979,3395,4296,2586,2560,3699,3631,551,2605,1166,2229,1170,1174]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,4326,5146,70817,6003,4918,4587,65774,3627,5051,5779,5153,63015,0,4320,3847,3178,2993,3030,2737,3693,3330,2843,4825,4845,4621,50195,757,2694,5090,3136,2205,2654,2637,2663,3792,1105,3491,2000,335,4231,2170,2132,1245,1724,2020]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,97200,79369,0,64202,63505,64503,0,62459,61620,60356,59882,0,0,60484,58405,57454,53879,54294,50260,51397,50700,49128,40898,63699,40687,0,41689,49435,38794,39987,48551,45763,44379,47119,53542,45166,42468,40390,40434,40344,38775,37120,35337,35688,26284]
    }]
});
