Highcharts.chart('hunter_beast_mastery', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Beast Mastery - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:00:40.614913'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Bloodthirsty Instinct","Cradle of Anguish","Engine of Eradication","Tarnished Sentinel Medallion","Stat Stick (Mastery)","Unstable Arcano Crystal","Thrice-Accursed Compass","Stat Stick (Haste)","Stormsinger Fulmination Charge","Chrono Shard","Stat Stick (Crit)","PVP Badge of Conquest","Six-Feather Fan","Stat Stick (Versatility)","Terror From Below","Obelisk of the Void","Nightblooming Frond","Tempered Egg of Serpentrix","Horn of Valor","Tirathon's Betrayal","Deteriorated Construct Core","Twisting Wind","PVP Insignia of Conquest","Splinters of Agronax","Naraxas' Spiked Tongue","Moonlit Prism","Fury of the Burning Sky","Spectral Thurible","Arcanogolem Digit","Infernal Alchemist Stone","Oakheart's Gnarled Root","Icon of Rot","Mrrgria's Favor","Aran's Relaxing Ruby","Caged Horror","Eye of Skovald","Unstable Horrorslime","Elementium Bomb Squirrel Generator","Corrupted Starlight","Figurehead of the Naglfar","Ley Spark","PVP Badge of Dominance","PVP Insignia of Dominance","Portable Manacracker"]
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
        data : [147237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8849,8985,7146,6673,7587,4385,7168,7685,7108,7489,6122,7403,8180,6372,7262,8405,8938,8721,6911,8563,9331,8843,5679,8189,5647,3887,5180,4732,6963,0,4997,4934,4290,3279,3601,3229,1085,1631,1222,1007,572,466,0,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7515,8449,7946,9121,6558,2709,9283,6062,6692,6223,7292,6448,8463,7805,5869,5067,6934,8231,6491,6700,6941,6243,5069,5100,3886,4810,4039,4499,5696,0,4444,2717,2246,2586,2247,2821,2011,2395,856,1424,0,809,1989,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,5196,8470,6114,6760,7704,3490,6120,9775,6283,7169,6808,6795,8413,7462,6759,7011,6620,5145,6105,6640,6274,5602,5056,5595,4394,7738,3798,4279,4311,0,3382,4446,4435,3076,2757,2612,1577,1706,1404,0,1496,2251,914,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8283,8229,6275,5568,6169,4801,6232,6528,5074,6118,4633,5415,6078,4686,4279,7449,6311,7766,5472,6640,5315,6077,5099,4059,4445,6274,3873,4091,4578,0,4264,3827,3199,2968,2141,2017,777,1301,1031,2945,269,0,762,698]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,7636,4260,5444,5626,4830,2385,5127,4530,6246,5861,6349,5032,6135,4492,5317,4736,5769,4798,4080,5708,4009,5137,4416,6159,3433,2004,3088,3569,4927,4695,3437,2813,2065,2823,1602,2038,2336,1723,870,0,161,1885,665,629]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,5514,72543,75991,74498,5949,4474,5485,5671,5635,4058,5227,5166,6258,5363,64327,3456,5878,4678,2755,4203,6121,4601,3688,3831,1793,3614,2746,50468,3659,4921,2658,2451,1927,2171,3570,869,416,1287,1916,1930,381,937,1458,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,74354,0,0,0,68155,83893,64516,61882,64851,64265,64351,64460,56822,63106,0,56836,50847,51801,58953,52065,47918,46487,53891,49014,52241,46392,49283,0,38997,59305,44071,43668,41436,42626,37355,35933,32057,29046,26864,23517,26523,22874,22043,-910]
    }]
});
