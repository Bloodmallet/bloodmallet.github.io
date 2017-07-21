Highcharts.chart('mage_frost_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Frost - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 09:06:44.938970'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Terror From Below","Tarnished Sentinel Medallion","Stat Stick (Crit)","Unstable Arcano Crystal","Tome of Unraveling Sanity","Whispers in the Dark","Erratic Metronome","Padawsen's Unlucky Charm","Chrono Shard","Stat Stick (Haste)","Dreadstone of Endless Shadows","PVP Badge of Dominance","Charm of the Rising Tide","Star Gate","Infernal Writ","Stat Stick (Mastery)","Stormsinger Fulmination Charge","PVP Insignia of Dominance","Horn of Valor","Deteriorated Construct Core","Darkmoon Deck: Hellfire","Devilsaur Shock-Baton","Bough of Corruption","Twisting Wind","Spectral Thurible","Portable Manacracker","Icon of Rot","Moonlit Prism","Obelisk of the Void","Oakheart's Gnarled Root","Infernal Alchemist Stone","Naraxas' Spiked Tongue","Swarming Plaguehive","Mrrgria's Favor","Eye of Skovald","Wriggling Sinew","Fury of the Burning Sky","Elementium Bomb Squirrel Generator","Pharameres Forbidden Grimoire","Unstable Horrorslime","Aran's Relaxing Ruby","Caged Horror","Figurehead of the Naglfar","Corrupted Starlight"]
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
        data : [145478,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,8196,10325,6223,5412,9534,3606,8681,6369,6386,5243,7738,6937,7470,9001,7693,7351,7891,6276,6092,7045,0,1931,8773,8067,6502,7468,3501,5897,4424,2792,0,6894,5015,3940,5006,2648,4265,4104,2357,3286,5224,3450,1946,715]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7355,7460,8508,3448,7304,6486,6595,7022,7634,7570,6681,5889,5838,5324,5247,5617,7250,5096,5226,7297,0,6434,8583,5975,4694,7957,6225,5745,5584,5862,0,3768,3643,4099,4109,3763,5742,2015,4836,1041,2227,2197,721,3061]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,6901,7647,6203,2551,7811,7209,7275,7459,7380,5424,6693,7081,6302,8103,5984,5572,5348,5433,6781,6232,0,3002,4948,6119,4220,4913,3313,3272,3917,3889,0,4970,3570,2423,3227,2097,2929,2301,2138,1860,3186,2025,2270,3946]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6457,6396,5122,5219,6016,6032,5181,5052,5801,7678,5758,5663,5092,5967,5198,6743,4706,4689,3697,6989,0,6553,6789,5489,4330,5683,3844,4729,5915,4041,0,1020,3784,4276,2941,4681,3632,3222,2120,1308,2434,3586,1559,1650]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,7588,6180,7365,2896,76963,3259,3603,5031,4553,2794,4766,4708,6277,6133,4239,3783,5516,4537,5381,3715,5918,4101,4266,6995,5097,6788,4229,4041,1504,3045,4430,6178,4774,2985,2920,1568,3738,861,3331,3051,3267,2064,1165,1104]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,84448,76120,4805,3427,0,4898,5423,3995,4736,3664,4639,5103,65887,3547,5100,5275,3123,2794,3383,5289,3464,4994,3801,3465,59760,2761,3143,3807,4601,4473,6713,2517,2412,2196,1463,4046,3952,3316,1392,2081,2216,2469,1966,1317]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,74035,89290,0,72822,66827,65817,63011,67089,62551,63281,0,52999,56997,55940,55656,59451,57426,50799,77843,59356,48103,48538,0,47814,58097,52233,53171,52113,61298,46480,48567,48686,47949,47384,41430,45021,41422,44036,35869,29610,33694,31477]
    }]
});
