Highcharts.chart('shaman_elemental', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Shaman - Elemental - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 05:03:03.954082'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Dreadstone of Endless Shadows","Tome of Unraveling Sanity","Stat Stick (Crit)","Stat Stick (Versatility)","PVP Badge of Dominance","Padawsen's Unlucky Charm","Charm of the Rising Tide","Infernal Writ","Stormsinger Fulmination Charge","Stat Stick (Haste)","Erratic Metronome","Chrono Shard","Horn of Valor","Star Gate","Naraxas' Spiked Tongue","PVP Insignia of Dominance","Deteriorated Construct Core","Obelisk of the Void","Twisting Wind","Bough of Corruption","Darkmoon Deck: Hellfire","Fury of the Burning Sky","Portable Manacracker","Devilsaur Shock-Baton","Spectral Thurible","Moonlit Prism","Oakheart's Gnarled Root","Icon of Rot","Infernal Alchemist Stone","Aran's Relaxing Ruby","Swarming Plaguehive","Mrrgria's Favor","Caged Horror","Corrupted Starlight","Wriggling Sinew","Eye of Skovald","Pharameres Forbidden Grimoire","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
        data : [129879,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,4285,7021,7399,7424,6207,8088,6674,6384,6342,6609,5994,6413,5888,5782,6000,5790,5795,4491,7754,4981,5603,7443,5930,6917,7250,0,5233,5038,4377,4794,5415,4761,5228,0,2993,4859,4343,2660,3357,3695,2343,3920,3363,2581,79]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,3795,6828,5089,6145,7842,6279,7053,6007,5717,6274,6909,6948,4668,5062,6331,5620,5652,4792,6215,5066,4864,5211,5563,6069,5145,0,4700,6486,4143,2656,3394,4284,1907,0,3537,2892,3280,3612,2662,2563,3102,2410,3234,0,2577]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,4493,6958,5697,4699,5262,5038,7851,4155,6119,4338,4393,4497,6445,6280,3973,6208,5656,6173,4923,4019,4239,7677,4134,5118,5292,0,3134,5582,4340,3870,3686,1639,4837,0,4441,3313,1512,1943,1813,1571,2142,2638,1745,2832,116]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3068,4984,4953,5532,4164,4899,5030,5687,5467,6221,5863,4867,3983,3262,6103,4178,4734,3244,5028,3674,3412,1557,3180,4740,4652,0,2872,4477,2990,5143,5012,4576,2962,0,989,3560,3005,1964,2905,2773,2919,3097,2079,937,256]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,3544,4643,6119,5137,5761,4562,66400,5567,4263,4863,5716,4546,5134,4942,5188,4038,3619,3763,5590,4179,4164,6069,4297,5278,4680,3620,3845,4474,2123,3086,2166,3262,2689,4087,3779,2950,2805,1751,2271,2739,1520,1569,2408,2229,417]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,3609,72135,3552,3951,66286,4531,0,5179,4452,3085,2590,61551,3528,3759,3470,4424,4340,2922,2716,2959,3004,4528,3569,4628,4499,5396,3324,3558,5586,50199,3827,2912,2666,3602,2430,2261,2473,2624,2397,1885,1682,1910,400,714,1899]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,84960,0,67859,63096,0,60164,0,58771,57267,58012,57871,0,56769,57296,54765,54599,53743,51484,44531,51587,50727,42215,47434,39803,39996,62241,48109,40820,46499,0,44636,44170,44548,54578,42055,40151,39054,39172,37865,36759,37030,34585,35522,34572,26760]
    }]
});
