Highcharts.chart('mage_arcane_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Arcane - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 08:47:33.608328'
    },
    xAxis: {
        categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Charm of the Rising Tide","Tome of Unraveling Sanity","Unstable Arcano Crystal","PVP Badge of Dominance","Whispers in the Dark","Dreadstone of Endless Shadows","Moonlit Prism","Stat Stick (Mastery)","Stat Stick (Crit)","Padawsen's Unlucky Charm","Star Gate","Stat Stick (Haste)","Erratic Metronome","Infernal Writ","Stormsinger Fulmination Charge","Chrono Shard","Deteriorated Construct Core","Naraxas' Spiked Tongue","Spectral Thurible","Horn of Valor","Obelisk of the Void","PVP Insignia of Dominance","Twisting Wind","Fury of the Burning Sky","Bough of Corruption","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Portable Manacracker","Wriggling Sinew","Darkmoon Deck: Hellfire","Icon of Rot","Swarming Plaguehive","Aran's Relaxing Ruby","Infernal Alchemist Stone","Mrrgria's Favor","Caged Horror","Corrupted Starlight","Pharameres Forbidden Grimoire","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [0,129564,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [11205,0,8637,5560,8027,4772,6902,5718,6567,7426,5191,6106,5257,8251,5884,5523,6492,5283,3882,8001,4732,3501,4577,6586,5740,6694,6313,5988,4521,5094,6791,4632,0,4213,3777,2814,0,4206,4550,3247,1715,2127,1958,73,1056]
    }, {
        name: '930',
        color: '#db843d',
        data: [12271,0,7691,6426,9198,3128,7737,6551,6055,5590,6009,7010,5672,7375,6008,5467,4598,6965,5666,6858,4464,6251,5112,6414,5317,5937,3938,6847,4925,4845,6079,4008,0,4008,4242,4305,0,3850,2161,2133,3173,3310,3505,2751,632]
    }, {
        name: '920',
        color: '#4198af',
        data: [9130,0,7117,5975,6546,3265,3561,5605,6293,4490,5522,4400,6612,6005,6111,4960,6189,5638,6335,5184,5434,5280,4021,2893,4421,5318,4285,6029,5033,3047,5360,3451,0,3877,3115,4296,0,2338,2037,2460,2872,1838,2237,1703,28]
    }, {
        name: '910',
        color: '#71588f',
        data: [10615,0,6695,5448,6163,2323,8003,3594,3650,6572,4423,5386,4072,5610,6090,4695,4563,3059,4255,6109,3254,3406,4186,4219,3439,5567,4600,5197,3710,5207,4582,4865,0,3353,5007,3060,0,3080,2329,2993,3482,4057,1214,0,2390]
    }, {
        name: '900',
        color: '#89a54e',
        data: [8979,0,5229,6041,71200,4237,2913,5838,5775,3723,6241,5285,4937,5504,2900,5662,4442,5699,4973,4012,4720,3221,4430,4698,4439,4035,3604,3560,3494,3302,4126,3162,4557,2685,3156,1962,3628,3035,3428,1970,2755,1694,2557,2470,321]
    }, {
        name: '890',
        color: '#aa4643',
        data: [105028,0,73319,74730,0,3230,4160,3204,4018,4600,2502,3832,4586,4101,5170,4198,4352,4213,2885,4274,4745,57590,3990,3969,2759,4145,2223,4142,4026,2859,4629,2894,3094,3442,2804,4005,2630,2703,2342,2216,1658,1786,2286,2656,482]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,0,0,78023,63609,63249,59051,57780,60154,57266,57477,49299,53667,55093,53081,52566,53846,46028,51939,0,51170,47905,50278,44206,50732,43903,48339,49569,41885,46174,60300,45149,42685,42386,56063,40017,36792,37087,35473,36015,31261,31585,22972]
    }]
});
