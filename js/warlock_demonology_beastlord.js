Highcharts.chart('warlock_demonology_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warlock - Demonology - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 18:01:46.940781'
    },
    xAxis: {
        categories: ["Spectral Thurible","Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Whispers in the Dark","Erratic Metronome","Stat Stick (Haste)","Charm of the Rising Tide","Chrono Shard","Aran's Relaxing Ruby","Fury of the Burning Sky","Padawsen's Unlucky Charm","Icon of Rot","Dreadstone of Endless Shadows","Obelisk of the Void","Star Gate","Deteriorated Construct Core","Stat Stick (Mastery)","Moonlit Prism","Stat Stick (Crit)","Stormsinger Fulmination Charge","Swarming Plaguehive","PVP Badge of Dominance","Twisting Wind","Infernal Writ","Tome of Unraveling Sanity","Bough of Corruption","Eye of Skovald","Corrupted Starlight","Terror From Below","PVP Insignia of Dominance","Tarnished Sentinel Medallion","Caged Horror","Horn of Valor","Darkmoon Deck: Hellfire","Pharameres Forbidden Grimoire","Elementium Bomb Squirrel Generator","Infernal Alchemist Stone","Devilsaur Shock-Baton","Unstable Horrorslime","Portable Manacracker","Oakheart's Gnarled Root","Mrrgria's Favor","Wriggling Sinew","Naraxas' Spiked Tongue","Figurehead of the Naglfar"]
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
        data : [0,177676,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [13750,0,4834,9694,12414,7393,9405,8024,6186,10168,10166,11665,9611,4964,7198,11036,8795,4593,5849,2412,372,6440,10877,5412,6660,6320,6599,7218,5013,6299,4498,6426,0,0,2042,5908,0,7775,1549,9197,6585,8456,2377,0,2796]
    }, {
        name: '930',
        color: '#db843d',
        data: [15654,0,5042,7043,6615,6137,6591,7768,8880,9089,8392,5159,4857,6182,9550,8566,7233,6096,5374,9467,4349,6724,6556,6132,9528,11806,5225,3988,8583,5163,6295,5682,9361,0,163,3883,0,941,5686,892,2349,1557,4551,3474,813]
    }, {
        name: '920',
        color: '#4198af',
        data: [15261,0,9219,2906,7181,9788,6182,7336,7886,2938,6067,9407,4698,5445,9683,11066,6449,5141,9470,6841,6004,6850,9455,7309,5421,3772,5531,4420,6512,8008,1442,3531,2762,0,4652,6551,0,5206,897,4591,512,754,0,5835,3845]
    }, {
        name: '910',
        color: '#71588f',
        data: [13853,0,1447,13348,5793,4353,6520,3299,7892,10717,5228,3010,8003,3046,5097,6705,5546,3531,3377,4046,2043,2684,4936,4678,5736,8194,4160,4084,3028,776,4867,2414,4566,0,2715,0,0,4249,2634,8149,4490,2744,1954,2352,343]
    }, {
        name: '900',
        color: '#89a54e',
        data: [10066,0,8850,5494,6352,5799,5458,7180,3187,4311,6159,8295,7719,5893,10259,4601,4159,5218,6464,4368,3565,9878,7237,5698,67426,6461,6537,4430,1879,6099,4433,2731,5422,4348,92,5769,6434,1185,4487,3519,4787,2551,885,0,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [136505,0,1825,3688,6134,9273,96194,3402,8237,5779,7830,8519,4500,3159,6975,9794,4315,2738,3168,3901,3045,3594,3681,5164,0,3128,4588,2914,62526,3056,64456,6492,2984,5325,1438,258,8000,5526,0,2987,1611,658,4328,3423,1469]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,132709,112140,97460,98012,0,89637,81687,79278,77797,74783,80592,90154,67311,63266,72080,80363,67936,68478,77478,60628,53952,60997,0,54189,58349,60812,0,57584,0,56572,56505,70391,63175,52164,58808,45382,56329,38611,44023,39465,36356,35647,28955]
    }]
});
