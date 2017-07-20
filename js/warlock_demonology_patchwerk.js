Highcharts.chart('warlock_demonology', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Demonology - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 06:33:15.766821'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Haste)","Charm of the Rising Tide","Erratic Metronome","Chrono Shard","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Stat Stick (Mastery)","Obelisk of the Void","Stormsinger Fulmination Charge","Stat Stick (Crit)","Tome of Unraveling Sanity","Stat Stick (Versatility)","Tarnished Sentinel Medallion","Infernal Writ","PVP Badge of Dominance","Terror From Below","Swarming Plaguehive","PVP Insignia of Dominance","Horn of Valor","Moonlit Prism","Star Gate","Pharameres Forbidden Grimoire","Deteriorated Construct Core","Naraxas' Spiked Tongue","Twisting Wind","Darkmoon Deck: Hellfire","Bough of Corruption","Fury of the Burning Sky","Spectral Thurible","Portable Manacracker","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Infernal Alchemist Stone","Icon of Rot","Aran's Relaxing Ruby","Caged Horror","Corrupted Starlight","Mrrgria's Favor","Eye of Skovald","Wriggling Sinew","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [143071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,4926,7655,8882,8328,6962,7389,8057,5897,6063,6506,7800,6325,8246,6412,6604,5550,6714,6264,3727,5692,6041,3135,7716,3671,7066,4842,6182,0,5736,3528,5207,5632,3456,4221,0,4281,3022,2021,2563,4082,2098,3301,2504,0,929]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,5564,7029,6918,6303,7016,6253,5762,6647,6795,6446,5121,7095,6073,5813,3713,7807,5597,4480,4949,4322,3768,5421,6410,2778,4857,4866,6421,0,6042,5098,4435,4910,5379,3577,0,3959,3362,3323,2923,1000,2620,1484,1912,3212,1716]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,3961,6216,6888,5780,5921,5708,6100,5852,5224,3574,4471,5445,7103,6316,5428,4138,6091,5732,5045,5020,4713,2824,5438,5206,5019,3123,4972,0,5065,3497,2889,4990,2181,3031,0,2597,3713,2019,2096,2958,2703,3016,2503,1140,797]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,5060,5149,5542,6230,6035,6289,5271,6535,5314,4558,6354,4948,5122,4170,5388,4853,3159,5621,2536,3752,3858,2867,4966,2074,5635,2123,5480,0,5157,3525,5119,3536,3199,3249,0,3684,2749,3122,1696,2088,2817,1876,1189,2058,2043]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,4172,4910,4283,5801,4658,6026,6010,3604,5342,5258,4588,4780,64042,4254,3991,4703,6514,3355,3727,4268,4477,4257,4351,1728,5587,2933,2197,3722,3839,2057,2472,4589,1295,3848,4712,3283,1772,2025,2249,2186,1347,1697,1786,1523,674]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,4258,4694,6228,80190,6021,3563,2759,5924,4923,2017,4983,5355,0,4993,62284,3248,3463,58363,3270,3251,3957,2325,3919,3011,3627,4725,6578,5607,4223,3392,47208,4293,4092,2317,4366,1008,3197,3299,3266,1896,1888,1974,2681,341,1391]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,105237,92082,76424,0,75276,71930,68950,66496,64481,65426,59934,59184,0,58458,0,56639,54017,0,57640,50150,48772,54360,42343,54219,40227,48957,39551,61850,39992,47168,0,35436,43425,42488,53570,42436,41602,37773,37986,36327,34649,34753,32706,32046,24796]
    }]
});
