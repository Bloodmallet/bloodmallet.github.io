Highcharts.chart('priest_shadow', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Priest - Shadow - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 03:09:50.796625'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Terror From Below","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Tome of Unraveling Sanity","Spectral Thurible","Stat Stick (Mastery)","Stat Stick (Crit)","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Stormsinger Fulmination Charge","Stat Stick (Versatility)","Oakheart's Gnarled Root","Infernal Writ","Whispers in the Dark","PVP Badge of Dominance","Icon of Rot","Erratic Metronome","Stat Stick (Haste)","Charm of the Rising Tide","Twisting Wind","Bough of Corruption","Star Gate","Chrono Shard","Fury of the Burning Sky","Devilsaur Shock-Baton","Deteriorated Construct Core","PVP Insignia of Dominance","Darkmoon Deck: Hellfire","Portable Manacracker","Horn of Valor","Aran's Relaxing Ruby","Obelisk of the Void","Caged Horror","Corrupted Starlight","Moonlit Prism","Swarming Plaguehive","Infernal Alchemist Stone","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Mrrgria's Favor","Pharameres Forbidden Grimoire","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [145255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,10735,10094,5876,10784,9641,7387,8041,7826,6431,6900,7699,6952,5886,6473,9264,7677,6568,5637,6982,10078,10107,8158,6547,6994,5477,7963,4978,0,8264,5701,4152,5593,4010,4406,6062,4239,0,3905,2168,4329,2169,2244,673,2159]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7908,6853,2249,8004,8103,7390,5996,6540,7680,7015,6622,6928,7307,7846,7255,6417,6048,6782,6277,6153,6395,7030,7297,5744,7296,6886,6467,0,6606,4983,7568,4739,3286,3910,3916,3746,0,3589,2421,3878,4601,3060,1831,678]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7848,7112,5824,8983,7070,4564,4391,5124,3582,6307,6090,7060,5816,6926,4664,4206,7294,5823,5966,6116,6988,8132,5916,3778,2340,5462,3919,0,5995,4434,1922,5223,4207,3403,3927,5857,0,3280,4475,2328,2771,3734,2865,1159]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7885,7747,5023,6938,6502,7937,7934,6299,8068,4933,4425,6110,7298,4330,4738,7419,5607,4762,3637,6271,4654,4685,4221,4345,7487,6112,3790,0,3993,4338,3937,2449,4234,5333,2243,2126,0,3743,3614,1859,2018,3378,807,976]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,6035,6932,3087,84473,5547,4091,5437,5591,5450,6266,5716,3694,6046,4728,5750,3725,4567,6306,5449,6389,6468,6155,4460,5864,3746,5530,7225,5949,6036,3803,3660,4508,4616,2556,4855,4912,4456,2488,2914,3715,3027,4710,3592,1153]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,87768,87880,3319,0,79434,5928,4683,5114,4670,4317,4695,4839,3100,5136,4052,5245,4499,4394,65497,4989,5271,5047,4252,3930,4553,4588,2142,4656,5679,1654,3206,4580,1750,4495,3326,2557,3701,2311,1852,1230,1941,2508,571,997]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,97385,0,0,69725,68327,67829,67021,66989,66873,65660,65418,64326,63225,63528,62323,61229,0,53125,53208,53296,59408,61058,60445,51135,58101,71426,45372,53926,53117,48846,52660,50277,48501,48201,62686,45556,46220,43443,43053,39565,41528,30232]
    }]
});
